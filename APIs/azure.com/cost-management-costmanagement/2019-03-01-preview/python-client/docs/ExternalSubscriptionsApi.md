# openapi_client.ExternalSubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**external_subscription_get**](ExternalSubscriptionsApi.md#external_subscription_get) | **GET** /providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName} | 
[**external_subscription_list**](ExternalSubscriptionsApi.md#external_subscription_list) | **GET** /providers/Microsoft.CostManagement/externalSubscriptions | 
[**external_subscription_list_by_external_billing_account**](ExternalSubscriptionsApi.md#external_subscription_list_by_external_billing_account) | **GET** /providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}/externalSubscriptions | 
[**external_subscription_list_by_management_group**](ExternalSubscriptionsApi.md#external_subscription_list_by_management_group) | **GET** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.CostManagement/externalSubscriptions | 
[**external_subscription_update_management_group**](ExternalSubscriptionsApi.md#external_subscription_update_management_group) | **PUT** /providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName} | 


# **external_subscription_get**
> ExternalSubscriptionDefinition external_subscription_get(api_version, external_subscription_name, expand=expand)



Get an ExternalSubscription definition

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_subscription_definition import ExternalSubscriptionDefinition
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
    api_instance = openapi_client.ExternalSubscriptionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    external_subscription_name = 'external_subscription_name_example' # str | External Subscription Name. (eg 'aws-{UsageAccountId}')
    expand = 'expand_example' # str | May be used to expand the collectionInfo property. By default, collectionInfo is not included. (optional)

    try:
        api_response = api_instance.external_subscription_get(api_version, external_subscription_name, expand=expand)
        print("The response of ExternalSubscriptionsApi->external_subscription_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalSubscriptionsApi->external_subscription_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **external_subscription_name** | **str**| External Subscription Name. (eg &#39;aws-{UsageAccountId}&#39;) | 
 **expand** | **str**| May be used to expand the collectionInfo property. By default, collectionInfo is not included. | [optional] 

### Return type

[**ExternalSubscriptionDefinition**](ExternalSubscriptionDefinition.md)

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

# **external_subscription_list**
> ExternalSubscriptionDefinitionListResult external_subscription_list(api_version)



List all ExternalSubscription definitions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_subscription_definition_list_result import ExternalSubscriptionDefinitionListResult
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
    api_instance = openapi_client.ExternalSubscriptionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview

    try:
        api_response = api_instance.external_subscription_list(api_version)
        print("The response of ExternalSubscriptionsApi->external_subscription_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalSubscriptionsApi->external_subscription_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 

### Return type

[**ExternalSubscriptionDefinitionListResult**](ExternalSubscriptionDefinitionListResult.md)

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

# **external_subscription_list_by_external_billing_account**
> ExternalSubscriptionDefinitionListResult external_subscription_list_by_external_billing_account(api_version, external_billing_account_name)



List all ExternalSubscriptions by ExternalBillingAccount definitions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_subscription_definition_list_result import ExternalSubscriptionDefinitionListResult
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
    api_instance = openapi_client.ExternalSubscriptionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    external_billing_account_name = 'external_billing_account_name_example' # str | External Billing Account Name. (eg 'aws-{PayerAccountId}')

    try:
        api_response = api_instance.external_subscription_list_by_external_billing_account(api_version, external_billing_account_name)
        print("The response of ExternalSubscriptionsApi->external_subscription_list_by_external_billing_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalSubscriptionsApi->external_subscription_list_by_external_billing_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **external_billing_account_name** | **str**| External Billing Account Name. (eg &#39;aws-{PayerAccountId}&#39;) | 

### Return type

[**ExternalSubscriptionDefinitionListResult**](ExternalSubscriptionDefinitionListResult.md)

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

# **external_subscription_list_by_management_group**
> ExternalSubscriptionDefinitionListResult external_subscription_list_by_management_group(api_version, management_group_id, recurse=recurse)



List all ExternalSubscription definitions for Management Group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.external_subscription_definition_list_result import ExternalSubscriptionDefinitionListResult
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
    api_instance = openapi_client.ExternalSubscriptionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    management_group_id = 'management_group_id_example' # str | ManagementGroup ID
    recurse = True # bool | The $recurse=true query string parameter allows returning externalSubscriptions associated with the specified managementGroup, or any of its descendants. (optional)

    try:
        api_response = api_instance.external_subscription_list_by_management_group(api_version, management_group_id, recurse=recurse)
        print("The response of ExternalSubscriptionsApi->external_subscription_list_by_management_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExternalSubscriptionsApi->external_subscription_list_by_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **management_group_id** | **str**| ManagementGroup ID | 
 **recurse** | **bool**| The $recurse&#x3D;true query string parameter allows returning externalSubscriptions associated with the specified managementGroup, or any of its descendants. | [optional] 

### Return type

[**ExternalSubscriptionDefinitionListResult**](ExternalSubscriptionDefinitionListResult.md)

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

# **external_subscription_update_management_group**
> external_subscription_update_management_group(api_version, management_group_id, external_subscription_name)



Updates the management group of an ExternalSubscription

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
    api_instance = openapi_client.ExternalSubscriptionsApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. The current version is 2019-03-01-preview
    management_group_id = 'management_group_id_example' # str | ManagementGroup ID
    external_subscription_name = 'external_subscription_name_example' # str | External Subscription Name. (eg 'aws-{UsageAccountId}')

    try:
        api_instance.external_subscription_update_management_group(api_version, management_group_id, external_subscription_name)
    except Exception as e:
        print("Exception when calling ExternalSubscriptionsApi->external_subscription_update_management_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. The current version is 2019-03-01-preview | 
 **management_group_id** | **str**| ManagementGroup ID | 
 **external_subscription_name** | **str**| External Subscription Name. (eg &#39;aws-{UsageAccountId}&#39;) | 

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
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

