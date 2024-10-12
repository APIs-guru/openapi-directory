# openapi_client.SubscriptionUsagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscription_usages_get**](SubscriptionUsagesApi.md#subscription_usages_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/usages/{usageName} | 
[**subscription_usages_list_by_location**](SubscriptionUsagesApi.md#subscription_usages_list_by_location) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/usages | 


# **subscription_usages_get**
> SubscriptionUsage subscription_usages_get(location_name, usage_name, subscription_id, api_version)



Gets a subscription usage metric.

### Example


```python
import openapi_client
from openapi_client.models.subscription_usage import SubscriptionUsage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubscriptionUsagesApi(api_client)
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    usage_name = 'usage_name_example' # str | Name of usage metric to return.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.subscription_usages_get(location_name, usage_name, subscription_id, api_version)
        print("The response of SubscriptionUsagesApi->subscription_usages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionUsagesApi->subscription_usages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The name of the region where the resource is located. | 
 **usage_name** | **str**| Name of usage metric to return. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SubscriptionUsage**](SubscriptionUsage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved particular subscription location usage. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidLocation - An invalid location was specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_usages_list_by_location**
> SubscriptionUsageListResult subscription_usages_list_by_location(location_name, subscription_id, api_version)



Gets all subscription usage metrics in a given location.

### Example


```python
import openapi_client
from openapi_client.models.subscription_usage_list_result import SubscriptionUsageListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SubscriptionUsagesApi(api_client)
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.subscription_usages_list_by_location(location_name, subscription_id, api_version)
        print("The response of SubscriptionUsagesApi->subscription_usages_list_by_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionUsagesApi->subscription_usages_list_by_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The name of the region where the resource is located. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SubscriptionUsageListResult**](SubscriptionUsageListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the subscription location usages. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidLocation - An invalid location was specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

