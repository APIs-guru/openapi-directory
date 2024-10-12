# openapi_client.DeviceSecurityGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_security_groups_create_or_update**](DeviceSecurityGroupsApi.md#device_security_groups_create_or_update) | **PUT** /{resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName} | 
[**device_security_groups_delete**](DeviceSecurityGroupsApi.md#device_security_groups_delete) | **DELETE** /{resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName} | 
[**device_security_groups_get**](DeviceSecurityGroupsApi.md#device_security_groups_get) | **GET** /{resourceId}/providers/Microsoft.Security/deviceSecurityGroups/{deviceSecurityGroupName} | 
[**device_security_groups_list**](DeviceSecurityGroupsApi.md#device_security_groups_list) | **GET** /{resourceId}/providers/Microsoft.Security/deviceSecurityGroups | 


# **device_security_groups_create_or_update**
> DeviceSecurityGroup device_security_groups_create_or_update(api_version, resource_id, device_security_group_name, device_security_group)



Creates or updates the device security group on a specified IoT hub resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_security_group import DeviceSecurityGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceSecurityGroupsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    device_security_group_name = 'device_security_group_name_example' # str | The name of the security group. Please notice that the name is case insensitive.
    device_security_group = openapi_client.DeviceSecurityGroup() # DeviceSecurityGroup | Security group object.

    try:
        api_response = api_instance.device_security_groups_create_or_update(api_version, resource_id, device_security_group_name, device_security_group)
        print("The response of DeviceSecurityGroupsApi->device_security_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSecurityGroupsApi->device_security_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **device_security_group_name** | **str**| The name of the security group. Please notice that the name is case insensitive. | 
 **device_security_group** | [**DeviceSecurityGroup**](DeviceSecurityGroup.md)| Security group object. | 

### Return type

[**DeviceSecurityGroup**](DeviceSecurityGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Security group was updated |  -  |
**201** | Security group was created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_security_groups_delete**
> device_security_groups_delete(api_version, resource_id, device_security_group_name)



Deletes the security group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceSecurityGroupsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    device_security_group_name = 'device_security_group_name_example' # str | The name of the security group. Please notice that the name is case insensitive.

    try:
        api_instance.device_security_groups_delete(api_version, resource_id, device_security_group_name)
    except Exception as e:
        print("Exception when calling DeviceSecurityGroupsApi->device_security_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **device_security_group_name** | **str**| The name of the security group. Please notice that the name is case insensitive. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device security group has been deleted. |  -  |
**204** | Device security group does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_security_groups_get**
> DeviceSecurityGroup device_security_groups_get(api_version, resource_id, device_security_group_name)



Gets the device security group for the specified IoT hub resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_security_group import DeviceSecurityGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceSecurityGroupsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    device_security_group_name = 'device_security_group_name_example' # str | The name of the security group. Please notice that the name is case insensitive.

    try:
        api_response = api_instance.device_security_groups_get(api_version, resource_id, device_security_group_name)
        print("The response of DeviceSecurityGroupsApi->device_security_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSecurityGroupsApi->device_security_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **device_security_group_name** | **str**| The name of the security group. Please notice that the name is case insensitive. | 

### Return type

[**DeviceSecurityGroup**](DeviceSecurityGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get security group. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_security_groups_list**
> DeviceSecurityGroupList device_security_groups_list(api_version, resource_id)



Gets the list of device security groups for the specified IoT hub resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_security_group_list import DeviceSecurityGroupList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceSecurityGroupsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.

    try:
        api_response = api_instance.device_security_groups_list(api_version, resource_id)
        print("The response of DeviceSecurityGroupsApi->device_security_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSecurityGroupsApi->device_security_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 

### Return type

[**DeviceSecurityGroupList**](DeviceSecurityGroupList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

