# openapi_client.EventsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_firmware_upgrades_staged_event_3**](EventsApi.md#create_network_firmware_upgrades_staged_event_3) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events | Create a Staged Upgrade Event for a network
[**defer_network_firmware_upgrades_staged_events_3**](EventsApi.md#defer_network_firmware_upgrades_staged_events_3) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events/defer | Postpone by 1 week all pending staged upgrade stages for a network
[**get_network_appliance_client_security_events_3**](EventsApi.md#get_network_appliance_client_security_events_3) | **GET** /networks/{networkId}/appliance/clients/{clientId}/security/events | List the security events for a client
[**get_network_appliance_security_events_2**](EventsApi.md#get_network_appliance_security_events_2) | **GET** /networks/{networkId}/appliance/security/events | List the security events for a network
[**get_network_events_1**](EventsApi.md#get_network_events_1) | **GET** /networks/{networkId}/events | List the events for the network
[**get_network_events_event_types_1**](EventsApi.md#get_network_events_event_types_1) | **GET** /networks/{networkId}/events/eventTypes | List the event type to human-readable description
[**get_network_firmware_upgrades_staged_events_3**](EventsApi.md#get_network_firmware_upgrades_staged_events_3) | **GET** /networks/{networkId}/firmwareUpgrades/staged/events | Get the Staged Upgrade Event from a network
[**get_organization_appliance_security_events_2**](EventsApi.md#get_organization_appliance_security_events_2) | **GET** /organizations/{organizationId}/appliance/security/events | List the security events for an organization
[**rollbacks_network_firmware_upgrades_staged_events_3**](EventsApi.md#rollbacks_network_firmware_upgrades_staged_events_3) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events/rollbacks | Rollback a Staged Upgrade Event for a network
[**update_network_firmware_upgrades_staged_events_3**](EventsApi.md#update_network_firmware_upgrades_staged_events_3) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/events | Update the Staged Upgrade Event for a network


# **create_network_firmware_upgrades_staged_event_3**
> GetNetworkFirmwareUpgradesStagedEvents200Response create_network_firmware_upgrades_staged_event_3(network_id, create_network_firmware_upgrades_staged_event_request)

Create a Staged Upgrade Event for a network

Create a Staged Upgrade Event for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_staged_event_request import CreateNetworkFirmwareUpgradesStagedEventRequest
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    create_network_firmware_upgrades_staged_event_request = openapi_client.CreateNetworkFirmwareUpgradesStagedEventRequest() # CreateNetworkFirmwareUpgradesStagedEventRequest | 

    try:
        # Create a Staged Upgrade Event for a network
        api_response = api_instance.create_network_firmware_upgrades_staged_event_3(network_id, create_network_firmware_upgrades_staged_event_request)
        print("The response of EventsApi->create_network_firmware_upgrades_staged_event_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->create_network_firmware_upgrades_staged_event_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_firmware_upgrades_staged_event_request** | [**CreateNetworkFirmwareUpgradesStagedEventRequest**](CreateNetworkFirmwareUpgradesStagedEventRequest.md)|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **defer_network_firmware_upgrades_staged_events_3**
> GetNetworkFirmwareUpgradesStagedEvents200Response defer_network_firmware_upgrades_staged_events_3(network_id)

Postpone by 1 week all pending staged upgrade stages for a network

Postpone by 1 week all pending staged upgrade stages for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
        # Postpone by 1 week all pending staged upgrade stages for a network
        api_response = api_instance.defer_network_firmware_upgrades_staged_events_3(network_id)
        print("The response of EventsApi->defer_network_firmware_upgrades_staged_events_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->defer_network_firmware_upgrades_staged_events_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

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

# **get_network_appliance_client_security_events_3**
> List[object] get_network_appliance_client_security_events_3(network_id, client_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for a client

List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    client_id = 'client_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for a client
        api_response = api_instance.get_network_appliance_client_security_events_3(network_id, client_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of EventsApi->get_network_appliance_client_security_events_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_network_appliance_client_security_events_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **client_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 791 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

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
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_appliance_security_events_2**
> List[object] get_network_appliance_security_events_2(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for a network

List the security events for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for a network
        api_response = api_instance.get_network_appliance_security_events_2(network_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of EventsApi->get_network_appliance_security_events_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_network_appliance_security_events_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

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
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_events_1**
> GetNetworkEvents200Response get_network_events_1(network_id, product_type=product_type, included_event_types=included_event_types, excluded_event_types=excluded_event_types, device_mac=device_mac, device_serial=device_serial, device_name=device_name, client_ip=client_ip, client_mac=client_mac, client_name=client_name, sm_device_mac=sm_device_mac, sm_device_name=sm_device_name, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

List the events for the network

List the events for the network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_events200_response import GetNetworkEvents200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    product_type = 'product_type_example' # str | The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway (optional)
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
        api_response = api_instance.get_network_events_1(network_id, product_type=product_type, included_event_types=included_event_types, excluded_event_types=excluded_event_types, device_mac=device_mac, device_serial=device_serial, device_name=device_name, client_ip=client_ip, client_mac=client_mac, client_name=client_name, sm_device_mac=sm_device_mac, sm_device_name=sm_device_name, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of EventsApi->get_network_events_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_network_events_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **product_type** | **str**| The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway | [optional] 
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

[**GetNetworkEvents200Response**](GetNetworkEvents200Response.md)

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

# **get_network_events_event_types_1**
> List[GetNetworkEventsEventTypes200ResponseInner] get_network_events_event_types_1(network_id)

List the event type to human-readable description

List the event type to human-readable description

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_events_event_types200_response_inner import GetNetworkEventsEventTypes200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
        api_response = api_instance.get_network_events_event_types_1(network_id)
        print("The response of EventsApi->get_network_events_event_types_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_network_events_event_types_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkEventsEventTypes200ResponseInner]**](GetNetworkEventsEventTypes200ResponseInner.md)

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

# **get_network_firmware_upgrades_staged_events_3**
> GetNetworkFirmwareUpgradesStagedEvents200Response get_network_firmware_upgrades_staged_events_3(network_id)

Get the Staged Upgrade Event from a network

Get the Staged Upgrade Event from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
        # Get the Staged Upgrade Event from a network
        api_response = api_instance.get_network_firmware_upgrades_staged_events_3(network_id)
        print("The response of EventsApi->get_network_firmware_upgrades_staged_events_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_network_firmware_upgrades_staged_events_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

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

# **get_organization_appliance_security_events_2**
> List[object] get_organization_appliance_security_events_2(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)

List the security events for an organization

List the security events for an organization

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    sort_order = 'sort_order_example' # str | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. (optional)

    try:
        # List the security events for an organization
        api_response = api_instance.get_organization_appliance_security_events_2(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, sort_order=sort_order)
        print("The response of EventsApi->get_organization_appliance_security_events_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->get_organization_appliance_security_events_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 365 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **sort_order** | **str**| Sorted order of security events based on event detection time. Order options are &#39;ascending&#39; or &#39;descending&#39;. Default is ascending order. | [optional] 

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
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rollbacks_network_firmware_upgrades_staged_events_3**
> GetNetworkFirmwareUpgradesStagedEvents200Response rollbacks_network_firmware_upgrades_staged_events_3(network_id, rollbacks_network_firmware_upgrades_staged_events_request)

Rollback a Staged Upgrade Event for a network

Rollback a Staged Upgrade Event for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
from openapi_client.models.rollbacks_network_firmware_upgrades_staged_events_request import RollbacksNetworkFirmwareUpgradesStagedEventsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    rollbacks_network_firmware_upgrades_staged_events_request = openapi_client.RollbacksNetworkFirmwareUpgradesStagedEventsRequest() # RollbacksNetworkFirmwareUpgradesStagedEventsRequest | 

    try:
        # Rollback a Staged Upgrade Event for a network
        api_response = api_instance.rollbacks_network_firmware_upgrades_staged_events_3(network_id, rollbacks_network_firmware_upgrades_staged_events_request)
        print("The response of EventsApi->rollbacks_network_firmware_upgrades_staged_events_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->rollbacks_network_firmware_upgrades_staged_events_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **rollbacks_network_firmware_upgrades_staged_events_request** | [**RollbacksNetworkFirmwareUpgradesStagedEventsRequest**](RollbacksNetworkFirmwareUpgradesStagedEventsRequest.md)|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_firmware_upgrades_staged_events_3**
> GetNetworkFirmwareUpgradesStagedEvents200Response update_network_firmware_upgrades_staged_events_3(network_id, update_network_firmware_upgrades_staged_events_request)

Update the Staged Upgrade Event for a network

Update the Staged Upgrade Event for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_events200_response import GetNetworkFirmwareUpgradesStagedEvents200Response
from openapi_client.models.update_network_firmware_upgrades_staged_events_request import UpdateNetworkFirmwareUpgradesStagedEventsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
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
    update_network_firmware_upgrades_staged_events_request = openapi_client.UpdateNetworkFirmwareUpgradesStagedEventsRequest() # UpdateNetworkFirmwareUpgradesStagedEventsRequest | 

    try:
        # Update the Staged Upgrade Event for a network
        api_response = api_instance.update_network_firmware_upgrades_staged_events_3(network_id, update_network_firmware_upgrades_staged_events_request)
        print("The response of EventsApi->update_network_firmware_upgrades_staged_events_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsApi->update_network_firmware_upgrades_staged_events_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_firmware_upgrades_staged_events_request** | [**UpdateNetworkFirmwareUpgradesStagedEventsRequest**](UpdateNetworkFirmwareUpgradesStagedEventsRequest.md)|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedEvents200Response**](GetNetworkFirmwareUpgradesStagedEvents200Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

