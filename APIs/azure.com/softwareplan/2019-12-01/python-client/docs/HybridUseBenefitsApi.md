# openapi_client.HybridUseBenefitsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hybrid_use_benefit_list**](HybridUseBenefitsApi.md#hybrid_use_benefit_list) | **GET** /{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits | 


# **hybrid_use_benefit_list**
> HybridUseBenefitListResult hybrid_use_benefit_list(scope, api_version, filter=filter)



Get all hybrid use benefits associated with an ARM resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hybrid_use_benefit_list_result import HybridUseBenefitListResult
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
    api_instance = openapi_client.HybridUseBenefitsApi(api_client)
    scope = 'scope_example' # str | The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
    api_version = 'api_version_example' # str | The api-version to be used by the service
    filter = 'filter_example' # str | Supports applying filter on the type of SKU (optional)

    try:
        api_response = api_instance.hybrid_use_benefit_list(scope, api_version, filter=filter)
        print("The response of HybridUseBenefitsApi->hybrid_use_benefit_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridUseBenefitsApi->hybrid_use_benefit_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now | 
 **api_version** | **str**| The api-version to be used by the service | 
 **filter** | **str**| Supports applying filter on the type of SKU | [optional] 

### Return type

[**HybridUseBenefitListResult**](HybridUseBenefitListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - returns an array of plans at that scope |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

