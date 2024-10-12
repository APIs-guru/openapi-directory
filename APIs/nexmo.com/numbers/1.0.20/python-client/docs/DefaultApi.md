# openapi_client.DefaultApi

All URIs are relative to *https://rest.nexmo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buy_a_number**](DefaultApi.md#buy_a_number) | **POST** /number/buy | Buy a number
[**cancel_a_number**](DefaultApi.md#cancel_a_number) | **POST** /number/cancel | Cancel a number
[**get_available_numbers**](DefaultApi.md#get_available_numbers) | **GET** /number/search | Search available numbers
[**get_owned_numbers**](DefaultApi.md#get_owned_numbers) | **GET** /account/numbers | List the numbers you own
[**update_a_number**](DefaultApi.md#update_a_number) | **POST** /number/update | Update a number


# **buy_a_number**
> Response buy_a_number(country, msisdn, target_api_key=target_api_key)

Buy a number

Request to purchase a specific inbound number.

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.response import Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    country = 'country_example' # str | The two character country code in ISO 3166-1 alpha-2 format
    msisdn = 'msisdn_example' # str | An available inbound virtual number.
    target_api_key = 'target_api_key_example' # str | If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field. (optional)

    try:
        # Buy a number
        api_response = api_instance.buy_a_number(country, msisdn, target_api_key=target_api_key)
        print("The response of DefaultApi->buy_a_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->buy_a_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The two character country code in ISO 3166-1 alpha-2 format | 
 **msisdn** | **str**| An available inbound virtual number. | 
 **target_api_key** | **str**| If you’d like to perform an action on a subaccount, provide the &#x60;api_key&#x60; of that account here. If you’d like to perform an action on your own account, you do not need to provide this field. | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**420** | Action failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cancel_a_number**
> Response cancel_a_number(country, msisdn, target_api_key=target_api_key)

Cancel a number

Cancel your subscription for a specific inbound number.

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.response import Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    country = 'country_example' # str | The two character country code in ISO 3166-1 alpha-2 format
    msisdn = 'msisdn_example' # str | An available inbound virtual number.
    target_api_key = 'target_api_key_example' # str | If you’d like to perform an action on a subaccount, provide the `api_key` of that account here. If you’d like to perform an action on your own account, you do not need to provide this field. (optional)

    try:
        # Cancel a number
        api_response = api_instance.cancel_a_number(country, msisdn, target_api_key=target_api_key)
        print("The response of DefaultApi->cancel_a_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cancel_a_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The two character country code in ISO 3166-1 alpha-2 format | 
 **msisdn** | **str**| An available inbound virtual number. | 
 **target_api_key** | **str**| If you’d like to perform an action on a subaccount, provide the &#x60;api_key&#x60; of that account here. If you’d like to perform an action on your own account, you do not need to provide this field. | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_available_numbers**
> AvailableNumbers get_available_numbers(country, type=type, pattern=pattern, search_pattern=search_pattern, features=features, size=size, index=index)

Search available numbers

Retrieve inbound numbers that are available for the specified country.

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.available_numbers import AvailableNumbers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    country = 'country_example' # str | The two character country code to filter on (in ISO 3166-1 alpha-2 format)
    type = 'mobile-lvn' # str | Set this parameter to filter the type of number, such as mobile or landline (optional)
    pattern = '12345' # str | The number pattern you want to search for. Use in conjunction with `search_pattern`. (optional)
    search_pattern = 0 # int | The strategy you want to use for matching:   * `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA) * `1` - Search for numbers that contain `pattern` * `2` - Search for numbers that end with `pattern`  (optional) (default to 0)
    features = 'SMS' # str | Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`. (optional)
    size = 10 # int | Page size (optional) (default to 10)
    index = 1 # int | Page index (optional) (default to 1)

    try:
        # Search available numbers
        api_response = api_instance.get_available_numbers(country, type=type, pattern=pattern, search_pattern=search_pattern, features=features, size=size, index=index)
        print("The response of DefaultApi->get_available_numbers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_available_numbers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The two character country code to filter on (in ISO 3166-1 alpha-2 format) | 
 **type** | **str**| Set this parameter to filter the type of number, such as mobile or landline | [optional] 
 **pattern** | **str**| The number pattern you want to search for. Use in conjunction with &#x60;search_pattern&#x60;. | [optional] 
 **search_pattern** | **int**| The strategy you want to use for matching:   * &#x60;0&#x60; - Search for numbers that start with &#x60;pattern&#x60; (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA) * &#x60;1&#x60; - Search for numbers that contain &#x60;pattern&#x60; * &#x60;2&#x60; - Search for numbers that end with &#x60;pattern&#x60;  | [optional] [default to 0]
 **features** | **str**| Available features are &#x60;SMS&#x60;, &#x60;VOICE&#x60; and &#x60;MMS&#x60;. To look for numbers that support multiple features, use a comma-separated value: &#x60;SMS,MMS,VOICE&#x60;. | [optional] 
 **size** | **int**| Page size | [optional] [default to 10]
 **index** | **int**| Page index | [optional] [default to 1]

### Return type

[**AvailableNumbers**](AvailableNumbers.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_owned_numbers**
> InboundNumbers get_owned_numbers(application_id=application_id, has_application=has_application, country=country, pattern=pattern, search_pattern=search_pattern, size=size, index=index)

List the numbers you own

Retrieve all the inbound numbers associated with your Vonage account.

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.inbound_numbers import InboundNumbers
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_id = 'aaaaaaaa-bbbb-cccc-dddd-0123456789ab' # str | The Application that you want to return the numbers for. (optional)
    has_application = false # bool | Set this optional field to `true` to restrict your results to numbers associated with an Application (any Application). Set to `false` to find all numbers not associated with any Application. Omit the field to avoid filtering on whether or not the number is assigned to an Application.  (optional)
    country = 'country_example' # str |  (optional)
    pattern = '12345' # str | The number pattern you want to search for. Use in conjunction with `search_pattern`. (optional)
    search_pattern = 0 # int | The strategy you want to use for matching:   * `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA) * `1` - Search for numbers that contain `pattern` * `2` - Search for numbers that end with `pattern`  (optional) (default to 0)
    size = 10 # int | Page size (optional) (default to 10)
    index = 1 # int | Page index (optional) (default to 1)

    try:
        # List the numbers you own
        api_response = api_instance.get_owned_numbers(application_id=application_id, has_application=has_application, country=country, pattern=pattern, search_pattern=search_pattern, size=size, index=index)
        print("The response of DefaultApi->get_owned_numbers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_owned_numbers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_id** | **str**| The Application that you want to return the numbers for. | [optional] 
 **has_application** | **bool**| Set this optional field to &#x60;true&#x60; to restrict your results to numbers associated with an Application (any Application). Set to &#x60;false&#x60; to find all numbers not associated with any Application. Omit the field to avoid filtering on whether or not the number is assigned to an Application.  | [optional] 
 **country** | **str**|  | [optional] 
 **pattern** | **str**| The number pattern you want to search for. Use in conjunction with &#x60;search_pattern&#x60;. | [optional] 
 **search_pattern** | **int**| The strategy you want to use for matching:   * &#x60;0&#x60; - Search for numbers that start with &#x60;pattern&#x60; (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA) * &#x60;1&#x60; - Search for numbers that contain &#x60;pattern&#x60; * &#x60;2&#x60; - Search for numbers that end with &#x60;pattern&#x60;  | [optional] [default to 0]
 **size** | **int**| Page size | [optional] [default to 10]
 **index** | **int**| Page index | [optional] [default to 1]

### Return type

[**InboundNumbers**](InboundNumbers.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_a_number**
> Response update_a_number(country, msisdn, app_id=app_id, messages_callback_type=messages_callback_type, messages_callback_value=messages_callback_value, mo_http_url=mo_http_url, mo_smpp_sys_type=mo_smpp_sys_type, voice_callback_type=voice_callback_type, voice_callback_value=voice_callback_value, voice_status_callback=voice_status_callback)

Update a number

Change the behaviour of a number that you own.

### Example

* Api Key Authentication (apiKey):
* Api Key Authentication (apiSecret):

```python
import openapi_client
from openapi_client.models.response import Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.nexmo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.nexmo.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Configure API key authorization: apiSecret
configuration.api_key['apiSecret'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiSecret'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    country = 'country_example' # str | The two character country code in ISO 3166-1 alpha-2 format
    msisdn = 'msisdn_example' # str | An available inbound virtual number.
    app_id = 'app_id_example' # str | The Application that will handle inbound traffic to this number. (optional)
    messages_callback_type = 'messages_callback_type_example' # str | <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.  Specifies the Messages webhook type (always `app`) associated with this number and must be used with the `messagesCallbackValue` parameter.  (optional)
    messages_callback_value = 'messages_callback_value_example' # str | <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.  Specifies the Application ID of your Messages application. It must be used with the `messagesCallbackType` parameter.  (optional)
    mo_http_url = 'mo_http_url_example' # str | An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook. (optional)
    mo_smpp_sys_type = 'mo_smpp_sys_type_example' # str | The associated system type for your SMPP client (optional)
    voice_callback_type = 'voice_callback_type_example' # str | Specify whether inbound voice calls on your number are forwarded to a SIP or a telephone number.  This must be used with the `voiceCallbackValue` parameter. If set, `sip` or `tel` are prioritized over the Voice capability in your Application.  *Note: The `app` value is deprecated and will be removed in future.*  (optional)
    voice_callback_value = 'voice_callback_value_example' # str | A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter. (optional)
    voice_status_callback = 'voice_status_callback_example' # str | A webhook URI for Vonage to send a request to when a call ends (optional)

    try:
        # Update a number
        api_response = api_instance.update_a_number(country, msisdn, app_id=app_id, messages_callback_type=messages_callback_type, messages_callback_value=messages_callback_value, mo_http_url=mo_http_url, mo_smpp_sys_type=mo_smpp_sys_type, voice_callback_type=voice_callback_type, voice_callback_value=voice_callback_value, voice_status_callback=voice_status_callback)
        print("The response of DefaultApi->update_a_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_a_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **country** | **str**| The two character country code in ISO 3166-1 alpha-2 format | 
 **msisdn** | **str**| An available inbound virtual number. | 
 **app_id** | **str**| The Application that will handle inbound traffic to this number. | [optional] 
 **messages_callback_type** | **str**| &lt;strong&gt;DEPRECATED&lt;/strong&gt; - We recommend that you use &#x60;app_id&#x60; instead.  Specifies the Messages webhook type (always &#x60;app&#x60;) associated with this number and must be used with the &#x60;messagesCallbackValue&#x60; parameter.  | [optional] 
 **messages_callback_value** | **str**| &lt;strong&gt;DEPRECATED&lt;/strong&gt; - We recommend that you use &#x60;app_id&#x60; instead.  Specifies the Application ID of your Messages application. It must be used with the &#x60;messagesCallbackType&#x60; parameter.  | [optional] 
 **mo_http_url** | **str**| An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a &#x60;GET&#x60; request to the endpoint and checks that it returns a &#x60;200 OK&#x60; response. Set this parameter&#39;s value to an empty string to remove the webhook. | [optional] 
 **mo_smpp_sys_type** | **str**| The associated system type for your SMPP client | [optional] 
 **voice_callback_type** | **str**| Specify whether inbound voice calls on your number are forwarded to a SIP or a telephone number.  This must be used with the &#x60;voiceCallbackValue&#x60; parameter. If set, &#x60;sip&#x60; or &#x60;tel&#x60; are prioritized over the Voice capability in your Application.  *Note: The &#x60;app&#x60; value is deprecated and will be removed in future.*  | [optional] 
 **voice_callback_value** | **str**| A SIP URI or telephone number. Must be used with the &#x60;voiceCallbackType&#x60; parameter. | [optional] 
 **voice_status_callback** | **str**| A webhook URI for Vonage to send a request to when a call ends | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[apiKey](../README.md#apiKey), [apiSecret](../README.md#apiSecret)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

