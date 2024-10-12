# openapi_client.LocationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locations_get_capability**](LocationsApi.md#locations_get_capability) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DataLakeAnalytics/locations/{location}/capability | 


# **locations_get_capability**
> CapabilityInformation locations_get_capability(subscription_id, location, api_version)



Gets subscription-level properties and limits for Data Lake Analytics specified by resource location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.capability_information import CapabilityInformation
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
    api_instance = openapi_client.LocationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    location = 'location_example' # str | The resource location without whitespace.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.locations_get_capability(subscription_id, location, api_version)
        print("The response of LocationsApi->locations_get_capability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->locations_get_capability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Get subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **location** | **str**| The resource location without whitespace. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**CapabilityInformation**](CapabilityInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the subscription-level properties and limits for Data Lake Analytics specified by resource location. |  -  |
**404** | Subscription not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

