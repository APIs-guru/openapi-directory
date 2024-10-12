# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**e_a_subscription_list_migration_date_post**](DefaultApi.md#e_a_subscription_list_migration_date_post) | **POST** /subscriptions/{subscriptionId}/providers/microsoft.insights/listMigrationdate | 
[**e_a_subscription_migrate_to_new_pricing_model_post**](DefaultApi.md#e_a_subscription_migrate_to_new_pricing_model_post) | **POST** /subscriptions/{subscriptionId}/providers/microsoft.insights/migrateToNewPricingModel | 
[**e_a_subscription_rollback_to_legacy_pricing_model_post**](DefaultApi.md#e_a_subscription_rollback_to_legacy_pricing_model_post) | **POST** /subscriptions/{subscriptionId}/providers/microsoft.insights/rollbackToLegacyPricingModel | 


# **e_a_subscription_list_migration_date_post**
> EASubscriptionMigrationDate e_a_subscription_list_migration_date_post(api_version, subscription_id)



list date to migrate to new pricing model.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ea_subscription_migration_date import EASubscriptionMigrationDate
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
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.e_a_subscription_list_migration_date_post(api_version, subscription_id)
        print("The response of DefaultApi->e_a_subscription_list_migration_date_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->e_a_subscription_list_migration_date_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**EASubscriptionMigrationDate**](EASubscriptionMigrationDate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success list migrate date information for this subscription. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **e_a_subscription_migrate_to_new_pricing_model_post**
> e_a_subscription_migrate_to_new_pricing_model_post(api_version, subscription_id)



Enterprise Agreement Customer opted to use new pricing model.

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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.e_a_subscription_migrate_to_new_pricing_model_post(api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DefaultApi->e_a_subscription_migrate_to_new_pricing_model_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**204** | Success migrate to new pricing model for this subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **e_a_subscription_rollback_to_legacy_pricing_model_post**
> e_a_subscription_rollback_to_legacy_pricing_model_post(api_version, subscription_id)



Enterprise Agreement Customer roll back to use legacy pricing model.

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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_instance.e_a_subscription_rollback_to_legacy_pricing_model_post(api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DefaultApi->e_a_subscription_rollback_to_legacy_pricing_model_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

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
**204** | Success roll back to legacy pricing model for this subscription. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

