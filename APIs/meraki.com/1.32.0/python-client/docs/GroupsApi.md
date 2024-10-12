# openapi_client.GroupsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_firmware_upgrades_staged_group_3**](GroupsApi.md#create_network_firmware_upgrades_staged_group_3) | **POST** /networks/{networkId}/firmwareUpgrades/staged/groups | Create a Staged Upgrade Group for a network
[**create_organization_adaptive_policy_group_2**](GroupsApi.md#create_organization_adaptive_policy_group_2) | **POST** /organizations/{organizationId}/adaptivePolicy/groups | Creates a new adaptive policy group
[**create_organization_policy_objects_group_2**](GroupsApi.md#create_organization_policy_objects_group_2) | **POST** /organizations/{organizationId}/policyObjects/groups | Creates a new Policy Object Group.
[**delete_network_firmware_upgrades_staged_group_3**](GroupsApi.md#delete_network_firmware_upgrades_staged_group_3) | **DELETE** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Delete a Staged Upgrade Group
[**delete_organization_adaptive_policy_group_2**](GroupsApi.md#delete_organization_adaptive_policy_group_2) | **DELETE** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Deletes the specified adaptive policy group and any associated policies and references
[**delete_organization_policy_objects_group_2**](GroupsApi.md#delete_organization_policy_objects_group_2) | **DELETE** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Deletes a Policy Object Group.
[**get_network_firmware_upgrades_staged_group_3**](GroupsApi.md#get_network_firmware_upgrades_staged_group_3) | **GET** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Get a Staged Upgrade Group from a network
[**get_network_firmware_upgrades_staged_groups_3**](GroupsApi.md#get_network_firmware_upgrades_staged_groups_3) | **GET** /networks/{networkId}/firmwareUpgrades/staged/groups | List of Staged Upgrade Groups in a network
[**get_organization_adaptive_policy_group_2**](GroupsApi.md#get_organization_adaptive_policy_group_2) | **GET** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Returns an adaptive policy group
[**get_organization_adaptive_policy_groups_2**](GroupsApi.md#get_organization_adaptive_policy_groups_2) | **GET** /organizations/{organizationId}/adaptivePolicy/groups | List adaptive policy groups in a organization
[**get_organization_policy_objects_group_2**](GroupsApi.md#get_organization_policy_objects_group_2) | **GET** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Shows details of a Policy Object Group.
[**get_organization_policy_objects_groups_2**](GroupsApi.md#get_organization_policy_objects_groups_2) | **GET** /organizations/{organizationId}/policyObjects/groups | Lists Policy Object Groups belonging to the organization.
[**update_network_firmware_upgrades_staged_group_3**](GroupsApi.md#update_network_firmware_upgrades_staged_group_3) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/groups/{groupId} | Update a Staged Upgrade Group for a network
[**update_organization_adaptive_policy_group_2**](GroupsApi.md#update_organization_adaptive_policy_group_2) | **PUT** /organizations/{organizationId}/adaptivePolicy/groups/{id} | Updates an adaptive policy group
[**update_organization_policy_objects_group_2**](GroupsApi.md#update_organization_policy_objects_group_2) | **PUT** /organizations/{organizationId}/policyObjects/groups/{policyObjectGroupId} | Updates a Policy Object Group.


# **create_network_firmware_upgrades_staged_group_3**
> object create_network_firmware_upgrades_staged_group_3(network_id, create_network_firmware_upgrades_staged_group_request)

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
    api_instance = openapi_client.GroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_staged_group_request = openapi_client.CreateNetworkFirmwareUpgradesStagedGroupRequest() # CreateNetworkFirmwareUpgradesStagedGroupRequest | 

    try:
        # Create a Staged Upgrade Group for a network
        api_response = api_instance.create_network_firmware_upgrades_staged_group_3(network_id, create_network_firmware_upgrades_staged_group_request)
        print("The response of GroupsApi->create_network_firmware_upgrades_staged_group_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->create_network_firmware_upgrades_staged_group_3: %s\n" % e)
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

# **create_organization_adaptive_policy_group_2**
> object create_organization_adaptive_policy_group_2(organization_id, create_organization_adaptive_policy_group_request)

Creates a new adaptive policy group

Creates a new adaptive policy group

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_adaptive_policy_group_request import CreateOrganizationAdaptivePolicyGroupRequest
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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_adaptive_policy_group_request = openapi_client.CreateOrganizationAdaptivePolicyGroupRequest() # CreateOrganizationAdaptivePolicyGroupRequest | 

    try:
        # Creates a new adaptive policy group
        api_response = api_instance.create_organization_adaptive_policy_group_2(organization_id, create_organization_adaptive_policy_group_request)
        print("The response of GroupsApi->create_organization_adaptive_policy_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->create_organization_adaptive_policy_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_adaptive_policy_group_request** | [**CreateOrganizationAdaptivePolicyGroupRequest**](CreateOrganizationAdaptivePolicyGroupRequest.md)|  | 

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

# **create_organization_policy_objects_group_2**
> object create_organization_policy_objects_group_2(organization_id, create_organization_policy_objects_group_request)

Creates a new Policy Object Group.

Creates a new Policy Object Group.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_organization_policy_objects_group_request import CreateOrganizationPolicyObjectsGroupRequest
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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    create_organization_policy_objects_group_request = openapi_client.CreateOrganizationPolicyObjectsGroupRequest() # CreateOrganizationPolicyObjectsGroupRequest | 

    try:
        # Creates a new Policy Object Group.
        api_response = api_instance.create_organization_policy_objects_group_2(organization_id, create_organization_policy_objects_group_request)
        print("The response of GroupsApi->create_organization_policy_objects_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->create_organization_policy_objects_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **create_organization_policy_objects_group_request** | [**CreateOrganizationPolicyObjectsGroupRequest**](CreateOrganizationPolicyObjectsGroupRequest.md)|  | 

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

# **delete_network_firmware_upgrades_staged_group_3**
> delete_network_firmware_upgrades_staged_group_3(network_id, group_id)

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
    api_instance = openapi_client.GroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 

    try:
        # Delete a Staged Upgrade Group
        api_instance.delete_network_firmware_upgrades_staged_group_3(network_id, group_id)
    except Exception as e:
        print("Exception when calling GroupsApi->delete_network_firmware_upgrades_staged_group_3: %s\n" % e)
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

# **delete_organization_adaptive_policy_group_2**
> delete_organization_adaptive_policy_group_2(organization_id, id)

Deletes the specified adaptive policy group and any associated policies and references

Deletes the specified adaptive policy group and any associated policies and references

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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Deletes the specified adaptive policy group and any associated policies and references
        api_instance.delete_organization_adaptive_policy_group_2(organization_id, id)
    except Exception as e:
        print("Exception when calling GroupsApi->delete_organization_adaptive_policy_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

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

# **delete_organization_policy_objects_group_2**
> delete_organization_policy_objects_group_2(organization_id, policy_object_group_id)

Deletes a Policy Object Group.

Deletes a Policy Object Group.

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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 

    try:
        # Deletes a Policy Object Group.
        api_instance.delete_organization_policy_objects_group_2(organization_id, policy_object_group_id)
    except Exception as e:
        print("Exception when calling GroupsApi->delete_organization_policy_objects_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 

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

# **get_network_firmware_upgrades_staged_group_3**
> GetNetworkFirmwareUpgradesStagedGroups200ResponseInner get_network_firmware_upgrades_staged_group_3(network_id, group_id)

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
    api_instance = openapi_client.GroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 

    try:
        # Get a Staged Upgrade Group from a network
        api_response = api_instance.get_network_firmware_upgrades_staged_group_3(network_id, group_id)
        print("The response of GroupsApi->get_network_firmware_upgrades_staged_group_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->get_network_firmware_upgrades_staged_group_3: %s\n" % e)
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

# **get_network_firmware_upgrades_staged_groups_3**
> List[GetNetworkFirmwareUpgradesStagedGroups200ResponseInner] get_network_firmware_upgrades_staged_groups_3(network_id)

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
    api_instance = openapi_client.GroupsApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List of Staged Upgrade Groups in a network
        api_response = api_instance.get_network_firmware_upgrades_staged_groups_3(network_id)
        print("The response of GroupsApi->get_network_firmware_upgrades_staged_groups_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->get_network_firmware_upgrades_staged_groups_3: %s\n" % e)
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

# **get_organization_adaptive_policy_group_2**
> object get_organization_adaptive_policy_group_2(organization_id, id)

Returns an adaptive policy group

Returns an adaptive policy group

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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 

    try:
        # Returns an adaptive policy group
        api_response = api_instance.get_organization_adaptive_policy_group_2(organization_id, id)
        print("The response of GroupsApi->get_organization_adaptive_policy_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->get_organization_adaptive_policy_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_adaptive_policy_groups_2**
> List[object] get_organization_adaptive_policy_groups_2(organization_id)

List adaptive policy groups in a organization

List adaptive policy groups in a organization

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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 

    try:
        # List adaptive policy groups in a organization
        api_response = api_instance.get_organization_adaptive_policy_groups_2(organization_id)
        print("The response of GroupsApi->get_organization_adaptive_policy_groups_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->get_organization_adaptive_policy_groups_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 

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

# **get_organization_policy_objects_group_2**
> object get_organization_policy_objects_group_2(organization_id, policy_object_group_id)

Shows details of a Policy Object Group.

Shows details of a Policy Object Group.

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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 

    try:
        # Shows details of a Policy Object Group.
        api_response = api_instance.get_organization_policy_objects_group_2(organization_id, policy_object_group_id)
        print("The response of GroupsApi->get_organization_policy_objects_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->get_organization_policy_objects_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 

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
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_policy_objects_groups_2**
> List[object] get_organization_policy_objects_groups_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)

Lists Policy Object Groups belonging to the organization.

Lists Policy Object Groups belonging to the organization.

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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 10 - 1000. Default is 1000. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)

    try:
        # Lists Policy Object Groups belonging to the organization.
        api_response = api_instance.get_organization_policy_objects_groups_2(organization_id, per_page=per_page, starting_after=starting_after, ending_before=ending_before)
        print("The response of GroupsApi->get_organization_policy_objects_groups_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->get_organization_policy_objects_groups_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 10 - 1000. Default is 1000. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 

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

# **update_network_firmware_upgrades_staged_group_3**
> object update_network_firmware_upgrades_staged_group_3(network_id, group_id, create_network_firmware_upgrades_staged_group_request)

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
    api_instance = openapi_client.GroupsApi(api_client)
    network_id = 'network_id_example' # str | 
    group_id = 'group_id_example' # str | 
    create_network_firmware_upgrades_staged_group_request = openapi_client.CreateNetworkFirmwareUpgradesStagedGroupRequest() # CreateNetworkFirmwareUpgradesStagedGroupRequest | 

    try:
        # Update a Staged Upgrade Group for a network
        api_response = api_instance.update_network_firmware_upgrades_staged_group_3(network_id, group_id, create_network_firmware_upgrades_staged_group_request)
        print("The response of GroupsApi->update_network_firmware_upgrades_staged_group_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->update_network_firmware_upgrades_staged_group_3: %s\n" % e)
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

# **update_organization_adaptive_policy_group_2**
> object update_organization_adaptive_policy_group_2(organization_id, id, update_organization_adaptive_policy_group_request=update_organization_adaptive_policy_group_request)

Updates an adaptive policy group

Updates an adaptive policy group. If updating \"Infrastructure\", only the SGT is allowed. Cannot update \"Unknown\".

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_adaptive_policy_group_request import UpdateOrganizationAdaptivePolicyGroupRequest
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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    id = 'id_example' # str | 
    update_organization_adaptive_policy_group_request = openapi_client.UpdateOrganizationAdaptivePolicyGroupRequest() # UpdateOrganizationAdaptivePolicyGroupRequest |  (optional)

    try:
        # Updates an adaptive policy group
        api_response = api_instance.update_organization_adaptive_policy_group_2(organization_id, id, update_organization_adaptive_policy_group_request=update_organization_adaptive_policy_group_request)
        print("The response of GroupsApi->update_organization_adaptive_policy_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->update_organization_adaptive_policy_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **id** | **str**|  | 
 **update_organization_adaptive_policy_group_request** | [**UpdateOrganizationAdaptivePolicyGroupRequest**](UpdateOrganizationAdaptivePolicyGroupRequest.md)|  | [optional] 

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

# **update_organization_policy_objects_group_2**
> object update_organization_policy_objects_group_2(organization_id, policy_object_group_id, update_organization_policy_objects_group_request=update_organization_policy_objects_group_request)

Updates a Policy Object Group.

Updates a Policy Object Group.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_organization_policy_objects_group_request import UpdateOrganizationPolicyObjectsGroupRequest
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
    api_instance = openapi_client.GroupsApi(api_client)
    organization_id = 'organization_id_example' # str | 
    policy_object_group_id = 'policy_object_group_id_example' # str | 
    update_organization_policy_objects_group_request = openapi_client.UpdateOrganizationPolicyObjectsGroupRequest() # UpdateOrganizationPolicyObjectsGroupRequest |  (optional)

    try:
        # Updates a Policy Object Group.
        api_response = api_instance.update_organization_policy_objects_group_2(organization_id, policy_object_group_id, update_organization_policy_objects_group_request=update_organization_policy_objects_group_request)
        print("The response of GroupsApi->update_organization_policy_objects_group_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroupsApi->update_organization_policy_objects_group_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **policy_object_group_id** | **str**|  | 
 **update_organization_policy_objects_group_request** | [**UpdateOrganizationPolicyObjectsGroupRequest**](UpdateOrganizationPolicyObjectsGroupRequest.md)|  | [optional] 

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

