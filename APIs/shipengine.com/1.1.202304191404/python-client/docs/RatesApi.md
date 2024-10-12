# openapi_client.RatesApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculate_rates**](RatesApi.md#calculate_rates) | **POST** /v1/rates | Get Shipping Rates
[**compare_bulk_rates**](RatesApi.md#compare_bulk_rates) | **POST** /v1/rates/bulk | Get Bulk Rates
[**estimate_rates**](RatesApi.md#estimate_rates) | **POST** /v1/rates/estimate | Estimate Rates
[**get_rate_by_id**](RatesApi.md#get_rate_by_id) | **GET** /v1/rates/{rate_id} | Get Rate By ID


# **calculate_rates**
> CalculateRatesResponseBody calculate_rates(calculate_rates_request_body)

Get Shipping Rates

It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option; so we provide functionality to show you all your options! 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.calculate_rates_request_body import CalculateRatesRequestBody
from openapi_client.models.calculate_rates_response_body import CalculateRatesResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RatesApi(api_client)
    calculate_rates_request_body = openapi_client.CalculateRatesRequestBody() # CalculateRatesRequestBody | 

    try:
        # Get Shipping Rates
        api_response = api_instance.calculate_rates(calculate_rates_request_body)
        print("The response of RatesApi->calculate_rates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RatesApi->calculate_rates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **calculate_rates_request_body** | [**CalculateRatesRequestBody**](CalculateRatesRequestBody.md)|  | 

### Return type

[**CalculateRatesResponseBody**](CalculateRatesResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compare_bulk_rates**
> List[BulkRate] compare_bulk_rates(compare_bulk_rates_request_body)

Get Bulk Rates

Get Bulk Shipment Rates

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.bulk_rate import BulkRate
from openapi_client.models.compare_bulk_rates_request_body import CompareBulkRatesRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RatesApi(api_client)
    compare_bulk_rates_request_body = openapi_client.CompareBulkRatesRequestBody() # CompareBulkRatesRequestBody | 

    try:
        # Get Bulk Rates
        api_response = api_instance.compare_bulk_rates(compare_bulk_rates_request_body)
        print("The response of RatesApi->compare_bulk_rates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RatesApi->compare_bulk_rates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **compare_bulk_rates_request_body** | [**CompareBulkRatesRequestBody**](CompareBulkRatesRequestBody.md)|  | 

### Return type

[**List[BulkRate]**](BulkRate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **estimate_rates**
> List[RateEstimate] estimate_rates(estimate_rates_request_body)

Estimate Rates

Get Rate Estimates

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.estimate_rates_request_body import EstimateRatesRequestBody
from openapi_client.models.rate_estimate import RateEstimate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RatesApi(api_client)
    estimate_rates_request_body = openapi_client.EstimateRatesRequestBody() # EstimateRatesRequestBody | 

    try:
        # Estimate Rates
        api_response = api_instance.estimate_rates(estimate_rates_request_body)
        print("The response of RatesApi->estimate_rates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RatesApi->estimate_rates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **estimate_rates_request_body** | [**EstimateRatesRequestBody**](EstimateRatesRequestBody.md)|  | 

### Return type

[**List[RateEstimate]**](RateEstimate.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rate_by_id**
> GetRateByIdResponseBody get_rate_by_id(rate_id)

Get Rate By ID

Retrieve a previously queried rate by its ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_rate_by_id_response_body import GetRateByIdResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RatesApi(api_client)
    rate_id = 'rate_id_example' # str | Rate ID

    try:
        # Get Rate By ID
        api_response = api_instance.get_rate_by_id(rate_id)
        print("The response of RatesApi->get_rate_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RatesApi->get_rate_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate_id** | **str**| Rate ID | 

### Return type

[**GetRateByIdResponseBody**](GetRateByIdResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

