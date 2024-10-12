# openapi_client.DisksApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disks_attach**](DisksApi.md#disks_attach) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}/attach | 
[**disks_create_or_update**](DisksApi.md#disks_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name} | 
[**disks_delete**](DisksApi.md#disks_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name} | 
[**disks_detach**](DisksApi.md#disks_detach) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name}/detach | 
[**disks_get**](DisksApi.md#disks_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks/{name} | 
[**disks_list**](DisksApi.md#disks_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/users/{userName}/disks | 


# **disks_attach**
> disks_attach(subscription_id, resource_group_name, lab_name, user_name, name, api_version, attach_disk_properties)



Attach and create the lease of the disk to the virtual machine. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.attach_disk_properties import AttachDiskProperties
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
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the disk.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    attach_disk_properties = openapi_client.AttachDiskProperties() # AttachDiskProperties | Properties of the disk to attach.

    try:
        api_instance.disks_attach(subscription_id, resource_group_name, lab_name, user_name, name, api_version, attach_disk_properties)
    except Exception as e:
        print("Exception when calling DisksApi->disks_attach: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the disk. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **attach_disk_properties** | [**AttachDiskProperties**](AttachDiskProperties.md)| Properties of the disk to attach. | 

### Return type

void (empty response body)

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_create_or_update**
> Disk disks_create_or_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, disk)



Create or replace an existing disk. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the disk.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    disk = openapi_client.Disk() # Disk | A Disk.

    try:
        api_response = api_instance.disks_create_or_update(subscription_id, resource_group_name, lab_name, user_name, name, api_version, disk)
        print("The response of DisksApi->disks_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the disk. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **disk** | [**Disk**](Disk.md)| A Disk. | 

### Return type

[**Disk**](Disk.md)

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_delete**
> disks_delete(subscription_id, resource_group_name, lab_name, user_name, name, api_version)



Delete disk. This operation can take a while to complete.

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
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the disk.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')

    try:
        api_instance.disks_delete(subscription_id, resource_group_name, lab_name, user_name, name, api_version)
    except Exception as e:
        print("Exception when calling DisksApi->disks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the disk. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]

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
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_detach**
> disks_detach(subscription_id, resource_group_name, lab_name, user_name, name, api_version, detach_disk_properties)



Detach and break the lease of the disk attached to the virtual machine. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.detach_disk_properties import DetachDiskProperties
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
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the disk.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    detach_disk_properties = openapi_client.DetachDiskProperties() # DetachDiskProperties | Properties of the disk to detach.

    try:
        api_instance.disks_detach(subscription_id, resource_group_name, lab_name, user_name, name, api_version, detach_disk_properties)
    except Exception as e:
        print("Exception when calling DisksApi->disks_detach: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the disk. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **detach_disk_properties** | [**DetachDiskProperties**](DetachDiskProperties.md)| Properties of the disk to detach. | 

### Return type

void (empty response body)

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
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_get**
> Disk disks_get(subscription_id, resource_group_name, lab_name, user_name, name, api_version, expand=expand)



Get disk.

### Example

* OAuth Authentication (azure_auth):

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

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    name = 'name_example' # str | The name of the disk.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=diskType)' (optional)

    try:
        api_response = api_instance.disks_get(subscription_id, resource_group_name, lab_name, user_name, name, api_version, expand=expand)
        print("The response of DisksApi->disks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **name** | **str**| The name of the disk. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;diskType)&#39; | [optional] 

### Return type

[**Disk**](Disk.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disks_list**
> ResponseWithContinuationDisk disks_list(subscription_id, resource_group_name, lab_name, user_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List disks in a given user profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_disk import ResponseWithContinuationDisk
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
    api_instance = openapi_client.DisksApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    user_name = 'user_name_example' # str | The name of the user profile.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=diskType)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.disks_list(subscription_id, resource_group_name, lab_name, user_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of DisksApi->disks_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DisksApi->disks_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **user_name** | **str**| The name of the user profile. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;diskType)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationDisk**](ResponseWithContinuationDisk.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

