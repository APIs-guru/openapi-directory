# openapi_client.ProductSecretsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_secrets_get**](ProductSecretsApi.md#product_secrets_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/{productId}/secrets/{secretName} | 
[**product_secrets_import**](ProductSecretsApi.md#product_secrets_import) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/{productId}/secrets/{secretName}/import | 
[**product_secrets_list**](ProductSecretsApi.md#product_secrets_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId}/secrets | 
[**product_secrets_validate**](ProductSecretsApi.md#product_secrets_validate) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productSecrets/{productId}/secrets/{secretName}/validate | 


# **product_secrets_get**
> ProductSecret product_secrets_get(subscription_id, product_id, api_version, secret_name)



Retrieves the specific product secret details.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_secret import ProductSecret
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
    api_instance = openapi_client.ProductSecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    secret_name = 'secret_name_example' # str | The secret name.

    try:
        api_response = api_instance.product_secrets_get(subscription_id, product_id, api_version, secret_name)
        print("The response of ProductSecretsApi->product_secrets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductSecretsApi->product_secrets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **secret_name** | **str**| The secret name. | 

### Return type

[**ProductSecret**](ProductSecret.md)

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

# **product_secrets_import**
> product_secrets_import(subscription_id, product_id, secret_name, api_version, secret_parameters)



Imports a product secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_parameters import SecretParameters
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
    api_instance = openapi_client.ProductSecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    secret_name = 'secret_name_example' # str | The secret name.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    secret_parameters = openapi_client.SecretParameters() # SecretParameters | The parameters required for creating/updating a product secret.

    try:
        api_instance.product_secrets_import(subscription_id, product_id, secret_name, api_version, secret_parameters)
    except Exception as e:
        print("Exception when calling ProductSecretsApi->product_secrets_import: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **secret_name** | **str**| The secret name. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **secret_parameters** | [**SecretParameters**](SecretParameters.md)| The parameters required for creating/updating a product secret. | 

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
**200** | Accepted |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_secrets_list**
> ProductSecretsList product_secrets_list(subscription_id, api_version, product_id)



Returns an array of product secrets.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_secrets_list import ProductSecretsList
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
    api_instance = openapi_client.ProductSecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    product_id = 'product_id_example' # str | The product identifier.

    try:
        api_response = api_instance.product_secrets_list(subscription_id, api_version, product_id)
        print("The response of ProductSecretsApi->product_secrets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductSecretsApi->product_secrets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **product_id** | **str**| The product identifier. | 

### Return type

[**ProductSecretsList**](ProductSecretsList.md)

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

# **product_secrets_validate**
> product_secrets_validate(subscription_id, product_id, secret_name, api_version, secret_parameters)



Validates a product secret.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.secret_parameters import SecretParameters
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
    api_instance = openapi_client.ProductSecretsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    secret_name = 'secret_name_example' # str | The secret name.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')
    secret_parameters = openapi_client.SecretParameters() # SecretParameters | The parameters required for creating/updating a product secret.

    try:
        api_instance.product_secrets_validate(subscription_id, product_id, secret_name, api_version, secret_parameters)
    except Exception as e:
        print("Exception when calling ProductSecretsApi->product_secrets_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **secret_name** | **str**| The secret name. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]
 **secret_parameters** | [**SecretParameters**](SecretParameters.md)| The parameters required for creating/updating a product secret. | 

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
**200** | Accepted |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

