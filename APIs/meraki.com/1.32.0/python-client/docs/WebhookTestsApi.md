# openapi_client.WebhookTestsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_webhooks_webhook_test_2**](WebhookTestsApi.md#create_network_webhooks_webhook_test_2) | **POST** /networks/{networkId}/webhooks/webhookTests | Send a test webhook for a network
[**get_network_webhooks_webhook_test_2**](WebhookTestsApi.md#get_network_webhooks_webhook_test_2) | **GET** /networks/{networkId}/webhooks/webhookTests/{webhookTestId} | Return the status of a webhook test for a network


# **create_network_webhooks_webhook_test_2**
> CreateNetworkWebhooksWebhookTest201Response create_network_webhooks_webhook_test_2(network_id, create_network_webhooks_webhook_test_request)

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
    api_instance = openapi_client.WebhookTestsApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_webhooks_webhook_test_request = openapi_client.CreateNetworkWebhooksWebhookTestRequest() # CreateNetworkWebhooksWebhookTestRequest | 

    try:
        # Send a test webhook for a network
        api_response = api_instance.create_network_webhooks_webhook_test_2(network_id, create_network_webhooks_webhook_test_request)
        print("The response of WebhookTestsApi->create_network_webhooks_webhook_test_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookTestsApi->create_network_webhooks_webhook_test_2: %s\n" % e)
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

# **get_network_webhooks_webhook_test_2**
> CreateNetworkWebhooksWebhookTest201Response get_network_webhooks_webhook_test_2(network_id, webhook_test_id)

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
    api_instance = openapi_client.WebhookTestsApi(api_client)
    network_id = 'network_id_example' # str | 
    webhook_test_id = 'webhook_test_id_example' # str | 

    try:
        # Return the status of a webhook test for a network
        api_response = api_instance.get_network_webhooks_webhook_test_2(network_id, webhook_test_id)
        print("The response of WebhookTestsApi->get_network_webhooks_webhook_test_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookTestsApi->get_network_webhooks_webhook_test_2: %s\n" % e)
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

