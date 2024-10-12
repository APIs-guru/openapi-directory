# openapi_client.PayloadTemplatesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_webhooks_payload_template_2**](PayloadTemplatesApi.md#create_network_webhooks_payload_template_2) | **POST** /networks/{networkId}/webhooks/payloadTemplates | Create a webhook payload template for a network
[**delete_network_webhooks_payload_template_2**](PayloadTemplatesApi.md#delete_network_webhooks_payload_template_2) | **DELETE** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Destroy a webhook payload template for a network
[**get_network_webhooks_payload_template_2**](PayloadTemplatesApi.md#get_network_webhooks_payload_template_2) | **GET** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Get the webhook payload template for a network
[**get_network_webhooks_payload_templates_2**](PayloadTemplatesApi.md#get_network_webhooks_payload_templates_2) | **GET** /networks/{networkId}/webhooks/payloadTemplates | List the webhook payload templates for a network
[**update_network_webhooks_payload_template_2**](PayloadTemplatesApi.md#update_network_webhooks_payload_template_2) | **PUT** /networks/{networkId}/webhooks/payloadTemplates/{payloadTemplateId} | Update a webhook payload template for a network


# **create_network_webhooks_payload_template_2**
> GetNetworkWebhooksPayloadTemplates200ResponseInner create_network_webhooks_payload_template_2(network_id, create_network_webhooks_payload_template_request)

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
    api_instance = openapi_client.PayloadTemplatesApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_payload_template_request = openapi_client.CreateNetworkWebhooksPayloadTemplateRequest() # CreateNetworkWebhooksPayloadTemplateRequest | 

    try:
        # Create a webhook payload template for a network
        api_response = api_instance.create_network_webhooks_payload_template_2(network_id, create_network_webhooks_payload_template_request)
        print("The response of PayloadTemplatesApi->create_network_webhooks_payload_template_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayloadTemplatesApi->create_network_webhooks_payload_template_2: %s\n" % e)
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

# **delete_network_webhooks_payload_template_2**
> delete_network_webhooks_payload_template_2(network_id, payload_template_id)

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
    api_instance = openapi_client.PayloadTemplatesApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 

    try:
        # Destroy a webhook payload template for a network
        api_instance.delete_network_webhooks_payload_template_2(network_id, payload_template_id)
    except Exception as e:
        print("Exception when calling PayloadTemplatesApi->delete_network_webhooks_payload_template_2: %s\n" % e)
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

# **get_network_webhooks_payload_template_2**
> GetNetworkWebhooksPayloadTemplates200ResponseInner get_network_webhooks_payload_template_2(network_id, payload_template_id)

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
    api_instance = openapi_client.PayloadTemplatesApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 

    try:
        # Get the webhook payload template for a network
        api_response = api_instance.get_network_webhooks_payload_template_2(network_id, payload_template_id)
        print("The response of PayloadTemplatesApi->get_network_webhooks_payload_template_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayloadTemplatesApi->get_network_webhooks_payload_template_2: %s\n" % e)
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

# **get_network_webhooks_payload_templates_2**
> List[GetNetworkWebhooksPayloadTemplates200ResponseInner] get_network_webhooks_payload_templates_2(network_id)

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
    api_instance = openapi_client.PayloadTemplatesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # List the webhook payload templates for a network
        api_response = api_instance.get_network_webhooks_payload_templates_2(network_id)
        print("The response of PayloadTemplatesApi->get_network_webhooks_payload_templates_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayloadTemplatesApi->get_network_webhooks_payload_templates_2: %s\n" % e)
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

# **update_network_webhooks_payload_template_2**
> GetNetworkWebhooksPayloadTemplates200ResponseInner update_network_webhooks_payload_template_2(network_id, payload_template_id, update_network_webhooks_payload_template_request=update_network_webhooks_payload_template_request)

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
    api_instance = openapi_client.PayloadTemplatesApi(api_client)
    network_id = 'network_id_example' # str | 
    payload_template_id = 'payload_template_id_example' # str | 
    update_network_webhooks_payload_template_request = openapi_client.UpdateNetworkWebhooksPayloadTemplateRequest() # UpdateNetworkWebhooksPayloadTemplateRequest |  (optional)

    try:
        # Update a webhook payload template for a network
        api_response = api_instance.update_network_webhooks_payload_template_2(network_id, payload_template_id, update_network_webhooks_payload_template_request=update_network_webhooks_payload_template_request)
        print("The response of PayloadTemplatesApi->update_network_webhooks_payload_template_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayloadTemplatesApi->update_network_webhooks_payload_template_2: %s\n" % e)
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

