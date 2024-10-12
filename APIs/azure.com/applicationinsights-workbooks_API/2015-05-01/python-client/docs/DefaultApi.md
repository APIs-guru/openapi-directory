# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workbooks_create_or_update**](DefaultApi.md#workbooks_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks/{resourceName} | 
[**workbooks_delete**](DefaultApi.md#workbooks_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks/{resourceName} | 
[**workbooks_get**](DefaultApi.md#workbooks_get) | **GET** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks/{resourceName} | 
[**workbooks_list_by_resource_group**](DefaultApi.md#workbooks_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks | 
[**workbooks_update**](DefaultApi.md#workbooks_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroup/{resourceGroupName}/providers/microsoft.insights/workbooks/{resourceName} | 


# **workbooks_create_or_update**
> Workbook workbooks_create_or_update(subscription_id, resource_group_name, resource_name, api_version, workbook_properties)



Create a new workbook.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workbook import Workbook
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    workbook_properties = openapi_client.Workbook() # Workbook | Properties that need to be specified to create a new workbook.

    try:
        api_response = api_instance.workbooks_create_or_update(subscription_id, resource_group_name, resource_name, api_version, workbook_properties)
        print("The response of DefaultApi->workbooks_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->workbooks_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **workbook_properties** | [**Workbook**](Workbook.md)| Properties that need to be specified to create a new workbook. | 

### Return type

[**Workbook**](Workbook.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The newly created workbook. |  -  |
**201** | The newly created workbook. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workbooks_delete**
> workbooks_delete(subscription_id, resource_group_name, resource_name, api_version)



Delete a workbook.

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_instance.workbooks_delete(subscription_id, resource_group_name, resource_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->workbooks_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **api_version** | **str**| The API version to use for this operation. | 

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
**201** | The workbook has been successfully deleted. |  -  |
**204** | The resource doesn&#39;t exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workbooks_get**
> Workbook workbooks_get(subscription_id, resource_group_name, resource_name, api_version)



Get a single workbook by its resourceName.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workbook import Workbook
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.workbooks_get(subscription_id, resource_group_name, resource_name, api_version)
        print("The response of DefaultApi->workbooks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->workbooks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**Workbook**](Workbook.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A workbook definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workbooks_list_by_resource_group**
> WorkbooksListResult workbooks_list_by_resource_group(subscription_id, resource_group_name, category, api_version, tags=tags, can_fetch_content=can_fetch_content)



Get all Workbooks defined within a specified resource group and category.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workbooks_list_result import WorkbooksListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    category = 'category_example' # str | Category of workbook to return.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    tags = ['tags_example'] # List[str] | Tags presents on each workbook returned. (optional)
    can_fetch_content = True # bool | Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks. (optional)

    try:
        api_response = api_instance.workbooks_list_by_resource_group(subscription_id, resource_group_name, category, api_version, tags=tags, can_fetch_content=can_fetch_content)
        print("The response of DefaultApi->workbooks_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->workbooks_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **category** | **str**| Category of workbook to return. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **tags** | [**List[str]**](str.md)| Tags presents on each workbook returned. | [optional] 
 **can_fetch_content** | **bool**| Flag indicating whether or not to return the full content for each applicable workbook. If false, only return summary content for workbooks. | [optional] 

### Return type

[**WorkbooksListResult**](WorkbooksListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more workbook definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workbooks_update**
> Workbook workbooks_update(subscription_id, resource_group_name, resource_name, api_version, workbook_properties)



Updates a workbook that has already been added.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workbook import Workbook
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    workbook_properties = openapi_client.Workbook() # Workbook | Properties that need to be specified to create a new workbook.

    try:
        api_response = api_instance.workbooks_update(subscription_id, resource_group_name, resource_name, api_version, workbook_properties)
        print("The response of DefaultApi->workbooks_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->workbooks_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **workbook_properties** | [**Workbook**](Workbook.md)| Properties that need to be specified to create a new workbook. | 

### Return type

[**Workbook**](Workbook.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The workbook definition updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

