# openapi_client.LineOfCreditsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**line_of_credits_get**](LineOfCreditsApi.md#line_of_credits_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingAccounts/default/lineOfCredit/default | 
[**line_of_credits_update**](LineOfCreditsApi.md#line_of_credits_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingAccounts/default/lineOfCredit/default | 


# **line_of_credits_get**
> LineOfCredit line_of_credits_get(api_version, subscription_id)



Get the current line of credit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.line_of_credit import LineOfCredit
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
    api_instance = openapi_client.LineOfCreditsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id.

    try:
        api_response = api_instance.line_of_credits_get(api_version, subscription_id)
        print("The response of LineOfCreditsApi->line_of_credits_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LineOfCreditsApi->line_of_credits_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **subscription_id** | **str**| Azure Subscription Id. | 

### Return type

[**LineOfCredit**](LineOfCredit.md)

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

# **line_of_credits_update**
> LineOfCredit line_of_credits_update(api_version, subscription_id, parameters)



Increase the current line of credit.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.line_of_credit import LineOfCredit
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
    api_instance = openapi_client.LineOfCreditsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2018-11-01-preview.
    subscription_id = 'subscription_id_example' # str | Azure Subscription Id.
    parameters = openapi_client.LineOfCredit() # LineOfCredit | Parameters supplied to the increase line of credit operation.

    try:
        api_response = api_instance.line_of_credits_update(api_version, subscription_id, parameters)
        print("The response of LineOfCreditsApi->line_of_credits_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LineOfCreditsApi->line_of_credits_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2018-11-01-preview. | 
 **subscription_id** | **str**| Azure Subscription Id. | 
 **parameters** | [**LineOfCredit**](LineOfCredit.md)| Parameters supplied to the increase line of credit operation. | 

### Return type

[**LineOfCredit**](LineOfCredit.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**202** | Accepted. Line of credit increase is in progress. |  * Retry-After - Recommends the retryable time after receiving this. <br>  * Azure-AsyncOperation - URI to poll for the operation status <br>  * Location - Location URI to poll for result. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

