# openapi_client.ExecuteApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_proxy**](ExecuteApi.md#delete_proxy) | **DELETE** /proxy | DELETE
[**get_proxy**](ExecuteApi.md#get_proxy) | **GET** /proxy | GET
[**options_proxy**](ExecuteApi.md#options_proxy) | **OPTIONS** /proxy | OPTIONS
[**patch_proxy**](ExecuteApi.md#patch_proxy) | **PATCH** /proxy | PATCH
[**post_proxy**](ExecuteApi.md#post_proxy) | **POST** /proxy | POST
[**put_proxy**](ExecuteApi.md#put_proxy) | **PUT** /proxy | PUT


# **delete_proxy**
> object delete_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization)

DELETE

Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExecuteApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'close' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
    x_apideck_downstream_url = 'https://api.close.com/api/v1/lead' # str | Downstream URL
    x_apideck_downstream_authorization = 'Bearer XXXXXXXXXXXXXXXXX' # str | Downstream authorization header. This will skip the Vault token injection. (optional)

    try:
        # DELETE
        api_response = api_instance.delete_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization)
        print("The response of ExecuteApi->delete_proxy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecuteApi->delete_proxy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | 
 **x_apideck_downstream_url** | **str**| Downstream URL | 
 **x_apideck_downstream_authorization** | **str**| Downstream authorization header. This will skip the Vault token injection. | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**0** | Proxy error |  * x-apideck-downstream-error -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_proxy**
> object get_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization)

GET

Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExecuteApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'close' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
    x_apideck_downstream_url = 'https://api.close.com/api/v1/lead' # str | Downstream URL
    x_apideck_downstream_authorization = 'Bearer XXXXXXXXXXXXXXXXX' # str | Downstream authorization header. This will skip the Vault token injection. (optional)

    try:
        # GET
        api_response = api_instance.get_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization)
        print("The response of ExecuteApi->get_proxy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecuteApi->get_proxy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | 
 **x_apideck_downstream_url** | **str**| Downstream URL | 
 **x_apideck_downstream_authorization** | **str**| Downstream authorization header. This will skip the Vault token injection. | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**0** | Proxy error |  * x-apideck-downstream-error -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **options_proxy**
> object options_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization)

OPTIONS

Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExecuteApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'close' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
    x_apideck_downstream_url = 'https://api.close.com/api/v1/lead' # str | Downstream URL
    x_apideck_downstream_authorization = 'Bearer XXXXXXXXXXXXXXXXX' # str | Downstream authorization header. This will skip the Vault token injection. (optional)

    try:
        # OPTIONS
        api_response = api_instance.options_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization)
        print("The response of ExecuteApi->options_proxy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecuteApi->options_proxy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | 
 **x_apideck_downstream_url** | **str**| Downstream URL | 
 **x_apideck_downstream_authorization** | **str**| Downstream authorization header. This will skip the Vault token injection. | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**0** | Proxy error |  * x-apideck-downstream-error -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_proxy**
> object patch_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization, post_proxy_request=post_proxy_request)

PATCH

Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.post_proxy_request import PostProxyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExecuteApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'close' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
    x_apideck_downstream_url = 'https://api.close.com/api/v1/lead' # str | Downstream URL
    x_apideck_downstream_authorization = 'Bearer XXXXXXXXXXXXXXXXX' # str | Downstream authorization header. This will skip the Vault token injection. (optional)
    post_proxy_request = openapi_client.PostProxyRequest() # PostProxyRequest | Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT. (optional)

    try:
        # PATCH
        api_response = api_instance.patch_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization, post_proxy_request=post_proxy_request)
        print("The response of ExecuteApi->patch_proxy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecuteApi->patch_proxy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | 
 **x_apideck_downstream_url** | **str**| Downstream URL | 
 **x_apideck_downstream_authorization** | **str**| Downstream authorization header. This will skip the Vault token injection. | [optional] 
 **post_proxy_request** | [**PostProxyRequest**](PostProxyRequest.md)| Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT. | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**0** | Proxy error |  * x-apideck-downstream-error -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_proxy**
> object post_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization, post_proxy_request=post_proxy_request)

POST

Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.post_proxy_request import PostProxyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExecuteApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'close' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
    x_apideck_downstream_url = 'https://api.close.com/api/v1/lead' # str | Downstream URL
    x_apideck_downstream_authorization = 'Bearer XXXXXXXXXXXXXXXXX' # str | Downstream authorization header. This will skip the Vault token injection. (optional)
    post_proxy_request = openapi_client.PostProxyRequest() # PostProxyRequest | Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT. (optional)

    try:
        # POST
        api_response = api_instance.post_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization, post_proxy_request=post_proxy_request)
        print("The response of ExecuteApi->post_proxy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecuteApi->post_proxy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | 
 **x_apideck_downstream_url** | **str**| Downstream URL | 
 **x_apideck_downstream_authorization** | **str**| Downstream authorization header. This will skip the Vault token injection. | [optional] 
 **post_proxy_request** | [**PostProxyRequest**](PostProxyRequest.md)| Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT. | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**0** | Proxy error |  * x-apideck-downstream-error -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_proxy**
> object put_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization, put_proxy_request=put_proxy_request)

PUT

Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization. **Note**: Vault will proxy all data to the downstream URL and method/verb in the headers. 

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.put_proxy_request import PutProxyRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ExecuteApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'close' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
    x_apideck_downstream_url = 'https://api.close.com/api/v1/lead' # str | Downstream URL
    x_apideck_downstream_authorization = 'Bearer XXXXXXXXXXXXXXXXX' # str | Downstream authorization header. This will skip the Vault token injection. (optional)
    put_proxy_request = openapi_client.PutProxyRequest() # PutProxyRequest | Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT. (optional)

    try:
        # PUT
        api_response = api_instance.put_proxy(x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id, x_apideck_downstream_url, x_apideck_downstream_authorization=x_apideck_downstream_authorization, put_proxy_request=put_proxy_request)
        print("The response of ExecuteApi->put_proxy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ExecuteApi->put_proxy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | 
 **x_apideck_downstream_url** | **str**| Downstream URL | 
 **x_apideck_downstream_authorization** | **str**| Downstream authorization header. This will skip the Vault token injection. | [optional] 
 **put_proxy_request** | [**PutProxyRequest**](PutProxyRequest.md)| Depending on the verb/method of the request this will contain the request body you want to POST/PATCH/PUT. | [optional] 

### Return type

**object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok |  -  |
**401** | Unauthorized |  -  |
**0** | Proxy error |  * x-apideck-downstream-error -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

