# openapi_client.CheckNameAvailabilityApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_name_availability_execute**](CheckNameAvailabilityApi.md#check_name_availability_execute) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DBforPostgreSQL/checkNameAvailability | 


# **check_name_availability_execute**
> NameAvailability check_name_availability_execute(api_version, subscription_id, name_availability_request)



Check the availability of name for resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.name_availability import NameAvailability
from openapi_client.models.name_availability_request import NameAvailabilityRequest
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
    api_instance = openapi_client.CheckNameAvailabilityApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    name_availability_request = openapi_client.NameAvailabilityRequest() # NameAvailabilityRequest | The required parameters for checking if resource name is available.

    try:
        api_response = api_instance.check_name_availability_execute(api_version, subscription_id, name_availability_request)
        print("The response of CheckNameAvailabilityApi->check_name_availability_execute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckNameAvailabilityApi->check_name_availability_execute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **name_availability_request** | [**NameAvailabilityRequest**](NameAvailabilityRequest.md)| The required parameters for checking if resource name is available. | 

### Return type

[**NameAvailability**](NameAvailability.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

