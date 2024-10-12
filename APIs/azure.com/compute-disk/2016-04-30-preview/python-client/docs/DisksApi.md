# openapi_client.DisksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disks_create_or_update**](DisksApi.md#disks_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName} | 
[**disks_delete**](DisksApi.md#disks_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName} | 
[**disks_get**](DisksApi.md#disks_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName} | 
[**disks_grant_access**](DisksApi.md#disks_grant_access) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/beginGetAccess | 
[**disks_list**](DisksApi.md#disks_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/disks | 
[**disks_list_by_resource_group**](DisksApi.md#disks_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks | 
[**disks_revoke_access**](DisksApi.md#disks_revoke_access) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName}/endGetAccess | 
[**disks_update**](DisksApi.md#disks_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/disks/{diskName} | 


# **disks_create_or_update**
> Disk disks_create_or_update(subscription_id, resource_group_name, disk_name, api_version, disk)



Creates or updates a disk.

### Example


```python
import openapi_client
from openapi_client.models.disk import Disk
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_name = 'disk_name_example' # str | The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.
    disk = openapi_client.Disk() # Disk | Disk object supplied in the body of the Put disk operation.

    try:
        api_response = api_instance.disks_create_or_update(subscription_id, resource_group_name, disk_name, api_version, disk)
        print("The response of DisksApi->disks_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_name** | **str**| The name of the managed disk that is being created. The name can&#39;t be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 
 **disk** | [**Disk**](Disk.md)| Disk object supplied in the body of the Put disk operation. | 

### Return type

[**Disk**](Disk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_delete**
> OperationStatusResponse disks_delete(subscription_id, resource_group_name, disk_name, api_version)



Deletes a disk.

### Example


```python
import openapi_client
from openapi_client.models.operation_status_response import OperationStatusResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_name = 'disk_name_example' # str | The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.disks_delete(subscription_id, resource_group_name, disk_name, api_version)
        print("The response of DisksApi->disks_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_name** | **str**| The name of the managed disk that is being created. The name can&#39;t be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**OperationStatusResponse**](OperationStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | If the disk is deleted, this is an expected error code. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_get**
> Disk disks_get(subscription_id, resource_group_name, disk_name, api_version)



Gets information about a disk.

### Example


```python
import openapi_client
from openapi_client.models.disk import Disk
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_name = 'disk_name_example' # str | The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.disks_get(subscription_id, resource_group_name, disk_name, api_version)
        print("The response of DisksApi->disks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_name** | **str**| The name of the managed disk that is being created. The name can&#39;t be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**Disk**](Disk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_grant_access**
> AccessUri disks_grant_access(subscription_id, resource_group_name, disk_name, api_version, grant_access_data)



Grants access to a disk.

### Example


```python
import openapi_client
from openapi_client.models.access_uri import AccessUri
from openapi_client.models.grant_access_data import GrantAccessData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_name = 'disk_name_example' # str | The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.
    grant_access_data = openapi_client.GrantAccessData() # GrantAccessData | Access data object supplied in the body of the get disk access operation.

    try:
        api_response = api_instance.disks_grant_access(subscription_id, resource_group_name, disk_name, api_version, grant_access_data)
        print("The response of DisksApi->disks_grant_access:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_grant_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_name** | **str**| The name of the managed disk that is being created. The name can&#39;t be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 
 **grant_access_data** | [**GrantAccessData**](GrantAccessData.md)| Access data object supplied in the body of the get disk access operation. | 

### Return type

[**AccessUri**](AccessUri.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_list**
> DiskList disks_list(subscription_id, api_version)



Lists all the disks under a subscription.

### Example


```python
import openapi_client
from openapi_client.models.disk_list import DiskList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.disks_list(subscription_id, api_version)
        print("The response of DisksApi->disks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DiskList**](DiskList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_list_by_resource_group**
> DiskList disks_list_by_resource_group(subscription_id, resource_group_name, api_version)



Lists all the disks under a resource group.

### Example


```python
import openapi_client
from openapi_client.models.disk_list import DiskList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.disks_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DisksApi->disks_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**DiskList**](DiskList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_revoke_access**
> OperationStatusResponse disks_revoke_access(subscription_id, resource_group_name, disk_name, api_version)



Revokes access to a disk.

### Example


```python
import openapi_client
from openapi_client.models.operation_status_response import OperationStatusResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_name = 'disk_name_example' # str | The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.disks_revoke_access(subscription_id, resource_group_name, disk_name, api_version)
        print("The response of DisksApi->disks_revoke_access:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_revoke_access: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_name** | **str**| The name of the managed disk that is being created. The name can&#39;t be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**OperationStatusResponse**](OperationStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_update**
> Disk disks_update(subscription_id, resource_group_name, disk_name, api_version, disk)



Updates (patches) a disk.

### Example


```python
import openapi_client
from openapi_client.models.disk import Disk
from openapi_client.models.disk_update import DiskUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    disk_name = 'disk_name_example' # str | The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
    api_version = 'api_version_example' # str | Client Api Version.
    disk = openapi_client.DiskUpdate() # DiskUpdate | Disk object supplied in the body of the Patch disk operation.

    try:
        api_response = api_instance.disks_update(subscription_id, resource_group_name, disk_name, api_version, disk)
        print("The response of DisksApi->disks_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **disk_name** | **str**| The name of the managed disk that is being created. The name can&#39;t be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters. | 
 **api_version** | **str**| Client Api Version. | 
 **disk** | [**DiskUpdate**](DiskUpdate.md)| Disk object supplied in the body of the Patch disk operation. | 

### Return type

[**Disk**](Disk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

