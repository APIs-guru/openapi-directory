# openapi_client.CardApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_card_get**](CardApi.md#api_card_get) | **GET** /api/Card | Get Card
[**api_card_types_get**](CardApi.md#api_card_types_get) | **GET** /api/Card/Types | Get available card types


# **api_card_get**
> api_card_get(type=type, x_api_key=x_api_key)

Get Card

### Example


```python
import openapi_client
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
    api_instance = openapi_client.CardApi(api_client)
    type = 'type_example' # str |  (optional)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get Card
        api_instance.api_card_get(type=type, x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling CardApi->api_card_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | [optional] 
 **x_api_key** | **str**| Enter your key | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_card_types_get**
> api_card_types_get(x_api_key=x_api_key)

Get available card types

### Example


```python
import openapi_client
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
    api_instance = openapi_client.CardApi(api_client)
    x_api_key = 'x_api_key_example' # str | Enter your key (optional)

    try:
        # Get available card types
        api_instance.api_card_types_get(x_api_key=x_api_key)
    except Exception as e:
        print("Exception when calling CardApi->api_card_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_api_key** | **str**| Enter your key | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

