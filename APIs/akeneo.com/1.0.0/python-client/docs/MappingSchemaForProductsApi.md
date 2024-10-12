# openapi_client.MappingSchemaForProductsApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_app_catalogs_mapping_schema_product**](MappingSchemaForProductsApi.md#delete_app_catalogs_mapping_schema_product) | **DELETE** /api/rest/v1/catalogs/{id}/mapping-schemas/product | Delete the product mapping schema related to a catalog
[**get_app_catalogs_mapping_schema_product**](MappingSchemaForProductsApi.md#get_app_catalogs_mapping_schema_product) | **GET** /api/rest/v1/catalogs/{id}/mapping-schemas/product | Get the product mapping schema related to a catalog
[**put_app_catalogs_mapping_schema_product**](MappingSchemaForProductsApi.md#put_app_catalogs_mapping_schema_product) | **PUT** /api/rest/v1/catalogs/{id}/mapping-schemas/product | Create or update the product mapping schema related to a catalog


# **delete_app_catalogs_mapping_schema_product**
> delete_app_catalogs_mapping_schema_product(id)

Delete the product mapping schema related to a catalog

This endpoint allows you to delete the product mapping schema related to a catalog

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MappingSchemaForProductsApi(api_client)
    id = 'id_example' # str | Catalog ID

    try:
        # Delete the product mapping schema related to a catalog
        api_instance.delete_app_catalogs_mapping_schema_product(id)
    except Exception as e:
        print("Exception when calling MappingSchemaForProductsApi->delete_app_catalogs_mapping_schema_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Deleted |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_catalogs_mapping_schema_product**
> GetAppCatalogsMappingSchemaProduct200Response get_app_catalogs_mapping_schema_product(id)

Get the product mapping schema related to a catalog

This endpoint allows you to retrieve the product mapping schema related to a catalog

### Example


```python
import openapi_client
from openapi_client.models.get_app_catalogs_mapping_schema_product200_response import GetAppCatalogsMappingSchemaProduct200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MappingSchemaForProductsApi(api_client)
    id = 'id_example' # str | Catalog ID

    try:
        # Get the product mapping schema related to a catalog
        api_response = api_instance.get_app_catalogs_mapping_schema_product(id)
        print("The response of MappingSchemaForProductsApi->get_app_catalogs_mapping_schema_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MappingSchemaForProductsApi->get_app_catalogs_mapping_schema_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 

### Return type

[**GetAppCatalogsMappingSchemaProduct200Response**](GetAppCatalogsMappingSchemaProduct200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return product mapping schema related to a catalog |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Catalog not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_app_catalogs_mapping_schema_product**
> put_app_catalogs_mapping_schema_product(id, body=body)

Create or update the product mapping schema related to a catalog

This endpoint allows you to create or update the product mapping schema related to a catalog

### Example


```python
import openapi_client
from openapi_client.models.get_app_catalogs_mapping_schema_product200_response import GetAppCatalogsMappingSchemaProduct200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MappingSchemaForProductsApi(api_client)
    id = 'id_example' # str | Catalog ID
    body = openapi_client.GetAppCatalogsMappingSchemaProduct200Response() # GetAppCatalogsMappingSchemaProduct200Response |  (optional)

    try:
        # Create or update the product mapping schema related to a catalog
        api_instance.put_app_catalogs_mapping_schema_product(id, body=body)
    except Exception as e:
        print("Exception when calling MappingSchemaForProductsApi->put_app_catalogs_mapping_schema_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Catalog ID | 
 **body** | [**GetAppCatalogsMappingSchemaProduct200Response**](GetAppCatalogsMappingSchemaProduct200Response.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - URI of the created resource <br>  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

