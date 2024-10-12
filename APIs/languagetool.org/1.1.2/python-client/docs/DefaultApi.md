# openapi_client.DefaultApi

All URIs are relative to *https://api.languagetoolplus.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_post**](DefaultApi.md#check_post) | **POST** /check | Check a text
[**languages_get**](DefaultApi.md#languages_get) | **GET** /languages | Get a list of supported languages.
[**words_add_post**](DefaultApi.md#words_add_post) | **POST** /words/add | Add word to a dictionary
[**words_delete_post**](DefaultApi.md#words_delete_post) | **POST** /words/delete | Remove word from a dictionary
[**words_get**](DefaultApi.md#words_get) | **GET** /words | List words in dictionaries


# **check_post**
> CheckPost200Response check_post(language, text=text, data=data, username=username, api_key=api_key, dicts=dicts, mother_tongue=mother_tongue, preferred_variants=preferred_variants, enabled_rules=enabled_rules, disabled_rules=disabled_rules, enabled_categories=enabled_categories, disabled_categories=disabled_categories, enabled_only=enabled_only, level=level)

Check a text

The main feature - check a text with LanguageTool for possible style and grammar issues.

### Example


```python
import openapi_client
from openapi_client.models.check_post200_response import CheckPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.languagetoolplus.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.languagetoolplus.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    language = 'language_example' # str | A language code like `en-US`, `de-DE`, `fr`, or `auto` to guess the language automatically (see `preferredVariants` below). For languages with variants (English, German, Portuguese) spell checking will only be activated when you specify the variant, e.g. `en-GB` instead of just `en`.
    text = 'text_example' # str | The text to be checked. This or 'data' is required. (optional)
    data = 'data_example' # str | The text to be checked, given as a JSON document that specifies what's text and what's markup. This or 'text' is required. Markup will be ignored when looking for errors. Example text: <pre>A &lt;b>test&lt;/b></pre>JSON for the example text: <pre>{\\\"annotation\\\":[  {\\\"text\\\": \\\"A \\\"},  {\\\"markup\\\": \\\"&lt;b>\\\"},  {\\\"text\\\": \\\"test\\\"},  {\\\"markup\\\": \\\"&lt;/b>\\\"} ]}</pre> <p>If you have markup that should be interpreted as whitespace, like <tt>&lt;p&gt;</tt> in HTML, you can have it interpreted like this: <pre>{\\\"markup\\\": \\\"&lt;p&gt;\\\", \\\"interpretAs\\\": \\\"\\\\n\\\\n\\\"}</pre><p>The 'data' feature is not limited to HTML or XML, it can be used for any kind of markup. Entities will need to be expanded in this input. (optional)
    username = 'username_example' # str | Set to get Premium API access: Your username/email as used to log in at languagetool.org. (optional)
    api_key = 'api_key_example' # str | Set to get Premium API access: <a target='_blank' href='https://languagetool.org/editor/settings/access-tokens'>your API key</a> (optional)
    dicts = 'dicts_example' # str | Comma-separated list of dictionaries to include words from; uses special default dictionary if this is unset (optional)
    mother_tongue = 'mother_tongue_example' # str | A language code of the user's native language, enabling false friends checks for some language pairs. (optional)
    preferred_variants = 'preferred_variants_example' # str | Comma-separated list of preferred language variants. The language detector used with `language=auto` can detect e.g. English, but it cannot decide whether British English or American English is used. Thus this parameter can be used to specify the preferred variants like `en-GB` and `de-AT`. Only available with `language=auto`. You should set variants for at least German and English, as otherwise the spell checking will not work for those, as no spelling dictionary can be selected for just `en` or `de`. (optional)
    enabled_rules = 'enabled_rules_example' # str | IDs of rules to be enabled, comma-separated (optional)
    disabled_rules = 'disabled_rules_example' # str | IDs of rules to be disabled, comma-separated (optional)
    enabled_categories = 'enabled_categories_example' # str | IDs of categories to be enabled, comma-separated (optional)
    disabled_categories = 'disabled_categories_example' # str | IDs of categories to be disabled, comma-separated (optional)
    enabled_only = False # bool | If true, only the rules and categories whose IDs are specified with `enabledRules` or `enabledCategories` are enabled. (optional) (default to False)
    level = 'level_example' # str | If set to `picky`, additional rules will be activated, i.e. rules that you might only find useful when checking formal text. (optional)

    try:
        # Check a text
        api_response = api_instance.check_post(language, text=text, data=data, username=username, api_key=api_key, dicts=dicts, mother_tongue=mother_tongue, preferred_variants=preferred_variants, enabled_rules=enabled_rules, disabled_rules=disabled_rules, enabled_categories=enabled_categories, disabled_categories=disabled_categories, enabled_only=enabled_only, level=level)
        print("The response of DefaultApi->check_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->check_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**| A language code like &#x60;en-US&#x60;, &#x60;de-DE&#x60;, &#x60;fr&#x60;, or &#x60;auto&#x60; to guess the language automatically (see &#x60;preferredVariants&#x60; below). For languages with variants (English, German, Portuguese) spell checking will only be activated when you specify the variant, e.g. &#x60;en-GB&#x60; instead of just &#x60;en&#x60;. | 
 **text** | **str**| The text to be checked. This or &#39;data&#39; is required. | [optional] 
 **data** | **str**| The text to be checked, given as a JSON document that specifies what&#39;s text and what&#39;s markup. This or &#39;text&#39; is required. Markup will be ignored when looking for errors. Example text: &lt;pre&gt;A &amp;lt;b&gt;test&amp;lt;/b&gt;&lt;/pre&gt;JSON for the example text: &lt;pre&gt;{\\\&quot;annotation\\\&quot;:[  {\\\&quot;text\\\&quot;: \\\&quot;A \\\&quot;},  {\\\&quot;markup\\\&quot;: \\\&quot;&amp;lt;b&gt;\\\&quot;},  {\\\&quot;text\\\&quot;: \\\&quot;test\\\&quot;},  {\\\&quot;markup\\\&quot;: \\\&quot;&amp;lt;/b&gt;\\\&quot;} ]}&lt;/pre&gt; &lt;p&gt;If you have markup that should be interpreted as whitespace, like &lt;tt&gt;&amp;lt;p&amp;gt;&lt;/tt&gt; in HTML, you can have it interpreted like this: &lt;pre&gt;{\\\&quot;markup\\\&quot;: \\\&quot;&amp;lt;p&amp;gt;\\\&quot;, \\\&quot;interpretAs\\\&quot;: \\\&quot;\\\\n\\\\n\\\&quot;}&lt;/pre&gt;&lt;p&gt;The &#39;data&#39; feature is not limited to HTML or XML, it can be used for any kind of markup. Entities will need to be expanded in this input. | [optional] 
 **username** | **str**| Set to get Premium API access: Your username/email as used to log in at languagetool.org. | [optional] 
 **api_key** | **str**| Set to get Premium API access: &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://languagetool.org/editor/settings/access-tokens&#39;&gt;your API key&lt;/a&gt; | [optional] 
 **dicts** | **str**| Comma-separated list of dictionaries to include words from; uses special default dictionary if this is unset | [optional] 
 **mother_tongue** | **str**| A language code of the user&#39;s native language, enabling false friends checks for some language pairs. | [optional] 
 **preferred_variants** | **str**| Comma-separated list of preferred language variants. The language detector used with &#x60;language&#x3D;auto&#x60; can detect e.g. English, but it cannot decide whether British English or American English is used. Thus this parameter can be used to specify the preferred variants like &#x60;en-GB&#x60; and &#x60;de-AT&#x60;. Only available with &#x60;language&#x3D;auto&#x60;. You should set variants for at least German and English, as otherwise the spell checking will not work for those, as no spelling dictionary can be selected for just &#x60;en&#x60; or &#x60;de&#x60;. | [optional] 
 **enabled_rules** | **str**| IDs of rules to be enabled, comma-separated | [optional] 
 **disabled_rules** | **str**| IDs of rules to be disabled, comma-separated | [optional] 
 **enabled_categories** | **str**| IDs of categories to be enabled, comma-separated | [optional] 
 **disabled_categories** | **str**| IDs of categories to be disabled, comma-separated | [optional] 
 **enabled_only** | **bool**| If true, only the rules and categories whose IDs are specified with &#x60;enabledRules&#x60; or &#x60;enabledCategories&#x60; are enabled. | [optional] [default to False]
 **level** | **str**| If set to &#x60;picky&#x60;, additional rules will be activated, i.e. rules that you might only find useful when checking formal text. | [optional] 

### Return type

[**CheckPost200Response**](CheckPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the result of checking the text |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **languages_get**
> List[LanguagesGet200ResponseInner] languages_get()

Get a list of supported languages.

### Example


```python
import openapi_client
from openapi_client.models.languages_get200_response_inner import LanguagesGet200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.languagetoolplus.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.languagetoolplus.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Get a list of supported languages.
        api_response = api_instance.languages_get()
        print("The response of DefaultApi->languages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->languages_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[LanguagesGet200ResponseInner]**](LanguagesGet200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of language objects. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **words_add_post**
> WordsAddPost200Response words_add_post(word, username, api_key, dict=dict)

Add word to a dictionary

Add a word to one of the user's personal dictionaries. Please note that this feature is considered to be used for personal dictionaries which must not contain more than 500 words. If this is an issue for you, please contact us.

### Example


```python
import openapi_client
from openapi_client.models.words_add_post200_response import WordsAddPost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.languagetoolplus.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.languagetoolplus.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    word = 'word_example' # str | The word to be added. Must not be a phrase, i.e. cannot contain white space. The word is added to a global dictionary that applies to all languages.
    username = 'username_example' # str | Your username as used to log in at languagetool.org.
    api_key = 'api_key_example' # str | <a target='_blank' href='https://languagetool.org/editor/settings/access-tokens'>Your API key</a>
    dict = 'dict_example' # str | Name of the dictionary to add the word to; non-existent dictionaries are created after calling this; if unset, adds to special default dictionary (optional)

    try:
        # Add word to a dictionary
        api_response = api_instance.words_add_post(word, username, api_key, dict=dict)
        print("The response of DefaultApi->words_add_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->words_add_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **word** | **str**| The word to be added. Must not be a phrase, i.e. cannot contain white space. The word is added to a global dictionary that applies to all languages. | 
 **username** | **str**| Your username as used to log in at languagetool.org. | 
 **api_key** | **str**| &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://languagetool.org/editor/settings/access-tokens&#39;&gt;Your API key&lt;/a&gt; | 
 **dict** | **str**| Name of the dictionary to add the word to; non-existent dictionaries are created after calling this; if unset, adds to special default dictionary | [optional] 

### Return type

[**WordsAddPost200Response**](WordsAddPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the result of adding the word |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **words_delete_post**
> WordsDeletePost200Response words_delete_post(word, username, api_key, dict=dict)

Remove word from a dictionary

Remove a word from one of the user's personal dictionaries.

### Example


```python
import openapi_client
from openapi_client.models.words_delete_post200_response import WordsDeletePost200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.languagetoolplus.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.languagetoolplus.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    word = 'word_example' # str | The word to be removed.
    username = 'username_example' # str | Your username as used to log in at languagetool.org.
    api_key = 'api_key_example' # str | <a target='_blank' href='https://languagetool.org/editor/settings/access-tokens'>Your API key</a>
    dict = 'dict_example' # str | Name of the dictionary to remove the word from; if the dictionary is empty upon calling this, it is deleted; if unset, removes from special default dictionary (optional)

    try:
        # Remove word from a dictionary
        api_response = api_instance.words_delete_post(word, username, api_key, dict=dict)
        print("The response of DefaultApi->words_delete_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->words_delete_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **word** | **str**| The word to be removed. | 
 **username** | **str**| Your username as used to log in at languagetool.org. | 
 **api_key** | **str**| &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://languagetool.org/editor/settings/access-tokens&#39;&gt;Your API key&lt;/a&gt; | 
 **dict** | **str**| Name of the dictionary to remove the word from; if the dictionary is empty upon calling this, it is deleted; if unset, removes from special default dictionary | [optional] 

### Return type

[**WordsDeletePost200Response**](WordsDeletePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the result of removing the word |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **words_get**
> WordsGet200Response words_get(username, api_key, offset=offset, limit=limit, dicts=dicts)

List words in dictionaries

List words in the user's personal dictionaries.

### Example


```python
import openapi_client
from openapi_client.models.words_get200_response import WordsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.languagetoolplus.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.languagetoolplus.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    username = 'username_example' # str | Your username as used to log in at languagetool.org.
    api_key = 'api_key_example' # str | <a target='_blank' href='https://languagetool.org/editor/settings/access-tokens'>Your API key</a>
    offset = 56 # int | Offset of where to start in the list of words. Defaults to 0. (optional)
    limit = 56 # int | Maximum number of words to return. Defaults to 10. (optional)
    dicts = 'dicts_example' # str | Comma-separated list of dictionaries to include words from; uses special default dictionary if this is unset (optional)

    try:
        # List words in dictionaries
        api_response = api_instance.words_get(username, api_key, offset=offset, limit=limit, dicts=dicts)
        print("The response of DefaultApi->words_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->words_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| Your username as used to log in at languagetool.org. | 
 **api_key** | **str**| &lt;a target&#x3D;&#39;_blank&#39; href&#x3D;&#39;https://languagetool.org/editor/settings/access-tokens&#39;&gt;Your API key&lt;/a&gt; | 
 **offset** | **int**| Offset of where to start in the list of words. Defaults to 0. | [optional] 
 **limit** | **int**| Maximum number of words to return. Defaults to 10. | [optional] 
 **dicts** | **str**| Comma-separated list of dictionaries to include words from; uses special default dictionary if this is unset | [optional] 

### Return type

[**WordsGet200Response**](WordsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | the user&#39;s words from the given user dictionaries |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

