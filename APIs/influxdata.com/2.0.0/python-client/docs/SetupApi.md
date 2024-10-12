# openapi_client.SetupApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_setup**](SetupApi.md#get_setup) | **GET** /setup | Check if database has default user, org, bucket
[**post_setup**](SetupApi.md#post_setup) | **POST** /setup | Set up initial user, org and bucket


# **get_setup**
> IsOnboarding get_setup(zap_trace_span=zap_trace_span)

Check if database has default user, org, bucket

Returns `true` if no default user, organization, or bucket has been created.

### Example


```python
import openapi_client
from openapi_client.models.is_onboarding import IsOnboarding
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SetupApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Check if database has default user, org, bucket
        api_response = api_instance.get_setup(zap_trace_span=zap_trace_span)
        print("The response of SetupApi->get_setup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SetupApi->get_setup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**IsOnboarding**](IsOnboarding.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | allowed true or false |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_setup**
> OnboardingResponse post_setup(onboarding_request, zap_trace_span=zap_trace_span)

Set up initial user, org and bucket

Post an onboarding request to set up initial user, org and bucket.

### Example


```python
import openapi_client
from openapi_client.models.onboarding_request import OnboardingRequest
from openapi_client.models.onboarding_response import OnboardingResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SetupApi(api_client)
    onboarding_request = openapi_client.OnboardingRequest() # OnboardingRequest | Source to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Set up initial user, org and bucket
        api_response = api_instance.post_setup(onboarding_request, zap_trace_span=zap_trace_span)
        print("The response of SetupApi->post_setup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SetupApi->post_setup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **onboarding_request** | [**OnboardingRequest**](OnboardingRequest.md)| Source to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**OnboardingResponse**](OnboardingResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created default user, bucket, org |  -  |
**0** | Non 2XX error response from server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

