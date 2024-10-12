# openapi_client.EventsApi

All URIs are relative to *https://api.meraki.com/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_events**](EventsApi.md#get_network_events) | **GET** /networks/{networkId}/events | List the events for the network
[**get_network_events_event_types**](EventsApi.md#get_network_events_event_types) | **GET** /networks/{networkId}/events/eventTypes | List the event type to human-readable description


# **get_network_events**
> object get_network_events(network_id, product_type=product_type, included_event_types=included_event_types, excluded_event_types=excluded_event_types, device_mac=device_mac, device_serial=device_serial, device_name=device_name, client_ip=client_ip, client_mac=client_mac, client_name=client_name, sm_device_mac=sm_device_mac, sm_device_name=sm_device_name, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List the events for the network

List the events for the network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    network_id = 'network_id_example' # str | 
    product_type = 'product_type_example' # str | The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and environmental (optional)
    included_event_types = ['included_event_types_example'] # List[str] | A list of event types. The returned events will be filtered to only include events with these types. (optional)
    excluded_event_types = ['excluded_event_types_example'] # List[str] | A list of event types. The returned events will be filtered to exclude events with these types. (optional)
    device_mac = 'device_mac_example' # str | The MAC address of the Meraki device which the list of events will be filtered with (optional)
    device_serial = 'device_serial_example' # str | The serial of the Meraki device which the list of events will be filtered with (optional)
    device_name = 'device_name_example' # str | The name of the Meraki device which the list of events will be filtered with (optional)
    client_ip = 'client_ip_example' # str | The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. (optional)
    client_mac = 'client_mac_example' # str | The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. (optional)
    client_name = 'client_name_example' # str | The name, or partial name, of the client which the list of events will be filtered with (optional)
    sm_device_mac = 'sm_device_mac_example' # str | The MAC address of the Systems Manager device which the list of events will be filtered with (optional)
    sm_device_name = 'sm_device_name_example' # str | The name of the Systems Manager device which the list of events will be filtered with (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # List the events for the network
        api_response = api_instance.get_network_events(network_id, product_type=product_type, included_event_types=included_event_types, excluded_event_types=excluded_event_types, device_mac=device_mac, device_serial=device_serial, device_name=device_name, client_ip=client_ip, client_mac=client_mac, client_name=client_name, sm_device_mac=sm_device_mac, sm_device_name=sm_device_name, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of EventsApi->get_network_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_network_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **product_type** | **str**| The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and environmental | [optional] 
 **included_event_types** | [**List[str]**](str.md)| A list of event types. The returned events will be filtered to only include events with these types. | [optional] 
 **excluded_event_types** | [**List[str]**](str.md)| A list of event types. The returned events will be filtered to exclude events with these types. | [optional] 
 **device_mac** | **str**| The MAC address of the Meraki device which the list of events will be filtered with | [optional] 
 **device_serial** | **str**| The serial of the Meraki device which the list of events will be filtered with | [optional] 
 **device_name** | **str**| The name of the Meraki device which the list of events will be filtered with | [optional] 
 **client_ip** | **str**| The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. | [optional] 
 **client_mac** | **str**| The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. | [optional] 
 **client_name** | **str**| The name, or partial name, of the client which the list of events will be filtered with | [optional] 
 **sm_device_mac** | **str**| The MAC address of the Systems Manager device which the list of events will be filtered with | [optional] 
 **sm_device_name** | **str**| The name of the Systems Manager device which the list of events will be filtered with | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_events_event_types**
> List[object] get_network_events_event_types(network_id)

List the event type to human-readable description

List the event type to human-readable description

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EventsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the event type to human-readable description
        api_response = api_instance.get_network_events_event_types(network_id)
        print("The response of EventsApi->get_network_events_event_types:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_network_events_event_types: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

