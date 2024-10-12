# openapi_client.ProductGroupsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_group_create_or_update**](ProductGroupsApi.md#product_group_create_or_update) | **PUT** /products/{productId}/groups/{groupId} | 
[**product_group_delete**](ProductGroupsApi.md#product_group_delete) | **DELETE** /products/{productId}/groups/{groupId} | 
[**product_group_list_by_product**](ProductGroupsApi.md#product_group_list_by_product) | **GET** /products/{productId}/groups | 


# **product_group_create_or_update**
> ProductGroupCreateOrUpdate200Response product_group_create_or_update(product_id, group_id, api_version)



Adds the association between the specified developer group with the specified product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_group_create_or_update200_response import ProductGroupCreateOrUpdate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductGroupsApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    group_id = 'group_id_example' # str | Group identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.product_group_create_or_update(product_id, group_id, api_version)
        print("The response of ProductGroupsApi->product_group_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductGroupsApi->product_group_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **group_id** | **str**| Group identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ProductGroupCreateOrUpdate200Response**](ProductGroupCreateOrUpdate200Response.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The specified group is already associated with the product. |  -  |
**201** | The group was successfully associated with the product. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_group_delete**
> product_group_delete(product_id, group_id, api_version)



Deletes the association between the specified group and product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductGroupsApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    group_id = 'group_id_example' # str | Group identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.product_group_delete(product_id, group_id, api_version)
    except Exception as e:
        print("Exception when calling ProductGroupsApi->product_group_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **group_id** | **str**| Group identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The group was successfully disassociated with the product. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_group_list_by_product**
> ProductGroupListByProduct200Response product_group_list_by_product(product_id, api_version, filter=filter, top=top, skip=skip)



Lists the collection of developer groups associated with the specified product.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.product_group_list_by_product200_response import ProductGroupListByProduct200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductGroupsApi(api_client)
    product_id = 'product_id_example' # str | Product identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | | Field       | Supported operators    | Supported functions                         | |-------------|------------------------|---------------------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | type        | eq, ne                 | N/A                                         | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.product_group_list_by_product(product_id, api_version, filter=filter, top=top, skip=skip)
        print("The response of ProductGroupsApi->product_group_list_by_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductGroupsApi->product_group_list_by_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Product identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| | Field       | Supported operators    | Supported functions                         | |-------------|------------------------|---------------------------------------------| | id          | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | name        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | description | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | type        | eq, ne                 | N/A                                         | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**ProductGroupListByProduct200Response**](ProductGroupListByProduct200Response.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lists a collection of Group entities. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

