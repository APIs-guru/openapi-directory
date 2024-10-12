# openapi_client.ComplianceResultsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compliance_results_get**](ComplianceResultsApi.md#compliance_results_get) | **GET** /{resourceId}/providers/Microsoft.Security/complianceResults/{complianceResultName} | 
[**compliance_results_list**](ComplianceResultsApi.md#compliance_results_list) | **GET** /{scope}/providers/Microsoft.Security/complianceResults | 


# **compliance_results_get**
> ComplianceResult compliance_results_get(api_version, resource_id, compliance_result_name)



Security Compliance Result

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compliance_result import ComplianceResult
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
    api_instance = openapi_client.ComplianceResultsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    resource_id = 'resource_id_example' # str | The identifier of the resource.
    compliance_result_name = 'compliance_result_name_example' # str | name of the desired assessment compliance result

    try:
        api_response = api_instance.compliance_results_get(api_version, resource_id, compliance_result_name)
        print("The response of ComplianceResultsApi->compliance_results_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceResultsApi->compliance_results_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **resource_id** | **str**| The identifier of the resource. | 
 **compliance_result_name** | **str**| name of the desired assessment compliance result | 

### Return type

[**ComplianceResult**](ComplianceResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **compliance_results_list**
> ComplianceResultList compliance_results_list(api_version, scope)



Security compliance results in the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compliance_result_list import ComplianceResultList
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
    api_instance = openapi_client.ComplianceResultsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

    try:
        api_response = api_instance.compliance_results_list(api_version, scope)
        print("The response of ComplianceResultsApi->compliance_results_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ComplianceResultsApi->compliance_results_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 

### Return type

[**ComplianceResultList**](ComplianceResultList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

