# openapi_client.DatasetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**datasets_create_or_update**](DatasetsApi.md#datasets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName} | 
[**datasets_delete**](DatasetsApi.md#datasets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName} | 
[**datasets_get**](DatasetsApi.md#datasets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets/{datasetName} | 
[**datasets_list_by_factory**](DatasetsApi.md#datasets_list_by_factory) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/datasets | 


# **datasets_create_or_update**
> DatasetResource datasets_create_or_update(subscription_id, resource_group_name, factory_name, dataset_name, api_version, dataset, if_match=if_match)



Creates or updates a dataset.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dataset_resource import DatasetResource
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
    api_instance = openapi_client.DatasetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    dataset_name = 'dataset_name_example' # str | The dataset name.
    api_version = 'api_version_example' # str | The API version.
    dataset = openapi_client.DatasetResource() # DatasetResource | Dataset resource definition.
    if_match = 'if_match_example' # str | ETag of the dataset entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. (optional)

    try:
        api_response = api_instance.datasets_create_or_update(subscription_id, resource_group_name, factory_name, dataset_name, api_version, dataset, if_match=if_match)
        print("The response of DatasetsApi->datasets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatasetsApi->datasets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **dataset_name** | **str**| The dataset name. | 
 **api_version** | **str**| The API version. | 
 **dataset** | [**DatasetResource**](DatasetResource.md)| Dataset resource definition. | 
 **if_match** | **str**| ETag of the dataset entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. | [optional] 

### Return type

[**DatasetResource**](DatasetResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **datasets_delete**
> datasets_delete(subscription_id, resource_group_name, factory_name, dataset_name, api_version)



Deletes a dataset.

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
    api_instance = openapi_client.DatasetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    dataset_name = 'dataset_name_example' # str | The dataset name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_instance.datasets_delete(subscription_id, resource_group_name, factory_name, dataset_name, api_version)
    except Exception as e:
        print("Exception when calling DatasetsApi->datasets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **dataset_name** | **str**| The dataset name. | 
 **api_version** | **str**| The API version. | 

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
**200** | OK. |  -  |
**204** | No Content. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **datasets_get**
> DatasetResource datasets_get(subscription_id, resource_group_name, factory_name, dataset_name, api_version, if_none_match=if_none_match)



Gets a dataset.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dataset_resource import DatasetResource
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
    api_instance = openapi_client.DatasetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    dataset_name = 'dataset_name_example' # str | The dataset name.
    api_version = 'api_version_example' # str | The API version.
    if_none_match = 'if_none_match_example' # str | ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. (optional)

    try:
        api_response = api_instance.datasets_get(subscription_id, resource_group_name, factory_name, dataset_name, api_version, if_none_match=if_none_match)
        print("The response of DatasetsApi->datasets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatasetsApi->datasets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **dataset_name** | **str**| The dataset name. | 
 **api_version** | **str**| The API version. | 
 **if_none_match** | **str**| ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. | [optional] 

### Return type

[**DatasetResource**](DatasetResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**304** | Not modified. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **datasets_list_by_factory**
> DatasetListResponse datasets_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)



Lists datasets.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dataset_list_response import DatasetListResponse
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
    api_instance = openapi_client.DatasetsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.datasets_list_by_factory(subscription_id, resource_group_name, factory_name, api_version)
        print("The response of DatasetsApi->datasets_list_by_factory:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DatasetsApi->datasets_list_by_factory: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**DatasetListResponse**](DatasetListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

