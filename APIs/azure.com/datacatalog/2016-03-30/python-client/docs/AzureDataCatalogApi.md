# openapi_client.AzureDataCatalogApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**a_dc_catalogs_create_or_update**](AzureDataCatalogApi.md#a_dc_catalogs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName} | Create or Update Azure Data Catalog service (PUT Resource)
[**a_dc_catalogs_delete**](AzureDataCatalogApi.md#a_dc_catalogs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName} | Delete Azure Data Catalog Service (DELETE Resource)
[**a_dc_catalogs_get**](AzureDataCatalogApi.md#a_dc_catalogs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName} | Get Azure Data Catalog service (GET Resources)
[**a_dc_catalogs_listt_by_resource_group**](AzureDataCatalogApi.md#a_dc_catalogs_listt_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs | List catalogs in Resource Group (GET Resources)
[**a_dc_catalogs_update**](AzureDataCatalogApi.md#a_dc_catalogs_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataCatalog/catalogs/{catalogName} | Update Azure Data Catalog Service (PATCH Resource)
[**a_dc_operations_list**](AzureDataCatalogApi.md#a_dc_operations_list) | **GET** /providers/Microsoft.DataCatalog/operations | 


# **a_dc_catalogs_create_or_update**
> ADCCatalog a_dc_catalogs_create_or_update(api_version, subscription_id, resource_group_name, catalog_name, properties)

Create or Update Azure Data Catalog service (PUT Resource)

The Create Azure Data Catalog service operation creates a new data catalog service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.

### Example


```python
import openapi_client
from openapi_client.models.adc_catalog import ADCCatalog
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
    api_instance = openapi_client.AzureDataCatalogApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    catalog_name = 'catalog_name_example' # str | The name of the data catalog in the specified subscription and resource group.
    properties = openapi_client.ADCCatalog() # ADCCatalog | Properties supplied to the Create or Update a data catalog.

    try:
        # Create or Update Azure Data Catalog service (PUT Resource)
        api_response = api_instance.a_dc_catalogs_create_or_update(api_version, subscription_id, resource_group_name, catalog_name, properties)
        print("The response of AzureDataCatalogApi->a_dc_catalogs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureDataCatalogApi->a_dc_catalogs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **catalog_name** | **str**| The name of the data catalog in the specified subscription and resource group. | 
 **properties** | [**ADCCatalog**](ADCCatalog.md)| Properties supplied to the Create or Update a data catalog. | 

### Return type

[**ADCCatalog**](ADCCatalog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |
**201** | HTTP 201 (Created) if the operation completed successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a_dc_catalogs_delete**
> a_dc_catalogs_delete(api_version, subscription_id, resource_group_name, catalog_name)

Delete Azure Data Catalog Service (DELETE Resource)

The Delete Azure Data Catalog Service operation deletes an existing data catalog.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.AzureDataCatalogApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    catalog_name = 'catalog_name_example' # str | The name of the data catalog in the specified subscription and resource group.

    try:
        # Delete Azure Data Catalog Service (DELETE Resource)
        api_instance.a_dc_catalogs_delete(api_version, subscription_id, resource_group_name, catalog_name)
    except Exception as e:
        print("Exception when calling AzureDataCatalogApi->a_dc_catalogs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **catalog_name** | **str**| The name of the data catalog in the specified subscription and resource group. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. An existing annotation was updated. |  -  |
**202** | Accepted. Delete is asynchronous. In this case, the caller needs to read the Location header for an URL to poll. That URL will continue to return 202 until the operation is complete. When it stops returning 202, the response it gives back is the result of the DELETE operation. |  -  |
**204** | No Content (didn&#39;t exist). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a_dc_catalogs_get**
> ADCCatalog a_dc_catalogs_get(api_version, subscription_id, resource_group_name, catalog_name)

Get Azure Data Catalog service (GET Resources)

The Get Azure Data Catalog Service operation retrieves a json representation of the data catalog.

### Example


```python
import openapi_client
from openapi_client.models.adc_catalog import ADCCatalog
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
    api_instance = openapi_client.AzureDataCatalogApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    catalog_name = 'catalog_name_example' # str | The name of the data catalog in the specified subscription and resource group.

    try:
        # Get Azure Data Catalog service (GET Resources)
        api_response = api_instance.a_dc_catalogs_get(api_version, subscription_id, resource_group_name, catalog_name)
        print("The response of AzureDataCatalogApi->a_dc_catalogs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureDataCatalogApi->a_dc_catalogs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **catalog_name** | **str**| The name of the data catalog in the specified subscription and resource group. | 

### Return type

[**ADCCatalog**](ADCCatalog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a_dc_catalogs_listt_by_resource_group**
> ADCCatalogsListResult a_dc_catalogs_listt_by_resource_group(api_version, subscription_id, resource_group_name)

List catalogs in Resource Group (GET Resources)

The List catalogs in Resource Group operation lists all the Azure Data Catalogs available under the given resource group.

### Example


```python
import openapi_client
from openapi_client.models.adc_catalogs_list_result import ADCCatalogsListResult
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
    api_instance = openapi_client.AzureDataCatalogApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.

    try:
        # List catalogs in Resource Group (GET Resources)
        api_response = api_instance.a_dc_catalogs_listt_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of AzureDataCatalogApi->a_dc_catalogs_listt_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureDataCatalogApi->a_dc_catalogs_listt_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 

### Return type

[**ADCCatalogsListResult**](ADCCatalogsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a_dc_catalogs_update**
> ADCCatalog a_dc_catalogs_update(api_version, subscription_id, resource_group_name, catalog_name, properties)

Update Azure Data Catalog Service (PATCH Resource)

The Update Azure Data Catalog Service operation can be used to update the existing deployment. The update call only supports the properties listed in the PATCH body.

### Example


```python
import openapi_client
from openapi_client.models.adc_catalog import ADCCatalog
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
    api_instance = openapi_client.AzureDataCatalogApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    catalog_name = 'catalog_name_example' # str | The name of the data catalog in the specified subscription and resource group.
    properties = openapi_client.ADCCatalog() # ADCCatalog | Properties supplied to the Update a data catalog.

    try:
        # Update Azure Data Catalog Service (PATCH Resource)
        api_response = api_instance.a_dc_catalogs_update(api_version, subscription_id, resource_group_name, catalog_name, properties)
        print("The response of AzureDataCatalogApi->a_dc_catalogs_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureDataCatalogApi->a_dc_catalogs_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **catalog_name** | **str**| The name of the data catalog in the specified subscription and resource group. | 
 **properties** | [**ADCCatalog**](ADCCatalog.md)| Properties supplied to the Update a data catalog. | 

### Return type

[**ADCCatalog**](ADCCatalog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **a_dc_operations_list**
> OperationEntityListResult a_dc_operations_list(api_version)



Lists all the available Azure Data Catalog service operations.

### Example


```python
import openapi_client
from openapi_client.models.operation_entity_list_result import OperationEntityListResult
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
    api_instance = openapi_client.AzureDataCatalogApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.a_dc_operations_list(api_version)
        print("The response of AzureDataCatalogApi->a_dc_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AzureDataCatalogApi->a_dc_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 

### Return type

[**OperationEntityListResult**](OperationEntityListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

