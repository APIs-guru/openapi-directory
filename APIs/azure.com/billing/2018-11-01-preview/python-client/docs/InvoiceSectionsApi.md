# openapi_client.InvoiceSectionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoice_sections_create**](InvoiceSectionsApi.md#invoice_sections_create) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections | 
[**invoice_sections_elevate_to_billing_profile**](InvoiceSectionsApi.md#invoice_sections_elevate_to_billing_profile) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/elevate | 
[**invoice_sections_get**](InvoiceSectionsApi.md#invoice_sections_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName} | 
[**invoice_sections_list_by_billing_account_name**](InvoiceSectionsApi.md#invoice_sections_list_by_billing_account_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections | 
[**invoice_sections_list_by_billing_profile_name**](InvoiceSectionsApi.md#invoice_sections_list_by_billing_profile_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections | 
[**invoice_sections_list_by_create_subscription_permission**](InvoiceSectionsApi.md#invoice_sections_list_by_create_subscription_permission) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/listInvoiceSectionsWithCreateSubscriptionPermission | 
[**invoice_sections_update**](InvoiceSectionsApi.md#invoice_sections_update) | **PUT** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName} | 


# **invoice_sections_create**
> InvoiceSection invoice_sections_create(api_version, billing_account_name, parameters)



The operation to create a InvoiceSection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_section import InvoiceSection
from openapi_client.models.invoice_section_creation_request import InvoiceSectionCreationRequest
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
    api_instance = openapi_client.InvoiceSectionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    parameters = openapi_client.InvoiceSectionCreationRequest() # InvoiceSectionCreationRequest | Parameters supplied to the Create InvoiceSection operation.

    try:
        api_response = api_instance.invoice_sections_create(api_version, billing_account_name, parameters)
        print("The response of InvoiceSectionsApi->invoice_sections_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSectionsApi->invoice_sections_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **parameters** | [**InvoiceSectionCreationRequest**](InvoiceSectionCreationRequest.md)| Parameters supplied to the Create InvoiceSection operation. | 

### Return type

[**InvoiceSection**](InvoiceSection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted |  * Retry-After - Recommends the retryable time after receiving this. <br>  * Azure-AsyncOperation - URI to poll for the operation status <br>  * Location - Location URI to poll for result. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoice_sections_elevate_to_billing_profile**
> invoice_sections_elevate_to_billing_profile(billing_account_name, invoice_section_name)



Elevates the caller's access to match their billing profile access.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.InvoiceSectionsApi(api_client)
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.

    try:
        api_instance.invoice_sections_elevate_to_billing_profile(billing_account_name, invoice_section_name)
    except Exception as e:
        print("Exception when calling InvoiceSectionsApi->invoice_sections_elevate_to_billing_profile: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Elevated the caller&#39;s access to the invoice section. |  -  |
**0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoice_sections_get**
> InvoiceSection invoice_sections_get(api_version, billing_account_name, invoice_section_name, expand=expand)



Get the InvoiceSection by id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_section import InvoiceSection
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
    api_instance = openapi_client.InvoiceSectionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    expand = 'expand_example' # str | May be used to expand the billingProfiles. (optional)

    try:
        api_response = api_instance.invoice_sections_get(api_version, billing_account_name, invoice_section_name, expand=expand)
        print("The response of InvoiceSectionsApi->invoice_sections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSectionsApi->invoice_sections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **expand** | **str**| May be used to expand the billingProfiles. | [optional] 

### Return type

[**InvoiceSection**](InvoiceSection.md)

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

# **invoice_sections_list_by_billing_account_name**
> InvoiceSectionListResult invoice_sections_list_by_billing_account_name(api_version, billing_account_name, expand=expand)



Lists all invoice sections for which a user has access.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_section_list_result import InvoiceSectionListResult
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
    api_instance = openapi_client.InvoiceSectionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    expand = 'expand_example' # str | May be used to expand the billingProfiles. (optional)

    try:
        api_response = api_instance.invoice_sections_list_by_billing_account_name(api_version, billing_account_name, expand=expand)
        print("The response of InvoiceSectionsApi->invoice_sections_list_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSectionsApi->invoice_sections_list_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **expand** | **str**| May be used to expand the billingProfiles. | [optional] 

### Return type

[**InvoiceSectionListResult**](InvoiceSectionListResult.md)

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

# **invoice_sections_list_by_billing_profile_name**
> InvoiceSectionListResult invoice_sections_list_by_billing_profile_name(api_version, billing_account_name, billing_profile_name)



Lists all invoice sections under a billing profile for which a user has access.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_section_list_result import InvoiceSectionListResult
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
    api_instance = openapi_client.InvoiceSectionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.

    try:
        api_response = api_instance.invoice_sections_list_by_billing_profile_name(api_version, billing_account_name, billing_profile_name)
        print("The response of InvoiceSectionsApi->invoice_sections_list_by_billing_profile_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSectionsApi->invoice_sections_list_by_billing_profile_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 

### Return type

[**InvoiceSectionListResult**](InvoiceSectionListResult.md)

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

# **invoice_sections_list_by_create_subscription_permission**
> InvoiceSectionListResult invoice_sections_list_by_create_subscription_permission(api_version, billing_account_name, expand=expand)



Lists all invoiceSections with create subscription permission for a user.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_section_list_result import InvoiceSectionListResult
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
    api_instance = openapi_client.InvoiceSectionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    expand = 'expand_example' # str | May be used to expand the billingProfiles. (optional)

    try:
        api_response = api_instance.invoice_sections_list_by_create_subscription_permission(api_version, billing_account_name, expand=expand)
        print("The response of InvoiceSectionsApi->invoice_sections_list_by_create_subscription_permission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSectionsApi->invoice_sections_list_by_create_subscription_permission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **expand** | **str**| May be used to expand the billingProfiles. | [optional] 

### Return type

[**InvoiceSectionListResult**](InvoiceSectionListResult.md)

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

# **invoice_sections_update**
> InvoiceSection invoice_sections_update(api_version, billing_account_name, invoice_section_name, parameters)



The operation to update a InvoiceSection.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.invoice_section import InvoiceSection
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
    api_instance = openapi_client.InvoiceSectionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    invoice_section_name = 'invoice_section_name_example' # str | InvoiceSection Id.
    parameters = openapi_client.InvoiceSection() # InvoiceSection | Parameters supplied to the Create InvoiceSection operation.

    try:
        api_response = api_instance.invoice_sections_update(api_version, billing_account_name, invoice_section_name, parameters)
        print("The response of InvoiceSectionsApi->invoice_sections_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceSectionsApi->invoice_sections_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **invoice_section_name** | **str**| InvoiceSection Id. | 
 **parameters** | [**InvoiceSection**](InvoiceSection.md)| Parameters supplied to the Create InvoiceSection operation. | 

### Return type

[**InvoiceSection**](InvoiceSection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. InvoiceSection update is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - Location URI to poll for result. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

