# openapi_client.GenerateRecommendationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recommendations_generate**](GenerateRecommendationsApi.md#recommendations_generate) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations | 
[**recommendations_get_generate_status**](GenerateRecommendationsApi.md#recommendations_get_generate_status) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Advisor/generateRecommendations/{operationId} | 


# **recommendations_generate**
> recommendations_generate(subscription_id, api_version)



Initiates the recommendation generation or computation process for a subscription. This operation is asynchronous. The generated recommendations are stored in a cache in the Advisor service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GenerateRecommendationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_instance.recommendations_generate(subscription_id, api_version)
    except Exception as e:
        print("Exception when calling GenerateRecommendationsApi->recommendations_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted. Recommendation generation has been accepted. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - The URL where the status of the asynchronous operation can be checked. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_get_generate_status**
> recommendations_get_generate_status(subscription_id, operation_id, api_version)



Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GenerateRecommendationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    operation_id = 'operation_id_example' # str | The operation ID, which can be found from the Location field in the generate recommendation response header.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_instance.recommendations_get_generate_status(subscription_id, operation_id, api_version)
    except Exception as e:
        print("Exception when calling GenerateRecommendationsApi->recommendations_get_generate_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. | 
 **operation_id** | **str**| The operation ID, which can be found from the Location field in the generate recommendation response header. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted. Recommendation generation is in progress. |  -  |
**204** | NoContent. Recommendation generation has been completed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

