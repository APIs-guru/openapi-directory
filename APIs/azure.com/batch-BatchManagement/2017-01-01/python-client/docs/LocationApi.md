# openapi_client.LocationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**location_get_quotas**](LocationApi.md#location_get_quotas) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Batch/locations/{locationName}/quotas | 


# **location_get_quotas**
> BatchLocationQuota location_get_quotas(location_name, api_version, subscription_id)



Gets the Batch service quotas for the specified subscription at the given location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.batch_location_quota import BatchLocationQuota
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
    api_instance = openapi_client.LocationApi(api_client)
    location_name = 'location_name_example' # str | The desired region for the quotas.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    subscription_id = 'subscription_id_example' # str | A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.location_get_quotas(location_name, api_version, subscription_id)
        print("The response of LocationApi->location_get_quotas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationApi->location_get_quotas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The desired region for the quotas. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **subscription_id** | **str**| A unique identifier of a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**BatchLocationQuota**](BatchLocationQuota.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation was successful. The response contains the Batch service quotas of the subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

