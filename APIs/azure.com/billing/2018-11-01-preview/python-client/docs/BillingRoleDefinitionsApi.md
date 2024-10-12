# openapi_client.BillingRoleDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_role_definitions_get_by_billing_account_name**](BillingRoleDefinitionsApi.md#billing_role_definitions_get_by_billing_account_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingRoleDefinitions/{billingRoleDefinitionName} | 
[**billing_role_definitions_get_by_billing_profile_name**](BillingRoleDefinitionsApi.md#billing_role_definitions_get_by_billing_profile_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/providers/Microsoft.Billing/billingRoleDefinitions/{billingRoleDefinitionName} | 
[**billing_role_definitions_get_by_invoice_section_name**](BillingRoleDefinitionsApi.md#billing_role_definitions_get_by_invoice_section_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Billing/billingRoleDefinitions/{billingRoleDefinitionName} | 
[**billing_role_definitions_list_by_billing_account_name**](BillingRoleDefinitionsApi.md#billing_role_definitions_list_by_billing_account_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingRoleDefinitions | 
[**billing_role_definitions_list_by_billing_profile_name**](BillingRoleDefinitionsApi.md#billing_role_definitions_list_by_billing_profile_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/providers/Microsoft.Billing/billingRoleDefinitions | 
[**billing_role_definitions_list_by_invoice_section_name**](BillingRoleDefinitionsApi.md#billing_role_definitions_list_by_invoice_section_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Billing/billingRoleDefinitions | 


# **billing_role_definitions_get_by_billing_account_name**
> BillingRoleDefinition billing_role_definitions_get_by_billing_account_name(api_version, billing_account_name, billing_role_definition_name)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_role_definition_name = 'billing_role_definition_name_example' # str | role definition id.

    try:
        api_response = api_instance.billing_role_definitions_get_by_billing_account_name(api_version, billing_account_name, billing_role_definition_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_get_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_get_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
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

# **billing_role_definitions_get_by_billing_profile_name**
> BillingRoleDefinition billing_role_definitions_get_by_billing_profile_name(api_version, billing_account_name, billing_profile_name, billing_role_definition_name)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    billing_role_definition_name = 'billing_role_definition_name_example' # str | role definition id.

    try:
        api_response = api_instance.billing_role_definitions_get_by_billing_profile_name(api_version, billing_account_name, billing_profile_name, billing_role_definition_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_get_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_get_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
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

# **billing_role_definitions_get_by_invoice_section_name**
> BillingRoleDefinition billing_role_definitions_get_by_invoice_section_name(api_version, billing_account_name, invoice_section_name, billing_role_definition_name)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    billing_role_definition_name = 'billing_role_definition_name_example' # str | role definition id.

    try:
        api_response = api_instance.billing_role_definitions_get_by_invoice_section_name(api_version, billing_account_name, invoice_section_name, billing_role_definition_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_get_by_invoice_section_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_get_by_invoice_section_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
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

# **billing_role_definitions_list_by_billing_account_name**
> BillingRoleDefinitionListResult billing_role_definitions_list_by_billing_account_name(api_version, billing_account_name)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.

    try:
        api_response = api_instance.billing_role_definitions_list_by_billing_account_name(api_version, billing_account_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_list_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_list_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 

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

# **billing_role_definitions_list_by_billing_profile_name**
> BillingRoleDefinitionListResult billing_role_definitions_list_by_billing_profile_name(api_version, billing_account_name, billing_profile_name)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.

    try:
        api_response = api_instance.billing_role_definitions_list_by_billing_profile_name(api_version, billing_account_name, billing_profile_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_list_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_list_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
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

# **billing_role_definitions_list_by_invoice_section_name**
> BillingRoleDefinitionListResult billing_role_definitions_list_by_invoice_section_name(api_version, billing_account_name, invoice_section_name)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.

    try:
        api_response = api_instance.billing_role_definitions_list_by_invoice_section_name(api_version, billing_account_name, invoice_section_name)
        print("The response of BillingRoleDefinitionsApi->billing_role_definitions_list_by_invoice_section_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleDefinitionsApi->billing_role_definitions_list_by_invoice_section_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
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

