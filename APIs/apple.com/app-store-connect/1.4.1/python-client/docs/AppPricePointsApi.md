# openapi_client.AppPricePointsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_price_points_get_collection**](AppPricePointsApi.md#app_price_points_get_collection) | **GET** /v1/appPricePoints | 
[**app_price_points_get_instance**](AppPricePointsApi.md#app_price_points_get_instance) | **GET** /v1/appPricePoints/{id} | 
[**app_price_points_territory_get_to_one_related**](AppPricePointsApi.md#app_price_points_territory_get_to_one_related) | **GET** /v1/appPricePoints/{id}/territory | 


# **app_price_points_get_collection**
> AppPricePointsResponse app_price_points_get_collection(filter_price_tier=filter_price_tier, filter_territory=filter_territory, fields_app_price_points=fields_app_price_points, limit=limit, include=include, fields_territories=fields_territories)



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
    api_instance = openapi_client.AppPricePointsApi(api_client)
    filter_price_tier = ['filter_price_tier_example'] # List[str] | filter by id(s) of related 'priceTier' (optional)
    filter_territory = ['filter_territory_example'] # List[str] | filter by id(s) of related 'territory' (optional)
    fields_app_price_points = ['fields_app_price_points_example'] # List[str] | the fields to include for returned resources of type appPricePoints (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_territories = ['fields_territories_example'] # List[str] | the fields to include for returned resources of type territories (optional)

    try:
        api_response = api_instance.app_price_points_get_collection(filter_price_tier=filter_price_tier, filter_territory=filter_territory, fields_app_price_points=fields_app_price_points, limit=limit, include=include, fields_territories=fields_territories)
        print("The response of AppPricePointsApi->app_price_points_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPricePointsApi->app_price_points_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_price_tier** | [**List[str]**](str.md)| filter by id(s) of related &#39;priceTier&#39; | [optional] 
 **filter_territory** | [**List[str]**](str.md)| filter by id(s) of related &#39;territory&#39; | [optional] 
 **fields_app_price_points** | [**List[str]**](str.md)| the fields to include for returned resources of type appPricePoints | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_territories** | [**List[str]**](str.md)| the fields to include for returned resources of type territories | [optional] 

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
**200** | List of AppPricePoints |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_price_points_get_instance**
> AppPricePointResponse app_price_points_get_instance(id, fields_app_price_points=fields_app_price_points, include=include, fields_territories=fields_territories)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.app_price_point_response import AppPricePointResponse
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
    api_instance = openapi_client.AppPricePointsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_app_price_points = ['fields_app_price_points_example'] # List[str] | the fields to include for returned resources of type appPricePoints (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_territories = ['fields_territories_example'] # List[str] | the fields to include for returned resources of type territories (optional)

    try:
        api_response = api_instance.app_price_points_get_instance(id, fields_app_price_points=fields_app_price_points, include=include, fields_territories=fields_territories)
        print("The response of AppPricePointsApi->app_price_points_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPricePointsApi->app_price_points_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_app_price_points** | [**List[str]**](str.md)| the fields to include for returned resources of type appPricePoints | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_territories** | [**List[str]**](str.md)| the fields to include for returned resources of type territories | [optional] 

### Return type

[**AppPricePointResponse**](AppPricePointResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single AppPricePoint |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_price_points_territory_get_to_one_related**
> TerritoryResponse app_price_points_territory_get_to_one_related(id, fields_territories=fields_territories)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.territory_response import TerritoryResponse
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
    api_instance = openapi_client.AppPricePointsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_territories = ['fields_territories_example'] # List[str] | the fields to include for returned resources of type territories (optional)

    try:
        api_response = api_instance.app_price_points_territory_get_to_one_related(id, fields_territories=fields_territories)
        print("The response of AppPricePointsApi->app_price_points_territory_get_to_one_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPricePointsApi->app_price_points_territory_get_to_one_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_territories** | [**List[str]**](str.md)| the fields to include for returned resources of type territories | [optional] 

### Return type

[**TerritoryResponse**](TerritoryResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related resource |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

