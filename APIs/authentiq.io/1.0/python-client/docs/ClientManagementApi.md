# openapi_client.ClientManagementApi

All URIs are relative to *https://connect.authentiq.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**client**](ClientManagementApi.md#client) | **GET** /client | List clients
[**client_client_id**](ClientManagementApi.md#client_client_id) | **DELETE** /client/{client_id} | Delete a client
[**create_client**](ClientManagementApi.md#create_client) | **POST** /client | Register a client
[**get_client**](ClientManagementApi.md#get_client) | **GET** /client/{client_id} | View a client
[**update_client**](ClientManagementApi.md#update_client) | **PUT** /client/{client_id} | Update a client


# **client**
> List[Client] client()

List clients

Retrieve a list of clients. 

### Example

* Api Key Authentication (client_registration_token):
* OAuth Authentication (oauth_code):
* OAuth Authentication (oauth_implicit):

```python
import openapi_client
from openapi_client.models.client import Client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: client_registration_token
configuration.api_key['client_registration_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['client_registration_token'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClientManagementApi(api_client)

    try:
        # List clients
        api_response = api_instance.client()
        print("The response of ClientManagementApi->client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientManagementApi->client: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Client]**](Client.md)

### Authorization

[client_registration_token](../README.md#client_registration_token), [oauth_code](../README.md#oauth_code), [oauth_implicit](../README.md#oauth_implicit)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json, application/x-www-form-urlencoded, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of Client Objects. |  -  |
**0** | OAuth 2.0 error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **client_client_id**
> client_client_id(client_id)

Delete a client

Delete a previously registered client. 

### Example

* Api Key Authentication (client_registration_token):
* OAuth Authentication (oauth_code):
* OAuth Authentication (oauth_implicit):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: client_registration_token
configuration.api_key['client_registration_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['client_registration_token'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClientManagementApi(api_client)
    client_id = 'client_id_example' # str | Client identifier

    try:
        # Delete a client
        api_instance.client_client_id(client_id)
    except Exception as e:
        print("Exception when calling ClientManagementApi->client_client_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Client identifier | 

### Return type

void (empty response body)

### Authorization

[client_registration_token](../README.md#client_registration_token), [oauth_code](../README.md#oauth_code), [oauth_implicit](../README.md#oauth_implicit)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json, application/x-www-form-urlencoded, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Client deleted |  -  |
**0** | Problem Detail error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_client**
> create_client(client)

Register a client

Register a new client with this Authentiq Connect provider.  This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension. 

### Example

* Api Key Authentication (client_registration_token):
* OAuth Authentication (oauth_code):
* OAuth Authentication (oauth_implicit):

```python
import openapi_client
from openapi_client.models.client import Client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: client_registration_token
configuration.api_key['client_registration_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['client_registration_token'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClientManagementApi(api_client)
    client = openapi_client.Client() # Client | Client Object

    try:
        # Register a client
        api_instance.create_client(client)
    except Exception as e:
        print("Exception when calling ClientManagementApi->create_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client** | [**Client**](Client.md)| Client Object | 

### Return type

void (empty response body)

### Authorization

[client_registration_token](../README.md#client_registration_token), [oauth_code](../README.md#oauth_code), [oauth_implicit](../README.md#oauth_implicit)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json, application/problem+json, application/x-www-form-urlencoded, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Client created |  * Location - URL of new client resource <br>  |
**0** | Problem Detail error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_client**
> Client get_client(client_id)

View a client

Retrieve the configuration of a previously registered client. 

### Example

* Api Key Authentication (client_registration_token):
* OAuth Authentication (oauth_code):
* OAuth Authentication (oauth_implicit):

```python
import openapi_client
from openapi_client.models.client import Client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: client_registration_token
configuration.api_key['client_registration_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['client_registration_token'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClientManagementApi(api_client)
    client_id = 'client_id_example' # str | Client identifier

    try:
        # View a client
        api_response = api_instance.get_client(client_id)
        print("The response of ClientManagementApi->get_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientManagementApi->get_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Client identifier | 

### Return type

[**Client**](Client.md)

### Authorization

[client_registration_token](../README.md#client_registration_token), [oauth_code](../README.md#oauth_code), [oauth_implicit](../README.md#oauth_implicit)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/problem+json, application/x-www-form-urlencoded, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client found |  -  |
**0** | OAuth 2.0 error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_client**
> Client update_client(client_id, client)

Update a client

Update the configuration of a previously registered client. 

### Example

* Api Key Authentication (client_registration_token):
* OAuth Authentication (oauth_code):
* OAuth Authentication (oauth_implicit):

```python
import openapi_client
from openapi_client.models.client import Client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.authentiq.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.authentiq.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: client_registration_token
configuration.api_key['client_registration_token'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['client_registration_token'] = 'Bearer'

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClientManagementApi(api_client)
    client_id = 'client_id_example' # str | Client identifier
    client = openapi_client.Client() # Client | Client Object

    try:
        # Update a client
        api_response = api_instance.update_client(client_id, client)
        print("The response of ClientManagementApi->update_client:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClientManagementApi->update_client: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| Client identifier | 
 **client** | [**Client**](Client.md)| Client Object | 

### Return type

[**Client**](Client.md)

### Authorization

[client_registration_token](../README.md#client_registration_token), [oauth_code](../README.md#oauth_code), [oauth_implicit](../README.md#oauth_implicit)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json, application/problem+json, application/x-www-form-urlencoded, text/html

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client updated |  -  |
**0** | Problem Detail error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

