# openapi_client.ActivationsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activations_create_or_update**](ActivationsApi.md#activations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName} | 
[**activations_delete**](ActivationsApi.md#activations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName} | 
[**activations_get**](ActivationsApi.md#activations_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName} | 
[**activations_list**](ActivationsApi.md#activations_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations | 


# **activations_create_or_update**
> ActivationResource activations_create_or_update(subscription_id, resource_group, activation_name, api_version, activation)



Create a new activation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activation import Activation
from openapi_client.models.activation_resource import ActivationResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')
    activation = openapi_client.Activation() # Activation | new activation.

    try:
        api_response = api_instance.activations_create_or_update(subscription_id, resource_group, activation_name, api_version, activation)
        print("The response of ActivationsApi->activations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivationsApi->activations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **activation_name** | **str**| Name of the activation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]
 **activation** | [**Activation**](Activation.md)| new activation. | 

### Return type

[**ActivationResource**](ActivationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activations_delete**
> ActivationResource activations_delete(subscription_id, resource_group, activation_name, api_version)



Delete an activation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activation_resource import ActivationResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.activations_delete(subscription_id, resource_group, activation_name, api_version)
        print("The response of ActivationsApi->activations_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivationsApi->activations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **activation_name** | **str**| Name of the activation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]

### Return type

[**ActivationResource**](ActivationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activations_get**
> ActivationResource activations_get(subscription_id, resource_group, activation_name, api_version)



Returns activation name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activation_resource import ActivationResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.activations_get(subscription_id, resource_group, activation_name, api_version)
        print("The response of ActivationsApi->activations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivationsApi->activations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **activation_name** | **str**| Name of the activation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]

### Return type

[**ActivationResource**](ActivationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **activations_list**
> ActivationResourcesPage activations_list(subscription_id, resource_group, api_version)



Returns the list of activations.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.activation_resources_page import ActivationResourcesPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActivationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.activations_list(subscription_id, resource_group, api_version)
        print("The response of ActivationsApi->activations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivationsApi->activations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]

### Return type

[**ActivationResourcesPage**](ActivationResourcesPage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

