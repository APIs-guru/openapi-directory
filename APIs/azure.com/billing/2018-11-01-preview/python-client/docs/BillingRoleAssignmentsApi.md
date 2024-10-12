# openapi_client.BillingRoleAssignmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_role_assignments_add_by_billing_account_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_add_by_billing_account_name) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/createBillingRoleAssignment | 
[**billing_role_assignments_add_by_billing_profile_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_add_by_billing_profile_name) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/providers/Microsoft.Billing/createBillingRoleAssignment | 
[**billing_role_assignments_add_by_invoice_section_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_add_by_invoice_section_name) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Billing/createBillingRoleAssignment | 
[**billing_role_assignments_delete_by_billing_account_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_delete_by_billing_account_name) | **DELETE** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingRoleAssignments/{billingRoleAssignmentName} | 
[**billing_role_assignments_delete_by_billing_profile_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_delete_by_billing_profile_name) | **DELETE** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/providers/Microsoft.Billing/billingRoleAssignments/{billingRoleAssignmentName} | 
[**billing_role_assignments_delete_by_invoice_section_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_delete_by_invoice_section_name) | **DELETE** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Billing/billingRoleAssignments/{billingRoleAssignmentName} | 
[**billing_role_assignments_get_by_billing_account**](BillingRoleAssignmentsApi.md#billing_role_assignments_get_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingRoleAssignments/{billingRoleAssignmentName} | 
[**billing_role_assignments_get_by_billing_profile_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_get_by_billing_profile_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/providers/Microsoft.Billing/billingRoleAssignments/{billingRoleAssignmentName} | 
[**billing_role_assignments_get_by_invoice_section_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_get_by_invoice_section_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Billing/billingRoleAssignments/{billingRoleAssignmentName} | 
[**billing_role_assignments_list_by_billing_account_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_list_by_billing_account_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingRoleAssignments | 
[**billing_role_assignments_list_by_billing_profile_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_list_by_billing_profile_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/providers/Microsoft.Billing/billingRoleAssignments | 
[**billing_role_assignments_list_by_invoice_section_name**](BillingRoleAssignmentsApi.md#billing_role_assignments_list_by_invoice_section_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Billing/billingRoleAssignments | 


# **billing_role_assignments_add_by_billing_account_name**
> BillingRoleAssignmentListResult billing_role_assignments_add_by_billing_account_name(api_version, billing_account_name, parameters)



The operation to add a role assignment to a billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment_list_result import BillingRoleAssignmentListResult
from openapi_client.models.billing_role_assignment_payload import BillingRoleAssignmentPayload
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    parameters = openapi_client.BillingRoleAssignmentPayload() # BillingRoleAssignmentPayload | Parameters supplied to add a role assignment.

    try:
        api_response = api_instance.billing_role_assignments_add_by_billing_account_name(api_version, billing_account_name, parameters)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_add_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_add_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **parameters** | [**BillingRoleAssignmentPayload**](BillingRoleAssignmentPayload.md)| Parameters supplied to add a role assignment. | 

### Return type

[**BillingRoleAssignmentListResult**](BillingRoleAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Role assignment is successfully created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_role_assignments_add_by_billing_profile_name**
> BillingRoleAssignmentListResult billing_role_assignments_add_by_billing_profile_name(api_version, billing_account_name, billing_profile_name, parameters)



The operation to add a role assignment to a billing profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment_list_result import BillingRoleAssignmentListResult
from openapi_client.models.billing_role_assignment_payload import BillingRoleAssignmentPayload
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    parameters = openapi_client.BillingRoleAssignmentPayload() # BillingRoleAssignmentPayload | Parameters supplied to add a role assignment.

    try:
        api_response = api_instance.billing_role_assignments_add_by_billing_profile_name(api_version, billing_account_name, billing_profile_name, parameters)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_add_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_add_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **parameters** | [**BillingRoleAssignmentPayload**](BillingRoleAssignmentPayload.md)| Parameters supplied to add a role assignment. | 

### Return type

[**BillingRoleAssignmentListResult**](BillingRoleAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Role assignment is successfully created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_role_assignments_add_by_invoice_section_name**
> BillingRoleAssignmentListResult billing_role_assignments_add_by_invoice_section_name(api_version, billing_account_name, invoice_section_name, parameters)



The operation to add a role assignment to a invoice Section.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment_list_result import BillingRoleAssignmentListResult
from openapi_client.models.billing_role_assignment_payload import BillingRoleAssignmentPayload
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    parameters = openapi_client.BillingRoleAssignmentPayload() # BillingRoleAssignmentPayload | Parameters supplied to add a role assignment.

    try:
        api_response = api_instance.billing_role_assignments_add_by_invoice_section_name(api_version, billing_account_name, invoice_section_name, parameters)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_add_by_invoice_section_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_add_by_invoice_section_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **parameters** | [**BillingRoleAssignmentPayload**](BillingRoleAssignmentPayload.md)| Parameters supplied to add a role assignment. | 

### Return type

[**BillingRoleAssignmentListResult**](BillingRoleAssignmentListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Role assignment is successfully created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **billing_role_assignments_delete_by_billing_account_name**
> BillingRoleAssignment billing_role_assignments_delete_by_billing_account_name(api_version, billing_account_name, billing_role_assignment_name)



Delete the role assignment on this billing account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment import BillingRoleAssignment
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_role_assignment_name = 'billing_role_assignment_name_example' # str | role assignment id.

    try:
        api_response = api_instance.billing_role_assignments_delete_by_billing_account_name(api_version, billing_account_name, billing_role_assignment_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_delete_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_delete_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_role_assignment_name** | **str**| role assignment id. | 

### Return type

[**BillingRoleAssignment**](BillingRoleAssignment.md)

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

# **billing_role_assignments_delete_by_billing_profile_name**
> BillingRoleAssignment billing_role_assignments_delete_by_billing_profile_name(api_version, billing_account_name, billing_profile_name, billing_role_assignment_name)



Delete the role assignment on this Billing Profile

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment import BillingRoleAssignment
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    billing_role_assignment_name = 'billing_role_assignment_name_example' # str | role assignment id.

    try:
        api_response = api_instance.billing_role_assignments_delete_by_billing_profile_name(api_version, billing_account_name, billing_profile_name, billing_role_assignment_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_delete_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_delete_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **billing_role_assignment_name** | **str**| role assignment id. | 

### Return type

[**BillingRoleAssignment**](BillingRoleAssignment.md)

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

# **billing_role_assignments_delete_by_invoice_section_name**
> BillingRoleAssignment billing_role_assignments_delete_by_invoice_section_name(api_version, billing_account_name, invoice_section_name, billing_role_assignment_name)



Delete the role assignment on the invoice Section

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment import BillingRoleAssignment
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    billing_role_assignment_name = 'billing_role_assignment_name_example' # str | role assignment id.

    try:
        api_response = api_instance.billing_role_assignments_delete_by_invoice_section_name(api_version, billing_account_name, invoice_section_name, billing_role_assignment_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_delete_by_invoice_section_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_delete_by_invoice_section_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **billing_role_assignment_name** | **str**| role assignment id. | 

### Return type

[**BillingRoleAssignment**](BillingRoleAssignment.md)

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

# **billing_role_assignments_get_by_billing_account**
> BillingRoleAssignment billing_role_assignments_get_by_billing_account(api_version, billing_account_name, billing_role_assignment_name)



Get the role assignment for the caller

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment import BillingRoleAssignment
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_role_assignment_name = 'billing_role_assignment_name_example' # str | role assignment id.

    try:
        api_response = api_instance.billing_role_assignments_get_by_billing_account(api_version, billing_account_name, billing_role_assignment_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_get_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_get_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_role_assignment_name** | **str**| role assignment id. | 

### Return type

[**BillingRoleAssignment**](BillingRoleAssignment.md)

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

# **billing_role_assignments_get_by_billing_profile_name**
> BillingRoleAssignment billing_role_assignments_get_by_billing_profile_name(api_version, billing_account_name, billing_profile_name, billing_role_assignment_name)



Get the role assignment for the caller on the Billing Profile

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment import BillingRoleAssignment
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    billing_role_assignment_name = 'billing_role_assignment_name_example' # str | role assignment id.

    try:
        api_response = api_instance.billing_role_assignments_get_by_billing_profile_name(api_version, billing_account_name, billing_profile_name, billing_role_assignment_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_get_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_get_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **billing_role_assignment_name** | **str**| role assignment id. | 

### Return type

[**BillingRoleAssignment**](BillingRoleAssignment.md)

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

# **billing_role_assignments_get_by_invoice_section_name**
> BillingRoleAssignment billing_role_assignments_get_by_invoice_section_name(api_version, billing_account_name, invoice_section_name, billing_role_assignment_name)



Get the role assignment for the caller on the invoice Section

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment import BillingRoleAssignment
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    billing_role_assignment_name = 'billing_role_assignment_name_example' # str | role assignment id.

    try:
        api_response = api_instance.billing_role_assignments_get_by_invoice_section_name(api_version, billing_account_name, invoice_section_name, billing_role_assignment_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_get_by_invoice_section_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_get_by_invoice_section_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **billing_role_assignment_name** | **str**| role assignment id. | 

### Return type

[**BillingRoleAssignment**](BillingRoleAssignment.md)

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

# **billing_role_assignments_list_by_billing_account_name**
> BillingRoleAssignmentListResult billing_role_assignments_list_by_billing_account_name(api_version, billing_account_name)



Get the role assignments on the Billing Account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment_list_result import BillingRoleAssignmentListResult
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.

    try:
        api_response = api_instance.billing_role_assignments_list_by_billing_account_name(api_version, billing_account_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_list_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_list_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 

### Return type

[**BillingRoleAssignmentListResult**](BillingRoleAssignmentListResult.md)

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

# **billing_role_assignments_list_by_billing_profile_name**
> BillingRoleAssignmentListResult billing_role_assignments_list_by_billing_profile_name(api_version, billing_account_name, billing_profile_name)



Get the role assignments on the Billing Profile

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment_list_result import BillingRoleAssignmentListResult
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.

    try:
        api_response = api_instance.billing_role_assignments_list_by_billing_profile_name(api_version, billing_account_name, billing_profile_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_list_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_list_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 

### Return type

[**BillingRoleAssignmentListResult**](BillingRoleAssignmentListResult.md)

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

# **billing_role_assignments_list_by_invoice_section_name**
> BillingRoleAssignmentListResult billing_role_assignments_list_by_invoice_section_name(api_version, billing_account_name, invoice_section_name)



Get the role assignments on the invoice Section

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_role_assignment_list_result import BillingRoleAssignmentListResult
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
    api_instance = openapi_client.BillingRoleAssignmentsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.

    try:
        api_response = api_instance.billing_role_assignments_list_by_invoice_section_name(api_version, billing_account_name, invoice_section_name)
        print("The response of BillingRoleAssignmentsApi->billing_role_assignments_list_by_invoice_section_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingRoleAssignmentsApi->billing_role_assignments_list_by_invoice_section_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 

### Return type

[**BillingRoleAssignmentListResult**](BillingRoleAssignmentListResult.md)

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

