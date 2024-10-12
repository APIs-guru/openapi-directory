# openapi_client.RealUserMetricsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**traffic_manager_user_metrics_keys_create_or_update**](RealUserMetricsApi.md#traffic_manager_user_metrics_keys_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys | 
[**traffic_manager_user_metrics_keys_delete**](RealUserMetricsApi.md#traffic_manager_user_metrics_keys_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys | 
[**traffic_manager_user_metrics_keys_get**](RealUserMetricsApi.md#traffic_manager_user_metrics_keys_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/trafficManagerUserMetricsKeys | 


# **traffic_manager_user_metrics_keys_create_or_update**
> TrafficManagerUserMetricsKeyModel traffic_manager_user_metrics_keys_create_or_update(api_version, subscription_id)



Create or update a subscription-level key used for Real User Metrics collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.traffic_manager_user_metrics_key_model import TrafficManagerUserMetricsKeyModel
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
    api_instance = openapi_client.RealUserMetricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.traffic_manager_user_metrics_keys_create_or_update(api_version, subscription_id)
        print("The response of RealUserMetricsApi->traffic_manager_user_metrics_keys_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RealUserMetricsApi->traffic_manager_user_metrics_keys_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**TrafficManagerUserMetricsKeyModel**](TrafficManagerUserMetricsKeyModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A new subscription-level key has been created for Real User Metrics collection. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **traffic_manager_user_metrics_keys_delete**
> DeleteOperationResult traffic_manager_user_metrics_keys_delete(api_version, subscription_id)



Delete a subscription-level key used for Real User Metrics collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.delete_operation_result import DeleteOperationResult
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
    api_instance = openapi_client.RealUserMetricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.traffic_manager_user_metrics_keys_delete(api_version, subscription_id)
        print("The response of RealUserMetricsApi->traffic_manager_user_metrics_keys_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RealUserMetricsApi->traffic_manager_user_metrics_keys_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DeleteOperationResult**](DeleteOperationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Traffic Manager Real User Metrics key was deleted successfully. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **traffic_manager_user_metrics_keys_get**
> TrafficManagerUserMetricsKeyModel traffic_manager_user_metrics_keys_get(api_version, subscription_id)



Get the subscription-level key used for Real User Metrics collection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.traffic_manager_user_metrics_key_model import TrafficManagerUserMetricsKeyModel
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
    api_instance = openapi_client.RealUserMetricsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.traffic_manager_user_metrics_keys_get(api_version, subscription_id)
        print("The response of RealUserMetricsApi->traffic_manager_user_metrics_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RealUserMetricsApi->traffic_manager_user_metrics_keys_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**TrafficManagerUserMetricsKeyModel**](TrafficManagerUserMetricsKeyModel.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The subscription-level Traffic Manager Real User Metrics key. |  -  |
**0** | Default response. It will be deserialized as per the Error definition. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

