# openapi_client.FirmwareUpgradesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_firmware_upgrades_rollback_1**](FirmwareUpgradesApi.md#create_network_firmware_upgrades_rollback_1) | **POST** /networks/{networkId}/firmwareUpgrades/rollbacks | Rollback a Firmware Upgrade For A Network
[**create_network_firmware_upgrades_staged_event_1**](FirmwareUpgradesApi.md#create_network_firmware_upgrades_staged_event_1) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events | Create a Staged Upgrade Event for a network
[**create_network_firmware_upgrades_staged_group_1**](FirmwareUpgradesApi.md#create_network_firmware_upgrades_staged_group_1) | **POST** /networks/{networkId}/firmwareUpgrades/staged/groups | Create a Staged Upgrade Group for a network
[**defer_network_firmware_upgrades_staged_events_1**](FirmwareUpgradesApi.md#defer_network_firmware_upgrades_staged_events_1) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events/defer | Postpone by 1 week all pending staged upgrade stages for a network
[**delete_network_firmware_upgrades_staged_group_1**](FirmwareUpgradesApi.md#delete_network_firmware_upgrades_staged_group_1) | **DELETE** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Delete a Staged Upgrade Group
[**get_network_firmware_upgrades_1**](FirmwareUpgradesApi.md#get_network_firmware_upgrades_1) | **GET** /networks/{networkId}/firmwareUpgrades | Get firmware upgrade information for a network
[**get_network_firmware_upgrades_staged_events_1**](FirmwareUpgradesApi.md#get_network_firmware_upgrades_staged_events_1) | **GET** /networks/{networkId}/firmwareUpgrades/staged/events | Get the Staged Upgrade Event from a network
[**get_network_firmware_upgrades_staged_group_1**](FirmwareUpgradesApi.md#get_network_firmware_upgrades_staged_group_1) | **GET** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Get a Staged Upgrade Group from a network
[**get_network_firmware_upgrades_staged_groups_1**](FirmwareUpgradesApi.md#get_network_firmware_upgrades_staged_groups_1) | **GET** /networks/{networkId}/firmwareUpgrades/staged/groups | List of Staged Upgrade Groups in a network
[**get_network_firmware_upgrades_staged_stages_1**](FirmwareUpgradesApi.md#get_network_firmware_upgrades_staged_stages_1) | **GET** /networks/{networkId}/firmwareUpgrades/staged/stages | Order of Staged Upgrade Groups in a network
[**rollbacks_network_firmware_upgrades_staged_events_1**](FirmwareUpgradesApi.md#rollbacks_network_firmware_upgrades_staged_events_1) | **POST** /networks/{networkId}/firmwareUpgrades/staged/events/rollbacks | Rollback a Staged Upgrade Event for a network
[**update_network_firmware_upgrades_1**](FirmwareUpgradesApi.md#update_network_firmware_upgrades_1) | **PUT** /networks/{networkId}/firmwareUpgrades | Update firmware upgrade information for a network
[**update_network_firmware_upgrades_staged_events_1**](FirmwareUpgradesApi.md#update_network_firmware_upgrades_staged_events_1) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/events | Update the Staged Upgrade Event for a network
[**update_network_firmware_upgrades_staged_group_1**](FirmwareUpgradesApi.md#update_network_firmware_upgrades_staged_group_1) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Update a Staged Upgrade Group for a network
[**update_network_firmware_upgrades_staged_stages_1**](FirmwareUpgradesApi.md#update_network_firmware_upgrades_staged_stages_1) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/stages | Assign Staged Upgrade Group order in the sequence.


# **create_network_firmware_upgrades_rollback_1**
> CreateNetworkFirmwareUpgradesRollback200Response create_network_firmware_upgrades_rollback_1(network_id, create_network_firmware_upgrades_rollback_request)

Rollback a Firmware Upgrade For A Network

Rollback a Firmware Upgrade For A Network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_rollback200_response import CreateNetworkFirmwareUpgradesRollback200Response
from openapi_client.models.create_network_firmware_upgrades_rollback_request import CreateNetworkFirmwareUpgradesRollbackRequest
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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_rollback_request = openapi_client.CreateNetworkFirmwareUpgradesRollbackRequest() # CreateNetworkFirmwareUpgradesRollbackRequest | 

    try:
        # Rollback a Firmware Upgrade For A Network
        api_response = api_instance.create_network_firmware_upgrades_rollback_1(network_id, create_network_firmware_upgrades_rollback_request)
        print("The response of FirmwareUpgradesApi->create_network_firmware_upgrades_rollback_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->create_network_firmware_upgrades_rollback_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_firmware_upgrades_rollback_request** | [**CreateNetworkFirmwareUpgradesRollbackRequest**](CreateNetworkFirmwareUpgradesRollbackRequest.md)|  | 

### Return type

[**CreateNetworkFirmwareUpgradesRollback200Response**](CreateNetworkFirmwareUpgradesRollback200Response.md)

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

# **create_network_firmware_upgrades_staged_event_1**
> GetNetworkFirmwareUpgradesStagedEvents200Response create_network_firmware_upgrades_staged_event_1(network_id, create_network_firmware_upgrades_staged_event_request)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_staged_event_request = openapi_client.CreateNetworkFirmwareUpgradesStagedEventRequest() # CreateNetworkFirmwareUpgradesStagedEventRequest | 

    try:
        # Create a Staged Upgrade Event for a network
        api_response = api_instance.create_network_firmware_upgrades_staged_event_1(network_id, create_network_firmware_upgrades_staged_event_request)
        print("The response of FirmwareUpgradesApi->create_network_firmware_upgrades_staged_event_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->create_network_firmware_upgrades_staged_event_1: %s\n" % e)
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

# **create_network_firmware_upgrades_staged_group_1**
> object create_network_firmware_upgrades_staged_group_1(network_id, create_network_firmware_upgrades_staged_group_request)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_staged_group_request = openapi_client.CreateNetworkFirmwareUpgradesStagedGroupRequest() # CreateNetworkFirmwareUpgradesStagedGroupRequest | 

    try:
        # Create a Staged Upgrade Group for a network
        api_response = api_instance.create_network_firmware_upgrades_staged_group_1(network_id, create_network_firmware_upgrades_staged_group_request)
        print("The response of FirmwareUpgradesApi->create_network_firmware_upgrades_staged_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->create_network_firmware_upgrades_staged_group_1: %s\n" % e)
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

# **defer_network_firmware_upgrades_staged_events_1**
> GetNetworkFirmwareUpgradesStagedEvents200Response defer_network_firmware_upgrades_staged_events_1(network_id)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Postpone by 1 week all pending staged upgrade stages for a network
        api_response = api_instance.defer_network_firmware_upgrades_staged_events_1(network_id)
        print("The response of FirmwareUpgradesApi->defer_network_firmware_upgrades_staged_events_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->defer_network_firmware_upgrades_staged_events_1: %s\n" % e)
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

# **delete_network_firmware_upgrades_staged_group_1**
> delete_network_firmware_upgrades_staged_group_1(network_id, group_id)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 

    try:
        # Delete a Staged Upgrade Group
        api_instance.delete_network_firmware_upgrades_staged_group_1(network_id, group_id)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->delete_network_firmware_upgrades_staged_group_1: %s\n" % e)
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

# **get_network_firmware_upgrades_1**
> GetNetworkFirmwareUpgrades200Response get_network_firmware_upgrades_1(network_id)

Get firmware upgrade information for a network

Get firmware upgrade information for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades200_response import GetNetworkFirmwareUpgrades200Response
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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Get firmware upgrade information for a network
        api_response = api_instance.get_network_firmware_upgrades_1(network_id)
        print("The response of FirmwareUpgradesApi->get_network_firmware_upgrades_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->get_network_firmware_upgrades_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**GetNetworkFirmwareUpgrades200Response**](GetNetworkFirmwareUpgrades200Response.md)

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

# **get_network_firmware_upgrades_staged_events_1**
> GetNetworkFirmwareUpgradesStagedEvents200Response get_network_firmware_upgrades_staged_events_1(network_id)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Get the Staged Upgrade Event from a network
        api_response = api_instance.get_network_firmware_upgrades_staged_events_1(network_id)
        print("The response of FirmwareUpgradesApi->get_network_firmware_upgrades_staged_events_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->get_network_firmware_upgrades_staged_events_1: %s\n" % e)
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

# **get_network_firmware_upgrades_staged_group_1**
> GetNetworkFirmwareUpgradesStagedGroups200ResponseInner get_network_firmware_upgrades_staged_group_1(network_id, group_id)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 

    try:
        # Get a Staged Upgrade Group from a network
        api_response = api_instance.get_network_firmware_upgrades_staged_group_1(network_id, group_id)
        print("The response of FirmwareUpgradesApi->get_network_firmware_upgrades_staged_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->get_network_firmware_upgrades_staged_group_1: %s\n" % e)
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

# **get_network_firmware_upgrades_staged_groups_1**
> List[GetNetworkFirmwareUpgradesStagedGroups200ResponseInner] get_network_firmware_upgrades_staged_groups_1(network_id)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List of Staged Upgrade Groups in a network
        api_response = api_instance.get_network_firmware_upgrades_staged_groups_1(network_id)
        print("The response of FirmwareUpgradesApi->get_network_firmware_upgrades_staged_groups_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->get_network_firmware_upgrades_staged_groups_1: %s\n" % e)
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

# **get_network_firmware_upgrades_staged_stages_1**
> List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner] get_network_firmware_upgrades_staged_stages_1(network_id)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Order of Staged Upgrade Groups in a network
        api_response = api_instance.get_network_firmware_upgrades_staged_stages_1(network_id)
        print("The response of FirmwareUpgradesApi->get_network_firmware_upgrades_staged_stages_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->get_network_firmware_upgrades_staged_stages_1: %s\n" % e)
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

# **rollbacks_network_firmware_upgrades_staged_events_1**
> GetNetworkFirmwareUpgradesStagedEvents200Response rollbacks_network_firmware_upgrades_staged_events_1(network_id, rollbacks_network_firmware_upgrades_staged_events_request)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    rollbacks_network_firmware_upgrades_staged_events_request = openapi_client.RollbacksNetworkFirmwareUpgradesStagedEventsRequest() # RollbacksNetworkFirmwareUpgradesStagedEventsRequest | 

    try:
        # Rollback a Staged Upgrade Event for a network
        api_response = api_instance.rollbacks_network_firmware_upgrades_staged_events_1(network_id, rollbacks_network_firmware_upgrades_staged_events_request)
        print("The response of FirmwareUpgradesApi->rollbacks_network_firmware_upgrades_staged_events_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->rollbacks_network_firmware_upgrades_staged_events_1: %s\n" % e)
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

# **update_network_firmware_upgrades_1**
> GetNetworkFirmwareUpgrades200Response update_network_firmware_upgrades_1(network_id, update_network_firmware_upgrades_request=update_network_firmware_upgrades_request)

Update firmware upgrade information for a network

Update firmware upgrade information for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades200_response import GetNetworkFirmwareUpgrades200Response
from openapi_client.models.update_network_firmware_upgrades_request import UpdateNetworkFirmwareUpgradesRequest
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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_request = openapi_client.UpdateNetworkFirmwareUpgradesRequest() # UpdateNetworkFirmwareUpgradesRequest |  (optional)

    try:
        # Update firmware upgrade information for a network
        api_response = api_instance.update_network_firmware_upgrades_1(network_id, update_network_firmware_upgrades_request=update_network_firmware_upgrades_request)
        print("The response of FirmwareUpgradesApi->update_network_firmware_upgrades_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->update_network_firmware_upgrades_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_firmware_upgrades_request** | [**UpdateNetworkFirmwareUpgradesRequest**](UpdateNetworkFirmwareUpgradesRequest.md)|  | [optional] 

### Return type

[**GetNetworkFirmwareUpgrades200Response**](GetNetworkFirmwareUpgrades200Response.md)

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

# **update_network_firmware_upgrades_staged_events_1**
> GetNetworkFirmwareUpgradesStagedEvents200Response update_network_firmware_upgrades_staged_events_1(network_id, update_network_firmware_upgrades_staged_events_request)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_staged_events_request = openapi_client.UpdateNetworkFirmwareUpgradesStagedEventsRequest() # UpdateNetworkFirmwareUpgradesStagedEventsRequest | 

    try:
        # Update the Staged Upgrade Event for a network
        api_response = api_instance.update_network_firmware_upgrades_staged_events_1(network_id, update_network_firmware_upgrades_staged_events_request)
        print("The response of FirmwareUpgradesApi->update_network_firmware_upgrades_staged_events_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->update_network_firmware_upgrades_staged_events_1: %s\n" % e)
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

# **update_network_firmware_upgrades_staged_group_1**
> object update_network_firmware_upgrades_staged_group_1(network_id, group_id, create_network_firmware_upgrades_staged_group_request)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 
    create_network_firmware_upgrades_staged_group_request = openapi_client.CreateNetworkFirmwareUpgradesStagedGroupRequest() # CreateNetworkFirmwareUpgradesStagedGroupRequest | 

    try:
        # Update a Staged Upgrade Group for a network
        api_response = api_instance.update_network_firmware_upgrades_staged_group_1(network_id, group_id, create_network_firmware_upgrades_staged_group_request)
        print("The response of FirmwareUpgradesApi->update_network_firmware_upgrades_staged_group_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->update_network_firmware_upgrades_staged_group_1: %s\n" % e)
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

# **update_network_firmware_upgrades_staged_stages_1**
> List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner] update_network_firmware_upgrades_staged_stages_1(network_id, update_network_firmware_upgrades_staged_stages_request=update_network_firmware_upgrades_staged_stages_request)

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
    api_instance = openapi_client.FirmwareUpgradesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_staged_stages_request = openapi_client.UpdateNetworkFirmwareUpgradesStagedStagesRequest() # UpdateNetworkFirmwareUpgradesStagedStagesRequest |  (optional)

    try:
        # Assign Staged Upgrade Group order in the sequence.
        api_response = api_instance.update_network_firmware_upgrades_staged_stages_1(network_id, update_network_firmware_upgrades_staged_stages_request=update_network_firmware_upgrades_staged_stages_request)
        print("The response of FirmwareUpgradesApi->update_network_firmware_upgrades_staged_stages_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FirmwareUpgradesApi->update_network_firmware_upgrades_staged_stages_1: %s\n" % e)
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

