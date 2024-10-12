# openapi_client.TextApi

All URIs are relative to *https://connect.apptigent.com/api/utilities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compare_strings**](TextApi.md#compare_strings) | **POST** /CompareStrings | Text - Compare strings
[**contains_string**](TextApi.md#contains_string) | **POST** /ContainsString | Text - Contains string
[**convert_case**](TextApi.md#convert_case) | **POST** /ConvertCase | Text - Convert case
[**decode_string**](TextApi.md#decode_string) | **POST** /DecodeString | Text - Decode string
[**encode_string**](TextApi.md#encode_string) | **POST** /EncodeString | Text - Encode string
[**generate_guid**](TextApi.md#generate_guid) | **POST** /GenerateGuid | Text - Generate GUID
[**generate_hash**](TextApi.md#generate_hash) | **POST** /GenerateHash | Text - Generate hash
[**join_strings**](TextApi.md#join_strings) | **POST** /JoinStrings | Text - Join strings
[**redact_string**](TextApi.md#redact_string) | **POST** /RedactString | Text - Redact string
[**replace_string**](TextApi.md#replace_string) | **POST** /ReplaceString | Text - Replace string
[**shorten_link**](TextApi.md#shorten_link) | **POST** /ShortenLink | Text - Shorten hyperlink
[**speech_to_text**](TextApi.md#speech_to_text) | **POST** /SpeechToText | Text - Speech to Text
[**split_string**](TextApi.md#split_string) | **POST** /SplitString | Text - Split string
[**string_to_file**](TextApi.md#string_to_file) | **POST** /StringToFile | Text - String to File
[**text_to_speech**](TextApi.md#text_to_speech) | **POST** /TextToSpeech | Text - Text to Speech
[**translate_string**](TextApi.md#translate_string) | **POST** /TranslateString | Text - Translate string
[**trim_string**](TextApi.md#trim_string) | **POST** /TrimString | Text - Trim string
[**url_decode**](TextApi.md#url_decode) | **POST** /URLDecode | Text - Decode URL
[**url_encode**](TextApi.md#url_encode) | **POST** /URLEncode | Text - Encode URL
[**validate_email**](TextApi.md#validate_email) | **POST** /ValidateEmail | Text - Validate email
[**verify_hash**](TextApi.md#verify_hash) | **POST** /VerifyHash | Text - Verify hash


# **compare_strings**
> OutputString compare_strings(string_comparison=string_comparison)

Text - Compare strings

Perform a comparison of two strings

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_string_comparison import InputStringComparison
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    string_comparison = openapi_client.InputStringComparison() # InputStringComparison |  (optional)

    try:
        # Text - Compare strings
        api_response = api_instance.compare_strings(string_comparison=string_comparison)
        print("The response of TextApi->compare_strings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->compare_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_comparison** | [**InputStringComparison**](InputStringComparison.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contains_string**
> OutputString contains_string(string_contains=string_contains)

Text - Contains string

Determine if a string contains another string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_string_contains import InputStringContains
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    string_contains = openapi_client.InputStringContains() # InputStringContains |  (optional)

    try:
        # Text - Contains string
        api_response = api_instance.contains_string(string_contains=string_contains)
        print("The response of TextApi->contains_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->contains_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_contains** | [**InputStringContains**](InputStringContains.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **convert_case**
> OutputString convert_case(case_conversion=case_conversion)

Text - Convert case

Convert string to upper, lower or title case

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_case_conversion import InputCaseConversion
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    case_conversion = openapi_client.InputCaseConversion() # InputCaseConversion |  (optional)

    try:
        # Text - Convert case
        api_response = api_instance.convert_case(case_conversion=case_conversion)
        print("The response of TextApi->convert_case:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->convert_case: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **case_conversion** | [**InputCaseConversion**](InputCaseConversion.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decode_string**
> OutputString decode_string(string_input=string_input)

Text - Decode string

Decode a string encoded with Base64 encoding

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.decode_string_request import DecodeStringRequest
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    string_input = openapi_client.DecodeStringRequest() # DecodeStringRequest |  (optional)

    try:
        # Text - Decode string
        api_response = api_instance.decode_string(string_input=string_input)
        print("The response of TextApi->decode_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->decode_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_input** | [**DecodeStringRequest**](DecodeStringRequest.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **encode_string**
> OutputString encode_string(string_input=string_input)

Text - Encode string

Encode a string using Base64 encoding

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_string import InputString
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    string_input = openapi_client.InputString() # InputString |  (optional)

    try:
        # Text - Encode string
        api_response = api_instance.encode_string(string_input=string_input)
        print("The response of TextApi->encode_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->encode_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_input** | [**InputString**](InputString.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_guid**
> OutputString generate_guid(generate_unique_id=generate_unique_id)

Text - Generate GUID

Generate a globally unique identifier

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_generate_unique_id import InputGenerateUniqueID
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    generate_unique_id = openapi_client.InputGenerateUniqueID() # InputGenerateUniqueID |  (optional)

    try:
        # Text - Generate GUID
        api_response = api_instance.generate_guid(generate_unique_id=generate_unique_id)
        print("The response of TextApi->generate_guid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->generate_guid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_unique_id** | [**InputGenerateUniqueID**](InputGenerateUniqueID.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_hash**
> OutputString generate_hash(generate_hash=generate_hash)

Text - Generate hash

Generate a hash value from a string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_generate_hash import InputGenerateHash
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    generate_hash = openapi_client.InputGenerateHash() # InputGenerateHash |  (optional)

    try:
        # Text - Generate hash
        api_response = api_instance.generate_hash(generate_hash=generate_hash)
        print("The response of TextApi->generate_hash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->generate_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generate_hash** | [**InputGenerateHash**](InputGenerateHash.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **join_strings**
> OutputString join_strings(join_strings=join_strings)

Text - Join strings

Join a collection of strings

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_join_strings import InputJoinStrings
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    join_strings = openapi_client.InputJoinStrings() # InputJoinStrings |  (optional)

    try:
        # Text - Join strings
        api_response = api_instance.join_strings(join_strings=join_strings)
        print("The response of TextApi->join_strings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->join_strings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **join_strings** | [**InputJoinStrings**](InputJoinStrings.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **redact_string**
> OutputString redact_string(redact_string=redact_string)

Text - Redact string

Redact a strng containing sensitive content

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_redact_string import InputRedactString
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    redact_string = openapi_client.InputRedactString() # InputRedactString |  (optional)

    try:
        # Text - Redact string
        api_response = api_instance.redact_string(redact_string=redact_string)
        print("The response of TextApi->redact_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->redact_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redact_string** | [**InputRedactString**](InputRedactString.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_string**
> OutputString replace_string(replace_string=replace_string)

Text - Replace string

Replace one value with another in a string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_replace_string import InputReplaceString
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    replace_string = openapi_client.InputReplaceString() # InputReplaceString |  (optional)

    try:
        # Text - Replace string
        api_response = api_instance.replace_string(replace_string=replace_string)
        print("The response of TextApi->replace_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->replace_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replace_string** | [**InputReplaceString**](InputReplaceString.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shorten_link**
> OutputString shorten_link(string_input=string_input)

Text - Shorten hyperlink

Generate a simple, short URL from a complex URL

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.output_string import OutputString
from openapi_client.models.shorten_link_request import ShortenLinkRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    string_input = openapi_client.ShortenLinkRequest() # ShortenLinkRequest |  (optional)

    try:
        # Text - Shorten hyperlink
        api_response = api_instance.shorten_link(string_input=string_input)
        print("The response of TextApi->shorten_link:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->shorten_link: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_input** | [**ShortenLinkRequest**](ShortenLinkRequest.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **speech_to_text**
> OutputString speech_to_text(file, language)

Text - Speech to Text

Convert audio file to text (10MB limit)

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    file = None # bytearray | Source audio file (WAV, MP3, AAC, M4A)
    language = English (United States) # str | Language of audio input (default to English (United States))

    try:
        # Text - Speech to Text
        api_response = api_instance.speech_to_text(file, language)
        print("The response of TextApi->speech_to_text:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->speech_to_text: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**| Source audio file (WAV, MP3, AAC, M4A) | 
 **language** | **str**| Language of audio input | [default to English (United States)]

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **split_string**
> OutputStringArray split_string(split_string=split_string)

Text - Split string

Split a string based upon one or more characters

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_split_string import InputSplitString
from openapi_client.models.output_string_array import OutputStringArray
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    split_string = openapi_client.InputSplitString() # InputSplitString |  (optional)

    try:
        # Text - Split string
        api_response = api_instance.split_string(split_string=split_string)
        print("The response of TextApi->split_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->split_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **split_string** | [**InputSplitString**](InputSplitString.md)|  | [optional] 

### Return type

[**OutputStringArray**](OutputStringArray.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **string_to_file**
> bytearray string_to_file(input_string_to_file=input_string_to_file)

Text - String to File

Convert text string to file

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_string_to_file import InputStringToFile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    input_string_to_file = openapi_client.InputStringToFile() # InputStringToFile |  (optional)

    try:
        # Text - String to File
        api_response = api_instance.string_to_file(input_string_to_file=input_string_to_file)
        print("The response of TextApi->string_to_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->string_to_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input_string_to_file** | [**InputStringToFile**](InputStringToFile.md)|  | [optional] 

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml, text/css, text/csv, text/html, text/javascript, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **text_to_speech**
> bytearray text_to_speech(text_to_speech=text_to_speech)

Text - Text to Speech

Convert text to an audio file using AI-driven speech synthesis.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_text_to_speech import InputTextToSpeech
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    text_to_speech = openapi_client.InputTextToSpeech() # InputTextToSpeech |  (optional)

    try:
        # Text - Text to Speech
        api_response = api_instance.text_to_speech(text_to_speech=text_to_speech)
        print("The response of TextApi->text_to_speech:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->text_to_speech: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text_to_speech** | [**InputTextToSpeech**](InputTextToSpeech.md)|  | [optional] 

### Return type

**bytearray**

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: audio/mp3

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **translate_string**
> OutputString translate_string(translate_string=translate_string)

Text - Translate string

Translate a string into a different language

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_translate_string import InputTranslateString
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    translate_string = openapi_client.InputTranslateString() # InputTranslateString |  (optional)

    try:
        # Text - Translate string
        api_response = api_instance.translate_string(translate_string=translate_string)
        print("The response of TextApi->translate_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->translate_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translate_string** | [**InputTranslateString**](InputTranslateString.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trim_string**
> OutputString trim_string(trim_string=trim_string)

Text - Trim string

Trim leading or trailing whitespace from a string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_trim_string import InputTrimString
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    trim_string = openapi_client.InputTrimString() # InputTrimString |  (optional)

    try:
        # Text - Trim string
        api_response = api_instance.trim_string(trim_string=trim_string)
        print("The response of TextApi->trim_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->trim_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trim_string** | [**InputTrimString**](InputTrimString.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **url_decode**
> OutputString url_decode(string_input=string_input)

Text - Decode URL

Decode an encoded URL

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.output_string import OutputString
from openapi_client.models.url_decode_request import UrlDecodeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    string_input = openapi_client.UrlDecodeRequest() # UrlDecodeRequest |  (optional)

    try:
        # Text - Decode URL
        api_response = api_instance.url_decode(string_input=string_input)
        print("The response of TextApi->url_decode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->url_decode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_input** | [**UrlDecodeRequest**](UrlDecodeRequest.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **url_encode**
> OutputString url_encode(string_input=string_input)

Text - Encode URL

Generate an encoded string from a complex hyperlink

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_string import InputString
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    string_input = openapi_client.InputString() # InputString |  (optional)

    try:
        # Text - Encode URL
        api_response = api_instance.url_encode(string_input=string_input)
        print("The response of TextApi->url_encode:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->url_encode: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_input** | [**InputString**](InputString.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validate_email**
> OutputString validate_email(string_input=string_input)

Text - Validate email

Determine if an email address is valid

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.output_string import OutputString
from openapi_client.models.validate_email_request import ValidateEmailRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    string_input = openapi_client.ValidateEmailRequest() # ValidateEmailRequest |  (optional)

    try:
        # Text - Validate email
        api_response = api_instance.validate_email(string_input=string_input)
        print("The response of TextApi->validate_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->validate_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **string_input** | [**ValidateEmailRequest**](ValidateEmailRequest.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_hash**
> OutputBoolean verify_hash(verify_hash=verify_hash)

Text - Verify hash

Verify a hashed value against the original source string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_verify_hash import InputVerifyHash
from openapi_client.models.output_boolean import OutputBoolean
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TextApi(api_client)
    verify_hash = openapi_client.InputVerifyHash() # InputVerifyHash |  (optional)

    try:
        # Text - Verify hash
        api_response = api_instance.verify_hash(verify_hash=verify_hash)
        print("The response of TextApi->verify_hash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TextApi->verify_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verify_hash** | [**InputVerifyHash**](InputVerifyHash.md)|  | [optional] 

### Return type

[**OutputBoolean**](OutputBoolean.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

