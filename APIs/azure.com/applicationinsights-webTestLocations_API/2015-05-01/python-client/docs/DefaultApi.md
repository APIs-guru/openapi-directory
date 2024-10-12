# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**web_test_locations_list**](DefaultApi.md#web_test_locations_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/syntheticmonitorlocations | 


# **web_test_locations_list**
> ApplicationInsightsWebTestLocationsListResult web_test_locations_list(resource_group_name, api_version, subscription_id, resource_name)



Gets a list of web test locations available to this Application Insights component.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.application_insights_web_test_locations_list_result import ApplicationInsightsWebTestLocationsListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group. The name is case insensitive.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    resource_name = 'resource_name_example' # str | The name of the Application Insights component resource.

    try:
        api_response = api_instance.web_test_locations_list(resource_group_name, api_version, subscription_id, resource_name)
        print("The response of DefaultApi->web_test_locations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->web_test_locations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. The name is case insensitive. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 
 **resource_name** | **str**| The name of the Application Insights component resource. | 

### Return type

[**ApplicationInsightsWebTestLocationsListResult**](ApplicationInsightsWebTestLocationsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list containing 0 or more web test location names available to the Application Insights component. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

