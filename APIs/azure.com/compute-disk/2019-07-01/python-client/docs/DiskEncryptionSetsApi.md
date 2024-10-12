# openapi_client.DiskEncryptionSetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disk_encryption_sets_create_or_update**](DiskEncryptionSetsApi.md#disk_encryption_sets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName} | 
[**disk_encryption_sets_delete**](DiskEncryptionSetsApi.md#disk_encryption_sets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName} | 
[**disk_encryption_sets_get**](DiskEncryptionSetsApi.md#disk_encryption_sets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName} | 
[**disk_encryption_sets_list**](DiskEncryptionSetsApi.md#disk_encryption_sets_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/diskEncryptionSets | 
[**disk_encryption_sets_list_by_resource_group**](DiskEncryptionSetsApi.md#disk_encryption_sets_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets | 
[**disk_encryption_sets_update**](DiskEncryptionSetsApi.md#disk_encryption_sets_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/diskEncryptionSets/{diskEncryptionSetName} | 


# **disk_encryption_sets_create_or_update**
> DiskEncryptionSet disk_encryption_sets_create_or_update(subscription_id, resource_group_name, disk_encryption_set_name, api_version, disk_encryption_set)



Creates or updates a disk encryption set

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_encryption_set import DiskEncryptionSet
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
    api_instance = openapi_client.DiskEncryptionSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_encryption_set_name = 'disk_encryption_set_name_example' # str | The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.
    disk_encryption_set = openapi_client.DiskEncryptionSet() # DiskEncryptionSet | disk encryption set object supplied in the body of the Put disk encryption set operation.

    try:
        api_response = api_instance.disk_encryption_sets_create_or_update(subscription_id, resource_group_name, disk_encryption_set_name, api_version, disk_encryption_set)
        print("The response of DiskEncryptionSetsApi->disk_encryption_sets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskEncryptionSetsApi->disk_encryption_sets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_encryption_set_name** | **str**| The name of the disk encryption set that is being created. The name can&#39;t be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 
 **disk_encryption_set** | [**DiskEncryptionSet**](DiskEncryptionSet.md)| disk encryption set object supplied in the body of the Put disk encryption set operation. | 

### Return type

[**DiskEncryptionSet**](DiskEncryptionSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disk_encryption_sets_delete**
> disk_encryption_sets_delete(subscription_id, resource_group_name, disk_encryption_set_name, api_version)



Deletes a disk encryption set.

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
    api_instance = openapi_client.DiskEncryptionSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_encryption_set_name = 'disk_encryption_set_name_example' # str | The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_instance.disk_encryption_sets_delete(subscription_id, resource_group_name, disk_encryption_set_name, api_version)
    except Exception as e:
        print("Exception when calling DiskEncryptionSetsApi->disk_encryption_sets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_encryption_set_name** | **str**| The name of the disk encryption set that is being created. The name can&#39;t be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | If the disk encryption set is already deleted, this is an expected error code. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disk_encryption_sets_get**
> DiskEncryptionSet disk_encryption_sets_get(subscription_id, resource_group_name, disk_encryption_set_name, api_version)



Gets information about a disk encryption set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_encryption_set import DiskEncryptionSet
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
    api_instance = openapi_client.DiskEncryptionSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_encryption_set_name = 'disk_encryption_set_name_example' # str | The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.disk_encryption_sets_get(subscription_id, resource_group_name, disk_encryption_set_name, api_version)
        print("The response of DiskEncryptionSetsApi->disk_encryption_sets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskEncryptionSetsApi->disk_encryption_sets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_encryption_set_name** | **str**| The name of the disk encryption set that is being created. The name can&#39;t be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DiskEncryptionSet**](DiskEncryptionSet.md)

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

# **disk_encryption_sets_list**
> DiskEncryptionSetList disk_encryption_sets_list(subscription_id, api_version)



Lists all the disk encryption sets under a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_encryption_set_list import DiskEncryptionSetList
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
    api_instance = openapi_client.DiskEncryptionSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.disk_encryption_sets_list(subscription_id, api_version)
        print("The response of DiskEncryptionSetsApi->disk_encryption_sets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskEncryptionSetsApi->disk_encryption_sets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DiskEncryptionSetList**](DiskEncryptionSetList.md)

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

# **disk_encryption_sets_list_by_resource_group**
> DiskEncryptionSetList disk_encryption_sets_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the disk encryption sets under a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_encryption_set_list import DiskEncryptionSetList
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
    api_instance = openapi_client.DiskEncryptionSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.disk_encryption_sets_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DiskEncryptionSetsApi->disk_encryption_sets_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskEncryptionSetsApi->disk_encryption_sets_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DiskEncryptionSetList**](DiskEncryptionSetList.md)

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

# **disk_encryption_sets_update**
> DiskEncryptionSet disk_encryption_sets_update(subscription_id, resource_group_name, disk_encryption_set_name, api_version, disk_encryption_set)



Updates (patches) a disk encryption set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.disk_encryption_set import DiskEncryptionSet
from openapi_client.models.disk_encryption_set_update import DiskEncryptionSetUpdate
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
    api_instance = openapi_client.DiskEncryptionSetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_encryption_set_name = 'disk_encryption_set_name_example' # str | The name of the disk encryption set that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.
    disk_encryption_set = openapi_client.DiskEncryptionSetUpdate() # DiskEncryptionSetUpdate | disk encryption set object supplied in the body of the Patch disk encryption set operation.

    try:
        api_response = api_instance.disk_encryption_sets_update(subscription_id, resource_group_name, disk_encryption_set_name, api_version, disk_encryption_set)
        print("The response of DiskEncryptionSetsApi->disk_encryption_sets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DiskEncryptionSetsApi->disk_encryption_sets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_encryption_set_name** | **str**| The name of the disk encryption set that is being created. The name can&#39;t be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 
 **disk_encryption_set** | [**DiskEncryptionSetUpdate**](DiskEncryptionSetUpdate.md)| disk encryption set object supplied in the body of the Patch disk encryption set operation. | 

### Return type

[**DiskEncryptionSet**](DiskEncryptionSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

