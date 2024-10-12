# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscription_factory_create_subscription_in_enrollment_account**](DefaultApi.md#subscription_factory_create_subscription_in_enrollment_account) | **POST** /providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountName}/providers/Microsoft.Subscription/createSubscription | 
[**subscription_operations_list**](DefaultApi.md#subscription_operations_list) | **GET** /providers/Microsoft.Subscription/subscriptionOperations | 


# **subscription_factory_create_subscription_in_enrollment_account**
> SubscriptionCreationResult subscription_factory_create_subscription_in_enrollment_account(enrollment_account_name, api_version, body)



Creates an Azure subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_creation_parameters import SubscriptionCreationParameters
from openapi_client.models.subscription_creation_result import SubscriptionCreationResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    enrollment_account_name = 'enrollment_account_name_example' # str | The name of the enrollment account to which the subscription will be billed.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01
    body = openapi_client.SubscriptionCreationParameters() # SubscriptionCreationParameters | The subscription creation parameters.

    try:
        api_response = api_instance.subscription_factory_create_subscription_in_enrollment_account(enrollment_account_name, api_version, body)
        print("The response of DefaultApi->subscription_factory_create_subscription_in_enrollment_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_factory_create_subscription_in_enrollment_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrollment_account_name** | **str**| The name of the enrollment account to which the subscription will be billed. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 
 **body** | [**SubscriptionCreationParameters**](SubscriptionCreationParameters.md)| The subscription creation parameters. | 

### Return type

[**SubscriptionCreationResult**](SubscriptionCreationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters. |  -  |
**202** | Accepted. Subscription creation is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - GET this URL to retrieve the status of the asynchronous operation. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_operations_list**
> SubscriptionOperationListResult subscription_operations_list(api_version)



Lists all of the available pending Microsoft.Subscription API operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_operation_list_result import SubscriptionOperationListResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2015-06-01

    try:
        api_response = api_instance.subscription_operations_list(api_version)
        print("The response of DefaultApi->subscription_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2015-06-01 | 

### Return type

[**SubscriptionOperationListResult**](SubscriptionOperationListResult.md)

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

