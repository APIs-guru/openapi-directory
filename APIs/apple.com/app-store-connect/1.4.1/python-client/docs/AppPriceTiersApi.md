# openapi_client.AppPriceTiersApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_price_tiers_get_collection**](AppPriceTiersApi.md#app_price_tiers_get_collection) | **GET** /v1/appPriceTiers | 
[**app_price_tiers_get_instance**](AppPriceTiersApi.md#app_price_tiers_get_instance) | **GET** /v1/appPriceTiers/{id} | 
[**app_price_tiers_price_points_get_to_many_related**](AppPriceTiersApi.md#app_price_tiers_price_points_get_to_many_related) | **GET** /v1/appPriceTiers/{id}/pricePoints | 


# **app_price_tiers_get_collection**
> AppPriceTiersResponse app_price_tiers_get_collection(filter_id=filter_id, fields_app_price_tiers=fields_app_price_tiers, limit=limit, include=include, fields_app_price_points=fields_app_price_points, limit_price_points=limit_price_points)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_price_tiers_response import AppPriceTiersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPriceTiersApi(api_client)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    fields_app_price_tiers = ['fields_app_price_tiers_example'] # List[str] | the fields to include for returned resources of type appPriceTiers (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_app_price_points = ['fields_app_price_points_example'] # List[str] | the fields to include for returned resources of type appPricePoints (optional)
    limit_price_points = 56 # int | maximum number of related pricePoints returned (when they are included) (optional)

    try:
        api_response = api_instance.app_price_tiers_get_collection(filter_id=filter_id, fields_app_price_tiers=fields_app_price_tiers, limit=limit, include=include, fields_app_price_points=fields_app_price_points, limit_price_points=limit_price_points)
        print("The response of AppPriceTiersApi->app_price_tiers_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPriceTiersApi->app_price_tiers_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **fields_app_price_tiers** | [**List[str]**](str.md)| the fields to include for returned resources of type appPriceTiers | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_app_price_points** | [**List[str]**](str.md)| the fields to include for returned resources of type appPricePoints | [optional] 
 **limit_price_points** | **int**| maximum number of related pricePoints returned (when they are included) | [optional] 

### Return type

[**AppPriceTiersResponse**](AppPriceTiersResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of AppPriceTiers |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_price_tiers_get_instance**
> AppPriceTierResponse app_price_tiers_get_instance(id, fields_app_price_tiers=fields_app_price_tiers, include=include, fields_app_price_points=fields_app_price_points, limit_price_points=limit_price_points)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_price_tier_response import AppPriceTierResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPriceTiersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_price_tiers = ['fields_app_price_tiers_example'] # List[str] | the fields to include for returned resources of type appPriceTiers (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_app_price_points = ['fields_app_price_points_example'] # List[str] | the fields to include for returned resources of type appPricePoints (optional)
    limit_price_points = 56 # int | maximum number of related pricePoints returned (when they are included) (optional)

    try:
        api_response = api_instance.app_price_tiers_get_instance(id, fields_app_price_tiers=fields_app_price_tiers, include=include, fields_app_price_points=fields_app_price_points, limit_price_points=limit_price_points)
        print("The response of AppPriceTiersApi->app_price_tiers_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPriceTiersApi->app_price_tiers_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_price_tiers** | [**List[str]**](str.md)| the fields to include for returned resources of type appPriceTiers | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_app_price_points** | [**List[str]**](str.md)| the fields to include for returned resources of type appPricePoints | [optional] 
 **limit_price_points** | **int**| maximum number of related pricePoints returned (when they are included) | [optional] 

### Return type

[**AppPriceTierResponse**](AppPriceTierResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppPriceTier |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_price_tiers_price_points_get_to_many_related**
> AppPricePointsResponse app_price_tiers_price_points_get_to_many_related(id, fields_app_price_points=fields_app_price_points, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_price_points_response import AppPricePointsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPriceTiersApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_price_points = ['fields_app_price_points_example'] # List[str] | the fields to include for returned resources of type appPricePoints (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.app_price_tiers_price_points_get_to_many_related(id, fields_app_price_points=fields_app_price_points, limit=limit)
        print("The response of AppPriceTiersApi->app_price_tiers_price_points_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPriceTiersApi->app_price_tiers_price_points_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_price_points** | [**List[str]**](str.md)| the fields to include for returned resources of type appPricePoints | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**AppPricePointsResponse**](AppPricePointsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

