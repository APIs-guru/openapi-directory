# openapi_client.AgreementsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agreements_get**](AgreementsApi.md#agreements_get) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements/{agreementName} | 
[**agreements_list_by_billing_account**](AgreementsApi.md#agreements_list_by_billing_account) | **GET** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements | 


# **agreements_get**
> Agreement agreements_get(api_version, billing_account_name, agreement_name, expand=expand)



Get the agreement by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agreement import Agreement
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
    api_instance = openapi_client.AgreementsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    agreement_name = 'agreement_name_example' # str | Agreement Id.
    expand = 'expand_example' # str | May be used to expand the participants. (optional)

    try:
        api_response = api_instance.agreements_get(api_version, billing_account_name, agreement_name, expand=expand)
        print("The response of AgreementsApi->agreements_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgreementsApi->agreements_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **agreement_name** | **str**| Agreement Id. | 
 **expand** | **str**| May be used to expand the participants. | [optional] 

### Return type

[**Agreement**](Agreement.md)

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

# **agreements_list_by_billing_account**
> AgreementListResult agreements_list_by_billing_account(api_version, billing_account_name, expand=expand)



Lists all agreements for a billing account.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agreement_list_result import AgreementListResult
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
    api_instance = openapi_client.AgreementsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-10-01-preview.
    billing_account_name = 'billing_account_name_example' # str | billing Account Id.
    expand = 'expand_example' # str | May be used to expand the participants. (optional)

    try:
        api_response = api_instance.agreements_list_by_billing_account(api_version, billing_account_name, expand=expand)
        print("The response of AgreementsApi->agreements_list_by_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgreementsApi->agreements_list_by_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-10-01-preview. | 
 **billing_account_name** | **str**| billing Account Id. | 
 **expand** | **str**| May be used to expand the participants. | [optional] 

### Return type

[**AgreementListResult**](AgreementListResult.md)

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

