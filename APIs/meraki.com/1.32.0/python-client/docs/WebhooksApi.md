# openapi_client.WebhooksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_webhooks_http_server_1**](WebhooksApi.md#create_network_webhooks_http_server_1) | **POST** /networks/{networkId}/webhooks/httpServers | Add an HTTP server to a network
[**create_network_webhooks_payload_template_1**](WebhooksApi.md#create_network_webhooks_payload_template_1) | **POST** /networks/{networkId}/webhooks/payloadTemplates | Create a webhook payload template for a network
[**create_network_webhooks_webhook_test_1**](WebhooksApi.md#create_network_webhooks_webhook_test_1) | **POST** /networks/{networkId}/webhooks/webhookTests | Send a test webhook for a network
[**delete_network_webhooks_http_server_1**](WebhooksApi.md#delete_network_webhooks_http_server_1) | **DELETE** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Delete an HTTP server from a network
[**delete_network_webhooks_payload_template_1**](WebhooksApi.md#delete_network_webhooks_payload_template_1) | **DELETE** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Destroy a webhook payload template for a network
[**get_network_webhooks_http_server_1**](WebhooksApi.md#get_network_webhooks_http_server_1) | **GET** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Return an HTTP server for a network
[**get_network_webhooks_http_servers_1**](WebhooksApi.md#get_network_webhooks_http_servers_1) | **GET** /networks/{networkId}/webhooks/httpServers | List the HTTP servers for a network
[**get_network_webhooks_payload_template_1**](WebhooksApi.md#get_network_webhooks_payload_template_1) | **GET** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Get the webhook payload template for a network
[**get_network_webhooks_payload_templates_1**](WebhooksApi.md#get_network_webhooks_payload_templates_1) | **GET** /networks/{networkId}/webhooks/payloadTemplates | List the webhook payload templates for a network
[**get_network_webhooks_webhook_test_1**](WebhooksApi.md#get_network_webhooks_webhook_test_1) | **GET** /networks/{networkId}/webhooks/webhookTests/{webhookTestId} | Return the status of a webhook test for a network
[**get_organization_webhooks_alert_types_1**](WebhooksApi.md#get_organization_webhooks_alert_types_1) | **GET** /organizations/{organizationId}/webhooks/alertTypes | Return a list of alert types to be used with managing webhook alerts
[**get_organization_webhooks_logs_1**](WebhooksApi.md#get_organization_webhooks_logs_1) | **GET** /organizations/{organizationId}/webhooks/logs | Return the log of webhook POSTs sent
[**update_network_webhooks_http_server_1**](WebhooksApi.md#update_network_webhooks_http_server_1) | **PUT** /networks/{networkId}/webhooks/httpServers/{httpServerId} | Update an HTTP server
[**update_network_webhooks_payload_template_1**](WebhooksApi.md#update_network_webhooks_payload_template_1) | **PUT** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Update a webhook payload template for a network


# **create_network_webhooks_http_server_1**
> GetNetworkWebhooksHttpServers200ResponseInner create_network_webhooks_http_server_1(network_id, create_network_webhooks_http_server_request)

Add an HTTP server to a network

Add an HTTP server to a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_http_server_request import CreateNetworkWebhooksHttpServerRequest
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_http_server_request = openapi_client.CreateNetworkWebhooksHttpServerRequest() # CreateNetworkWebhooksHttpServerRequest | 

    try:
        # Add an HTTP server to a network
        api_response = api_instance.create_network_webhooks_http_server_1(network_id, create_network_webhooks_http_server_request)
        print("The response of WebhooksApi->create_network_webhooks_http_server_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->create_network_webhooks_http_server_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_webhooks_http_server_request** | [**CreateNetworkWebhooksHttpServerRequest**](CreateNetworkWebhooksHttpServerRequest.md)|  | 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_webhooks_payload_template_1**
> GetNetworkWebhooksPayloadTemplates200ResponseInner create_network_webhooks_payload_template_1(network_id, create_network_webhooks_payload_template_request)

Create a webhook payload template for a network

Create a webhook payload template for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_payload_template_request import CreateNetworkWebhooksPayloadTemplateRequest
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_payload_template_request = openapi_client.CreateNetworkWebhooksPayloadTemplateRequest() # CreateNetworkWebhooksPayloadTemplateRequest | 

    try:
        # Create a webhook payload template for a network
        api_response = api_instance.create_network_webhooks_payload_template_1(network_id, create_network_webhooks_payload_template_request)
        print("The response of WebhooksApi->create_network_webhooks_payload_template_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->create_network_webhooks_payload_template_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_webhooks_payload_template_request** | [**CreateNetworkWebhooksPayloadTemplateRequest**](CreateNetworkWebhooksPayloadTemplateRequest.md)|  | 

### Return type

[**GetNetworkWebhooksPayloadTemplates200ResponseInner**](GetNetworkWebhooksPayloadTemplates200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_network_webhooks_webhook_test_1**
> CreateNetworkWebhooksWebhookTest201Response create_network_webhooks_webhook_test_1(network_id, create_network_webhooks_webhook_test_request)

Send a test webhook for a network

Send a test webhook for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_webhook_test201_response import CreateNetworkWebhooksWebhookTest201Response
from openapi_client.models.create_network_webhooks_webhook_test_request import CreateNetworkWebhooksWebhookTestRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_webhook_test_request = openapi_client.CreateNetworkWebhooksWebhookTestRequest() # CreateNetworkWebhooksWebhookTestRequest | 

    try:
        # Send a test webhook for a network
        api_response = api_instance.create_network_webhooks_webhook_test_1(network_id, create_network_webhooks_webhook_test_request)
        print("The response of WebhooksApi->create_network_webhooks_webhook_test_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->create_network_webhooks_webhook_test_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_webhooks_webhook_test_request** | [**CreateNetworkWebhooksWebhookTestRequest**](CreateNetworkWebhooksWebhookTestRequest.md)|  | 

### Return type

[**CreateNetworkWebhooksWebhookTest201Response**](CreateNetworkWebhooksWebhookTest201Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_webhooks_http_server_1**
> delete_network_webhooks_http_server_1(network_id, http_server_id)

Delete an HTTP server from a network

Delete an HTTP server from a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 

    try:
        # Delete an HTTP server from a network
        api_instance.delete_network_webhooks_http_server_1(network_id, http_server_id)
    except Exception as e:
        print("Exception when calling WebhooksApi->delete_network_webhooks_http_server_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_network_webhooks_payload_template_1**
> delete_network_webhooks_payload_template_1(network_id, payload_template_id)

Destroy a webhook payload template for a network

Destroy a webhook payload template for a network. Does not work for included templates ('wpt_00001', 'wpt_00002', 'wpt_00003', 'wpt_00004', 'wpt_00005' or 'wpt_00006')

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 

    try:
        # Destroy a webhook payload template for a network
        api_instance.delete_network_webhooks_payload_template_1(network_id, payload_template_id)
    except Exception as e:
        print("Exception when calling WebhooksApi->delete_network_webhooks_payload_template_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **payload_template_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_webhooks_http_server_1**
> GetNetworkWebhooksHttpServers200ResponseInner get_network_webhooks_http_server_1(network_id, http_server_id)

Return an HTTP server for a network

Return an HTTP server for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 

    try:
        # Return an HTTP server for a network
        api_response = api_instance.get_network_webhooks_http_server_1(network_id, http_server_id)
        print("The response of WebhooksApi->get_network_webhooks_http_server_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_network_webhooks_http_server_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_webhooks_http_servers_1**
> List[GetNetworkWebhooksHttpServers200ResponseInner] get_network_webhooks_http_servers_1(network_id)

List the HTTP servers for a network

List the HTTP servers for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the HTTP servers for a network
        api_response = api_instance.get_network_webhooks_http_servers_1(network_id)
        print("The response of WebhooksApi->get_network_webhooks_http_servers_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_network_webhooks_http_servers_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkWebhooksHttpServers200ResponseInner]**](GetNetworkWebhooksHttpServers200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_webhooks_payload_template_1**
> GetNetworkWebhooksPayloadTemplates200ResponseInner get_network_webhooks_payload_template_1(network_id, payload_template_id)

Get the webhook payload template for a network

Get the webhook payload template for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 

    try:
        # Get the webhook payload template for a network
        api_response = api_instance.get_network_webhooks_payload_template_1(network_id, payload_template_id)
        print("The response of WebhooksApi->get_network_webhooks_payload_template_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_network_webhooks_payload_template_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **payload_template_id** | **str**|  | 

### Return type

[**GetNetworkWebhooksPayloadTemplates200ResponseInner**](GetNetworkWebhooksPayloadTemplates200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_webhooks_payload_templates_1**
> List[GetNetworkWebhooksPayloadTemplates200ResponseInner] get_network_webhooks_payload_templates_1(network_id)

List the webhook payload templates for a network

List the webhook payload templates for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the webhook payload templates for a network
        api_response = api_instance.get_network_webhooks_payload_templates_1(network_id)
        print("The response of WebhooksApi->get_network_webhooks_payload_templates_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_network_webhooks_payload_templates_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkWebhooksPayloadTemplates200ResponseInner]**](GetNetworkWebhooksPayloadTemplates200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_network_webhooks_webhook_test_1**
> CreateNetworkWebhooksWebhookTest201Response get_network_webhooks_webhook_test_1(network_id, webhook_test_id)

Return the status of a webhook test for a network

Return the status of a webhook test for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_webhooks_webhook_test201_response import CreateNetworkWebhooksWebhookTest201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    webhook_test_id = 'webhook_test_id_example' # str | 

    try:
        # Return the status of a webhook test for a network
        api_response = api_instance.get_network_webhooks_webhook_test_1(network_id, webhook_test_id)
        print("The response of WebhooksApi->get_network_webhooks_webhook_test_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_network_webhooks_webhook_test_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **webhook_test_id** | **str**|  | 

### Return type

[**CreateNetworkWebhooksWebhookTest201Response**](CreateNetworkWebhooksWebhookTest201Response.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_webhooks_alert_types_1**
> List[object] get_organization_webhooks_alert_types_1(organization_id, product_type=product_type)

Return a list of alert types to be used with managing webhook alerts

Return a list of alert types to be used with managing webhook alerts

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    organization_id = 'organization_id_example' # str | 
    product_type = 'product_type_example' # str | Filter sample alerts to a specific product type (optional)

    try:
        # Return a list of alert types to be used with managing webhook alerts
        api_response = api_instance.get_organization_webhooks_alert_types_1(organization_id, product_type=product_type)
        print("The response of WebhooksApi->get_organization_webhooks_alert_types_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_organization_webhooks_alert_types_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **product_type** | **str**| Filter sample alerts to a specific product type | [optional] 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_webhooks_logs_1**
> List[GetOrganizationWebhooksLogs200ResponseInner] get_organization_webhooks_logs_1(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, url=url)

Return the log of webhook POSTs sent

Return the log of webhook POSTs sent

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_organization_webhooks_logs200_response_inner import GetOrganizationWebhooksLogs200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    organization_id = 'organization_id_example' # str | 
    t0 = 't0_example' # str | The beginning of the timespan for the data. The maximum lookback period is 90 days from today. (optional)
    t1 = 't1_example' # str | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. (optional)
    timespan = 3.4 # float | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. (optional)
    per_page = 56 # int | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. (optional)
    starting_after = 'starting_after_example' # str | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    ending_before = 'ending_before_example' # str | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. (optional)
    url = 'url_example' # str | The URL the webhook was sent to (optional)

    try:
        # Return the log of webhook POSTs sent
        api_response = api_instance.get_organization_webhooks_logs_1(organization_id, t0=t0, t1=t1, timespan=timespan, per_page=per_page, starting_after=starting_after, ending_before=ending_before, url=url)
        print("The response of WebhooksApi->get_organization_webhooks_logs_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->get_organization_webhooks_logs_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization_id** | **str**|  | 
 **t0** | **str**| The beginning of the timespan for the data. The maximum lookback period is 90 days from today. | [optional] 
 **t1** | **str**| The end of the timespan for the data. t1 can be a maximum of 31 days after t0. | [optional] 
 **timespan** | **float**| The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. | [optional] 
 **per_page** | **int**| The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. | [optional] 
 **starting_after** | **str**| A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **ending_before** | **str**| A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. | [optional] 
 **url** | **str**| The URL the webhook was sent to | [optional] 

### Return type

[**List[GetOrganizationWebhooksLogs200ResponseInner]**](GetOrganizationWebhooksLogs200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  * Link - A comma-separated list of first, last, prev, and next relative links used for subsequent paginated requests. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_webhooks_http_server_1**
> GetNetworkWebhooksHttpServers200ResponseInner update_network_webhooks_http_server_1(network_id, http_server_id, update_network_webhooks_http_server_request=update_network_webhooks_http_server_request)

Update an HTTP server

Update an HTTP server. To change a URL, create a new HTTP server.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_http_servers200_response_inner import GetNetworkWebhooksHttpServers200ResponseInner
from openapi_client.models.update_network_webhooks_http_server_request import UpdateNetworkWebhooksHttpServerRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    http_server_id = 'http_server_id_example' # str | 
    update_network_webhooks_http_server_request = openapi_client.UpdateNetworkWebhooksHttpServerRequest() # UpdateNetworkWebhooksHttpServerRequest |  (optional)

    try:
        # Update an HTTP server
        api_response = api_instance.update_network_webhooks_http_server_1(network_id, http_server_id, update_network_webhooks_http_server_request=update_network_webhooks_http_server_request)
        print("The response of WebhooksApi->update_network_webhooks_http_server_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->update_network_webhooks_http_server_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **http_server_id** | **str**|  | 
 **update_network_webhooks_http_server_request** | [**UpdateNetworkWebhooksHttpServerRequest**](UpdateNetworkWebhooksHttpServerRequest.md)|  | [optional] 

### Return type

[**GetNetworkWebhooksHttpServers200ResponseInner**](GetNetworkWebhooksHttpServers200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_network_webhooks_payload_template_1**
> GetNetworkWebhooksPayloadTemplates200ResponseInner update_network_webhooks_payload_template_1(network_id, payload_template_id, update_network_webhooks_payload_template_request=update_network_webhooks_payload_template_request)

Update a webhook payload template for a network

Update a webhook payload template for a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_webhooks_payload_templates200_response_inner import GetNetworkWebhooksPayloadTemplates200ResponseInner
from openapi_client.models.update_network_webhooks_payload_template_request import UpdateNetworkWebhooksPayloadTemplateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WebhooksApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 
    update_network_webhooks_payload_template_request = openapi_client.UpdateNetworkWebhooksPayloadTemplateRequest() # UpdateNetworkWebhooksPayloadTemplateRequest |  (optional)

    try:
        # Update a webhook payload template for a network
        api_response = api_instance.update_network_webhooks_payload_template_1(network_id, payload_template_id, update_network_webhooks_payload_template_request=update_network_webhooks_payload_template_request)
        print("The response of WebhooksApi->update_network_webhooks_payload_template_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->update_network_webhooks_payload_template_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **payload_template_id** | **str**|  | 
 **update_network_webhooks_payload_template_request** | [**UpdateNetworkWebhooksPayloadTemplateRequest**](UpdateNetworkWebhooksPayloadTemplateRequest.md)|  | [optional] 

### Return type

[**GetNetworkWebhooksPayloadTemplates200ResponseInner**](GetNetworkWebhooksPayloadTemplates200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

