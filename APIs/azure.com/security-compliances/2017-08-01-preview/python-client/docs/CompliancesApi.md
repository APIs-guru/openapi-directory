# openapi_client.CompliancesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compliances_get**](CompliancesApi.md#compliances_get) | **GET** /{scope}/providers/Microsoft.Security/compliances/{complianceName} | 
[**compliances_list**](CompliancesApi.md#compliances_list) | **GET** /{scope}/providers/Microsoft.Security/compliances | 


# **compliances_get**
> Compliance compliances_get(api_version, scope, compliance_name)



Details of a specific Compliance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compliance import Compliance
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
    api_instance = openapi_client.CompliancesApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
    compliance_name = 'compliance_name_example' # str | name of the Compliance

    try:
        api_response = api_instance.compliances_get(api_version, scope, compliance_name)
        print("The response of CompliancesApi->compliances_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompliancesApi->compliances_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 
 **compliance_name** | **str**| name of the Compliance | 

### Return type

[**Compliance**](Compliance.md)

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

# **compliances_list**
> ComplianceList compliances_list(api_version, scope)



The Compliance scores of the specific management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.compliance_list import ComplianceList
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
    api_instance = openapi_client.CompliancesApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

    try:
        api_response = api_instance.compliances_list(api_version, scope)
        print("The response of CompliancesApi->compliances_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompliancesApi->compliances_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 

### Return type

[**ComplianceList**](ComplianceList.md)

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

