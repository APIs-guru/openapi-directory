# openapi_client.SupplyDataApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**days_supply_days_supply_get**](SupplyDataApi.md#days_supply_days_supply_get) | **GET** /daysSupply | Days worth of supply left on dealer lots
[**days_to_sell_days_to_sell_get**](SupplyDataApi.md#days_to_sell_days_to_sell_get) | **GET** /daysToSell | Days a vehicle takes to sell


# **days_supply_days_supply_get**
> GenericResponse days_supply_days_supply_get(jwt, brand_name, region_name=region_name)

Days worth of supply left on dealer lots

Average, median, standard deviation, population variance, and whole region average of the  days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on a dealer by dealer basis while the whole region average treats the entire region like a single dealership.  The average field may differ from the whole region average, especially when dealers are out of  a given model.   The available brand and region names can be retrieved from their respective endpoints.

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
    api_instance = openapi_client.SupplyDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Days worth of supply left on dealer lots
        api_response = api_instance.days_supply_days_supply_get(jwt, brand_name, region_name=region_name)
        print("The response of SupplyDataApi->days_supply_days_supply_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SupplyDataApi->days_supply_days_supply_get: %s\n" % e)
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

# **days_to_sell_days_to_sell_get**
> GenericResponse days_to_sell_days_to_sell_get(jwt, brand_name, region_name=region_name)

Days a vehicle takes to sell

Average, median, standard deviation, population variance, and whole region average of the  number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on a dealer by dealer basis while the whole region average treats the entire region like a single dealership.  The average field may differ from the whole region average.  The available brand and region names can be retrieved from their respective endpoints.

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
    api_instance = openapi_client.SupplyDataApi(api_client)
    jwt = 'jwt_example' # str | 
    brand_name = 'brand_name_example' # str | 
    region_name = 'REGION_STATE_CA' # str |  (optional) (default to 'REGION_STATE_CA')

    try:
        # Days a vehicle takes to sell
        api_response = api_instance.days_to_sell_days_to_sell_get(jwt, brand_name, region_name=region_name)
        print("The response of SupplyDataApi->days_to_sell_days_to_sell_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SupplyDataApi->days_to_sell_days_to_sell_get: %s\n" % e)
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

