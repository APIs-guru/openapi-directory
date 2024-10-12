# openapi_client.BillingRoleDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_role_definitions_get_by_billing_account**](BillingRoleDefinitionsApi.md#billing_role_definitions_get_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions/{billingRoleDefinitionName} | 
[**billing_role_definitions_get_by_billing_profile**](BillingRoleDefinitionsApi.md#billing_role_definitions_get_by_billing_profile) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions/{billingRoleDefinitionName} | 
[**billing_role_definitions_get_by_invoice_section**](BillingRoleDefinitionsApi.md#billing_role_definitions_get_by_invoice_section) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions/{billingRoleDefinitionName} | 
[**billing_role_definitions_list_by_billing_account**](BillingRoleDefinitionsApi.md#billing_role_definitions_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions | 
[**billing_role_definitions_list_by_billing_profile**](BillingRoleDefinitionsApi.md#billing_role_definitions_list_by_billing_profile) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions | 
[**billing_role_definitions_list_by_invoice_section**](BillingRoleDefinitionsApi.md#billing_role_definitions_list_by_invoice_section) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions | 


# **billing_role_definitions_get_by_billing_account**
> BillingRoleDefinition billing_role_definitions_get_by_billing_account(api_version, billing_account_name, billing_role_definition_name)



Gets the role definition for a role

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_definition import BillingRoleDefinition
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
    api_instance = openapi_client.BillingRoleDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_role_definition_name = 'billing_role_definition_name_example' # str | role definition id.

    try:
        api_response = api_instance.billing_role_definitions_get_by_billing_account(api_version, billing_account_name, billing_role_definition_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_get_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_get_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_role_definition_name** | **str**| role definition id. | 

### Return type

[**BillingRoleDefinition**](BillingRoleDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_role_definitions_get_by_billing_profile**
> BillingRoleDefinition billing_role_definitions_get_by_billing_profile(api_version, billing_account_name, billing_profile_name, billing_role_definition_name)



Gets the role definition for a role

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_definition import BillingRoleDefinition
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
    api_instance = openapi_client.BillingRoleDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    billing_role_definition_name = 'billing_role_definition_name_example' # str | role definition id.

    try:
        api_response = api_instance.billing_role_definitions_get_by_billing_profile(api_version, billing_account_name, billing_profile_name, billing_role_definition_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_get_by_billing_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_get_by_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **billing_role_definition_name** | **str**| role definition id. | 

### Return type

[**BillingRoleDefinition**](BillingRoleDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_role_definitions_get_by_invoice_section**
> BillingRoleDefinition billing_role_definitions_get_by_invoice_section(api_version, billing_account_name, billing_profile_name, invoice_section_name, billing_role_definition_name)



Gets the role definition for a role

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_definition import BillingRoleDefinition
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
    api_instance = openapi_client.BillingRoleDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    billing_role_definition_name = 'billing_role_definition_name_example' # str | role definition id.

    try:
        api_response = api_instance.billing_role_definitions_get_by_invoice_section(api_version, billing_account_name, billing_profile_name, invoice_section_name, billing_role_definition_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_get_by_invoice_section:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_get_by_invoice_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **billing_role_definition_name** | **str**| role definition id. | 

### Return type

[**BillingRoleDefinition**](BillingRoleDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_role_definitions_list_by_billing_account**
> BillingRoleDefinitionListResult billing_role_definitions_list_by_billing_account(api_version, billing_account_name)



Lists the role definition for a billing account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_definition_list_result import BillingRoleDefinitionListResult
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
    api_instance = openapi_client.BillingRoleDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.

    try:
        api_response = api_instance.billing_role_definitions_list_by_billing_account(api_version, billing_account_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 

### Return type

[**BillingRoleDefinitionListResult**](BillingRoleDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_role_definitions_list_by_billing_profile**
> BillingRoleDefinitionListResult billing_role_definitions_list_by_billing_profile(api_version, billing_account_name, billing_profile_name)



Lists the role definition for a Billing Profile

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_definition_list_result import BillingRoleDefinitionListResult
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
    api_instance = openapi_client.BillingRoleDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.

    try:
        api_response = api_instance.billing_role_definitions_list_by_billing_profile(api_version, billing_account_name, billing_profile_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_list_by_billing_profile:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_list_by_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 

### Return type

[**BillingRoleDefinitionListResult**](BillingRoleDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_role_definitions_list_by_invoice_section**
> BillingRoleDefinitionListResult billing_role_definitions_list_by_invoice_section(api_version, billing_account_name, billing_profile_name, invoice_section_name)



Lists the role definition for an invoice Section

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_definition_list_result import BillingRoleDefinitionListResult
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
    api_instance = openapi_client.BillingRoleDefinitionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.

    try:
        api_response = api_instance.billing_role_definitions_list_by_invoice_section(api_version, billing_account_name, billing_profile_name, invoice_section_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_list_by_invoice_section:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_list_by_invoice_section: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 

### Return type

[**BillingRoleDefinitionListResult**](BillingRoleDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

