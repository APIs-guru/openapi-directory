# openapi_client.ProductDeploymentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_deployments_boot_strap**](ProductDeploymentsApi.md#product_deployments_boot_strap) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/bootstrap | 
[**product_deployments_deploy**](ProductDeploymentsApi.md#product_deployments_deploy) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/deploy | 
[**product_deployments_get**](ProductDeploymentsApi.md#product_deployments_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId} | 
[**product_deployments_list**](ProductDeploymentsApi.md#product_deployments_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments | 
[**product_deployments_lock**](ProductDeploymentsApi.md#product_deployments_lock) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/lock | 
[**product_deployments_remove**](ProductDeploymentsApi.md#product_deployments_remove) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/remove | 
[**product_deployments_rotate_secrets**](ProductDeploymentsApi.md#product_deployments_rotate_secrets) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/rotateSecrets | 
[**product_deployments_unlock**](ProductDeploymentsApi.md#product_deployments_unlock) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productDeployments/{productId}/unlock | 


# **product_deployments_boot_strap**
> product_deployments_boot_strap(subscription_id, product_id, api_version, bootstrap_action_parameter)



Invokes bootstrap action on the product deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_deployments_boot_strap_request import ProductDeploymentsBootStrapRequest
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
    api_instance = openapi_client.ProductDeploymentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    bootstrap_action_parameter = openapi_client.ProductDeploymentsBootStrapRequest() # ProductDeploymentsBootStrapRequest | Represents bootstrap action parameter

    try:
        api_instance.product_deployments_boot_strap(subscription_id, product_id, api_version, bootstrap_action_parameter)
    except Exception as e:
        print("Exception when calling ProductDeploymentsApi->product_deployments_boot_strap: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **bootstrap_action_parameter** | [**ProductDeploymentsBootStrapRequest**](ProductDeploymentsBootStrapRequest.md)| Represents bootstrap action parameter | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_deployments_deploy**
> product_deployments_deploy(subscription_id, product_id, api_version, deploy_action_parameter)



Invokes deploy action on the product

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_deployments_deploy_request import ProductDeploymentsDeployRequest
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
    api_instance = openapi_client.ProductDeploymentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    deploy_action_parameter = openapi_client.ProductDeploymentsDeployRequest() # ProductDeploymentsDeployRequest | Represents bootstrap action parameter

    try:
        api_instance.product_deployments_deploy(subscription_id, product_id, api_version, deploy_action_parameter)
    except Exception as e:
        print("Exception when calling ProductDeploymentsApi->product_deployments_deploy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **deploy_action_parameter** | [**ProductDeploymentsDeployRequest**](ProductDeploymentsDeployRequest.md)| Represents bootstrap action parameter | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_deployments_get**
> ProductDeploymentResourceEntity product_deployments_get(subscription_id, api_version, product_id)



Invokes bootstrap action on the product deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_deployment_resource_entity import ProductDeploymentResourceEntity
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
    api_instance = openapi_client.ProductDeploymentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    product_id = 'product_id_example' # str | The product identifier.

    try:
        api_response = api_instance.product_deployments_get(subscription_id, api_version, product_id)
        print("The response of ProductDeploymentsApi->product_deployments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDeploymentsApi->product_deployments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **product_id** | **str**| The product identifier. | 

### Return type

[**ProductDeploymentResourceEntity**](ProductDeploymentResourceEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_deployments_list**
> ProductDeploymentsList product_deployments_list(subscription_id, api_version)



Invokes bootstrap action on the product deployment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_deployments_list import ProductDeploymentsList
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
    api_instance = openapi_client.ProductDeploymentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_response = api_instance.product_deployments_list(subscription_id, api_version)
        print("The response of ProductDeploymentsApi->product_deployments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductDeploymentsApi->product_deployments_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

[**ProductDeploymentsList**](ProductDeploymentsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_deployments_lock**
> product_deployments_lock(subscription_id, product_id, api_version)



locks the product subscription

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
    api_instance = openapi_client.ProductDeploymentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_instance.product_deployments_lock(subscription_id, product_id, api_version)
    except Exception as e:
        print("Exception when calling ProductDeploymentsApi->product_deployments_lock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_deployments_remove**
> product_deployments_remove(subscription_id, product_id, api_version)



Invokes remove action on the product deployment

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
    api_instance = openapi_client.ProductDeploymentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_instance.product_deployments_remove(subscription_id, product_id, api_version)
    except Exception as e:
        print("Exception when calling ProductDeploymentsApi->product_deployments_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_deployments_rotate_secrets**
> product_deployments_rotate_secrets(subscription_id, product_id, api_version)



Invokes rotate secrets action on the product deployment

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
    api_instance = openapi_client.ProductDeploymentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_instance.product_deployments_rotate_secrets(subscription_id, product_id, api_version)
    except Exception as e:
        print("Exception when calling ProductDeploymentsApi->product_deployments_rotate_secrets: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | ACCEPTED |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_deployments_unlock**
> product_deployments_unlock(subscription_id, product_id, api_version, unlock_action_parameter)



Unlocks the product subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_deployments_unlock_request import ProductDeploymentsUnlockRequest
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
    api_instance = openapi_client.ProductDeploymentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    unlock_action_parameter = openapi_client.ProductDeploymentsUnlockRequest() # ProductDeploymentsUnlockRequest | Represents bootstrap action parameter

    try:
        api_instance.product_deployments_unlock(subscription_id, product_id, api_version, unlock_action_parameter)
    except Exception as e:
        print("Exception when calling ProductDeploymentsApi->product_deployments_unlock: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **unlock_action_parameter** | [**ProductDeploymentsUnlockRequest**](ProductDeploymentsUnlockRequest.md)| Represents bootstrap action parameter | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

