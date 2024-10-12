# openapi_client.DataToolsApi

All URIs are relative to *https://neutrinoapi.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bad_word_filter**](DataToolsApi.md#bad_word_filter) | **POST** /bad-word-filter | Bad Word Filter
[**email_validate**](DataToolsApi.md#email_validate) | **GET** /email-validate | Email Validate
[**phone_validate**](DataToolsApi.md#phone_validate) | **GET** /phone-validate | Phone Validate
[**u_a_lookup**](DataToolsApi.md#u_a_lookup) | **GET** /ua-lookup | UA Lookup


# **bad_word_filter**
> BadWordFilterResponse bad_word_filter(content, catalog=catalog, censor_character=censor_character)

Bad Word Filter

Detect bad words, swear words and profanity in a given text

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.bad_word_filter_response import BadWordFilterResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataToolsApi(api_client)
    content = 'content_example' # str | The content to scan. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string
    catalog = 'strict' # str | Which catalog of bad words to use, we currently maintain two bad word catalogs: <br> <ul> <li>strict - the largest database of bad words which includes profanity, obscenity, sexual, rude, cuss, dirty, swear and objectionable words and phrases. This catalog is suitable for environments of all ages including educational or children's content</li> <li>obscene - like the strict catalog but does not include any mild profanities, idiomatic phrases or words which are considered formal terminology. This catalog is suitable for adult environments where certain types of bad words are considered OK</li> </ul> (optional) (default to 'strict')
    censor_character = 'censor_character_example' # str | The character to use to censor out the bad words found (optional)

    try:
        # Bad Word Filter
        api_response = api_instance.bad_word_filter(content, catalog=catalog, censor_character=censor_character)
        print("The response of DataToolsApi->bad_word_filter:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataToolsApi->bad_word_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content** | **str**| The content to scan. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string | 
 **catalog** | **str**| Which catalog of bad words to use, we currently maintain two bad word catalogs: &lt;br&gt; &lt;ul&gt; &lt;li&gt;strict - the largest database of bad words which includes profanity, obscenity, sexual, rude, cuss, dirty, swear and objectionable words and phrases. This catalog is suitable for environments of all ages including educational or children&#39;s content&lt;/li&gt; &lt;li&gt;obscene - like the strict catalog but does not include any mild profanities, idiomatic phrases or words which are considered formal terminology. This catalog is suitable for adult environments where certain types of bad words are considered OK&lt;/li&gt; &lt;/ul&gt; | [optional] [default to &#39;strict&#39;]
 **censor_character** | **str**| The character to use to censor out the bad words found | [optional] 

### Return type

[**BadWordFilterResponse**](BadWordFilterResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **email_validate**
> EmailValidateResponse email_validate(email, fix_typos=fix_typos)

Email Validate

Parse, validate and clean an email address

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.email_validate_response import EmailValidateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataToolsApi(api_client)
    email = 'email_example' # str | An email address
    fix_typos = False # bool | Automatically attempt to fix typos in the address (optional) (default to False)

    try:
        # Email Validate
        api_response = api_instance.email_validate(email, fix_typos=fix_typos)
        print("The response of DataToolsApi->email_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataToolsApi->email_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **str**| An email address | 
 **fix_typos** | **bool**| Automatically attempt to fix typos in the address | [optional] [default to False]

### Return type

[**EmailValidateResponse**](EmailValidateResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **phone_validate**
> PhoneValidateResponse phone_validate(number, country_code=country_code, ip=ip)

Phone Validate

Parse, validate and get location information about a phone number

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.phone_validate_response import PhoneValidateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataToolsApi(api_client)
    number = 'number_example' # str | A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the 'country-code' OR 'ip' options as well
    country_code = 'country_code_example' # str | ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) (optional)
    ip = 'ip_example' # str | Pass in a users IP address and we will assume numbers are based in the country of the IP address (optional)

    try:
        # Phone Validate
        api_response = api_instance.phone_validate(number, country_code=country_code, ip=ip)
        print("The response of DataToolsApi->phone_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataToolsApi->phone_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **number** | **str**| A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the &#39;country-code&#39; OR &#39;ip&#39; options as well | 
 **country_code** | **str**| ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign) | [optional] 
 **ip** | **str**| Pass in a users IP address and we will assume numbers are based in the country of the IP address | [optional] 

### Return type

[**PhoneValidateResponse**](PhoneValidateResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **u_a_lookup**
> UALookupResponse u_a_lookup(ua, ua_version=ua_version, ua_platform=ua_platform, ua_platform_version=ua_platform_version, ua_mobile=ua_mobile, device_model=device_model, device_brand=device_brand)

UA Lookup

Parse, validate and get detailed user-agent information from a user agent string or from client hints

### Example

* Api Key Authentication (api-key):
* Api Key Authentication (user-id):

```python
import openapi_client
from openapi_client.models.ua_lookup_response import UALookupResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://neutrinoapi.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://neutrinoapi.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key
configuration.api_key['api-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key'] = 'Bearer'

# Configure API key authorization: user-id
configuration.api_key['user-id'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['user-id'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DataToolsApi(api_client)
    ua = 'ua_example' # str | The user-agent string to lookup. For client hints use the 'UA' header or the JSON data directly from 'navigator.userAgentData.brands' or 'navigator.userAgentData.getHighEntropyValues()'
    ua_version = 'ua_version_example' # str | For client hints this corresponds to the 'UA-Full-Version' header or 'uaFullVersion' from NavigatorUAData (optional)
    ua_platform = 'ua_platform_example' # str | For client hints this corresponds to the 'UA-Platform' header or 'platform' from NavigatorUAData (optional)
    ua_platform_version = 'ua_platform_version_example' # str | For client hints this corresponds to the 'UA-Platform-Version' header or 'platformVersion' from NavigatorUAData (optional)
    ua_mobile = 'ua_mobile_example' # str | For client hints this corresponds to the 'UA-Mobile' header or 'mobile' from NavigatorUAData (optional)
    device_model = 'device_model_example' # str | For client hints this corresponds to the 'UA-Model' header or 'model' from NavigatorUAData. <br>You can also use this parameter to lookup a device directly by its model name, model code or hardware code, on android you can get the model name from: https://developer.android.com/reference/android/os/Build.html#MODEL (optional)
    device_brand = 'device_brand_example' # str | This parameter is only used in combination with 'device-model' when doing direct device lookups without any user-agent data. Set this to the brand or manufacturer name, this is required for accurate device detection with ambiguous model names. On android you can get the device brand from: https://developer.android.com/reference/android/os/Build#MANUFACTURER (optional)

    try:
        # UA Lookup
        api_response = api_instance.u_a_lookup(ua, ua_version=ua_version, ua_platform=ua_platform, ua_platform_version=ua_platform_version, ua_mobile=ua_mobile, device_model=device_model, device_brand=device_brand)
        print("The response of DataToolsApi->u_a_lookup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataToolsApi->u_a_lookup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ua** | **str**| The user-agent string to lookup. For client hints use the &#39;UA&#39; header or the JSON data directly from &#39;navigator.userAgentData.brands&#39; or &#39;navigator.userAgentData.getHighEntropyValues()&#39; | 
 **ua_version** | **str**| For client hints this corresponds to the &#39;UA-Full-Version&#39; header or &#39;uaFullVersion&#39; from NavigatorUAData | [optional] 
 **ua_platform** | **str**| For client hints this corresponds to the &#39;UA-Platform&#39; header or &#39;platform&#39; from NavigatorUAData | [optional] 
 **ua_platform_version** | **str**| For client hints this corresponds to the &#39;UA-Platform-Version&#39; header or &#39;platformVersion&#39; from NavigatorUAData | [optional] 
 **ua_mobile** | **str**| For client hints this corresponds to the &#39;UA-Mobile&#39; header or &#39;mobile&#39; from NavigatorUAData | [optional] 
 **device_model** | **str**| For client hints this corresponds to the &#39;UA-Model&#39; header or &#39;model&#39; from NavigatorUAData. &lt;br&gt;You can also use this parameter to lookup a device directly by its model name, model code or hardware code, on android you can get the model name from: https://developer.android.com/reference/android/os/Build.html#MODEL | [optional] 
 **device_brand** | **str**| This parameter is only used in combination with &#39;device-model&#39; when doing direct device lookups without any user-agent data. Set this to the brand or manufacturer name, this is required for accurate device detection with ambiguous model names. On android you can get the device brand from: https://developer.android.com/reference/android/os/Build#MANUFACTURER | [optional] 

### Return type

[**UALookupResponse**](UALookupResponse.md)

### Authorization

[api-key](../README.md#api-key), [user-id](../README.md#user-id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**400** | Your API request has been rejected. Check error code for details |  -  |
**403** | You have failed to authenticate |  -  |
**500** | We messed up, sorry! Your request has caused a fatal exception |  -  |
**0** | We messed up, sorry! Your request has caused an error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

