# openapi_client.StarterPlanOrGreaterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_avg_list_price_list_price_get_0**](StarterPlanOrGreaterApi.md#get_avg_list_price_list_price_get_0) | **GET** /listPrice | Stats on ask price of new vehicles
[**get_avg_sale_price_sale_price_get_0**](StarterPlanOrGreaterApi.md#get_avg_sale_price_sale_price_get_0) | **GET** /salePrice | Stats on sale price of new vehicles
[**get_brand_names_get_brands_get_0**](StarterPlanOrGreaterApi.md#get_brand_names_get_brands_get_0) | **GET** /getBrands | Get a list of brand names
[**get_history2_vehicle_history_get_1**](StarterPlanOrGreaterApi.md#get_history2_vehicle_history_get_1) | **GET** /vehicleHistory | Premium. Simple Vehicle History Report
[**get_market3_similar_sale_price_get_2**](StarterPlanOrGreaterApi.md#get_market3_similar_sale_price_get_2) | **GET** /similarSalePrice | Premium. Simple Vehicle Market Report
[**get_model_names_all_get_inactive_models_get_0**](StarterPlanOrGreaterApi.md#get_model_names_all_get_inactive_models_get_0) | **GET** /getInactiveModels | Get a list of model names including discontinued models
[**get_model_names_get_models_get_0**](StarterPlanOrGreaterApi.md#get_model_names_get_models_get_0) | **GET** /getModels | Get a list of model names
[**get_model_sale_buckets_sale_price_histogram_get_0**](StarterPlanOrGreaterApi.md#get_model_sale_buckets_sale_price_histogram_get_0) | **GET** /salePriceHistogram | Histogram of sales price of new vehicles by model
[**get_model_used_dist_model_year_dist_get_0**](StarterPlanOrGreaterApi.md#get_model_used_dist_model_year_dist_get_0) | **GET** /modelYearDist | Used market share of model year by model
[**get_regions_get_regions_get_0**](StarterPlanOrGreaterApi.md#get_regions_get_regions_get_0) | **GET** /getRegions | Get a list of region names
[**get_top_models_top_models_get_0**](StarterPlanOrGreaterApi.md#get_top_models_top_models_get_0) | **GET** /topModels | Top models in a given region
[**vin_decode_vin_decode_get_0**](StarterPlanOrGreaterApi.md#vin_decode_vin_decode_get_0) | **GET** /vinDecode | Vin decoder and Recall Info


# **get_avg_list_price_list_price_get_0**
> BasicModelStatsResp get_avg_list_price_list_price_get_0(jwt, brand_name, region_name=region_name)

Stats on ask price of new vehicles

Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.  The available brand and region names can be retrieved from their respective endpoints.

### Example


```python
import openapi_client
from openapi_client.models.basic_model_stats_resp import BasicModelStatsResp
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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Stats on ask price of new vehicles
        api_response = api_instance.get_avg_list_price_list_price_get_0(jwt, brand_name, region_name=region_name)
        print("The response of StarterPlanOrGreaterApi->get_avg_list_price_list_price_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_avg_list_price_list_price_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**BasicModelStatsResp**](BasicModelStatsResp.md)

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

# **get_avg_sale_price_sale_price_get_0**
> BasicModelStatsResp get_avg_sale_price_sale_price_get_0(jwt, brand_name, region_name=region_name)

Stats on sale price of new vehicles

Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.  The available brand and region names can be retrieved from their respective endpoints.

### Example


```python
import openapi_client
from openapi_client.models.basic_model_stats_resp import BasicModelStatsResp
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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Stats on sale price of new vehicles
        api_response = api_instance.get_avg_sale_price_sale_price_get_0(jwt, brand_name, region_name=region_name)
        print("The response of StarterPlanOrGreaterApi->get_avg_sale_price_sale_price_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_avg_sale_price_sale_price_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**BasicModelStatsResp**](BasicModelStatsResp.md)

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

# **get_brand_names_get_brands_get_0**
> BrandResp get_brand_names_get_brands_get_0(jwt)

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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 

    try:
        # Get a list of brand names
        api_response = api_instance.get_brand_names_get_brands_get_0(jwt)
        print("The response of StarterPlanOrGreaterApi->get_brand_names_get_brands_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_brand_names_get_brands_get_0: %s\n" % e)
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

# **get_history2_vehicle_history_get_1**
> HistoryResp get_history2_vehicle_history_get_1(jwt, vin)

Premium. Simple Vehicle History Report

Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale, price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016.   If your use case involves checking if a vehicle has appeared on the open market on or after a given date see  the /vehicleSeen endpoint.

### Example


```python
import openapi_client
from openapi_client.models.history_resp import HistoryResp
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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 

    try:
        # Premium. Simple Vehicle History Report
        api_response = api_instance.get_history2_vehicle_history_get_1(jwt, vin)
        print("The response of StarterPlanOrGreaterApi->get_history2_vehicle_history_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_history2_vehicle_history_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 

### Return type

[**HistoryResp**](HistoryResp.md)

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

# **get_market3_similar_sale_price_get_2**
> SimilarSalePriceResp get_market3_similar_sale_price_get_2(jwt, vin, region_name=region_name, days_back=days_back, same_year=same_year)

Premium. Simple Vehicle Market Report

Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN.  Optionally restricts report to vehicles of the same model year and goes back up to 120 days.

### Example


```python
import openapi_client
from openapi_client.models.similar_sale_price_resp import SimilarSalePriceResp
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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')
    days_back = 45 # int |  (optional) (default to 45)
    same_year = False # bool |  (optional) (default to False)

    try:
        # Premium. Simple Vehicle Market Report
        api_response = api_instance.get_market3_similar_sale_price_get_2(jwt, vin, region_name=region_name, days_back=days_back, same_year=same_year)
        print("The response of StarterPlanOrGreaterApi->get_market3_similar_sale_price_get_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_market3_similar_sale_price_get_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]
 **days_back** | **int**|  | [optional] [default to 45]
 **same_year** | **bool**|  | [optional] [default to False]

### Return type

[**SimilarSalePriceResp**](SimilarSalePriceResp.md)

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

# **get_model_names_all_get_inactive_models_get_0**
> ModelResp get_model_names_all_get_inactive_models_get_0(jwt, brand_name)

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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 

    try:
        # Get a list of model names including discontinued models
        api_response = api_instance.get_model_names_all_get_inactive_models_get_0(jwt, brand_name)
        print("The response of StarterPlanOrGreaterApi->get_model_names_all_get_inactive_models_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_model_names_all_get_inactive_models_get_0: %s\n" % e)
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

# **get_model_names_get_models_get_0**
> ModelResp get_model_names_get_models_get_0(jwt, brand_name)

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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 

    try:
        # Get a list of model names
        api_response = api_instance.get_model_names_get_models_get_0(jwt, brand_name)
        print("The response of StarterPlanOrGreaterApi->get_model_names_get_models_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_model_names_get_models_get_0: %s\n" % e)
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

# **get_model_sale_buckets_sale_price_histogram_get_0**
> BucketResp get_model_sale_buckets_sale_price_histogram_get_0(jwt, model_name, brand_name, region_name=region_name)

Histogram of sales price of new vehicles by model

Histogram of the sale price of vehicles over the last 45 days for a given model and region.  Price buckets are grouped in units of $1000 The available brand, model, and region names can be retrieved from their respective endpoints.

### Example


```python
import openapi_client
from openapi_client.models.bucket_resp import BucketResp
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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    model_name = 'model_name_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Histogram of sales price of new vehicles by model
        api_response = api_instance.get_model_sale_buckets_sale_price_histogram_get_0(jwt, model_name, brand_name, region_name=region_name)
        print("The response of StarterPlanOrGreaterApi->get_model_sale_buckets_sale_price_histogram_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_model_sale_buckets_sale_price_histogram_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **model_name** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**BucketResp**](BucketResp.md)

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

# **get_model_used_dist_model_year_dist_get_0**
> ModelYearDistResp get_model_used_dist_model_year_dist_get_0(jwt, model_name, brand_name, region_name=region_name)

Used market share of model year by model

Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model. For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market  in the given region over the last 45 days were from the 2017 model year.

### Example


```python
import openapi_client
from openapi_client.models.model_year_dist_resp import ModelYearDistResp
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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    model_name = 'model_name_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Used market share of model year by model
        api_response = api_instance.get_model_used_dist_model_year_dist_get_0(jwt, model_name, brand_name, region_name=region_name)
        print("The response of StarterPlanOrGreaterApi->get_model_used_dist_model_year_dist_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_model_used_dist_model_year_dist_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **model_name** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**ModelYearDistResp**](ModelYearDistResp.md)

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

# **get_regions_get_regions_get_0**
> RegionResp get_regions_get_regions_get_0(jwt)

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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 

    try:
        # Get a list of region names
        api_response = api_instance.get_regions_get_regions_get_0(jwt)
        print("The response of StarterPlanOrGreaterApi->get_regions_get_regions_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_regions_get_regions_get_0: %s\n" % e)
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

# **get_top_models_top_models_get_0**
> TopModelResp get_top_models_top_models_get_0(jwt, region_name=region_name)

Top models in a given region

Sales ranking of different models by region over the last 45 days.  The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents.   For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.  The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region over the report's time interval.

### Example


```python
import openapi_client
from openapi_client.models.top_model_resp import TopModelResp
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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Top models in a given region
        api_response = api_instance.get_top_models_top_models_get_0(jwt, region_name=region_name)
        print("The response of StarterPlanOrGreaterApi->get_top_models_top_models_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->get_top_models_top_models_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

### Return type

[**TopModelResp**](TopModelResp.md)

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

# **vin_decode_vin_decode_get_0**
> GenericResponse vin_decode_vin_decode_get_0(jwt, vin, pass_empty=pass_empty, include_recall=include_recall)

Vin decoder and Recall Info

Decodes the provided North American vin and provides recall information if available.  We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive. If passEmpty (default False) is True we will also include the empty fields in the response json.  If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.

### Example


```python
import openapi_client
from openapi_client.models.generic_response import GenericResponse
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
    api_instance = openapi_client.StarterPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    pass_empty = False # bool |  (optional) (default to False)
    include_recall = True # bool |  (optional) (default to True)

    try:
        # Vin decoder and Recall Info
        api_response = api_instance.vin_decode_vin_decode_get_0(jwt, vin, pass_empty=pass_empty, include_recall=include_recall)
        print("The response of StarterPlanOrGreaterApi->vin_decode_vin_decode_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StarterPlanOrGreaterApi->vin_decode_vin_decode_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 
 **pass_empty** | **bool**|  | [optional] [default to False]
 **include_recall** | **bool**|  | [optional] [default to True]

### Return type

[**GenericResponse**](GenericResponse.md)

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

