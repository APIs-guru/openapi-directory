# openapi_client.ServerConfigurationAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**edit_current_server_configuration**](ServerConfigurationAPIApi.md#edit_current_server_configuration) | **PUT** /server | Edit Server Configuration
[**get_current_server_configuration**](ServerConfigurationAPIApi.md#get_current_server_configuration) | **GET** /server | Get Server Configuration


# **edit_current_server_configuration**
> ServerConfigurationResponse edit_current_server_configuration(x_postmark_server_token, body=body)

Edit Server Configuration

### Example


```python
import openapi_client
from openapi_client.models.edit_server_configuration_request import EditServerConfigurationRequest
from openapi_client.models.server_configuration_response import ServerConfigurationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServerConfigurationAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.EditServerConfigurationRequest() # EditServerConfigurationRequest | The settings that should be modified for the current server. (optional)

    try:
        # Edit Server Configuration
        api_response = api_instance.edit_current_server_configuration(x_postmark_server_token, body=body)
        print("The response of ServerConfigurationAPIApi->edit_current_server_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerConfigurationAPIApi->edit_current_server_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**EditServerConfigurationRequest**](EditServerConfigurationRequest.md)| The settings that should be modified for the current server. | [optional] 

### Return type

[**ServerConfigurationResponse**](ServerConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_current_server_configuration**
> ServerConfigurationResponse get_current_server_configuration(x_postmark_server_token)

Get Server Configuration

### Example


```python
import openapi_client
from openapi_client.models.server_configuration_response import ServerConfigurationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServerConfigurationAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.

    try:
        # Get Server Configuration
        api_response = api_instance.get_current_server_configuration(x_postmark_server_token)
        print("The response of ServerConfigurationAPIApi->get_current_server_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerConfigurationAPIApi->get_current_server_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 

### Return type

[**ServerConfigurationResponse**](ServerConfigurationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

