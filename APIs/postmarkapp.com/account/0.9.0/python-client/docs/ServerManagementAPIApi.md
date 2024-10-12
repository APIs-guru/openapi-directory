# openapi_client.ServerManagementAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_server**](ServerManagementAPIApi.md#create_server) | **POST** /servers | Create a Server
[**delete_server**](ServerManagementAPIApi.md#delete_server) | **DELETE** /servers/{serverid} | Delete a Server
[**edit_server_information**](ServerManagementAPIApi.md#edit_server_information) | **PUT** /servers/{serverid} | Edit a Server
[**get_server_information**](ServerManagementAPIApi.md#get_server_information) | **GET** /servers/{serverid} | Get a Server
[**list_servers**](ServerManagementAPIApi.md#list_servers) | **GET** /servers | List servers


# **create_server**
> ExtendedServerInfo create_server(x_postmark_account_token, body=body)

Create a Server

### Example


```python
import openapi_client
from openapi_client.models.create_server_payload import CreateServerPayload
from openapi_client.models.extended_server_info import ExtendedServerInfo
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
    api_instance = openapi_client.ServerManagementAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    body = openapi_client.CreateServerPayload() # CreateServerPayload |  (optional)

    try:
        # Create a Server
        api_response = api_instance.create_server(x_postmark_account_token, body=body)
        print("The response of ServerManagementAPIApi->create_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerManagementAPIApi->create_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **body** | [**CreateServerPayload**](CreateServerPayload.md)|  | [optional] 

### Return type

[**ExtendedServerInfo**](ExtendedServerInfo.md)

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

# **delete_server**
> delete_server(x_postmark_account_token, serverid)

Delete a Server

### Example


```python
import openapi_client
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
    api_instance = openapi_client.ServerManagementAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    serverid = 56 # int | The ID of the Server that should be deleted.

    try:
        # Delete a Server
        api_instance.delete_server(x_postmark_account_token, serverid)
    except Exception as e:
        print("Exception when calling ServerManagementAPIApi->delete_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **serverid** | **int**| The ID of the Server that should be deleted. | 

### Return type

void (empty response body)

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

# **edit_server_information**
> ExtendedServerInfo edit_server_information(x_postmark_account_token, serverid, body=body)

Edit a Server

### Example


```python
import openapi_client
from openapi_client.models.edit_server_payload import EditServerPayload
from openapi_client.models.extended_server_info import ExtendedServerInfo
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
    api_instance = openapi_client.ServerManagementAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    serverid = 56 # int | The ID of the Server to update.
    body = openapi_client.EditServerPayload() # EditServerPayload |  (optional)

    try:
        # Edit a Server
        api_response = api_instance.edit_server_information(x_postmark_account_token, serverid, body=body)
        print("The response of ServerManagementAPIApi->edit_server_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerManagementAPIApi->edit_server_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **serverid** | **int**| The ID of the Server to update. | 
 **body** | [**EditServerPayload**](EditServerPayload.md)|  | [optional] 

### Return type

[**ExtendedServerInfo**](ExtendedServerInfo.md)

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

# **get_server_information**
> ExtendedServerInfo get_server_information(x_postmark_account_token, serverid)

Get a Server

### Example


```python
import openapi_client
from openapi_client.models.extended_server_info import ExtendedServerInfo
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
    api_instance = openapi_client.ServerManagementAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    serverid = 56 # int | The ID of the Server to get.

    try:
        # Get a Server
        api_response = api_instance.get_server_information(x_postmark_account_token, serverid)
        print("The response of ServerManagementAPIApi->get_server_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerManagementAPIApi->get_server_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **serverid** | **int**| The ID of the Server to get. | 

### Return type

[**ExtendedServerInfo**](ExtendedServerInfo.md)

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

# **list_servers**
> ServerListingResponse list_servers(x_postmark_account_token, count, offset, name=name)

List servers

### Example


```python
import openapi_client
from openapi_client.models.server_listing_response import ServerListingResponse
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
    api_instance = openapi_client.ServerManagementAPIApi(api_client)
    x_postmark_account_token = 'x_postmark_account_token_example' # str | The token associated with the Account on which this request will operate.
    count = 56 # int | Number of servers to return per request.
    offset = 56 # int | Number of servers to skip.
    name = 'name_example' # str | Filter by a specific server name (optional)

    try:
        # List servers
        api_response = api_instance.list_servers(x_postmark_account_token, count, offset, name=name)
        print("The response of ServerManagementAPIApi->list_servers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerManagementAPIApi->list_servers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_account_token** | **str**| The token associated with the Account on which this request will operate. | 
 **count** | **int**| Number of servers to return per request. | 
 **offset** | **int**| Number of servers to skip. | 
 **name** | **str**| Filter by a specific server name | [optional] 

### Return type

[**ServerListingResponse**](ServerListingResponse.md)

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

