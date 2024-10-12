# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operations_list**](DefaultApi.md#operations_list) | **GET** /providers/Microsoft.Subscription/operations | 
[**subscription_cancel**](DefaultApi.md#subscription_cancel) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Subscription/cancel | 
[**subscription_create_csp_subscription**](DefaultApi.md#subscription_create_csp_subscription) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/providers/Microsoft.Subscription/createSubscription | 
[**subscription_create_subscription**](DefaultApi.md#subscription_create_subscription) | **POST** /providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Subscription/createSubscription | 
[**subscription_create_subscription_in_enrollment_account**](DefaultApi.md#subscription_create_subscription_in_enrollment_account) | **POST** /providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountName}/providers/Microsoft.Subscription/createSubscription | 
[**subscription_enable**](DefaultApi.md#subscription_enable) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Subscription/enable | 
[**subscription_operation_get**](DefaultApi.md#subscription_operation_get) | **GET** /providers/Microsoft.Subscription/subscriptionOperations/{operationId} | 
[**subscription_rename**](DefaultApi.md#subscription_rename) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Subscription/rename | 


# **operations_list**
> OperationListResult operations_list(api_version)



Lists all of the available Microsoft.Subscription API operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_list_result import OperationListResult
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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-10-01-preview

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of DefaultApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-10-01-preview | 

### Return type

[**OperationListResult**](OperationListResult.md)

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

# **subscription_cancel**
> CanceledSubscriptionId subscription_cancel(subscription_id, api_version)



The operation to cancel a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.canceled_subscription_id import CanceledSubscriptionId
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
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-10-01-preview

    try:
        api_response = api_instance.subscription_cancel(subscription_id, api_version)
        print("The response of DefaultApi->subscription_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-10-01-preview | 

### Return type

[**CanceledSubscriptionId**](CanceledSubscriptionId.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Describes the error if the operation is not successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_create_csp_subscription**
> SubscriptionCreationResult subscription_create_csp_subscription(billing_account_name, customer_name, api_version, body)



The operation to create a new CSP subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.modern_csp_subscription_creation_parameters import ModernCspSubscriptionCreationParameters
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
    billing_account_name = 'billing_account_name_example' # str | The name of the Microsoft Customer Agreement billing account for which you want to create the subscription.
    customer_name = 'customer_name_example' # str | The name of the customer.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-10-01-preview
    body = openapi_client.ModernCspSubscriptionCreationParameters() # ModernCspSubscriptionCreationParameters | The subscription creation parameters.

    try:
        api_response = api_instance.subscription_create_csp_subscription(billing_account_name, customer_name, api_version, body)
        print("The response of DefaultApi->subscription_create_csp_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_create_csp_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| The name of the Microsoft Customer Agreement billing account for which you want to create the subscription. | 
 **customer_name** | **str**| The name of the customer. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-10-01-preview | 
 **body** | [**ModernCspSubscriptionCreationParameters**](ModernCspSubscriptionCreationParameters.md)| The subscription creation parameters. | 

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
**202** | Accepted. Subscription creation is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - The URL where the status of the asynchronous operation can be checked. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_create_subscription**
> SubscriptionCreationResult subscription_create_subscription(billing_account_name, billing_profile_name, invoice_section_name, api_version, body)



The operation to create a new WebDirect or EA Azure subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.modern_subscription_creation_parameters import ModernSubscriptionCreationParameters
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
    billing_account_name = 'billing_account_name_example' # str | The name of the Microsoft Customer Agreement billing account for which you want to create the subscription.
    billing_profile_name = 'billing_profile_name_example' # str | The name of the billing profile in the billing account for which you want to create the subscription.
    invoice_section_name = 'invoice_section_name_example' # str | The name of the invoice section in the billing account for which you want to create the subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-10-01-preview
    body = openapi_client.ModernSubscriptionCreationParameters() # ModernSubscriptionCreationParameters | The subscription creation parameters.

    try:
        api_response = api_instance.subscription_create_subscription(billing_account_name, billing_profile_name, invoice_section_name, api_version, body)
        print("The response of DefaultApi->subscription_create_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_create_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billing_account_name** | **str**| The name of the Microsoft Customer Agreement billing account for which you want to create the subscription. | 
 **billing_profile_name** | **str**| The name of the billing profile in the billing account for which you want to create the subscription. | 
 **invoice_section_name** | **str**| The name of the invoice section in the billing account for which you want to create the subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-10-01-preview | 
 **body** | [**ModernSubscriptionCreationParameters**](ModernSubscriptionCreationParameters.md)| The subscription creation parameters. | 

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
**202** | Accepted. Subscription creation is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - The URL where the status of the asynchronous operation can be checked. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_create_subscription_in_enrollment_account**
> SubscriptionCreationResult subscription_create_subscription_in_enrollment_account(enrollment_account_name, api_version, body)



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
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-10-01-preview
    body = openapi_client.SubscriptionCreationParameters() # SubscriptionCreationParameters | The subscription creation parameters.

    try:
        api_response = api_instance.subscription_create_subscription_in_enrollment_account(enrollment_account_name, api_version, body)
        print("The response of DefaultApi->subscription_create_subscription_in_enrollment_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_create_subscription_in_enrollment_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrollment_account_name** | **str**| The name of the enrollment account to which the subscription will be billed. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-10-01-preview | 
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
**202** | Accepted. Subscription creation is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - The URL where the status of the asynchronous operation can be checked. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_enable**
> EnabledSubscriptionId subscription_enable(subscription_id, api_version)



The operation to enable a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.enabled_subscription_id import EnabledSubscriptionId
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
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-10-01-preview

    try:
        api_response = api_instance.subscription_enable(subscription_id, api_version)
        print("The response of DefaultApi->subscription_enable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-10-01-preview | 

### Return type

[**EnabledSubscriptionId**](EnabledSubscriptionId.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Describes the error if the operation is not successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_operation_get**
> SubscriptionCreationResult subscription_operation_get(operation_id, api_version)



Get the status of the pending Microsoft.Subscription API operations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    operation_id = 'operation_id_example' # str | The operation ID, which can be found from the Location field in the generate recommendation response header.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-10-01-preview

    try:
        api_response = api_instance.subscription_operation_get(operation_id, api_version)
        print("The response of DefaultApi->subscription_operation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_operation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**| The operation ID, which can be found from the Location field in the generate recommendation response header. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-10-01-preview | 

### Return type

[**SubscriptionCreationResult**](SubscriptionCreationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful completion of the asynchronous operation |  -  |
**202** | Accepted. Subscription update is in progress. |  * Retry-After - The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. <br>  * Location - The URL where the status of the asynchronous operation can be checked. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscription_rename**
> RenamedSubscriptionId subscription_rename(subscription_id, api_version, body)



The operation to rename a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.renamed_subscription_id import RenamedSubscriptionId
from openapi_client.models.subscription_name import SubscriptionName
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
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-10-01-preview
    body = openapi_client.SubscriptionName() # SubscriptionName | Subscription Name

    try:
        api_response = api_instance.subscription_rename(subscription_id, api_version, body)
        print("The response of DefaultApi->subscription_rename:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscription_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-10-01-preview | 
 **body** | [**SubscriptionName**](SubscriptionName.md)| Subscription Name | 

### Return type

[**RenamedSubscriptionId**](RenamedSubscriptionId.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Describes the error if the operation is not successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

