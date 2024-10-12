# openapi_client.ChannelsApi

All URIs are relative to *https://demo.pims.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_all_channels**](ChannelsApi.md#fetch_all_channels) | **GET** /channels | Find all channels
[**fetch_all_events_channels**](ChannelsApi.md#fetch_all_events_channels) | **GET** /events/{event_id}/channels | Find all channels for one event
[**fetch_one_channel**](ChannelsApi.md#fetch_one_channel) | **GET** /channels/{channel_id} | Get one channel by ID
[**fetch_one_event_channel**](ChannelsApi.md#fetch_one_event_channel) | **GET** /events/{event_id}/channels/{channel_id} | Get one event channel by ID


# **fetch_all_channels**
> List[ChannelsEntity] fetch_all_channels(label=label, show_ignored=show_ignored, sort=sort, page_size=page_size, accept_language=accept_language)

Find all channels

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.channels_entity import ChannelsEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    label = 'label_example' # str | Find only the channels whose label contains this value. (optional)
    show_ignored = False # bool | If set to `false`, show only the channels which are not ignored. If set to `true`, show all channels. (optional) (default to False)
    sort = label # str | Sort the channels in the corresponding order. (optional) (default to label)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Find all channels
        api_response = api_instance.fetch_all_channels(label=label, show_ignored=show_ignored, sort=sort, page_size=page_size, accept_language=accept_language)
        print("The response of ChannelsApi->fetch_all_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->fetch_all_channels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label** | **str**| Find only the channels whose label contains this value. | [optional] 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the channels which are not ignored. If set to &#x60;true&#x60;, show all channels. | [optional] [default to False]
 **sort** | **str**| Sort the channels in the corresponding order. | [optional] [default to label]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**List[ChannelsEntity]**](ChannelsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of channels |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_all_events_channels**
> List[EventsChannelsEntity] fetch_all_events_channels(event_id, show_ignored=show_ignored, page_size=page_size)

Find all channels for one event

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_channels_entity import EventsChannelsEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    show_ignored = False # bool | If set to `false`, show only the [event-]channels which are not ignored. If set to `true`, show everything. (optional) (default to False)
    page_size = 25 # int | Pagination size, i.e. maximum number of items to be displayed in the response. (optional) (default to 25)

    try:
        # Find all channels for one event
        api_response = api_instance.fetch_all_events_channels(event_id, show_ignored=show_ignored, page_size=page_size)
        print("The response of ChannelsApi->fetch_all_events_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->fetch_all_events_channels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **show_ignored** | **bool**| If set to &#x60;false&#x60;, show only the [event-]channels which are not ignored. If set to &#x60;true&#x60;, show everything. | [optional] [default to False]
 **page_size** | **int**| Pagination size, i.e. maximum number of items to be displayed in the response. | [optional] [default to 25]

### Return type

[**List[EventsChannelsEntity]**](EventsChannelsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives an array of events channels |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_channel**
> ChannelsEntity fetch_one_channel(channel_id, accept_language=accept_language)

Get one channel by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.channels_entity import ChannelsEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    channel_id = 56 # int | ID of the targeted channel.
    accept_language = en # str | Language used for the translatable labels. (optional) (default to en)

    try:
        # Get one channel by ID
        api_response = api_instance.fetch_one_channel(channel_id, accept_language=accept_language)
        print("The response of ChannelsApi->fetch_one_channel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->fetch_one_channel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **int**| ID of the targeted channel. | 
 **accept_language** | **str**| Language used for the translatable labels. | [optional] [default to en]

### Return type

[**ChannelsEntity**](ChannelsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one channel |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_one_event_channel**
> EventsChannelsEntity fetch_one_event_channel(event_id, channel_id)

Get one event channel by ID

### Example

* Basic Authentication (Basic Auth):

```python
import openapi_client
from openapi_client.models.events_channels_entity import EventsChannelsEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://demo.pims.io/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://demo.pims.io/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: Basic Auth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    event_id = 56 # int | ID of the targeted event.
    channel_id = 56 # int | ID of the targeted event channel.

    try:
        # Get one event channel by ID
        api_response = api_instance.fetch_one_event_channel(event_id, channel_id)
        print("The response of ChannelsApi->fetch_one_event_channel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->fetch_one_event_channel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_id** | **int**| ID of the targeted event. | 
 **channel_id** | **int**| ID of the targeted event channel. | 

### Return type

[**EventsChannelsEntity**](EventsChannelsEntity.md)

### Authorization

[Basic Auth](../README.md#Basic Auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/hal+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation, gives one event channel |  -  |
**401** | Unauthorized, no authentication was made |  -  |
**403** | Forbidden, the authentication is wrong |  -  |
**404** | Not Found |  -  |
**500** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

