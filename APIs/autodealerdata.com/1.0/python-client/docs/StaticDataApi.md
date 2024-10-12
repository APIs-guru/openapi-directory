# openapi_client.StaticDataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_brand_names_get_brands_get**](StaticDataApi.md#get_brand_names_get_brands_get) | **GET** /getBrands | Get a list of brand names
[**get_model_names_all_get_inactive_models_get**](StaticDataApi.md#get_model_names_all_get_inactive_models_get) | **GET** /getInactiveModels | Get a list of model names including discontinued models
[**get_model_names_get_models_get**](StaticDataApi.md#get_model_names_get_models_get) | **GET** /getModels | Get a list of model names
[**get_regions_get_regions_get**](StaticDataApi.md#get_regions_get_regions_get) | **GET** /getRegions | Get a list of region names


# **get_brand_names_get_brands_get**
> BrandResp get_brand_names_get_brands_get(jwt)

Get a list of brand names

Get vehicle brand names.   These names are used as arguments for other endpoints. The names are generally not case sensitive when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.

### Example


```python
import openapi_client
from openapi_client.models.brand_resp import BrandResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StaticDataApi(api_client)
    jwt = 'jwt_example' # str | 

    try:
        # Get a list of brand names
        api_response = api_instance.get_brand_names_get_brands_get(jwt)
        print("The response of StaticDataApi->get_brand_names_get_brands_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticDataApi->get_brand_names_get_brands_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 

### Return type

[**BrandResp**](BrandResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model_names_all_get_inactive_models_get**
> ModelResp get_model_names_all_get_inactive_models_get(jwt, brand_name)

Get a list of model names including discontinued models

Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time.   These names are used as arguments for other endpoints. The names are generally not case sensitive when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.

### Example


```python
import openapi_client
from openapi_client.models.model_resp import ModelResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StaticDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 

    try:
        # Get a list of model names including discontinued models
        api_response = api_instance.get_model_names_all_get_inactive_models_get(jwt, brand_name)
        print("The response of StaticDataApi->get_model_names_all_get_inactive_models_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticDataApi->get_model_names_all_get_inactive_models_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 

### Return type

[**ModelResp**](ModelResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_model_names_get_models_get**
> ModelResp get_model_names_get_models_get(jwt, brand_name)

Get a list of model names

Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have  sold less than 10 vehicles in the last month and a half.  These names are used as arguments for other endpoints. The names are generally not case sensitive when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.

### Example


```python
import openapi_client
from openapi_client.models.model_resp import ModelResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StaticDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 

    try:
        # Get a list of model names
        api_response = api_instance.get_model_names_get_models_get(jwt, brand_name)
        print("The response of StaticDataApi->get_model_names_get_models_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticDataApi->get_model_names_get_models_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 

### Return type

[**ModelResp**](ModelResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_regions_get_regions_get**
> RegionResp get_regions_get_regions_get(jwt)

Get a list of region names

Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.

### Example


```python
import openapi_client
from openapi_client.models.region_resp import RegionResp
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StaticDataApi(api_client)
    jwt = 'jwt_example' # str | 

    try:
        # Get a list of region names
        api_response = api_instance.get_regions_get_regions_get(jwt)
        print("The response of StaticDataApi->get_regions_get_regions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StaticDataApi->get_regions_get_regions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 

### Return type

[**RegionResp**](RegionResp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

