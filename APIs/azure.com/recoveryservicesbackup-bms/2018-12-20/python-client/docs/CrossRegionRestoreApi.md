# openapi_client.CrossRegionRestoreApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cross_region_restore_trigger**](CrossRegionRestoreApi.md#cross_region_restore_trigger) | **POST** /Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupCrossRegionRestore | Restores the specified backed up data in a different region as compared to where the data is backed up.


# **cross_region_restore_trigger**
> cross_region_restore_trigger(api_version, azure_region, subscription_id, parameters)

Restores the specified backed up data in a different region as compared to where the data is backed up.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.cross_region_restore_request_resource import CrossRegionRestoreRequestResource
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
    api_instance = openapi_client.CrossRegionRestoreApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    azure_region = 'azure_region_example' # str | Azure region to hit Api
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    parameters = openapi_client.CrossRegionRestoreRequestResource() # CrossRegionRestoreRequestResource | resource cross region restore request

    try:
        # Restores the specified backed up data in a different region as compared to where the data is backed up.
        api_instance.cross_region_restore_trigger(api_version, azure_region, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling CrossRegionRestoreApi->cross_region_restore_trigger: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **azure_region** | **str**| Azure region to hit Api | 
 **subscription_id** | **str**| The subscription Id. | 
 **parameters** | [**CrossRegionRestoreRequestResource**](CrossRegionRestoreRequestResource.md)| resource cross region restore request | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

