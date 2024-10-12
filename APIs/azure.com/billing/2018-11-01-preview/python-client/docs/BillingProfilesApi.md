# openapi_client.BillingProfilesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billing_profiles_create**](BillingProfilesApi.md#billing_profiles_create) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles | 
[**billing_profiles_get**](BillingProfilesApi.md#billing_profiles_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName} | 
[**billing_profiles_list_by_billing_account_name**](BillingProfilesApi.md#billing_profiles_list_by_billing_account_name) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles | 
[**billing_profiles_update**](BillingProfilesApi.md#billing_profiles_update) | **PUT** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName} | 


# **billing_profiles_create**
> BillingProfile billing_profiles_create(api_version, billing_account_name, parameters)



The operation to create a BillingProfile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_profile import BillingProfile
from openapi_client.models.billing_profile_creation_parameters import BillingProfileCreationParameters
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
    api_instance = openapi_client.BillingProfilesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    parameters = openapi_client.BillingProfileCreationParameters() # BillingProfileCreationParameters | Parameters supplied to the Create BillingProfile operation.

    try:
        api_response = api_instance.billing_profiles_create(api_version, billing_account_name, parameters)
        print("The response of BillingProfilesApi->billing_profiles_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingProfilesApi->billing_profiles_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **parameters** | [**BillingProfileCreationParameters**](BillingProfileCreationParameters.md)| Parameters supplied to the Create BillingProfile operation. | 

### Return type

[**BillingProfile**](BillingProfile.md)

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

# **billing_profiles_get**
> BillingProfile billing_profiles_get(api_version, billing_account_name, billing_profile_name, expand=expand)



Get the billing profile by id.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_profile import BillingProfile
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
    api_instance = openapi_client.BillingProfilesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    expand = 'expand_example' # str | May be used to expand the invoiceSections. (optional)

    try:
        api_response = api_instance.billing_profiles_get(api_version, billing_account_name, billing_profile_name, expand=expand)
        print("The response of BillingProfilesApi->billing_profiles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingProfilesApi->billing_profiles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **expand** | **str**| May be used to expand the invoiceSections. | [optional] 

### Return type

[**BillingProfile**](BillingProfile.md)

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

# **billing_profiles_list_by_billing_account_name**
> BillingProfileListResult billing_profiles_list_by_billing_account_name(api_version, billing_account_name, expand=expand)



Lists all billing profiles for a user which that user has access to.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_profile_list_result import BillingProfileListResult
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
    api_instance = openapi_client.BillingProfilesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    expand = 'expand_example' # str | May be used to expand the invoiceSections. (optional)

    try:
        api_response = api_instance.billing_profiles_list_by_billing_account_name(api_version, billing_account_name, expand=expand)
        print("The response of BillingProfilesApi->billing_profiles_list_by_billing_account_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingProfilesApi->billing_profiles_list_by_billing_account_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **expand** | **str**| May be used to expand the invoiceSections. | [optional] 

### Return type

[**BillingProfileListResult**](BillingProfileListResult.md)

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

# **billing_profiles_update**
> BillingProfile billing_profiles_update(api_version, billing_account_name, billing_profile_name, parameters)



The operation to update a billing profile.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.billing_profile import BillingProfile
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
    api_instance = openapi_client.BillingProfilesApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    billing_account_name = 'billing_account_name_example' # str | Billing Account Id.
    billing_profile_name = 'billing_profile_name_example' # str | Billing Profile Id.
    parameters = openapi_client.BillingProfile() # BillingProfile | Parameters supplied to the update billing profile operation.

    try:
        api_response = api_instance.billing_profiles_update(api_version, billing_account_name, billing_profile_name, parameters)
        print("The response of BillingProfilesApi->billing_profiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BillingProfilesApi->billing_profiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **billing_account_name** | **str**| Billing Account Id. | 
 **billing_profile_name** | **str**| Billing Profile Id. | 
 **parameters** | [**BillingProfile**](BillingProfile.md)| Parameters supplied to the update billing profile operation. | 

### Return type

[**BillingProfile**](BillingProfile.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. Billing profile update is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - Location URI to poll for result. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

