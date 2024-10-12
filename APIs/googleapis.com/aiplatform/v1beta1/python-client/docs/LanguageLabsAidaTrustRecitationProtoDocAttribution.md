# LanguageLabsAidaTrustRecitationProtoDocAttribution

The proto defines the attribution information for a document using whatever fields are most applicable for that document's datasource. For example, a Wikipedia article's attribution is in the form of its article title, a website is in the form of a URL, and a Github repo is in the form of a repo name. Next id: 30

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amarna_id** | **str** |  | [optional] 
**arxiv_id** | **str** |  | [optional] 
**author** | **str** |  | [optional] 
**bibkey** | **str** |  | [optional] 
**biorxiv_id** | **str** | ID of the paper in bioarxiv like ddoi.org/{biorxiv_id} eg: https://doi.org/10.1101/343517 | [optional] 
**book_title** | **str** |  | [optional] 
**book_volume_id** | **str** | The Oceanographers full-view books dataset uses a &#39;volume id&#39; as the unique ID of a book. There is a deterministic function from a volume id to a URL under the books.google.com domain. Marked as &#39;optional&#39; since a volume ID of zero is potentially possible and we want to distinguish that from the volume ID not being set. | [optional] 
**category** | **str** |  | [optional] 
**conversation_id** | **str** |  | [optional] 
**dataset** | **str** | The dataset this document comes from. | [optional] 
**filepath** | **str** |  | [optional] 
**gemini_id** | **str** |  | [optional] 
**gnews_article_title** | **str** |  | [optional] 
**goodall_example_id** | **str** |  | [optional] 
**is_opt_out** | **bool** | Whether the document is opted out. | [optional] 
**is_prompt** | **bool** |  | [optional] 
**lamda_example_id** | **str** |  | [optional] 
**license** | **str** |  | [optional] 
**meena_conversation_id** | **str** |  | [optional] 
**natural_language_code** | **str** | Natural (not programming) language of the document. Language code as defined by http://www.unicode.org/reports/tr35/#Identifiers and https://tools.ietf.org/html/bcp47. Currently applicable to full-view books. Use docinfo-util.h to set &amp; read language fields. See go/iii. | [optional] 
**no_attribution** | **bool** | True if this doc has no attribution information available. We use an explicit field for this instead of just implicitly leaving all the DocAttribution fields blank to distinguish a case where a bug/oversight has left the attribution information empty vs when we really have no attribution information available. | [optional] 
**podcast_utterance_id** | **str** |  | [optional] 
**publication_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**quality_score_experiment_only** | **float** | This field is for opt-out experiment only, MUST never be used during actual production/serving.  | [optional] 
**repo** | **str** | Github repository | [optional] 
**url** | **str** | URL of a webdoc | [optional] 
**volume_id** | **str** |  | [optional] 
**wikipedia_article_title** | **str** | Wikipedia article title. The Wikipedia TFDS dataset includes article titles but not URLs. While a URL is to the best of our knowledge a deterministic function of the title, we store the original title to reflect the information in the original dataset. | [optional] 
**youtube_video_id** | **str** | The unique video id from Youtube. Example: AkoGsW52Ir0 | [optional] 

## Example

```python
from openapi_client.models.language_labs_aida_trust_recitation_proto_doc_attribution import LanguageLabsAidaTrustRecitationProtoDocAttribution

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageLabsAidaTrustRecitationProtoDocAttribution from a JSON string
language_labs_aida_trust_recitation_proto_doc_attribution_instance = LanguageLabsAidaTrustRecitationProtoDocAttribution.from_json(json)
# print the JSON string representation of the object
print(LanguageLabsAidaTrustRecitationProtoDocAttribution.to_json())

# convert the object into a dict
language_labs_aida_trust_recitation_proto_doc_attribution_dict = language_labs_aida_trust_recitation_proto_doc_attribution_instance.to_dict()
# create an instance of LanguageLabsAidaTrustRecitationProtoDocAttribution from a dict
language_labs_aida_trust_recitation_proto_doc_attribution_from_dict = LanguageLabsAidaTrustRecitationProtoDocAttribution.from_dict(language_labs_aida_trust_recitation_proto_doc_attribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


