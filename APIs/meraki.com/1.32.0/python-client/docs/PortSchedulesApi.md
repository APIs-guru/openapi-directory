# openapi_client.PortSchedulesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_switch_port_schedule_1**](PortSchedulesApi.md#create_network_switch_port_schedule_1) | **POST** /networks/{networkId}/switch/portSchedules | Add a switch port schedule
[**delete_network_switch_port_schedule_1**](PortSchedulesApi.md#delete_network_switch_port_schedule_1) | **DELETE** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Delete a switch port schedule
[**get_network_switch_port_schedules_1**](PortSchedulesApi.md#get_network_switch_port_schedules_1) | **GET** /networks/{networkId}/switch/portSchedules | List switch port schedules
[**update_network_switch_port_schedule_1**](PortSchedulesApi.md#update_network_switch_port_schedule_1) | **PUT** /networks/{networkId}/switch/portSchedules/{portScheduleId} | Update a switch port schedule


# **create_network_switch_port_schedule_1**
> object create_network_switch_port_schedule_1(network_id, create_network_switch_port_schedule_request)

Add a switch port schedule

Add a switch port schedule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_switch_port_schedule_request import CreateNetworkSwitchPortScheduleRequest
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
    api_instance = openapi_client.PortSchedulesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_switch_port_schedule_request = openapi_client.CreateNetworkSwitchPortScheduleRequest() # CreateNetworkSwitchPortScheduleRequest | 

    try:
        # Add a switch port schedule
        api_response = api_instance.create_network_switch_port_schedule_1(network_id, create_network_switch_port_schedule_request)
        print("The response of PortSchedulesApi->create_network_switch_port_schedule_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortSchedulesApi->create_network_switch_port_schedule_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_switch_port_schedule_request** | [**CreateNetworkSwitchPortScheduleRequest**](CreateNetworkSwitchPortScheduleRequest.md)|  | 

### Return type

**object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_switch_port_schedule_1**
> delete_network_switch_port_schedule_1(network_id, port_schedule_id)

Delete a switch port schedule

Delete a switch port schedule

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
    api_instance = openapi_client.PortSchedulesApi(api_client)
    network_id = 'network_id_example' # str | 
    port_schedule_id = 'port_schedule_id_example' # str | 

    try:
        # Delete a switch port schedule
        api_instance.delete_network_switch_port_schedule_1(network_id, port_schedule_id)
    except Exception as e:
        print("Exception when calling PortSchedulesApi->delete_network_switch_port_schedule_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **port_schedule_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_switch_port_schedules_1**
> List[object] get_network_switch_port_schedules_1(network_id)

List switch port schedules

List switch port schedules

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
    api_instance = openapi_client.PortSchedulesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List switch port schedules
        api_response = api_instance.get_network_switch_port_schedules_1(network_id)
        print("The response of PortSchedulesApi->get_network_switch_port_schedules_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortSchedulesApi->get_network_switch_port_schedules_1: %s\n" % e)
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

# **update_network_switch_port_schedule_1**
> object update_network_switch_port_schedule_1(network_id, port_schedule_id, update_network_switch_port_schedule_request=update_network_switch_port_schedule_request)

Update a switch port schedule

Update a switch port schedule

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_switch_port_schedule_request import UpdateNetworkSwitchPortScheduleRequest
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
    api_instance = openapi_client.PortSchedulesApi(api_client)
    network_id = 'network_id_example' # str | 
    port_schedule_id = 'port_schedule_id_example' # str | 
    update_network_switch_port_schedule_request = openapi_client.UpdateNetworkSwitchPortScheduleRequest() # UpdateNetworkSwitchPortScheduleRequest |  (optional)

    try:
        # Update a switch port schedule
        api_response = api_instance.update_network_switch_port_schedule_1(network_id, port_schedule_id, update_network_switch_port_schedule_request=update_network_switch_port_schedule_request)
        print("The response of PortSchedulesApi->update_network_switch_port_schedule_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortSchedulesApi->update_network_switch_port_schedule_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **port_schedule_id** | **str**|  | 
 **update_network_switch_port_schedule_request** | [**UpdateNetworkSwitchPortScheduleRequest**](UpdateNetworkSwitchPortScheduleRequest.md)|  | [optional] 

### Return type

**object**

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

