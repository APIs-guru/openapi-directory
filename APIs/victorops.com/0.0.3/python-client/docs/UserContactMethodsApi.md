# openapi_client.UserContactMethodsApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_user_user_contact_methods_devices_contact_id_delete**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_devices_contact_id_delete) | **DELETE** /api-public/v1/user/{user}/contact-methods/devices/{contactId} | Delete a contact device for a user
[**api_public_v1_user_user_contact_methods_devices_contact_id_get**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_devices_contact_id_get) | **GET** /api-public/v1/user/{user}/contact-methods/devices/{contactId} | Get the indicated contact device for a user
[**api_public_v1_user_user_contact_methods_devices_contact_id_put**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_devices_contact_id_put) | **PUT** /api-public/v1/user/{user}/contact-methods/devices/{contactId} | Update a contact device for a user
[**api_public_v1_user_user_contact_methods_devices_get**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_devices_get) | **GET** /api-public/v1/user/{user}/contact-methods/devices | Get a list of all contact devices for a user
[**api_public_v1_user_user_contact_methods_emails_contact_id_delete**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_emails_contact_id_delete) | **DELETE** /api-public/v1/user/{user}/contact-methods/emails/{contactId} | Delete a contact email for a user
[**api_public_v1_user_user_contact_methods_emails_contact_id_get**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_emails_contact_id_get) | **GET** /api-public/v1/user/{user}/contact-methods/emails/{contactId} | Get the indicated contact email for a user
[**api_public_v1_user_user_contact_methods_emails_get**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_emails_get) | **GET** /api-public/v1/user/{user}/contact-methods/emails | Get a list of all contact emails for a user
[**api_public_v1_user_user_contact_methods_emails_post**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_emails_post) | **POST** /api-public/v1/user/{user}/contact-methods/emails | Create a contact emails for a user
[**api_public_v1_user_user_contact_methods_get**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_get) | **GET** /api-public/v1/user/{user}/contact-methods | Get a list of all contact methods for a user
[**api_public_v1_user_user_contact_methods_phones_contact_id_delete**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_phones_contact_id_delete) | **DELETE** /api-public/v1/user/{user}/contact-methods/phones/{contactId} | Delete a contact phone for a user
[**api_public_v1_user_user_contact_methods_phones_contact_id_get**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_phones_contact_id_get) | **GET** /api-public/v1/user/{user}/contact-methods/phones/{contactId} | Get the indicated contact phone for a user
[**api_public_v1_user_user_contact_methods_phones_get**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_phones_get) | **GET** /api-public/v1/user/{user}/contact-methods/phones | Get a list of all contact phones for a user
[**api_public_v1_user_user_contact_methods_phones_post**](UserContactMethodsApi.md#api_public_v1_user_user_contact_methods_phones_post) | **POST** /api-public/v1/user/{user}/contact-methods/phones | Create a contact phones for a user


# **api_public_v1_user_user_contact_methods_devices_contact_id_delete**
> ContactDevice api_public_v1_user_user_contact_methods_devices_contact_id_delete(x_vo_api_id, x_vo_api_key, user, contact_id)

Delete a contact device for a user

Delete a contact device for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.contact_device import ContactDevice
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    contact_id = 'contact_id_example' # str | The unique contact identifier

    try:
        # Delete a contact device for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_devices_contact_id_delete(x_vo_api_id, x_vo_api_key, user, contact_id)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_devices_contact_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_devices_contact_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **contact_id** | **str**| The unique contact identifier | 

### Return type

[**ContactDevice**](ContactDevice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deleted contact device for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_devices_contact_id_get**
> List[ContactDevice] api_public_v1_user_user_contact_methods_devices_contact_id_get(x_vo_api_id, x_vo_api_key, user, contact_id)

Get the indicated contact device for a user

Get the indicated contact device for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.contact_device import ContactDevice
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    contact_id = 'contact_id_example' # str | The unique contact identifier

    try:
        # Get the indicated contact device for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_devices_contact_id_get(x_vo_api_id, x_vo_api_key, user, contact_id)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_devices_contact_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_devices_contact_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **contact_id** | **str**| The unique contact identifier | 

### Return type

[**List[ContactDevice]**](ContactDevice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of contact devices for the user |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_devices_contact_id_put**
> ContactDevice api_public_v1_user_user_contact_methods_devices_contact_id_put(x_vo_api_id, x_vo_api_key, user, contact_id, body)

Update a contact device for a user

Update a contact device for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.contact_device import ContactDevice
from openapi_client.models.contact_device_add import ContactDeviceAdd
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    contact_id = 'contact_id_example' # str | The unique contact identifier
    body = openapi_client.ContactDeviceAdd() # ContactDeviceAdd | The contact device

    try:
        # Update a contact device for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_devices_contact_id_put(x_vo_api_id, x_vo_api_key, user, contact_id, body)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_devices_contact_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_devices_contact_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **contact_id** | **str**| The unique contact identifier | 
 **body** | [**ContactDeviceAdd**](ContactDeviceAdd.md)| The contact device | 

### Return type

[**ContactDevice**](ContactDevice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of contact devices for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_devices_get**
> List[ContactDevice] api_public_v1_user_user_contact_methods_devices_get(x_vo_api_id, x_vo_api_key, user)

Get a list of all contact devices for a user

Get the contact methods for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.contact_device import ContactDevice
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID

    try:
        # Get a list of all contact devices for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_devices_get(x_vo_api_id, x_vo_api_key, user)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_devices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_devices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 

### Return type

[**List[ContactDevice]**](ContactDevice.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of contact devices for the user |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_emails_contact_id_delete**
> UserContact api_public_v1_user_user_contact_methods_emails_contact_id_delete(x_vo_api_id, x_vo_api_key, user, contact_id)

Delete a contact email for a user

Delete the indicated contact email for the user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.user_contact import UserContact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    contact_id = 'contact_id_example' # str | The unique contact identifier

    try:
        # Delete a contact email for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_emails_contact_id_delete(x_vo_api_id, x_vo_api_key, user, contact_id)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_emails_contact_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_emails_contact_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **contact_id** | **str**| The unique contact identifier | 

### Return type

[**UserContact**](UserContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deleted contact email for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_emails_contact_id_get**
> List[UserContact] api_public_v1_user_user_contact_methods_emails_contact_id_get(x_vo_api_id, x_vo_api_key, user, contact_id)

Get the indicated contact email for a user

Get the indicated contact email for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.user_contact import UserContact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    contact_id = 'contact_id_example' # str | The unique contact identifier

    try:
        # Get the indicated contact email for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_emails_contact_id_get(x_vo_api_id, x_vo_api_key, user, contact_id)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_emails_contact_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_emails_contact_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **contact_id** | **str**| The unique contact identifier | 

### Return type

[**List[UserContact]**](UserContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The indicated contact email for the user |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_emails_get**
> List[UserContact] api_public_v1_user_user_contact_methods_emails_get(x_vo_api_id, x_vo_api_key, user)

Get a list of all contact emails for a user

Get the contact emails for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.user_contact import UserContact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID

    try:
        # Get a list of all contact emails for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_emails_get(x_vo_api_id, x_vo_api_key, user)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_emails_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_emails_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 

### Return type

[**List[UserContact]**](UserContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of contact emails for the user |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_emails_post**
> UserContact api_public_v1_user_user_contact_methods_emails_post(x_vo_api_id, x_vo_api_key, user, body)

Create a contact emails for a user

Create a contact email for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.contact_email_add import ContactEmailAdd
from openapi_client.models.user_contact import UserContact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    body = openapi_client.ContactEmailAdd() # ContactEmailAdd | The contact email

    try:
        # Create a contact emails for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_emails_post(x_vo_api_id, x_vo_api_key, user, body)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_emails_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_emails_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **body** | [**ContactEmailAdd**](ContactEmailAdd.md)| The contact email | 

### Return type

[**UserContact**](UserContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of contact emails for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_get**
> ApiPublicV1UserUserContactMethodsGet200Response api_public_v1_user_user_contact_methods_get(x_vo_api_id, x_vo_api_key, user)

Get a list of all contact methods for a user

Get the contact methods for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_user_user_contact_methods_get200_response import ApiPublicV1UserUserContactMethodsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID

    try:
        # Get a list of all contact methods for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_get(x_vo_api_id, x_vo_api_key, user)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 

### Return type

[**ApiPublicV1UserUserContactMethodsGet200Response**](ApiPublicV1UserUserContactMethodsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All available contact methods for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_phones_contact_id_delete**
> UserContact api_public_v1_user_user_contact_methods_phones_contact_id_delete(x_vo_api_id, x_vo_api_key, user, contact_id)

Delete a contact phone for a user

Delete the indicated contact phone for the user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.user_contact import UserContact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    contact_id = 'contact_id_example' # str | The unique contact identifier

    try:
        # Delete a contact phone for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_phones_contact_id_delete(x_vo_api_id, x_vo_api_key, user, contact_id)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_phones_contact_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_phones_contact_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **contact_id** | **str**| The unique contact identifier | 

### Return type

[**UserContact**](UserContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deleted contact phone for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_phones_contact_id_get**
> List[UserContact] api_public_v1_user_user_contact_methods_phones_contact_id_get(x_vo_api_id, x_vo_api_key, user, contact_id)

Get the indicated contact phone for a user

Get the indicated contact phone for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.user_contact import UserContact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    contact_id = 'contact_id_example' # str | The unique contact identifier

    try:
        # Get the indicated contact phone for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_phones_contact_id_get(x_vo_api_id, x_vo_api_key, user, contact_id)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_phones_contact_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_phones_contact_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **contact_id** | **str**| The unique contact identifier | 

### Return type

[**List[UserContact]**](UserContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The indicated contact phone for the user |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_phones_get**
> List[UserContact] api_public_v1_user_user_contact_methods_phones_get(x_vo_api_id, x_vo_api_key, user)

Get a list of all contact phones for a user

Get the contact phones for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.user_contact import UserContact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID

    try:
        # Get a list of all contact phones for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_phones_get(x_vo_api_id, x_vo_api_key, user)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_phones_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_phones_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 

### Return type

[**List[UserContact]**](UserContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of contact phones for the user |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_contact_methods_phones_post**
> UserContact api_public_v1_user_user_contact_methods_phones_post(x_vo_api_id, x_vo_api_key, user, body)

Create a contact phones for a user

Create a contact phone for a user  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.contact_phone_add import ContactPhoneAdd
from openapi_client.models.user_contact import UserContact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserContactMethodsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    body = openapi_client.ContactPhoneAdd() # ContactPhoneAdd | The contact phone

    try:
        # Create a contact phones for a user
        api_response = api_instance.api_public_v1_user_user_contact_methods_phones_post(x_vo_api_id, x_vo_api_key, user, body)
        print("The response of UserContactMethodsApi->api_public_v1_user_user_contact_methods_phones_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserContactMethodsApi->api_public_v1_user_user_contact_methods_phones_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **body** | [**ContactPhoneAdd**](ContactPhoneAdd.md)| The contact phone | 

### Return type

[**UserContact**](UserContact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of contact phones for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

