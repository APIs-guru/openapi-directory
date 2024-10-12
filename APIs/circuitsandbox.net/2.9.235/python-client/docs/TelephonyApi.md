# openapi_client.TelephonyApi

All URIs are relative to *https://circuitsandbox.net/rest/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_journal_entries**](TelephonyApi.md#get_journal_entries) | **GET** /telephony/{telephonyConversationId}/journal | Get journal
[**v2_get_device_infos**](TelephonyApi.md#v2_get_device_infos) | **GET** /telephony/deviceInfos | Get devices infos
[**v2_get_telephony_conversation_id**](TelephonyApi.md#v2_get_telephony_conversation_id) | **GET** /telephony/telephonyConversationId | Get telephony conversation id


# **get_journal_entries**
> List[ConversationItem] get_journal_entries(telephony_conversation_id, timestamp=timestamp, number_of_entries=number_of_entries, direction=direction, journal_filter=journal_filter)

Get journal

Get telephony journal OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.conversation_item import ConversationItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelephonyApi(api_client)
    telephony_conversation_id = 'telephony_conversation_id_example' # str | The id of the telephony conversation
    timestamp = 0 # float | A timestamp, default = 0 (optional) (default to 0)
    number_of_entries = 25 # float | The number of entries, between 1 and 100, default = 25 (optional) (default to 25)
    direction = AFTER # str | The direction (BEFORE||AFTER||BOTH), default = AFTER (optional) (default to AFTER)
    journal_filter = ALL # str | The filter, ALL||MISSED||DIALED||RECEIVED||DIVERTED||VOICEMAILS||UNHERAD_VOICEMAILS. default = ALL (optional) (default to ALL)

    try:
        # Get journal
        api_response = api_instance.get_journal_entries(telephony_conversation_id, timestamp=timestamp, number_of_entries=number_of_entries, direction=direction, journal_filter=journal_filter)
        print("The response of TelephonyApi->get_journal_entries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelephonyApi->get_journal_entries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telephony_conversation_id** | **str**| The id of the telephony conversation | 
 **timestamp** | **float**| A timestamp, default &#x3D; 0 | [optional] [default to 0]
 **number_of_entries** | **float**| The number of entries, between 1 and 100, default &#x3D; 25 | [optional] [default to 25]
 **direction** | **str**| The direction (BEFORE||AFTER||BOTH), default &#x3D; AFTER | [optional] [default to AFTER]
 **journal_filter** | **str**| The filter, ALL||MISSED||DIALED||RECEIVED||DIVERTED||VOICEMAILS||UNHERAD_VOICEMAILS. default &#x3D; ALL | [optional] [default to ALL]

### Return type

[**List[ConversationItem]**](ConversationItem.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Journal successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_get_device_infos**
> List[V2DistributedClientInfo] v2_get_device_infos()

Get devices infos

Get the device infos of the requesting user OauthScopes: READ_USER_PROFILE

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.models.v2_distributed_client_info import V2DistributedClientInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelephonyApi(api_client)

    try:
        # Get devices infos
        api_response = api_instance.v2_get_device_infos()
        print("The response of TelephonyApi->v2_get_device_infos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TelephonyApi->v2_get_device_infos: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[V2DistributedClientInfo]**](V2DistributedClientInfo.md)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device infos successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_get_telephony_conversation_id**
> v2_get_telephony_conversation_id()

Get telephony conversation id

Get telephony conversation id for requesting client OauthScopes: READ_CONVERSATIONS

### Example

* OAuth Authentication (oauth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://circuitsandbox.net/rest/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://circuitsandbox.net/rest/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TelephonyApi(api_client)

    try:
        # Get telephony conversation id
        api_instance.v2_get_telephony_conversation_id()
    except Exception as e:
        print("Exception when calling TelephonyApi->v2_get_telephony_conversation_id: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Telephony conversation id successfully retrieved |  -  |
**401** | The authentication was not successful |  -  |
**500** | The server encountered an internal error and the operation could not be completed. |  -  |
**503** | The server is currently unable to receive requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

