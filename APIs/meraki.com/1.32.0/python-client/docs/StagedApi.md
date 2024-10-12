# openapi_client.StagedApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_firmware_upgrades_staged_event_2**](StagedApi.md#create_network_firmware_upgrades_staged_event_2) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events | Create a Staged Upgrade Event for a network
[**create_network_firmware_upgrades_staged_group_2**](StagedApi.md#create_network_firmware_upgrades_staged_group_2) | **POST** /networks/{networkId}/firmwareUpgrades/staged/groups | Create a Staged Upgrade Group for a network
[**defer_network_firmware_upgrades_staged_events_2**](StagedApi.md#defer_network_firmware_upgrades_staged_events_2) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events/defer | Postpone by 1 week all pending staged upgrade stages for a network
[**delete_network_firmware_upgrades_staged_group_2**](StagedApi.md#delete_network_firmware_upgrades_staged_group_2) | **DELETE** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Delete a Staged Upgrade Group
[**get_network_firmware_upgrades_staged_events_2**](StagedApi.md#get_network_firmware_upgrades_staged_events_2) | **GET** /networks/{networkId}/firmwareUpgrades/staged/events | Get the Staged Upgrade Event from a network
[**get_network_firmware_upgrades_staged_group_2**](StagedApi.md#get_network_firmware_upgrades_staged_group_2) | **GET** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Get a Staged Upgrade Group from a network
[**get_network_firmware_upgrades_staged_groups_2**](StagedApi.md#get_network_firmware_upgrades_staged_groups_2) | **GET** /networks/{networkId}/firmwareUpgrades/staged/groups | List of Staged Upgrade Groups in a network
[**get_network_firmware_upgrades_staged_stages_2**](StagedApi.md#get_network_firmware_upgrades_staged_stages_2) | **GET** /networks/{networkId}/firmwareUpgrades/staged/stages | Order of Staged Upgrade Groups in a network
[**rollbacks_network_firmware_upgrades_staged_events_2**](StagedApi.md#rollbacks_network_firmware_upgrades_staged_events_2) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events/rollbacks | Rollback a Staged Upgrade Event for a network
[**update_network_firmware_upgrades_staged_events_2**](StagedApi.md#update_network_firmware_upgrades_staged_events_2) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/events | Update the Staged Upgrade Event for a network
[**update_network_firmware_upgrades_staged_group_2**](StagedApi.md#update_network_firmware_upgrades_staged_group_2) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Update a Staged Upgrade Group for a network
[**update_network_firmware_upgrades_staged_stages_2**](StagedApi.md#update_network_firmware_upgrades_staged_stages_2) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/stages | Assign Staged Upgrade Group order in the sequence.


# **create_network_firmware_upgrades_staged_event_2**
> GetNetworkFirmwareUpgradesStagedEvents200Response create_network_firmware_upgrades_staged_event_2(network_id, create_network_firmware_upgrades_staged_event_request)

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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_staged_event_request = openapi_client.CreateNetworkFirmwareUpgradesStagedEventRequest() # CreateNetworkFirmwareUpgradesStagedEventRequest | 

    try:
        # Create a Staged Upgrade Event for a network
        api_response = api_instance.create_network_firmware_upgrades_staged_event_2(network_id, create_network_firmware_upgrades_staged_event_request)
        print("The response of StagedApi->create_network_firmware_upgrades_staged_event_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->create_network_firmware_upgrades_staged_event_2: %s\n" % e)
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

# **create_network_firmware_upgrades_staged_group_2**
> object create_network_firmware_upgrades_staged_group_2(network_id, create_network_firmware_upgrades_staged_group_request)

Create a Staged Upgrade Group for a network

Create a Staged Upgrade Group for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_staged_group_request import CreateNetworkFirmwareUpgradesStagedGroupRequest
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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_staged_group_request = openapi_client.CreateNetworkFirmwareUpgradesStagedGroupRequest() # CreateNetworkFirmwareUpgradesStagedGroupRequest | 

    try:
        # Create a Staged Upgrade Group for a network
        api_response = api_instance.create_network_firmware_upgrades_staged_group_2(network_id, create_network_firmware_upgrades_staged_group_request)
        print("The response of StagedApi->create_network_firmware_upgrades_staged_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->create_network_firmware_upgrades_staged_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_firmware_upgrades_staged_group_request** | [**CreateNetworkFirmwareUpgradesStagedGroupRequest**](CreateNetworkFirmwareUpgradesStagedGroupRequest.md)|  | 

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

# **defer_network_firmware_upgrades_staged_events_2**
> GetNetworkFirmwareUpgradesStagedEvents200Response defer_network_firmware_upgrades_staged_events_2(network_id)

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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Postpone by 1 week all pending staged upgrade stages for a network
        api_response = api_instance.defer_network_firmware_upgrades_staged_events_2(network_id)
        print("The response of StagedApi->defer_network_firmware_upgrades_staged_events_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->defer_network_firmware_upgrades_staged_events_2: %s\n" % e)
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

# **delete_network_firmware_upgrades_staged_group_2**
> delete_network_firmware_upgrades_staged_group_2(network_id, group_id)

Delete a Staged Upgrade Group

Delete a Staged Upgrade Group

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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 

    try:
        # Delete a Staged Upgrade Group
        api_instance.delete_network_firmware_upgrades_staged_group_2(network_id, group_id)
    except Exception as e:
        print("Exception when calling StagedApi->delete_network_firmware_upgrades_staged_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_id** | **str**|  | 

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

# **get_network_firmware_upgrades_staged_events_2**
> GetNetworkFirmwareUpgradesStagedEvents200Response get_network_firmware_upgrades_staged_events_2(network_id)

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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Get the Staged Upgrade Event from a network
        api_response = api_instance.get_network_firmware_upgrades_staged_events_2(network_id)
        print("The response of StagedApi->get_network_firmware_upgrades_staged_events_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->get_network_firmware_upgrades_staged_events_2: %s\n" % e)
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

# **get_network_firmware_upgrades_staged_group_2**
> GetNetworkFirmwareUpgradesStagedGroups200ResponseInner get_network_firmware_upgrades_staged_group_2(network_id, group_id)

Get a Staged Upgrade Group from a network

Get a Staged Upgrade Group from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_groups200_response_inner import GetNetworkFirmwareUpgradesStagedGroups200ResponseInner
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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 

    try:
        # Get a Staged Upgrade Group from a network
        api_response = api_instance.get_network_firmware_upgrades_staged_group_2(network_id, group_id)
        print("The response of StagedApi->get_network_firmware_upgrades_staged_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->get_network_firmware_upgrades_staged_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_id** | **str**|  | 

### Return type

[**GetNetworkFirmwareUpgradesStagedGroups200ResponseInner**](GetNetworkFirmwareUpgradesStagedGroups200ResponseInner.md)

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

# **get_network_firmware_upgrades_staged_groups_2**
> List[GetNetworkFirmwareUpgradesStagedGroups200ResponseInner] get_network_firmware_upgrades_staged_groups_2(network_id)

List of Staged Upgrade Groups in a network

List of Staged Upgrade Groups in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_groups200_response_inner import GetNetworkFirmwareUpgradesStagedGroups200ResponseInner
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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List of Staged Upgrade Groups in a network
        api_response = api_instance.get_network_firmware_upgrades_staged_groups_2(network_id)
        print("The response of StagedApi->get_network_firmware_upgrades_staged_groups_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->get_network_firmware_upgrades_staged_groups_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkFirmwareUpgradesStagedGroups200ResponseInner]**](GetNetworkFirmwareUpgradesStagedGroups200ResponseInner.md)

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

# **get_network_firmware_upgrades_staged_stages_2**
> List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner] get_network_firmware_upgrades_staged_stages_2(network_id)

Order of Staged Upgrade Groups in a network

Order of Staged Upgrade Groups in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_stages200_response_inner import GetNetworkFirmwareUpgradesStagedStages200ResponseInner
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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Order of Staged Upgrade Groups in a network
        api_response = api_instance.get_network_firmware_upgrades_staged_stages_2(network_id)
        print("The response of StagedApi->get_network_firmware_upgrades_staged_stages_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->get_network_firmware_upgrades_staged_stages_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner]**](GetNetworkFirmwareUpgradesStagedStages200ResponseInner.md)

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

# **rollbacks_network_firmware_upgrades_staged_events_2**
> GetNetworkFirmwareUpgradesStagedEvents200Response rollbacks_network_firmware_upgrades_staged_events_2(network_id, rollbacks_network_firmware_upgrades_staged_events_request)

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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 
    rollbacks_network_firmware_upgrades_staged_events_request = openapi_client.RollbacksNetworkFirmwareUpgradesStagedEventsRequest() # RollbacksNetworkFirmwareUpgradesStagedEventsRequest | 

    try:
        # Rollback a Staged Upgrade Event for a network
        api_response = api_instance.rollbacks_network_firmware_upgrades_staged_events_2(network_id, rollbacks_network_firmware_upgrades_staged_events_request)
        print("The response of StagedApi->rollbacks_network_firmware_upgrades_staged_events_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->rollbacks_network_firmware_upgrades_staged_events_2: %s\n" % e)
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

# **update_network_firmware_upgrades_staged_events_2**
> GetNetworkFirmwareUpgradesStagedEvents200Response update_network_firmware_upgrades_staged_events_2(network_id, update_network_firmware_upgrades_staged_events_request)

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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_staged_events_request = openapi_client.UpdateNetworkFirmwareUpgradesStagedEventsRequest() # UpdateNetworkFirmwareUpgradesStagedEventsRequest | 

    try:
        # Update the Staged Upgrade Event for a network
        api_response = api_instance.update_network_firmware_upgrades_staged_events_2(network_id, update_network_firmware_upgrades_staged_events_request)
        print("The response of StagedApi->update_network_firmware_upgrades_staged_events_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->update_network_firmware_upgrades_staged_events_2: %s\n" % e)
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

# **update_network_firmware_upgrades_staged_group_2**
> object update_network_firmware_upgrades_staged_group_2(network_id, group_id, create_network_firmware_upgrades_staged_group_request)

Update a Staged Upgrade Group for a network

Update a Staged Upgrade Group for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_staged_group_request import CreateNetworkFirmwareUpgradesStagedGroupRequest
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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 
    create_network_firmware_upgrades_staged_group_request = openapi_client.CreateNetworkFirmwareUpgradesStagedGroupRequest() # CreateNetworkFirmwareUpgradesStagedGroupRequest | 

    try:
        # Update a Staged Upgrade Group for a network
        api_response = api_instance.update_network_firmware_upgrades_staged_group_2(network_id, group_id, create_network_firmware_upgrades_staged_group_request)
        print("The response of StagedApi->update_network_firmware_upgrades_staged_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->update_network_firmware_upgrades_staged_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **group_id** | **str**|  | 
 **create_network_firmware_upgrades_staged_group_request** | [**CreateNetworkFirmwareUpgradesStagedGroupRequest**](CreateNetworkFirmwareUpgradesStagedGroupRequest.md)|  | 

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

# **update_network_firmware_upgrades_staged_stages_2**
> List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner] update_network_firmware_upgrades_staged_stages_2(network_id, update_network_firmware_upgrades_staged_stages_request=update_network_firmware_upgrades_staged_stages_request)

Assign Staged Upgrade Group order in the sequence.

Assign Staged Upgrade Group order in the sequence.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_stages200_response_inner import GetNetworkFirmwareUpgradesStagedStages200ResponseInner
from openapi_client.models.update_network_firmware_upgrades_staged_stages_request import UpdateNetworkFirmwareUpgradesStagedStagesRequest
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
    api_instance = openapi_client.StagedApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_staged_stages_request = openapi_client.UpdateNetworkFirmwareUpgradesStagedStagesRequest() # UpdateNetworkFirmwareUpgradesStagedStagesRequest |  (optional)

    try:
        # Assign Staged Upgrade Group order in the sequence.
        api_response = api_instance.update_network_firmware_upgrades_staged_stages_2(network_id, update_network_firmware_upgrades_staged_stages_request=update_network_firmware_upgrades_staged_stages_request)
        print("The response of StagedApi->update_network_firmware_upgrades_staged_stages_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagedApi->update_network_firmware_upgrades_staged_stages_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_firmware_upgrades_staged_stages_request** | [**UpdateNetworkFirmwareUpgradesStagedStagesRequest**](UpdateNetworkFirmwareUpgradesStagedStagesRequest.md)|  | [optional] 

### Return type

[**List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner]**](GetNetworkFirmwareUpgradesStagedStages200ResponseInner.md)

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

