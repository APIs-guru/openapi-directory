# openapi_client.FeaturesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**features_get**](FeaturesApi.md#features_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName} | 
[**features_list**](FeaturesApi.md#features_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features | 
[**features_list_all**](FeaturesApi.md#features_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Features/features | 
[**features_register**](FeaturesApi.md#features_register) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}/register | 


# **features_get**
> FeatureResult features_get(resource_provider_namespace, feature_name, api_version, subscription_id)



Gets the preview feature with the specified name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.feature_result import FeatureResult
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
    api_instance = openapi_client.FeaturesApi(api_client)
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The resource provider namespace for the feature.
    feature_name = 'feature_name_example' # str | The name of the feature to get.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.features_get(resource_provider_namespace, feature_name, api_version, subscription_id)
        print("The response of FeaturesApi->features_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeaturesApi->features_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_provider_namespace** | **str**| The resource provider namespace for the feature. | 
 **feature_name** | **str**| The name of the feature to get. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**FeatureResult**](FeatureResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns metadata about the feature. The metadata includes the name of the feature, the registration state, the resource ID, and resource type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_list**
> FeatureOperationsListResult features_list(resource_provider_namespace, api_version, subscription_id)



Gets all the preview features in a provider namespace that are available through AFEC for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.feature_operations_list_result import FeatureOperationsListResult
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
    api_instance = openapi_client.FeaturesApi(api_client)
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider for getting features.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.features_list(resource_provider_namespace, api_version, subscription_id)
        print("The response of FeaturesApi->features_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeaturesApi->features_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_provider_namespace** | **str**| The namespace of the resource provider for getting features. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**FeatureOperationsListResult**](FeatureOperationsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array containing metadata for each feature in the resource provider. The metadata includes the name of the feature, the registration state, the resource ID, and resource type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_list_all**
> FeatureOperationsListResult features_list_all(api_version, subscription_id)



Gets all the preview features that are available through AFEC for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.feature_operations_list_result import FeatureOperationsListResult
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
    api_instance = openapi_client.FeaturesApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.features_list_all(api_version, subscription_id)
        print("The response of FeaturesApi->features_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeaturesApi->features_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**FeatureOperationsListResult**](FeatureOperationsListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array containing metadata for each feature. The metadata includes the name of the feature, the registration state, the resource ID, and resource type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **features_register**
> FeatureResult features_register(resource_provider_namespace, feature_name, api_version, subscription_id)



Registers the preview feature for the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.feature_result import FeatureResult
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
    api_instance = openapi_client.FeaturesApi(api_client)
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    feature_name = 'feature_name_example' # str | The name of the feature to register.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.

    try:
        api_response = api_instance.features_register(resource_provider_namespace, feature_name, api_version, subscription_id)
        print("The response of FeaturesApi->features_register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FeaturesApi->features_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **feature_name** | **str**| The name of the feature to register. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **subscription_id** | **str**| The ID of the target subscription. | 

### Return type

[**FeatureResult**](FeatureResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns metadata about the registered feature. The metadata includes the name of the feature, the registration state, the resource ID, and resource type. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

