# openapi_client.LabsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**labs_claim_any_vm**](LabsApi.md#labs_claim_any_vm) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/claimAnyVm | 
[**labs_create_environment**](LabsApi.md#labs_create_environment) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/createEnvironment | 
[**labs_create_or_update**](LabsApi.md#labs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name} | 
[**labs_delete**](LabsApi.md#labs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name} | 
[**labs_export_resource_usage**](LabsApi.md#labs_export_resource_usage) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/exportResourceUsage | 
[**labs_generate_upload_uri**](LabsApi.md#labs_generate_upload_uri) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/generateUploadUri | 
[**labs_get**](LabsApi.md#labs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name} | 
[**labs_list_by_resource_group**](LabsApi.md#labs_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs | 
[**labs_list_by_subscription**](LabsApi.md#labs_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/labs | 
[**labs_list_vhds**](LabsApi.md#labs_list_vhds) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/listVhds | 
[**labs_update**](LabsApi.md#labs_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name} | 


# **labs_claim_any_vm**
> labs_claim_any_vm(subscription_id, resource_group_name, name, api_version)



Claim a random claimable virtual machine in the lab. This operation can take a while to complete.

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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')

    try:
        api_instance.labs_claim_any_vm(subscription_id, resource_group_name, name, api_version)
    except Exception as e:
        print("Exception when calling LabsApi->labs_claim_any_vm: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **labs_create_environment**
> labs_create_environment(subscription_id, resource_group_name, name, api_version, lab_virtual_machine_creation_parameter)



Create virtual machines in a lab. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab_virtual_machine_creation_parameter import LabVirtualMachineCreationParameter
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    lab_virtual_machine_creation_parameter = openapi_client.LabVirtualMachineCreationParameter() # LabVirtualMachineCreationParameter | Properties for creating a virtual machine.

    try:
        api_instance.labs_create_environment(subscription_id, resource_group_name, name, api_version, lab_virtual_machine_creation_parameter)
    except Exception as e:
        print("Exception when calling LabsApi->labs_create_environment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **lab_virtual_machine_creation_parameter** | [**LabVirtualMachineCreationParameter**](LabVirtualMachineCreationParameter.md)| Properties for creating a virtual machine. | 

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

# **labs_create_or_update**
> Lab labs_create_or_update(subscription_id, resource_group_name, name, api_version, lab)



Create or replace an existing lab. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab import Lab
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    lab = openapi_client.Lab() # Lab | A lab.

    try:
        api_response = api_instance.labs_create_or_update(subscription_id, resource_group_name, name, api_version, lab)
        print("The response of LabsApi->labs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **lab** | [**Lab**](Lab.md)| A lab. | 

### Return type

[**Lab**](Lab.md)

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

# **labs_delete**
> labs_delete(subscription_id, resource_group_name, name, api_version)



Delete lab. This operation can take a while to complete.

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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')

    try:
        api_instance.labs_delete(subscription_id, resource_group_name, name, api_version)
    except Exception as e:
        print("Exception when calling LabsApi->labs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
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

# **labs_export_resource_usage**
> labs_export_resource_usage(subscription_id, resource_group_name, name, api_version, export_resource_usage_parameters)



Exports the lab resource usage into a storage account This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.export_resource_usage_parameters import ExportResourceUsageParameters
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    export_resource_usage_parameters = openapi_client.ExportResourceUsageParameters() # ExportResourceUsageParameters | The parameters of the export operation.

    try:
        api_instance.labs_export_resource_usage(subscription_id, resource_group_name, name, api_version, export_resource_usage_parameters)
    except Exception as e:
        print("Exception when calling LabsApi->labs_export_resource_usage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **export_resource_usage_parameters** | [**ExportResourceUsageParameters**](ExportResourceUsageParameters.md)| The parameters of the export operation. | 

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

# **labs_generate_upload_uri**
> GenerateUploadUriResponse labs_generate_upload_uri(subscription_id, resource_group_name, name, api_version, generate_upload_uri_parameter)



Generate a URI for uploading custom disk images to a Lab.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.generate_upload_uri_parameter import GenerateUploadUriParameter
from openapi_client.models.generate_upload_uri_response import GenerateUploadUriResponse
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    generate_upload_uri_parameter = openapi_client.GenerateUploadUriParameter() # GenerateUploadUriParameter | Properties for generating an upload URI.

    try:
        api_response = api_instance.labs_generate_upload_uri(subscription_id, resource_group_name, name, api_version, generate_upload_uri_parameter)
        print("The response of LabsApi->labs_generate_upload_uri:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_generate_upload_uri: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **generate_upload_uri_parameter** | [**GenerateUploadUriParameter**](GenerateUploadUriParameter.md)| Properties for generating an upload URI. | 

### Return type

[**GenerateUploadUriResponse**](GenerateUploadUriResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **labs_get**
> Lab labs_get(subscription_id, resource_group_name, name, api_version, expand=expand)



Get lab.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab import Lab
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=defaultStorageAccount)' (optional)

    try:
        api_response = api_instance.labs_get(subscription_id, resource_group_name, name, api_version, expand=expand)
        print("The response of LabsApi->labs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;defaultStorageAccount)&#39; | [optional] 

### Return type

[**Lab**](Lab.md)

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

# **labs_list_by_resource_group**
> ResponseWithContinuationLab labs_list_by_resource_group(subscription_id, resource_group_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List labs in a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_lab import ResponseWithContinuationLab
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=defaultStorageAccount)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.labs_list_by_resource_group(subscription_id, resource_group_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of LabsApi->labs_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;defaultStorageAccount)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationLab**](ResponseWithContinuationLab.md)

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

# **labs_list_by_subscription**
> ResponseWithContinuationLab labs_list_by_subscription(subscription_id, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List labs in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_lab import ResponseWithContinuationLab
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=defaultStorageAccount)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.labs_list_by_subscription(subscription_id, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of LabsApi->labs_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;defaultStorageAccount)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationLab**](ResponseWithContinuationLab.md)

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

# **labs_list_vhds**
> ResponseWithContinuationLabVhd labs_list_vhds(subscription_id, resource_group_name, name, api_version)



List disk images available for custom image creation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_lab_vhd import ResponseWithContinuationLabVhd
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')

    try:
        api_response = api_instance.labs_list_vhds(subscription_id, resource_group_name, name, api_version)
        print("The response of LabsApi->labs_list_vhds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_list_vhds: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]

### Return type

[**ResponseWithContinuationLabVhd**](ResponseWithContinuationLabVhd.md)

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

# **labs_update**
> Lab labs_update(subscription_id, resource_group_name, name, api_version, lab)



Modify properties of labs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.lab import Lab
from openapi_client.models.lab_fragment import LabFragment
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
    api_instance = openapi_client.LabsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    name = 'name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    lab = openapi_client.LabFragment() # LabFragment | A lab.

    try:
        api_response = api_instance.labs_update(subscription_id, resource_group_name, name, api_version, lab)
        print("The response of LabsApi->labs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabsApi->labs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **lab** | [**LabFragment**](LabFragment.md)| A lab. | 

### Return type

[**Lab**](Lab.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

