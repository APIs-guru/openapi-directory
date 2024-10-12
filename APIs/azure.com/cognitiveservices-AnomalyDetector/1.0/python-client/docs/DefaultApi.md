# openapi_client.DefaultApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**change_point_detect**](DefaultApi.md#change_point_detect) | **POST** /timeseries/changePoint/detect | Detect change point for the entire series
[**entire_detect**](DefaultApi.md#entire_detect) | **POST** /timeseries/entire/detect | Detect anomalies for the entire series in batch.
[**last_detect**](DefaultApi.md#last_detect) | **POST** /timeseries/last/detect | Detect anomaly status of the latest point in time series.


# **change_point_detect**
> ChangePointDetectResponse change_point_detect(body)

Detect change point for the entire series

Evaluate change point score of every series point

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.change_point_detect_request import ChangePointDetectRequest
from openapi_client.models.change_point_detect_response import ChangePointDetectResponse
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

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.ChangePointDetectRequest() # ChangePointDetectRequest | Time series points and granularity is needed. Advanced model parameters can also be set in the request if needed.

    try:
        # Detect change point for the entire series
        api_response = api_instance.change_point_detect(body)
        print("The response of DefaultApi->change_point_detect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->change_point_detect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ChangePointDetectRequest**](ChangePointDetectRequest.md)| Time series points and granularity is needed. Advanced model parameters can also be set in the request if needed. | 

### Return type

[**ChangePointDetectResponse**](ChangePointDetectResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **entire_detect**
> EntireDetectResponse entire_detect(body)

Detect anomalies for the entire series in batch.

This operation generates a model using an entire series, each point is detected with the same model. With this method, points before and after a certain point are used to determine whether it is an anomaly. The entire detection can give user an overall status of the time series.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.entire_detect_response import EntireDetectResponse
from openapi_client.models.request import Request
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

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.Request() # Request | Time series points and period if needed. Advanced model parameters can also be set in the request.

    try:
        # Detect anomalies for the entire series in batch.
        api_response = api_instance.entire_detect(body)
        print("The response of DefaultApi->entire_detect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->entire_detect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Request**](Request.md)| Time series points and period if needed. Advanced model parameters can also be set in the request. | 

### Return type

[**EntireDetectResponse**](EntireDetectResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **last_detect**
> LastDetectResponse last_detect(body)

Detect anomaly status of the latest point in time series.

This operation generates a model using points before the latest one. With this method, only historical points are used to determine whether the target point is an anomaly. The latest point detecting operation matches the scenario of real-time monitoring of business metrics.

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.last_detect_response import LastDetectResponse
from openapi_client.models.request import Request
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

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    body = openapi_client.Request() # Request | Time series points and period if needed. Advanced model parameters can also be set in the request.

    try:
        # Detect anomaly status of the latest point in time series.
        api_response = api_instance.last_detect(body)
        print("The response of DefaultApi->last_detect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->last_detect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Request**](Request.md)| Time series points and period if needed. Advanced model parameters can also be set in the request. | 

### Return type

[**LastDetectResponse**](LastDetectResponse.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

