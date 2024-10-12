# openapi_client.StateApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_or_update_state**](StateApi.md#create_or_update_state) | **POST** /v1/state/create_or_update | Create or update the state for a connection.
[**get_state**](StateApi.md#get_state) | **POST** /v1/state/get | Fetch the current state for a connection.


# **create_or_update_state**
> ConnectionState create_or_update_state(connection_state_create_or_update)

Create or update the state for a connection.

### Example


```python
import openapi_client
from openapi_client.models.connection_state import ConnectionState
from openapi_client.models.connection_state_create_or_update import ConnectionStateCreateOrUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StateApi(api_client)
    connection_state_create_or_update = openapi_client.ConnectionStateCreateOrUpdate() # ConnectionStateCreateOrUpdate | 

    try:
        # Create or update the state for a connection.
        api_response = api_instance.create_or_update_state(connection_state_create_or_update)
        print("The response of StateApi->create_or_update_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StateApi->create_or_update_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_state_create_or_update** | [**ConnectionStateCreateOrUpdate**](ConnectionStateCreateOrUpdate.md)|  | 

### Return type

[**ConnectionState**](ConnectionState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_state**
> ConnectionState get_state(connection_id_request_body)

Fetch the current state for a connection.

### Example


```python
import openapi_client
from openapi_client.models.connection_id_request_body import ConnectionIdRequestBody
from openapi_client.models.connection_state import ConnectionState
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StateApi(api_client)
    connection_id_request_body = openapi_client.ConnectionIdRequestBody() # ConnectionIdRequestBody | 

    try:
        # Fetch the current state for a connection.
        api_response = api_instance.get_state(connection_id_request_body)
        print("The response of StateApi->get_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StateApi->get_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_id_request_body** | [**ConnectionIdRequestBody**](ConnectionIdRequestBody.md)|  | 

### Return type

[**ConnectionState**](ConnectionState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

