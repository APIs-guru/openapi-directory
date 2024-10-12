# openapi_client.AnalystPlanOrGreaterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dealer_sales_region_daily_sales_get_0**](AnalystPlanOrGreaterApi.md#get_dealer_sales_region_daily_sales_get_0) | **GET** /regionDailySales | Brand sales by region and Day
[**get_dealer_sales_region_sales_get_1**](AnalystPlanOrGreaterApi.md#get_dealer_sales_region_sales_get_1) | **GET** /regionSales | Premium. Brand sales by region and month
[**get_listings_by_dealer_listings_by_date_get_0**](AnalystPlanOrGreaterApi.md#get_listings_by_dealer_listings_by_date_get_0) | **GET** /listingsByDate | Listings by Dealer ID and Date
[**get_listings_by_dealer_listings_get_0**](AnalystPlanOrGreaterApi.md#get_listings_by_dealer_listings_get_0) | **GET** /listings | Listings by Dealer ID
[**get_listings_by_region_and_date_listings_by_region_and_date_get_0**](AnalystPlanOrGreaterApi.md#get_listings_by_region_and_date_listings_by_region_and_date_get_0) | **GET** /listingsByRegionAndDate | Listings by Region and Date
[**get_listings_by_region_listings_by_region_get_0**](AnalystPlanOrGreaterApi.md#get_listings_by_region_listings_by_region_get_0) | **GET** /listingsByRegion | Listings by Region
[**get_region_brand_market_share_get_region_brand_market_share_get_0**](AnalystPlanOrGreaterApi.md#get_region_brand_market_share_get_region_brand_market_share_get_0) | **GET** /getRegionBrandMarketShare | Market share of a brand in region
[**get_region_market_share_get_region_market_share_get_1**](AnalystPlanOrGreaterApi.md#get_region_market_share_get_region_market_share_get_1) | **GET** /getRegionMarketShare | Market share of all brands in region
[**get_vehicle_seen_vehicle_seen_get_1**](AnalystPlanOrGreaterApi.md#get_vehicle_seen_vehicle_seen_get_1) | **GET** /vehicleSeen | Checks if a VIN appeared on the market on or after a given date.
[**listings_by_zip_code_and_date_listings_by_zip_code_and_date_get_0**](AnalystPlanOrGreaterApi.md#listings_by_zip_code_and_date_listings_by_zip_code_and_date_get_0) | **GET** /listingsByZipCodeAndDate | Listings by ZipCode and Date
[**listings_by_zip_code_listings_by_zip_code_get_0**](AnalystPlanOrGreaterApi.md#listings_by_zip_code_listings_by_zip_code_get_0) | **GET** /listingsByZipCode | Listings by ZipCode


# **get_dealer_sales_region_daily_sales_get_0**
> GenericResponse get_dealer_sales_region_daily_sales_get_0(jwt, brand_name, region_name, day)

Brand sales by region and Day

Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.      The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'  Data availability depends on region and goes back up to 2016.

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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'region_name_example' # str | 
    day = '2013-10-20' # date | 

    try:
        # Brand sales by region and Day
        api_response = api_instance.get_dealer_sales_region_daily_sales_get_0(jwt, brand_name, region_name, day)
        print("The response of AnalystPlanOrGreaterApi->get_dealer_sales_region_daily_sales_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_dealer_sales_region_daily_sales_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | 
 **day** | **date**|  | 

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

# **get_dealer_sales_region_sales_get_1**
> GenericResponse get_dealer_sales_region_sales_get_1(jwt, brand_name, region_name, month)

Premium. Brand sales by region and month

Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.      The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'  Data availability depends on region and goes back up to 2016.

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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'region_name_example' # str | 
    month = '2013-10-20' # date | 

    try:
        # Premium. Brand sales by region and month
        api_response = api_instance.get_dealer_sales_region_sales_get_1(jwt, brand_name, region_name, month)
        print("The response of AnalystPlanOrGreaterApi->get_dealer_sales_region_sales_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_dealer_sales_region_sales_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | 
 **month** | **date**|  | 

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

# **get_listings_by_dealer_listings_by_date_get_0**
> ListingResp get_listings_by_dealer_listings_by_date_get_0(jwt, dealer_id, start_date, end_date, page=page, new_cars=new_cars)

Listings by Dealer ID and Date

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over the given timespan by dealer ID. The ID can be found by calling the /getDealers endpoint.  Maximum time interval between startDate and endDate is 45 days. Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    dealer_id = 56 # int | 
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)

    try:
        # Listings by Dealer ID and Date
        api_response = api_instance.get_listings_by_dealer_listings_by_date_get_0(jwt, dealer_id, start_date, end_date, page=page, new_cars=new_cars)
        print("The response of AnalystPlanOrGreaterApi->get_listings_by_dealer_listings_by_date_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_listings_by_dealer_listings_by_date_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **dealer_id** | **int**|  | 
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]

### Return type

[**ListingResp**](ListingResp.md)

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

# **get_listings_by_dealer_listings_get_0**
> ListingResp get_listings_by_dealer_listings_get_0(jwt, dealer_id, page=page, new_cars=new_cars)

Listings by Dealer ID

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over the last 45 days by dealer ID. The ID can be found by calling the /getDealers endpoint.  Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    dealer_id = 56 # int | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)

    try:
        # Listings by Dealer ID
        api_response = api_instance.get_listings_by_dealer_listings_get_0(jwt, dealer_id, page=page, new_cars=new_cars)
        print("The response of AnalystPlanOrGreaterApi->get_listings_by_dealer_listings_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_listings_by_dealer_listings_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **dealer_id** | **int**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]

### Return type

[**ListingResp**](ListingResp.md)

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

# **get_listings_by_region_and_date_listings_by_region_and_date_get_0**
> ListingResp get_listings_by_region_and_date_listings_by_region_and_date_get_0(jwt, region_name, model_name, start_date, end_date, page=page, new_cars=new_cars)

Listings by Region and Date

See /listings2 endpoint for more flexible listing search. Returns listings active in a region in the given date range [startdate, endDate), or in other words dates that satisfy startDate <= X < endDate. Maximum range is 45 days  Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'region_name_example' # str | 
    model_name = 'model_name_example' # str | 
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)

    try:
        # Listings by Region and Date
        api_response = api_instance.get_listings_by_region_and_date_listings_by_region_and_date_get_0(jwt, region_name, model_name, start_date, end_date, page=page, new_cars=new_cars)
        print("The response of AnalystPlanOrGreaterApi->get_listings_by_region_and_date_listings_by_region_and_date_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_listings_by_region_and_date_listings_by_region_and_date_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | 
 **model_name** | **str**|  | 
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]

### Return type

[**ListingResp**](ListingResp.md)

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

# **get_listings_by_region_listings_by_region_get_0**
> ListingResp get_listings_by_region_listings_by_region_get_0(jwt, region_name, model_name, days_back=days_back, page=page, new_cars=new_cars)

Listings by Region

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over up to the last 45 days by region.  Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'region_name_example' # str | 
    model_name = 'model_name_example' # str | 
    days_back = 10 # int |  (optional) (default to 10)
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)

    try:
        # Listings by Region
        api_response = api_instance.get_listings_by_region_listings_by_region_get_0(jwt, region_name, model_name, days_back=days_back, page=page, new_cars=new_cars)
        print("The response of AnalystPlanOrGreaterApi->get_listings_by_region_listings_by_region_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_listings_by_region_listings_by_region_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | 
 **model_name** | **str**|  | 
 **days_back** | **int**|  | [optional] [default to 10]
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]

### Return type

[**ListingResp**](ListingResp.md)

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

# **get_region_brand_market_share_get_region_brand_market_share_get_0**
> GenericResponse get_region_brand_market_share_get_region_brand_market_share_get_0(jwt, brand_name, region_name=region_name)

Market share of a brand in region

Market share of a given brand in a given region by number of vehicles sold over the last 45 days.

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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Market share of a brand in region
        api_response = api_instance.get_region_brand_market_share_get_region_brand_market_share_get_0(jwt, brand_name, region_name=region_name)
        print("The response of AnalystPlanOrGreaterApi->get_region_brand_market_share_get_region_brand_market_share_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_region_brand_market_share_get_region_brand_market_share_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **brand_name** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

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

# **get_region_market_share_get_region_market_share_get_1**
> GenericResponse get_region_market_share_get_region_market_share_get_1(jwt, region_name=region_name)

Market share of all brands in region

Market share of a all brands in a given region by number of vehicles sold over the last 45 days.

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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Market share of all brands in region
        api_response = api_instance.get_region_market_share_get_region_market_share_get_1(jwt, region_name=region_name)
        print("The response of AnalystPlanOrGreaterApi->get_region_market_share_get_region_market_share_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_region_market_share_get_region_market_share_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **region_name** | **str**|  | [optional] [default to &#39;REGION_STATE_CA&#39;]

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

# **get_vehicle_seen_vehicle_seen_get_1**
> BooleanResp get_vehicle_seen_vehicle_seen_get_1(jwt, vin, after_date)

Checks if a VIN appeared on the market on or after a given date.

Checks our database to see if we have data on a VIN that appeared on the open market on or after the given date with a True/False response.  This endpoint is more cost effective than the /vehicleHistory endpoint if your use case requires searching a large list of vehicles with a low individual likelyhood of appearing on the open market. (For example searching for a specific stolen vehicle).

### Example


```python
import openapi_client
from openapi_client.models.boolean_resp import BooleanResp
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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    vin = 'vin_example' # str | 
    after_date = '2013-10-20' # date | 

    try:
        # Checks if a VIN appeared on the market on or after a given date.
        api_response = api_instance.get_vehicle_seen_vehicle_seen_get_1(jwt, vin, after_date)
        print("The response of AnalystPlanOrGreaterApi->get_vehicle_seen_vehicle_seen_get_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->get_vehicle_seen_vehicle_seen_get_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **vin** | **str**|  | 
 **after_date** | **date**|  | 

### Return type

[**BooleanResp**](BooleanResp.md)

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

# **listings_by_zip_code_and_date_listings_by_zip_code_and_date_get_0**
> ListingResp listings_by_zip_code_and_date_listings_by_zip_code_and_date_get_0(jwt, zip_code, start_date, end_date, page=page, new_cars=new_cars, model_name=model_name)

Listings by ZipCode and Date

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over up to the last 45 days in the provided dealership's zip code. For example 92701. Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    zip_code = 56 # int | 
    start_date = '2013-10-20' # date | 
    end_date = '2013-10-20' # date | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)
    model_name = 'model_name_example' # str |  (optional)

    try:
        # Listings by ZipCode and Date
        api_response = api_instance.listings_by_zip_code_and_date_listings_by_zip_code_and_date_get_0(jwt, zip_code, start_date, end_date, page=page, new_cars=new_cars, model_name=model_name)
        print("The response of AnalystPlanOrGreaterApi->listings_by_zip_code_and_date_listings_by_zip_code_and_date_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->listings_by_zip_code_and_date_listings_by_zip_code_and_date_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **zip_code** | **int**|  | 
 **start_date** | **date**|  | 
 **end_date** | **date**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]
 **model_name** | **str**|  | [optional] 

### Return type

[**ListingResp**](ListingResp.md)

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

# **listings_by_zip_code_listings_by_zip_code_get_0**
> ListingResp listings_by_zip_code_listings_by_zip_code_get_0(jwt, zip_code, page=page, new_cars=new_cars, model_name=model_name)

Listings by ZipCode

See /listings2 endpoint for more flexible listing search. Returns a dealer's listings over up to the last 45 days in the provided dealerhip's zip code. For example 92701. Listing keys are: vin, askPrice, msrp, isNew, firstSeen, lastSeen, modelName, brandName. Results are paginated in chunks of up to 20 vehicles. Prices are in the dealer's local currency (generally USD).

### Example


```python
import openapi_client
from openapi_client.models.listing_resp import ListingResp
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
    api_instance = openapi_client.AnalystPlanOrGreaterApi(api_client)
    jwt = 'jwt_example' # str | 
    zip_code = 56 # int | 
    page = 1 # int |  (optional) (default to 1)
    new_cars = True # bool |  (optional) (default to True)
    model_name = 'model_name_example' # str |  (optional)

    try:
        # Listings by ZipCode
        api_response = api_instance.listings_by_zip_code_listings_by_zip_code_get_0(jwt, zip_code, page=page, new_cars=new_cars, model_name=model_name)
        print("The response of AnalystPlanOrGreaterApi->listings_by_zip_code_listings_by_zip_code_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalystPlanOrGreaterApi->listings_by_zip_code_listings_by_zip_code_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jwt** | **str**|  | 
 **zip_code** | **int**|  | 
 **page** | **int**|  | [optional] [default to 1]
 **new_cars** | **bool**|  | [optional] [default to True]
 **model_name** | **str**|  | [optional] 

### Return type

[**ListingResp**](ListingResp.md)

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

