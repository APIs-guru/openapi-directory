# coding: utf-8

"""
    Tisane API Documentation

    Tisane is a natural language processing library, providing:  *   standard NLP functionality *   special functions for detection of problematic or abusive content *   low-level NLP like morphological analysis and tokenization of no-space languages (Chinese, Japanese, Thai)       Tisane has monolithic architecture. All the functions are exposed using the same language models and the same analysis process invoked using the [POST /parse](#561264c5-6dbe-4bde-aba3-7defe837989f) method. Other methods in the API are either wrappers based on the process, helper methods, or allow inspection of the language models.  The current section of the documentation describes the two structures used in the parsing & transformation methods.  # Getting Started  This guide describes how to setup your Tisane account. The steps you need to complete are as follows:  *   Step 1 – Create an Account *   Step 2 – Save Your API Key *   Step 3 – Integrate the API       ## Step 1 – Create an Account  Navigate to [Sign up to Tisane API](https://tisane.ai/signup/). The free Community Plan allows up to 50,000 requests but comes with a limitation of 10 requests per minute.  ## Step 2 - Save Your API Key  You will need the API key to make requests. Open your [Developer Profile](https://tisane.ai/developer/) to find your API keys.  ## Step 3 - Integrate with the API  In summary, the POST /parse method has 3 attributes: *content*, *language*, and *settings*. All 3 attributes are mandatory.  For example:   `{\"language\": \"en\", \"content\": \"hello\", \"settings\": {}}`  Read on for more info on the [response](#response-reference) and the [settings](#settings-reference) specs. The method doc pages contain snippets of code for your favorite languages and platforms.  # Response Reference  The response of the [POST /parse](#561264c5-6dbe-4bde-aba3-7defe837989f) method contains several sections displayed or hidden according to the [settings](#settings-reference) provided.  The common attributes are:  *   `text` (string) - the original input *   `reduced_output` (boolean) - if the input is too big, and verbose information like the lexical chunk was requested, the verbose information will not be generated, and this flag will be set to `true` and returned as part of the response *   `sentiment` (floating-point number) - a number in range -1 to 1 indicating the document-level sentiment. Only shown when `document_sentiment` [setting](#settings-reference) is set to `true`. *   `signal2noise` (floating-point number) - a signal to noise ranking of the text, in relation to the array of concepts specified in the `relevant` [setting](#settings-reference). Only shown when the `relevant` setting exists.       ## Abusive or Problematic Content  The `abuse` section is an array of detected instances of content that may violate some terms of use. **NOTE**: the terms of use in online communities may vary, and so it is up to the administrators to determine whether the content is indeed abusive. For instance, it makes no sense to restrict sexual advances in a dating community, or censor profanities when it's accepted in the bulk of the community.  The section exists if instances of abuse are detected and the `abuse` [setting](#settings-reference) is either omitted or set to `true`.  Every instance contains the following attributes:  *   `offset` (unsigned integer) - zero-based offset where the instance starts *   `length` (unsigned integer) - length of the content *   `sentence_index` (unsigned integer) - zero-based index of the sentence containing the instance *   `text` (string) - fragment of text containing the instance (only included if the `snippets` [setting](#settings-reference) is set to `true`) *   `tags` (array of strings) - when exists, provides additional detail about the abuse. For instance, if the fragment is classified as an attempt to sell hard drugs, one of the tags will be *hard_drug*. *   `type` (string) - the type of the abuse *   `severity` (string) - how severe the abuse is. The levels of severity are `low`, `medium`, `high`, and `extreme` *   `explanation` (string) - when available, provides rationale for the annotation; set the `explain` setting to `true` to enable.       The currently supported types are:  *   `personal_attack` - an insult / attack on the addressee, e.g. an instance of cyberbullying. Please note that an attack on a post or a point, or just negative sentiment is not the same as an insult. The line may be blurred at times. See [our Knowledge Base for more information](http://tisane.ai/knowledgebase/how-do-i-detect-personal-attacks/). *   `bigotry` - hate speech aimed at one of the [protected classes](https://en.wikipedia.org/wiki/Protected_group). The hate speech detected is not just racial slurs, but, generally, hostile statements aimed at the group as a whole *   `profanity` - profane language, regardless of the intent *   `sexual_advances` - welcome or unwelcome attempts to gain some sort of sexual favor or gratification *   `criminal_activity` - attempts to sell or procure restricted items, criminal services, issuing death threats, and so on *   `external_contact` - attempts to establish contact or payment via external means of communication, e.g. phone, email, instant messaging (may violate the rules in certain communities, e.g. gig economy portals, e-commerce portals) *   `adult_only` - activities restricted for minors (e.g. consumption of alcohol) *   `mental_issues` - content indicative of suicidal thoughts or depression *   `allegation` - claimed knowledge or accusation of a misconduct (not necessarily crime) *   `provocation` - content likely to provoke an individual or a group *   `disturbing` - graphic descriptions that may disturb readers *   `no_meaningful_content` - unparseable gibberish without apparent meaning *   `data_leak` - private data like passwords, ID numbers, etc. *   `spam` - (RESERVED) spam content *   `generic` - undefined       ## Sentiment Analysis  The `sentiment_expressions` section is an array of detected fragments indicating the attitude towards aspects or entities.  The section exists if sentiment is detected and the `sentiment` [setting](#settings-reference) is either omitted or set to `true`.  Every instance contains the following attributes:  *   `offset` (unsigned integer) - zero-based offset where the instance starts *   `length` (unsigned integer) - length of the content *   `sentence_index` (unsigned integer) - zero-based index of the sentence containing the instance *   `text` (string) - fragment of text containing the instance (only included if the `snippets` setting is set to `true`) *   `polarity` (string) - whether the attitude is `positive`, `negative`, or `mixed`. Additionally, there is a `default` sentiment used for cases when the entire snippet has been pre-classified. For instance, if a review is split into two portions, *What did you like?* and *What did you not like?*, and the reviewer replies briefly, e.g. *The quiet. The service*, the utterance itself has no sentiment value. When the calling application is aware of the intended sentiment, the *default* sentiment simply provides the targets / aspects, which will be then added the sentiment externally. *   `targets` (array of strings) - when available, provides set of aspects and/or entities which are the targets of the sentiment. For instance, when the utterance is, *The breakfast was yummy but the staff is unfriendly*, the targets for the two sentiment expressions are `meal` and `staff`. Named entities may also be targets of the sentiment. *   `reasons` (array of strings) - when available, provides reasons for the sentiment. In the example utterance above (*The breakfast was yummy but the staff is unfriendly*), the `reasons` array for the `staff` is `[\"unfriendly\"]`, while the `reasons` array for `meal` is `[\"tasty\"]`. *   `explanation` (string) - when available, provides rationale for the sentiment; set the `explain` setting to `true` to enable.       Example:  ``` json \"sentiment_expressions\": [         {             \"sentence_index\": 0,              \"offset\": 0,              \"length\": 32,              \"polarity\": \"positive\",              \"reasons\": [\"close\"],              \"targets\": [\"location\"]          },          {             \"sentence_index\": 0,              \"offset\": 38,              \"length\": 29,              \"polarity\": \"negative\",              \"reasons\": [\"disrespectful\"],              \"targets\": [\"staff\"]          }      ]  ```  ## Entities  The `entities_summary` section is an array of named entity objects detected in the text.  The section exists if named entities are detected and the `entities` [setting](#settings-reference) is either omitted or set to `true`.  Every entity contains the following attributes:  *   `name` (string) - the most complete name of the entity in the text of all the mentions *   `ref_lemma` (string) - when available, the dictionary form of the entity in the reference language (English) regardless of the input language *   `type` (string) - a string or an array of strings specifying the type of the entity, such as `person`, `organization`, `numeric`, `amount_of_money`, `place`. Certain entities, like countries, may have several types (because a country is both a `place` and an `organization`). *   `subtype` (string) - a string indicating the subtype of the entity *   `mentions` (array of objects) - a set of instances where the entity was mentioned in the text       Every mention contains the following attributes:  *   `offset` (unsigned integer) - zero-based offset where the instance starts *   `length` (unsigned integer) - length of the content *   `sentence_index` (unsigned integer) - zero-based index of the sentence containing the instance *   `text` (string) - fragment of text containing the instance (only included if the `snippets` setting is set to `true`)       Example:  ``` json  \"entities_summary\": [         {             \"type\": \"person\",              \"name\": \"John Smith\",              \"ref_lemma\": \"John Smith\",              \"mentions\": [                 {                     \"sentence_index\": 0,                      \"offset\": 0,                      \"length\": 10 }              ]          }     ,          {             \"type\": [ \"organization\", \"place\" ]         ,              \"name\": \"UK\",              \"ref_lemma\": \"U.K.\",              \"mentions\": [                 {                     \"sentence_index\": 0,                      \"offset\": 40,                      \"length\": 2 }              ]          }      ]  ```  ### Entity Types and Subtypes  The currently supported entity types are:  *   `person`, with optional subtypes: `fictional_character`, `important_person`, `spiritual_being` *   `organization` (note that a country is both an organization and a place) *   `place` *   `time_range` *   `date` *   `time` *   `hashtag` *   `email` *   `amount_of_money` *   `phone` phone number, either domestic or international, in a variety of formats *   `role` (a social role, e.g. position in an organization) *   `software` *   `website` (URL), with an optional subtype: `tor` for Onion links; note that web services may also have the `software` type assigned *   `weight` *   `bank_account` only IBAN format is supported; subtypes: `iban` *   `credit_card`, with optional subtypes: `visa`, `mastercard`, `american_express`, `diners_club`, `discovery`, `jcb`, `unionpay` *   `coordinates` (GPS coordinates) *   `credential`, with optional subtypes: `md5`, `sha-1` *   `crypto`, with optional subtypes: `bitcoin`, `ethereum`, `monero`, `monero_payment_id`, `litecoin`, `dash` *   `event` *   `file` only Windows pathnames are supported; subtypes: `windows`, `facebook` (for images downloaded from Facebook) *   `flight_code` *   `identifier` *   `ip_address`, subtypes: `v4`, `v6` *   `mac_address` *   `numeric` (an unclassified numeric entity) *   `username`       ## Topics  The `topics` section is an array of topics (subjects, domains, themes in other terms) detected in the text.  The section exists if topics are detected and the `topics` [setting](#settings-reference) is either omitted or set to `true`.  By default, a topic is a string. If `topic_stats` [setting](#settings-reference) is set to `true`, then every entry in the array contains:  *   `topic` (string) - the topic itself *   `coverage` (floating-point number) - a number between 0 and 1, indicating the ratio between the number of sentences where the topic is detected to the total number of sentences       ## Long-Term Memory  The `memory` section contains optional context to pass to the `settings` in subsequent messages in the same conversation thread. See [Context and Long-Term Memory](#context-and-long-term-memory) for more details.  ## Low-Level: Sentences, Phrases, and Words  Tisane allows obtaining more in-depth data, specifically:  *   sentences and their corrected form, if a misspelling was detected *   lexical chunks and their grammatical and stylistic features *   parse trees and phrases       The `sentence_list` section is generated if the `words` or the `parses` [setting](#settings-reference) is set to `true`.  Every sentence structure in the list contains:  *   `offset` (unsigned integer) - zero-based offset where the sentence starts *   `length` (unsigned integer) - length of the sentence *   `text` (string) - the sentence itself *   `corrected_text` (string) - if a misspelling was detected and the spellchecking is active, contains the automatically corrected text *   `words` (array of structures) - if `words` [setting](#settings-reference) is set to `true`, generates extended information about every lexical chunk. (The term \"word\" is used for the sake of simplicity, however, it may not be linguistically correct to equate lexical chunks with words.) *   `parse_tree` (object) - if `parses` [setting](#settings-reference) is set to `true`, generates information about the parse tree and the phrases detected in the sentence. *   `nbest_parses` (array of parse objects) if `parses` [setting](#settings-reference) is set to `true` and `deterministic` [setting](#settings-reference) is set to `false`, generates information about the parse trees that were deemed close enough to the best one but not the best.       ### Words  Every lexical chunk (\"word\") structure in the `words` array contains:  *   `type` (string) - the type of the element: `punctuation` for punctuation marks, `numeral` for numerals, or `word` for everything else *   `text` (string) - the text *   `offset` (unsigned integer) - zero-based offset where the element starts *   `length` (unsigned integer) - length of the element *   `corrected_text` (string) - if a misspelling is detected, the corrected form *   `lettercase` (string) - the original letter case: `upper`, `capitalized`, or `mixed`. If lowercase or no case, the attribute is omitted. *   `stopword` (boolean) - determines whether the word is a [stopword](https://en.wikipedia.org/wiki/Stop_words) *   `grammar` (array of strings or structures) - generates the list of grammar features associated with the `word`. If the `feature_standard` setting is defined as `native`, then every feature is an object containing a numeral (`index`) and a string (`value`). Otherwise, every feature is a plain string       #### Advanced  For lexical words only:  *   `role` (string) - semantic role, like `agent` or `patient`. Note that in passive voice, the semantic roles are reverse to the syntactic roles. E.g. in a sentence like *The car was driven by David*, *car* is the patient, and *David* is the agent. *   `numeric_value` (floating-point number) - the numeric value, if the chunk has a value associated with it *   `family` (integer number) - the ID of the family associated with the disambiguated word-sense of the lexical chunk *   `definition` (string) - the definition of the family, if the `fetch_definitions` [setting](#settings-reference) is set to `true` *   `lexeme` (integer number) - the ID of the lexeme entry associated with the disambiguated word-sense of the lexical chunk *   `nondictionary_pattern` (integer number) - the ID of a non-dictionary pattern that matched, if the word was not in the language model but was classified by the nondictionary heuristics *   `style` (array of strings or structures) - generates the list of style features associated with the `word`. Only if the `feature_standard` setting is set to `native` or `description` *   `semantics` (array of strings or structures) - generates the list of semantic features associated with the `word`. Only if the `feature_standard` setting is set to `native` or `description` *   `segmentation` (structure) - generates info about the selected segmentation, if there are several possibilities to segment the current lexical chunk and the `deterministic` setting is set to `false`. A segmentation is simply an array of `word` structures. *   `other_segmentations` (array of structures) - generates info about the segmentations deemed incorrect during the disambiguation process. Every entry has the same structure as the `segmentation` structure. *   `nbest_senses` (array of structures) - when the `deterministic` setting is set to `false`, generates a set of hypotheses that were deemed incorrect by the disambiguation process. Every hypothesis contains the following attributes: `grammar`, `style`, and `semantics`, identical in structure to their counterparts above; and `senses`, an array of word-senses associated with every hypothesis. Every sense has a `family`, which is an ID of the associated family; and, if the `fetch_definitions` setting is set to `true`, `definition` and `ref_lemma` of that family.       For punctuation marks only:  *   `id` (integer number) - the ID of the punctuation mark *   `behavior` (string) - the behavior code of the punctuation mark. Values: `sentenceTerminator`, `genericComma`, `bracketStart`, `bracketEnd`, `scopeDelimiter`, `hyphen`, `quoteStart`, `quoteEnd`, `listComma` (for East-Asian enumeration commas like *、*)       ### Parse Trees and Phrases  Every parse tree, or more accurately, parse forest, is a collection of phrases, hierarchically linked to each other.  At the top level of the parse, there is an array of root phrases under the `phrases` element and the numeric `id` associated with it. Every phrase may have children phrases. Every phrase has the following attributes:  *   `type` (string) - a [Penn treebank phrase tag](http://nliblog.com/wiki/knowledge-base-2/nlp-1-natural-language-processing/penn-treebank/penn-treebank-phrase-level-tags/) denoting the type of the phrase, e.g. *S*, *VP*, *NP*, etc. *   `family` (integer number) - an ID of the phrase family *   `offset` (unsigned integer) - a zero-based offset where the phrase starts *   `length` (unsigned integer) - the span of the phrase *   `role` (string) - the semantic role of the phrase, if any, analogous to that of the words *   `text` (string) - the phrase text, where the phrase members are delimited by the vertical bar character. Children phrases are enclosed in brackets. E.g., *driven|by|David* or *(The|car)|was|(driven|by|David)*.       Example:  ``` json \"parse_tree\": { \"id\": 4, \"phrases\": [ {         \"type\": \"S\",         \"family\": 1451,         \"offset\": 0,         \"length\": 27,         \"text\": \"(The|car)|was|(driven|by|David)\",         \"children\": [                 {                         \"type\": \"NP\",                         \"family\": 1081,                         \"offset\": 0,                         \"length\": 7,                         \"text\": \"The|car\",                         \"role\": \"patient\"                 },                 {                         \"type\": \"VP\",                         \"family\": 1172,                         \"offset\": 12,                         \"length\": 15,                         \"text\": \"driven|by|David\",                         \"role\": \"verb\"                 }         ] }  ```  ### Context-Aware Spelling Correction  Tisane supports automatic, context-aware spelling correction. Whether it's a misspelling or a purported obfuscation, Tisane attempts to deduce the intended meaning, if the language model does not recognize the word.  When or if it's found, Tisane adds the `corrected_text` attribute to the word (if the words / lexical chunks are returned) and the sentence (if the sentence text is generated). Sentence-level `corrected_text` is displayed if `words` or `parses` are set to *true*.  Note that as Tisane works with large dictionaries, you may need to exclude more esoteric terms by using the `min_generic_frequency` setting.  Note that **the invocation of spell-checking does not depend on whether the sentences and the words sections are generated in the output**. The spellchecking can be disabled by setting `disable_spellcheck` to `true`. Another option is to enable the spellchecking for lowercase words only, thus excluding potential proper nouns in languages that support capitalization; to avoid spell-checking capitalized and uppercase words, set `lowercase_spellcheck_only` to `true`.  # Settings Reference  The purpose of the settings structure is to:  *   provide cues about the content being sent to improve the results *   customize the output and select sections to be shown *   define standards and formats in use *   define and calculate the signal to noise ranking       All settings are optional. To leave all settings to default, simply provide an empty object (`{}`).  ## Content Cues and Instructions  `format` (string) - the format of the content. Some policies will be applied depending on the format. Certain logic in the underlying language models may require the content to be of a certain format (e.g. logic applied on the reviews may seek for sentiment more aggressively). The default format is empty / undefined. The format values are:  *   `review` - a review of a product or a service or any other review. Normally, the underlying language models will seek for sentiment expressions more aggressively in reviews. *   `dialogue` - a comment or a post which is a part of a dialogue. An example of a logic more specific to a dialogue is name calling. A single word like \"idiot\" would not be a personal attack in any other format, but it is certainly a personal attack when part of a dialogue. *   `shortpost` - a microblogging post, e.g. a tweet. *   `longform` - a long post or an article. *   `proofread` - a post which was proofread. In the proofread posts, the spellchecking is switched off. *   `alias` - a nickname in an online community. *   `search` - a search query. Search queries may not always be grammatically correct. Certain topics and items, that we may otherwise let pass, are tagged with the `search` format.       `disable_spellcheck` (boolean) - determines whether the automatic spellchecking is to be disabled. Default: `false`.  `lowercase_spellcheck_only` (boolean) - determines whether the automatic spellchecking is only to be applied to words in lowercase. Default: `false`  `min_generic_frequency` (int) - allows excluding more esoteric terms; the valid values are 0 thru 10.  `subscope` (boolean) - enables sub-scope parsing, for scenarios like hashtag, URL parsing, and obfuscated content (e.g. *ihateyou*). Default: `false`.  `lang_detect_segmentation_regex` (string) - allows defining custom language detection fragment boundaries. For example, if multiple languages may be used in different sentences in the same text, you may want to define the regex as: `(([\\r\\n]|[.!?][ ]))` .  `domain_factors` (set of pairs made of strings and numbers) - provides a session-scope cues for the domains of discourse. This is a powerful tool that allows tailoring the result based on the use case. The format is, family ID of the domain as a key and the multiplication factor as a value (e.g. *\"12345\": 5.0*). For example, when processing text looking for criminal activity, we may want to set domains relevant to drugs, firearms, crime, higher: `\"domain_factors\": {\"31058\": 5.0, \"45220\": 5.0, \"14112\": 5.0, \"14509\": 3.0, \"28309\": 5.0, \"43220\": 5.0, \"34581\": 5.0}`. The same device can be used to eliminate noise coming from domains we know are irrelevant by setting the factor to a value lower than 1.  `when` (date string, format YYYY-MM-DD) - indicates when the utterance was uttered. (TO BE IMPLEMENTED) The purpose is to prune word senses that were not available at a particular point in time. For example, the words *troll*, *mail*, and *post* had nothing to do with the Internet 300 years ago because there was no Internet, and so in a text that was written hundreds of years ago, we should ignore the word senses that emerged only recently.  ## Output Customization  `abuse` (boolean) - output instances of abusive content (default: `true`)  `sentiment` (boolean) - output sentiment-bearing snippets (default: `true`)  `document_sentiment` (boolean) - output document-level sentiment (default: `false`)  `entities` (boolean) - output entities (default: `true`)  `topics` (boolean) - output topics (default: `true`), with two more relevant settings:  *   `topic_stats` (boolean) - include coverage statistics in the topic output (default: `false`). When set, the topic is an object containing the attributes `topic` (string) and `coverage` (floating-point number). The coverage indicates a share of sentences touching the topic among all the sentences. *   `optimize_topics` (boolean) - if `true`, the less specific topics are removed if they are parts of the more specific topics. For example, when the topic is `cryptocurrency`, the optimization removes `finance`.       `words` (boolean) - output the lexical chunks / words for every sentence (default: `false`). In languages without white spaces (Chinese, Japanese, Thai), the tokens are tokenized words. In languages with compounds (e.g. German, Dutch, Norwegian), the compounds are split.  `fetch_definitions` (boolean) - include definitions of the words in the output (default: `false`). Only relevant when the `words` setting is `true`  `parses` (boolean) - output parse forests of phrases  `deterministic` (boolean) - whether the n-best senses and n-best parses are to be output in addition to the detected sense. If `true`, only the detected sense will be output. Default: `true`  `snippets` (boolean) - include the text snippets in the abuse, sentiment, and entities sections (default: `false`)  `explain` (boolean) - if `true`, a reasoning for the abuse and sentiment snippets is provided when possible (see the `explanation` attribute)  ## Standards and Formats  `feature_standard` (string) - determines the standard used to output the features (grammar, style, semantics) in the response object. The standards we support are:  *   `ud`: [Universal Dependencies tags](https://universaldependencies.org/u/pos/) (default) *   `penn`: [Penn treebank tags](https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html) *   `native`: Tisane native feature codes *   `description`: Tisane native feature descriptions       Only the native Tisane standards (codes and descriptions) support style and semantic features.  `topic_standard` (string) - determines the standard used to output the topics in the response object. The standards we support are:  *   `iptc_code` - IPTC topic taxonomy code *   `iptc_description` - IPTC topic taxonomy description *   `iab_code` - IAB topic taxonomy code *   `iab_description` - IAB topic taxonomy description *   `native` - Tisane domain description, coming from the family description (default)       `sentiment_analysis_type` (string) - the type of the sentiment analysis strategy. The values are:  *   `products_and_services` - most common sentiment analysis of products and services *   `entity` - sentiment analysis with entities as targets *   `creative_content_review` - reviews of creative content (RESERVED) *   `political_essay` - political essays (RESERVED)       ## Context and Long-Term Memory  Human understanding of language is not a simple \"sliding window\" with scope limited to a sentence. Language is accompanied by gestures, visuals, and knowledge of the previous communication. Sometimes, code-words may be used to conceal the words' original meaning.  When detecting abuse, a name of an ethnicity or a religious group may be not offensive, but when superimposed over a picture of an ape or a pig, it is meant of offend. When translating from a language without gender distinctions in verbs (like English) to a language with distinctions (like Russian or Hebrew), there is no way to know from an utterance alone if the speaker is female. When a scammer is collecting details piecemeal over a series of utterances, knowledge of previous utterances is needed to take action.  Tisane's Memory module allows pre-initializing the analysis, as well as reassigning meanings, and more. The module is made of three simple components that are flexible enough for a variety of tasks:  ### Reassignments  Reassignments define the attributes to set based on other attributes. This allows to:  *   assign gender to 1st or 2nd person verbs, generating accurate translations *   overwrite original meaning of a group of words with all their inflected forms to analyze code-words and secret language *   add an additional feature or a hypernym to a family       and more, within a scope of a call.  The `assign` section is an array of structures defining:  *   `if` - conditions to match:     *   `regex` - a regular expression (RE2 syntax)     *   `family` - a family ID     *   `features` - a list of feature values. A feature is a structure with an `index` and a `value`. For example: `{\"index\":1, \"value\":\"NOUN\"}`.     *   `hypernym` - a family ID of a hypernym *   `then` - attributes to assign     *   `family` - a family ID     *   `features` - a list of feature values. A feature is a structure with an `index` and a `value`. For example: `{\"index\":1, \"value\":\"NOUN\"}`.     *   `hypernym` - a family ID of a hypernym  Examples:  *   the speaker is female: \\`\"assign\":\\[{\"if\":{\"features\":\\[{\"index\":9,\"value\":\"1\"}\\]},\"then\":{\"features\":\\[{\"index\":5,\"value\":\"F\"}\\]}}\\] *   assume that a mention of a container refers to an illegal item: \\`\"assign\":\\[{\"if\":{\"family\":26888},\"then\":{\"hypernym\":123078}}\\]       ### Flags  An array of flag structures that add some context. A flag is a structure with an `index` and a `value`. For example: `{\"index\":36, \"value\":\"WFH\"}`.  Aside from the flags returned in the `memory` section of the response, these flags can be set:  *   `{\"index\":36, \"value\":\"PEBD\"}` (agents_of_bad_things) - the context is about a bad player or an agent responsible for bad things *   `{\"index\":36, \"value\":\"BADANML\"}` (bad_animal) - the context is an animal that symbolizes bad qualities (e.g. pig, ape, snake, etc.) *   `{\"index\":36, \"value\":\"BULKMSG\"}` (bulk_message) - the message was sent in bulk *   `{\"index\":36, \"value\":\"DETHR\"}` (death_related) - the context is something related to death *   `{\"index\":36, \"value\":\"EARNMUCH\"}` (make_money) - the context is related to making money *   `{\"index\":36, \"value\":\"IDEP\"}` (my_departure) - the author of the text mentioned departing *   `{\"index\":36, \"value\":\"SECO\"}` (sexually_conservative) - any attempt to exchange photos or anything that may be either sexual or non-sexual is to be deemed sexual *   `{\"index\":36, \"value\":\"TRPA\"}` (trusted_party) - the author of the text claims to be a trusted party (e.g. a relative or a spouse) *   `{\"index\":36, \"value\":\"WSTE\"}` (waste) - the context is about waste, organic or inorganic *   `{\"index\":36, \"value\":\"WOPR\"}` (won_prize) - prize or money winning was mentioned or implied *   `{\"index\":36, \"value\":\"WFH\"}` (work_from_home) - work from home was mentioned *   `{\"index\":5, \"value\":\"ORG\"}` (organization) - an organization was mentioned *   `{\"index\":5, \"value\":\"ROLE\"}` (role) - a role or a position was mentioned       ### Antecedents  The section contains structures to be used in coreference resolution. The attributes are:  *   `family` - the family ID of the antecedent *   `features` - the list of features. Every feature is a structure with an `index` and a `value`. For example: `{\"index\":36, \"value\":\"WFH\"}`.       ## Signal to Noise Ranking  When we're studying a bunch of posts commenting on an issue or an article, we may want to prioritize the ones more relevant to the topic, and containing more reason and logic than emotion. This is what the signal to noise ranking is meant to achieve.  The signal to noise ranking is made of two parts:  1.  Determine the most relevant concepts. This part may be omitted, depending on the use case scenario (e.g. we want to track posts most relevant to a particular set of issues). 2.  Rank the actual post in relevance to these concepts.       To determine the most relevant concepts, we need to analyze the headline or the article itself. The headline is usually enough. We need two additional settings:  *   `keyword_features` (an object of strings with string values) - determines the features to look for in a word. When such a feature is found, the family ID is added to the set of potentially relevant family IDs. *   `stop_hypernyms` (an array of integers) - if a potentially relevant family ID has a hypernym listed in this setting, it will not be considered. For example, we extracted a set of nouns from the headline, but we may not be interested in abstractions or feelings. E.g. from a headline like *Fear and Loathing in Las Vegas* we want *Las Vegas* only. Optional.       If `keyword_features` is provided in the settings, the response will have a special attribute, `relevant`, containing a set of family IDs.  At the second stage, when ranking the actual posts or comments for relevance, this array is to be supplied among the settings. The ranking is boosted when the domain, the hypernyms, or the families related to those in the `relevant` array are mentioned, when negative and positive sentiment is linked to aspects, and penalized when the negativity is not linked to aspects, or abuse of any kind is found. The latter consideration may be disabled, e.g. when we are looking for specific criminal content. When the `abuse_not_noise` parameter is specified and set to `true`, the abuse is not penalized by the ranking calculations.  To sum it up, in order to calculate the signal to noise ranking:  1.  Analyze the headline with `keyword_features` and, optionally, `stop_hypernyms` in the settings. Obtain the `relevant` attribute. 2.  When analyzing the posts or the comments, specify the `relevant` attribute obtained in step 1.

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import datetime
from dateutil.parser import parse
from enum import Enum
import decimal
import json
import mimetypes
import os
import re
import tempfile

from urllib.parse import quote
from typing import Tuple, Optional, List, Dict, Union
from pydantic import SecretStr

from openapi_client.configuration import Configuration
from openapi_client.api_response import ApiResponse, T as ApiResponseT
import openapi_client.models
from openapi_client import rest
from openapi_client.exceptions import (
    ApiValueError,
    ApiException,
    BadRequestException,
    UnauthorizedException,
    ForbiddenException,
    NotFoundException,
    ServiceException
)

RequestSerialized = Tuple[str, str, Dict[str, str], Optional[str], List[str]]

class ApiClient:
    """Generic API client for OpenAPI client library builds.

    OpenAPI generic API client. This client handles the client-
    server communication, and is invariant across implementations. Specifics of
    the methods and models for each application are generated from the OpenAPI
    templates.

    :param configuration: .Configuration object for this client
    :param header_name: a header to pass when making calls to the API.
    :param header_value: a header value to pass when making calls to
        the API.
    :param cookie: a cookie to include in the header when making calls
        to the API
    """

    PRIMITIVE_TYPES = (float, bool, bytes, str, int)
    NATIVE_TYPES_MAPPING = {
        'int': int,
        'long': int, # TODO remove as only py3 is supported?
        'float': float,
        'str': str,
        'bool': bool,
        'date': datetime.date,
        'datetime': datetime.datetime,
        'decimal': decimal.Decimal,
        'object': object,
    }
    _pool = None

    def __init__(
        self,
        configuration=None,
        header_name=None,
        header_value=None,
        cookie=None
    ) -> None:
        # use default configuration if none is provided
        if configuration is None:
            configuration = Configuration.get_default()
        self.configuration = configuration

        self.rest_client = rest.RESTClientObject(configuration)
        self.default_headers = {}
        if header_name is not None:
            self.default_headers[header_name] = header_value
        self.cookie = cookie
        # Set default User-Agent.
        self.user_agent = 'OpenAPI-Generator/1.0.0/python'
        self.client_side_validation = configuration.client_side_validation

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        pass

    @property
    def user_agent(self):
        """User agent for this API client"""
        return self.default_headers['User-Agent']

    @user_agent.setter
    def user_agent(self, value):
        self.default_headers['User-Agent'] = value

    def set_default_header(self, header_name, header_value):
        self.default_headers[header_name] = header_value


    _default = None

    @classmethod
    def get_default(cls):
        """Return new instance of ApiClient.

        This method returns newly created, based on default constructor,
        object of ApiClient class or returns a copy of default
        ApiClient.

        :return: The ApiClient object.
        """
        if cls._default is None:
            cls._default = ApiClient()
        return cls._default

    @classmethod
    def set_default(cls, default):
        """Set default instance of ApiClient.

        It stores default ApiClient.

        :param default: object of ApiClient.
        """
        cls._default = default

    def param_serialize(
        self,
        method,
        resource_path,
        path_params=None,
        query_params=None,
        header_params=None,
        body=None,
        post_params=None,
        files=None, auth_settings=None,
        collection_formats=None,
        _host=None,
        _request_auth=None
    ) -> RequestSerialized:

        """Builds the HTTP request params needed by the request.
        :param method: Method to call.
        :param resource_path: Path to method endpoint.
        :param path_params: Path parameters in the url.
        :param query_params: Query parameters in the url.
        :param header_params: Header parameters to be
            placed in the request header.
        :param body: Request body.
        :param post_params dict: Request post form parameters,
            for `application/x-www-form-urlencoded`, `multipart/form-data`.
        :param auth_settings list: Auth Settings names for the request.
        :param files dict: key -> filename, value -> filepath,
            for `multipart/form-data`.
        :param collection_formats: dict of collection formats for path, query,
            header, and post parameters.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :return: tuple of form (path, http_method, query_params, header_params,
            body, post_params, files)
        """

        config = self.configuration

        # header parameters
        header_params = header_params or {}
        header_params.update(self.default_headers)
        if self.cookie:
            header_params['Cookie'] = self.cookie
        if header_params:
            header_params = self.sanitize_for_serialization(header_params)
            header_params = dict(
                self.parameters_to_tuples(header_params,collection_formats)
            )

        # path parameters
        if path_params:
            path_params = self.sanitize_for_serialization(path_params)
            path_params = self.parameters_to_tuples(
                path_params,
                collection_formats
            )
            for k, v in path_params:
                # specified safe chars, encode everything
                resource_path = resource_path.replace(
                    '{%s}' % k,
                    quote(str(v), safe=config.safe_chars_for_path_param)
                )

        # post parameters
        if post_params or files:
            post_params = post_params if post_params else []
            post_params = self.sanitize_for_serialization(post_params)
            post_params = self.parameters_to_tuples(
                post_params,
                collection_formats
            )
            if files:
                post_params.extend(self.files_parameters(files))

        # auth setting
        self.update_params_for_auth(
            header_params,
            query_params,
            auth_settings,
            resource_path,
            method,
            body,
            request_auth=_request_auth
        )

        # body
        if body:
            body = self.sanitize_for_serialization(body)

        # request url
        if _host is None or self.configuration.ignore_operation_servers:
            url = self.configuration.host + resource_path
        else:
            # use server/host defined in path or operation instead
            url = _host + resource_path

        # query parameters
        if query_params:
            query_params = self.sanitize_for_serialization(query_params)
            url_query = self.parameters_to_url_query(
                query_params,
                collection_formats
            )
            url += "?" + url_query

        return method, url, header_params, body, post_params


    def call_api(
        self,
        method,
        url,
        header_params=None,
        body=None,
        post_params=None,
        _request_timeout=None
    ) -> rest.RESTResponse:
        """Makes the HTTP request (synchronous)
        :param method: Method to call.
        :param url: Path to method endpoint.
        :param header_params: Header parameters to be
            placed in the request header.
        :param body: Request body.
        :param post_params dict: Request post form parameters,
            for `application/x-www-form-urlencoded`, `multipart/form-data`.
        :param _request_timeout: timeout setting for this request.
        :return: RESTResponse
        """

        try:
            # perform request and return response
            response_data = self.rest_client.request(
                method, url,
                headers=header_params,
                body=body, post_params=post_params,
                _request_timeout=_request_timeout
            )

        except ApiException as e:
            raise e

        return response_data

    def response_deserialize(
        self,
        response_data: rest.RESTResponse,
        response_types_map: Optional[Dict[str, ApiResponseT]]=None
    ) -> ApiResponse[ApiResponseT]:
        """Deserializes response into an object.
        :param response_data: RESTResponse object to be deserialized.
        :param response_types_map: dict of response types.
        :return: ApiResponse
        """

        msg = "RESTResponse.read() must be called before passing it to response_deserialize()"
        assert response_data.data is not None, msg

        response_type = response_types_map.get(str(response_data.status), None)
        if not response_type and isinstance(response_data.status, int) and 100 <= response_data.status <= 599:
            # if not found, look for '1XX', '2XX', etc.
            response_type = response_types_map.get(str(response_data.status)[0] + "XX", None)

        # deserialize response data
        response_text = None
        return_data = None
        try:
            if response_type == "bytearray":
                return_data = response_data.data
            elif response_type == "file":
                return_data = self.__deserialize_file(response_data)
            elif response_type is not None:
                match = None
                content_type = response_data.getheader('content-type')
                if content_type is not None:
                    match = re.search(r"charset=([a-zA-Z\-\d]+)[\s;]?", content_type)
                encoding = match.group(1) if match else "utf-8"
                response_text = response_data.data.decode(encoding)
                return_data = self.deserialize(response_text, response_type, content_type)
        finally:
            if not 200 <= response_data.status <= 299:
                raise ApiException.from_response(
                    http_resp=response_data,
                    body=response_text,
                    data=return_data,
                )

        return ApiResponse(
            status_code = response_data.status,
            data = return_data,
            headers = response_data.getheaders(),
            raw_data = response_data.data
        )

    def sanitize_for_serialization(self, obj):
        """Builds a JSON POST object.

        If obj is None, return None.
        If obj is SecretStr, return obj.get_secret_value()
        If obj is str, int, long, float, bool, return directly.
        If obj is datetime.datetime, datetime.date
            convert to string in iso8601 format.
        If obj is decimal.Decimal return string representation.
        If obj is list, sanitize each element in the list.
        If obj is dict, return the dict.
        If obj is OpenAPI model, return the properties dict.

        :param obj: The data to serialize.
        :return: The serialized form of data.
        """
        if obj is None:
            return None
        elif isinstance(obj, Enum):
            return obj.value
        elif isinstance(obj, SecretStr):
            return obj.get_secret_value()
        elif isinstance(obj, self.PRIMITIVE_TYPES):
            return obj
        elif isinstance(obj, list):
            return [
                self.sanitize_for_serialization(sub_obj) for sub_obj in obj
            ]
        elif isinstance(obj, tuple):
            return tuple(
                self.sanitize_for_serialization(sub_obj) for sub_obj in obj
            )
        elif isinstance(obj, (datetime.datetime, datetime.date)):
            return obj.isoformat()
        elif isinstance(obj, decimal.Decimal):
            return str(obj)

        elif isinstance(obj, dict):
            obj_dict = obj
        else:
            # Convert model obj to dict except
            # attributes `openapi_types`, `attribute_map`
            # and attributes which value is not None.
            # Convert attribute name to json key in
            # model definition for request.
            if hasattr(obj, 'to_dict') and callable(getattr(obj, 'to_dict')):
                obj_dict = obj.to_dict()
            else:
                obj_dict = obj.__dict__

        return {
            key: self.sanitize_for_serialization(val)
            for key, val in obj_dict.items()
        }

    def deserialize(self, response_text: str, response_type: str, content_type: Optional[str]):
        """Deserializes response into an object.

        :param response: RESTResponse object to be deserialized.
        :param response_type: class literal for
            deserialized object, or string of class name.
        :param content_type: content type of response.

        :return: deserialized object.
        """

        # fetch data from response object
        if content_type is None:
            try:
                data = json.loads(response_text)
            except ValueError:
                data = response_text
        elif re.match(r'^application/(json|[\w!#$&.+-^_]+\+json)\s*(;|$)', content_type, re.IGNORECASE):
            if response_text == "":
                data = ""
            else:
                data = json.loads(response_text)
        elif re.match(r'^text\/[a-z.+-]+\s*(;|$)', content_type, re.IGNORECASE):
            data = response_text
        else:
            raise ApiException(
                status=0,
                reason="Unsupported content type: {0}".format(content_type)
            )

        return self.__deserialize(data, response_type)

    def __deserialize(self, data, klass):
        """Deserializes dict, list, str into an object.

        :param data: dict, list or str.
        :param klass: class literal, or string of class name.

        :return: object.
        """
        if data is None:
            return None

        if isinstance(klass, str):
            if klass.startswith('List['):
                m = re.match(r'List\[(.*)]', klass)
                assert m is not None, "Malformed List type definition"
                sub_kls = m.group(1)
                return [self.__deserialize(sub_data, sub_kls)
                        for sub_data in data]

            if klass.startswith('Dict['):
                m = re.match(r'Dict\[([^,]*), (.*)]', klass)
                assert m is not None, "Malformed Dict type definition"
                sub_kls = m.group(2)
                return {k: self.__deserialize(v, sub_kls)
                        for k, v in data.items()}

            # convert str to class
            if klass in self.NATIVE_TYPES_MAPPING:
                klass = self.NATIVE_TYPES_MAPPING[klass]
            else:
                klass = getattr(openapi_client.models, klass)

        if klass in self.PRIMITIVE_TYPES:
            return self.__deserialize_primitive(data, klass)
        elif klass == object:
            return self.__deserialize_object(data)
        elif klass == datetime.date:
            return self.__deserialize_date(data)
        elif klass == datetime.datetime:
            return self.__deserialize_datetime(data)
        elif klass == decimal.Decimal:
            return decimal.Decimal(data)
        elif issubclass(klass, Enum):
            return self.__deserialize_enum(data, klass)
        else:
            return self.__deserialize_model(data, klass)

    def parameters_to_tuples(self, params, collection_formats):
        """Get parameters as list of tuples, formatting collections.

        :param params: Parameters as dict or list of two-tuples
        :param dict collection_formats: Parameter collection formats
        :return: Parameters as list of tuples, collections formatted
        """
        new_params: List[Tuple[str, str]] = []
        if collection_formats is None:
            collection_formats = {}
        for k, v in params.items() if isinstance(params, dict) else params:
            if k in collection_formats:
                collection_format = collection_formats[k]
                if collection_format == 'multi':
                    new_params.extend((k, value) for value in v)
                else:
                    if collection_format == 'ssv':
                        delimiter = ' '
                    elif collection_format == 'tsv':
                        delimiter = '\t'
                    elif collection_format == 'pipes':
                        delimiter = '|'
                    else:  # csv is the default
                        delimiter = ','
                    new_params.append(
                        (k, delimiter.join(str(value) for value in v)))
            else:
                new_params.append((k, v))
        return new_params

    def parameters_to_url_query(self, params, collection_formats):
        """Get parameters as list of tuples, formatting collections.

        :param params: Parameters as dict or list of two-tuples
        :param dict collection_formats: Parameter collection formats
        :return: URL query string (e.g. a=Hello%20World&b=123)
        """
        new_params: List[Tuple[str, str]] = []
        if collection_formats is None:
            collection_formats = {}
        for k, v in params.items() if isinstance(params, dict) else params:
            if isinstance(v, bool):
                v = str(v).lower()
            if isinstance(v, (int, float)):
                v = str(v)
            if isinstance(v, dict):
                v = json.dumps(v)

            if k in collection_formats:
                collection_format = collection_formats[k]
                if collection_format == 'multi':
                    new_params.extend((k, str(value)) for value in v)
                else:
                    if collection_format == 'ssv':
                        delimiter = ' '
                    elif collection_format == 'tsv':
                        delimiter = '\t'
                    elif collection_format == 'pipes':
                        delimiter = '|'
                    else:  # csv is the default
                        delimiter = ','
                    new_params.append(
                        (k, delimiter.join(quote(str(value)) for value in v))
                    )
            else:
                new_params.append((k, quote(str(v))))

        return "&".join(["=".join(map(str, item)) for item in new_params])

    def files_parameters(
        self,
        files: Dict[str, Union[str, bytes, List[str], List[bytes], Tuple[str, bytes]]],
    ):
        """Builds form parameters.

        :param files: File parameters.
        :return: Form parameters with files.
        """
        params = []
        for k, v in files.items():
            if isinstance(v, str):
                with open(v, 'rb') as f:
                    filename = os.path.basename(f.name)
                    filedata = f.read()
            elif isinstance(v, bytes):
                filename = k
                filedata = v
            elif isinstance(v, tuple):
                filename, filedata = v
            elif isinstance(v, list):
                for file_param in v:
                    params.extend(self.files_parameters({k: file_param}))
                continue
            else:
                raise ValueError("Unsupported file value")
            mimetype = (
                mimetypes.guess_type(filename)[0]
                or 'application/octet-stream'
            )
            params.append(
                tuple([k, tuple([filename, filedata, mimetype])])
            )
        return params

    def select_header_accept(self, accepts: List[str]) -> Optional[str]:
        """Returns `Accept` based on an array of accepts provided.

        :param accepts: List of headers.
        :return: Accept (e.g. application/json).
        """
        if not accepts:
            return None

        for accept in accepts:
            if re.search('json', accept, re.IGNORECASE):
                return accept

        return accepts[0]

    def select_header_content_type(self, content_types):
        """Returns `Content-Type` based on an array of content_types provided.

        :param content_types: List of content-types.
        :return: Content-Type (e.g. application/json).
        """
        if not content_types:
            return None

        for content_type in content_types:
            if re.search('json', content_type, re.IGNORECASE):
                return content_type

        return content_types[0]

    def update_params_for_auth(
        self,
        headers,
        queries,
        auth_settings,
        resource_path,
        method,
        body,
        request_auth=None
    ) -> None:
        """Updates header and query params based on authentication setting.

        :param headers: Header parameters dict to be updated.
        :param queries: Query parameters tuple list to be updated.
        :param auth_settings: Authentication setting identifiers list.
        :resource_path: A string representation of the HTTP request resource path.
        :method: A string representation of the HTTP request method.
        :body: A object representing the body of the HTTP request.
        The object type is the return value of sanitize_for_serialization().
        :param request_auth: if set, the provided settings will
                             override the token in the configuration.
        """
        if not auth_settings:
            return

        if request_auth:
            self._apply_auth_params(
                headers,
                queries,
                resource_path,
                method,
                body,
                request_auth
            )
        else:
            for auth in auth_settings:
                auth_setting = self.configuration.auth_settings().get(auth)
                if auth_setting:
                    self._apply_auth_params(
                        headers,
                        queries,
                        resource_path,
                        method,
                        body,
                        auth_setting
                    )

    def _apply_auth_params(
        self,
        headers,
        queries,
        resource_path,
        method,
        body,
        auth_setting
    ) -> None:
        """Updates the request parameters based on a single auth_setting

        :param headers: Header parameters dict to be updated.
        :param queries: Query parameters tuple list to be updated.
        :resource_path: A string representation of the HTTP request resource path.
        :method: A string representation of the HTTP request method.
        :body: A object representing the body of the HTTP request.
        The object type is the return value of sanitize_for_serialization().
        :param auth_setting: auth settings for the endpoint
        """
        if auth_setting['in'] == 'cookie':
            headers['Cookie'] = auth_setting['value']
        elif auth_setting['in'] == 'header':
            if auth_setting['type'] != 'http-signature':
                headers[auth_setting['key']] = auth_setting['value']
        elif auth_setting['in'] == 'query':
            queries.append((auth_setting['key'], auth_setting['value']))
        else:
            raise ApiValueError(
                'Authentication token must be in `query` or `header`'
            )

    def __deserialize_file(self, response):
        """Deserializes body to file

        Saves response body into a file in a temporary folder,
        using the filename from the `Content-Disposition` header if provided.

        handle file downloading
        save response body into a tmp file and return the instance

        :param response:  RESTResponse.
        :return: file path.
        """
        fd, path = tempfile.mkstemp(dir=self.configuration.temp_folder_path)
        os.close(fd)
        os.remove(path)

        content_disposition = response.getheader("Content-Disposition")
        if content_disposition:
            m = re.search(
                r'filename=[\'"]?([^\'"\s]+)[\'"]?',
                content_disposition
            )
            assert m is not None, "Unexpected 'content-disposition' header value"
            filename = m.group(1)
            path = os.path.join(os.path.dirname(path), filename)

        with open(path, "wb") as f:
            f.write(response.data)

        return path

    def __deserialize_primitive(self, data, klass):
        """Deserializes string to primitive type.

        :param data: str.
        :param klass: class literal.

        :return: int, long, float, str, bool.
        """
        try:
            return klass(data)
        except UnicodeEncodeError:
            return str(data)
        except TypeError:
            return data

    def __deserialize_object(self, value):
        """Return an original value.

        :return: object.
        """
        return value

    def __deserialize_date(self, string):
        """Deserializes string to date.

        :param string: str.
        :return: date.
        """
        try:
            return parse(string).date()
        except ImportError:
            return string
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason="Failed to parse `{0}` as date object".format(string)
            )

    def __deserialize_datetime(self, string):
        """Deserializes string to datetime.

        The string should be in iso8601 datetime format.

        :param string: str.
        :return: datetime.
        """
        try:
            return parse(string)
        except ImportError:
            return string
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason=(
                    "Failed to parse `{0}` as datetime object"
                    .format(string)
                )
            )

    def __deserialize_enum(self, data, klass):
        """Deserializes primitive type to enum.

        :param data: primitive type.
        :param klass: class literal.
        :return: enum value.
        """
        try:
            return klass(data)
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason=(
                    "Failed to parse `{0}` as `{1}`"
                    .format(data, klass)
                )
            )

    def __deserialize_model(self, data, klass):
        """Deserializes list or dict to model.

        :param data: dict, list.
        :param klass: class literal.
        :return: model object.
        """

        return klass.from_dict(data)
