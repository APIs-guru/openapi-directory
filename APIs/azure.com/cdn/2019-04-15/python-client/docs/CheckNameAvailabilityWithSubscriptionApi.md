# openapi_client.CheckNameAvailabilityWithSubscriptionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_name_availability_with_subscription**](CheckNameAvailabilityWithSubscriptionApi.md#check_name_availability_with_subscription) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Cdn/checkNameAvailability | 


# **check_name_availability_with_subscription**
> CheckNameAvailabilityOutput check_name_availability_with_subscription(subscription_id, api_version, check_name_availability_input)



Check the availability of a resource name. This is needed for resources where name is globally unique, such as a CDN endpoint.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_name_availability_input import CheckNameAvailabilityInput
from openapi_client.models.check_name_availability_output import CheckNameAvailabilityOutput
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
    api_instance = openapi_client.CheckNameAvailabilityWithSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-04-02.
    check_name_availability_input = openapi_client.CheckNameAvailabilityInput() # CheckNameAvailabilityInput | Input to check.

    try:
        api_response = api_instance.check_name_availability_with_subscription(subscription_id, api_version, check_name_availability_input)
        print("The response of CheckNameAvailabilityWithSubscriptionApi->check_name_availability_with_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckNameAvailabilityWithSubscriptionApi->check_name_availability_with_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-04-02. | 
 **check_name_availability_input** | [**CheckNameAvailabilityInput**](CheckNameAvailabilityInput.md)| Input to check. | 

### Return type

[**CheckNameAvailabilityOutput**](CheckNameAvailabilityOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | CDN error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

