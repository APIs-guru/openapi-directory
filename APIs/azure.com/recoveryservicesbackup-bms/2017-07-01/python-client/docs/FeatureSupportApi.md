# openapi_client.FeatureSupportApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feature_support_validate**](FeatureSupportApi.md#feature_support_validate) | **POST** /Subscriptions/{subscriptionId}/providers/Microsoft.RecoveryServices/locations/{azureRegion}/backupValidateFeatures | It will validate if given feature with resource properties is supported in service


# **feature_support_validate**
> AzureVMResourceFeatureSupportResponse feature_support_validate(api_version, azure_region, subscription_id, parameters)

It will validate if given feature with resource properties is supported in service

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.azure_vm_resource_feature_support_response import AzureVMResourceFeatureSupportResponse
from openapi_client.models.feature_support_request import FeatureSupportRequest
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
    api_instance = openapi_client.FeatureSupportApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    azure_region = 'azure_region_example' # str | Azure region to hit Api
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    parameters = openapi_client.FeatureSupportRequest() # FeatureSupportRequest | Feature support request object

    try:
        # It will validate if given feature with resource properties is supported in service
        api_response = api_instance.feature_support_validate(api_version, azure_region, subscription_id, parameters)
        print("The response of FeatureSupportApi->feature_support_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeatureSupportApi->feature_support_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **azure_region** | **str**| Azure region to hit Api | 
 **subscription_id** | **str**| The subscription Id. | 
 **parameters** | [**FeatureSupportRequest**](FeatureSupportRequest.md)| Feature support request object | 

### Return type

[**AzureVMResourceFeatureSupportResponse**](AzureVMResourceFeatureSupportResponse.md)

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

