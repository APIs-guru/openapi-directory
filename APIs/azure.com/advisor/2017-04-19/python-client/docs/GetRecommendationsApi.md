# openapi_client.GetRecommendationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recommendations_get**](GetRecommendationsApi.md#recommendations_get) | **GET** /{resourceUri}/providers/Microsoft.Advisor/recommendations/{recommendationId} | 
[**recommendations_list**](GetRecommendationsApi.md#recommendations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Advisor/recommendations | 


# **recommendations_get**
> ResourceRecommendationBase recommendations_get(resource_uri, recommendation_id, api_version)



Obtains details of a cached recommendation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_recommendation_base import ResourceRecommendationBase
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
    api_instance = openapi_client.GetRecommendationsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
    recommendation_id = 'recommendation_id_example' # str | The recommendation ID.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.

    try:
        api_response = api_instance.recommendations_get(resource_uri, recommendation_id, api_version)
        print("The response of GetRecommendationsApi->recommendations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetRecommendationsApi->recommendations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies. | 
 **recommendation_id** | **str**| The recommendation ID. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 

### Return type

[**ResourceRecommendationBase**](ResourceRecommendationBase.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully got recommendation detail. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recommendations_list**
> ResourceRecommendationBaseListResult recommendations_list(subscription_id, api_version, filter=filter, top=top, skip_token=skip_token)



Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.resource_recommendation_base_list_result import ResourceRecommendationBaseListResult
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
    api_instance = openapi_client.GetRecommendationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The version of the API to be used with the client request.
    filter = 'filter_example' # str | The filter to apply to the recommendations. (optional)
    top = 56 # int | The number of recommendations per page if a paged version of this API is being used. (optional)
    skip_token = 'skip_token_example' # str | The page-continuation token to use with a paged version of this API. (optional)

    try:
        api_response = api_instance.recommendations_list(subscription_id, api_version, filter=filter, top=top, skip_token=skip_token)
        print("The response of GetRecommendationsApi->recommendations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GetRecommendationsApi->recommendations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The version of the API to be used with the client request. | 
 **filter** | **str**| The filter to apply to the recommendations. | [optional] 
 **top** | **int**| The number of recommendations per page if a paged version of this API is being used. | [optional] 
 **skip_token** | **str**| The page-continuation token to use with a paged version of this API. | [optional] 

### Return type

[**ResourceRecommendationBaseListResult**](ResourceRecommendationBaseListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully obtained cached recommendations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

