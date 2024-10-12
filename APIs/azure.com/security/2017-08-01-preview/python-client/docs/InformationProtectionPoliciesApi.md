# openapi_client.InformationProtectionPoliciesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**information_protection_policies_create_or_update**](InformationProtectionPoliciesApi.md#information_protection_policies_create_or_update) | **PUT** /{scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName} | 
[**information_protection_policies_get**](InformationProtectionPoliciesApi.md#information_protection_policies_get) | **GET** /{scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName} | 
[**information_protection_policies_list**](InformationProtectionPoliciesApi.md#information_protection_policies_list) | **GET** /{scope}/providers/Microsoft.Security/informationProtectionPolicies | 


# **information_protection_policies_create_or_update**
> InformationProtectionPolicy information_protection_policies_create_or_update(api_version, scope, information_protection_policy_name)



Details of the information protection policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.information_protection_policy import InformationProtectionPolicy
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
    api_instance = openapi_client.InformationProtectionPoliciesApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
    information_protection_policy_name = 'information_protection_policy_name_example' # str | Name of the information protection policy.

    try:
        api_response = api_instance.information_protection_policies_create_or_update(api_version, scope, information_protection_policy_name)
        print("The response of InformationProtectionPoliciesApi->information_protection_policies_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InformationProtectionPoliciesApi->information_protection_policies_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 
 **information_protection_policy_name** | **str**| Name of the information protection policy. | 

### Return type

[**InformationProtectionPolicy**](InformationProtectionPolicy.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **information_protection_policies_get**
> InformationProtectionPolicy information_protection_policies_get(api_version, scope, information_protection_policy_name)



Details of the information protection policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.information_protection_policy import InformationProtectionPolicy
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
    api_instance = openapi_client.InformationProtectionPoliciesApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
    information_protection_policy_name = 'information_protection_policy_name_example' # str | Name of the information protection policy.

    try:
        api_response = api_instance.information_protection_policies_get(api_version, scope, information_protection_policy_name)
        print("The response of InformationProtectionPoliciesApi->information_protection_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InformationProtectionPoliciesApi->information_protection_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 
 **information_protection_policy_name** | **str**| Name of the information protection policy. | 

### Return type

[**InformationProtectionPolicy**](InformationProtectionPolicy.md)

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

# **information_protection_policies_list**
> InformationProtectionPolicyList information_protection_policies_list(api_version, scope)



Information protection policies of a specific management group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.information_protection_policy_list import InformationProtectionPolicyList
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
    api_instance = openapi_client.InformationProtectionPoliciesApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    scope = 'scope_example' # str | Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).

    try:
        api_response = api_instance.information_protection_policies_list(api_version, scope)
        print("The response of InformationProtectionPoliciesApi->information_protection_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InformationProtectionPoliciesApi->information_protection_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **scope** | **str**| Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName). | 

### Return type

[**InformationProtectionPolicyList**](InformationProtectionPolicyList.md)

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

