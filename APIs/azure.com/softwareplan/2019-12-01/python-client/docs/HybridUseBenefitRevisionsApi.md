# openapi_client.HybridUseBenefitRevisionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hybrid_use_benefit_revision_list**](HybridUseBenefitRevisionsApi.md#hybrid_use_benefit_revision_list) | **GET** /{scope}/providers/Microsoft.SoftwarePlan/hybridUseBenefits/{planId}/revisions | 


# **hybrid_use_benefit_revision_list**
> HybridUseBenefitListResult hybrid_use_benefit_revision_list(scope, plan_id, api_version)



Gets the version history of a hybrid use benefit

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
    api_instance = openapi_client.HybridUseBenefitRevisionsApi(api_client)
    scope = 'scope_example' # str | The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now
    plan_id = 'plan_id_example' # str | This is a unique identifier for a plan. Should be a guid.
    api_version = 'api_version_example' # str | The api-version to be used by the service

    try:
        api_response = api_instance.hybrid_use_benefit_revision_list(scope, plan_id, api_version)
        print("The response of HybridUseBenefitRevisionsApi->hybrid_use_benefit_revision_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HybridUseBenefitRevisionsApi->hybrid_use_benefit_revision_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope at which the operation is performed. This is limited to Microsoft.Compute/virtualMachines and Microsoft.Compute/hostGroups/hosts for now | 
 **plan_id** | **str**| This is a unique identifier for a plan. Should be a guid. | 
 **api_version** | **str**| The api-version to be used by the service | 

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
**200** | OK - returns an array of plans ordered by revision |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

