# openapi_client.InvitationApi

All URIs are relative to *https://api.redirection.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accept_invitation_item**](InvitationApi.md#accept_invitation_item) | **POST** /invitations/accept/{token} | Creates a Invitation resource.
[**delete_invitation_item**](InvitationApi.md#delete_invitation_item) | **DELETE** /invitations/{id} | Removes the Invitation resource.
[**get_invitation_collection**](InvitationApi.md#get_invitation_collection) | **GET** /invitations | Retrieves the collection of Invitation resources.
[**get_invitation_item**](InvitationApi.md#get_invitation_item) | **GET** /invitations/{id} | Retrieves a Invitation resource.
[**post_invitation_collection**](InvitationApi.md#post_invitation_collection) | **POST** /invitations | Creates a Invitation resource.


# **accept_invitation_item**
> InvitationRead accept_invitation_item(token, invitation)

Creates a Invitation resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.invitation import Invitation
from openapi_client.models.invitation_read import InvitationRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
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
    api_instance = openapi_client.InvitationApi(api_client)
    token = 'token_example' # str | The invitation acceptation token
    invitation = openapi_client.Invitation() # Invitation | The new Invitation resource

    try:
        # Creates a Invitation resource.
        api_response = api_instance.accept_invitation_item(token, invitation)
        print("The response of InvitationApi->accept_invitation_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationApi->accept_invitation_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| The invitation acceptation token | 
 **invitation** | [**Invitation**](Invitation.md)| The new Invitation resource | 

### Return type

[**InvitationRead**](InvitationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Invitation resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_invitation_item**
> delete_invitation_item(id)

Removes the Invitation resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
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
    api_instance = openapi_client.InvitationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Removes the Invitation resource.
        api_instance.delete_invitation_item(id)
    except Exception as e:
        print("Exception when calling InvitationApi->delete_invitation_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Invitation resource deleted |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_invitation_collection**
> List[InvitationRead] get_invitation_collection(target_id, target_type)

Retrieves the collection of Invitation resources.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.invitation_read import InvitationRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
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
    api_instance = openapi_client.InvitationApi(api_client)
    target_id = 'target_id_example' # str | 
    target_type = 'target_type_example' # str | 

    try:
        # Retrieves the collection of Invitation resources.
        api_response = api_instance.get_invitation_collection(target_id, target_type)
        print("The response of InvitationApi->get_invitation_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationApi->get_invitation_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target_id** | **str**|  | 
 **target_type** | **str**|  | 

### Return type

[**List[InvitationRead]**](InvitationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invitation collection response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_invitation_item**
> InvitationRead get_invitation_item(id)

Retrieves a Invitation resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.invitation_read import InvitationRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
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
    api_instance = openapi_client.InvitationApi(api_client)
    id = 'id_example' # str | 

    try:
        # Retrieves a Invitation resource.
        api_response = api_instance.get_invitation_item(id)
        print("The response of InvitationApi->get_invitation_item:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationApi->get_invitation_item: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**InvitationRead**](InvitationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invitation resource response |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_invitation_collection**
> InvitationRead post_invitation_collection(invitation=invitation)

Creates a Invitation resource.

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.invitation_read import InvitationRead
from openapi_client.models.invitation_write import InvitationWrite
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.redirection.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.redirection.io"
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
    api_instance = openapi_client.InvitationApi(api_client)
    invitation = openapi_client.InvitationWrite() # InvitationWrite | The new Invitation resource (optional)

    try:
        # Creates a Invitation resource.
        api_response = api_instance.post_invitation_collection(invitation=invitation)
        print("The response of InvitationApi->post_invitation_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvitationApi->post_invitation_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitation** | [**InvitationWrite**](InvitationWrite.md)| The new Invitation resource | [optional] 

### Return type

[**InvitationRead**](InvitationRead.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/ld+json, application/json, text/html, text/csv
 - **Accept**: application/ld+json, application/json, text/html, text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Invitation resource created |  -  |
**400** | Invalid input |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

