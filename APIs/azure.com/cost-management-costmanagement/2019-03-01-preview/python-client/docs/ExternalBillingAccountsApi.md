# openapi_client.ExternalBillingAccountsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**external_billing_account_get**](ExternalBillingAccountsApi.md#external_billing_account_get) | **GET** /providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName} | 
[**external_billing_account_list**](ExternalBillingAccountsApi.md#external_billing_account_list) | **GET** /providers/Microsoft.CostManagement/externalBillingAccounts | 


# **external_billing_account_get**
> ExternalBillingAccountDefinition external_billing_account_get(api_version, external_billing_account_name, expand=expand)



Get a ExternalBillingAccount definition

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_billing_account_definition import ExternalBillingAccountDefinition
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
    api_instance = openapi_client.ExternalBillingAccountsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    external_billing_account_name = 'external_billing_account_name_example' # str | External Billing Account Name. (eg 'aws-{PayerAccountId}')
    expand = 'expand_example' # str | May be used to expand the collectionInfo property. By default, collectionInfo is not included. (optional)

    try:
        api_response = api_instance.external_billing_account_get(api_version, external_billing_account_name, expand=expand)
        print("The response of ExternalBillingAccountsApi->external_billing_account_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalBillingAccountsApi->external_billing_account_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **external_billing_account_name** | **str**| External Billing Account Name. (eg &#39;aws-{PayerAccountId}&#39;) | 
 **expand** | **str**| May be used to expand the collectionInfo property. By default, collectionInfo is not included. | [optional] 

### Return type

[**ExternalBillingAccountDefinition**](ExternalBillingAccountDefinition.md)

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

# **external_billing_account_list**
> ExternalBillingAccountDefinitionListResult external_billing_account_list(api_version)



List all ExternalBillingAccount definitions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_billing_account_definition_list_result import ExternalBillingAccountDefinitionListResult
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
    api_instance = openapi_client.ExternalBillingAccountsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview

    try:
        api_response = api_instance.external_billing_account_list(api_version)
        print("The response of ExternalBillingAccountsApi->external_billing_account_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalBillingAccountsApi->external_billing_account_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 

### Return type

[**ExternalBillingAccountDefinitionListResult**](ExternalBillingAccountDefinitionListResult.md)

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

