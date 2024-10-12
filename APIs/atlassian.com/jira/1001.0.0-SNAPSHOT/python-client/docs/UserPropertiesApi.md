# openapi_client.UserPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_user_property**](UserPropertiesApi.md#delete_user_property) | **DELETE** /rest/api/3/user/properties/{propertyKey} | Delete user property
[**get_user_property**](UserPropertiesApi.md#get_user_property) | **GET** /rest/api/3/user/properties/{propertyKey} | Get user property
[**get_user_property_keys**](UserPropertiesApi.md#get_user_property_keys) | **GET** /rest/api/3/user/properties | Get user property keys
[**set_user_property**](UserPropertiesApi.md#set_user_property) | **PUT** /rest/api/3/user/properties/{propertyKey} | Set user property


# **delete_user_property**
> delete_user_property(property_key, account_id=account_id, user_key=user_key, username=username)

Delete user property

Deletes a property from a user.  Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to delete a property from any user.  *  Access to Jira, to delete a property from the calling user's record.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPropertiesApi(api_client)
    property_key = 'property_key_example' # str | The key of the user's property.
    account_id = '5b10ac8d82e05b22cc7d4ef5' # str | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    user_key = 'user_key_example' # str | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username = 'username_example' # str | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)

    try:
        # Delete user property
        api_instance.delete_user_property(property_key, account_id=account_id, user_key=user_key, username=username)
    except Exception as e:
        print("Exception when calling UserPropertiesApi->delete_user_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_key** | **str**| The key of the user&#39;s property. | 
 **account_id** | **str**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
 **user_key** | **str**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **str**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the user property is deleted. |  -  |
**400** | Returned if &#x60;accountId&#x60; is missing. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
**404** | Returned if the user or the property is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_property**
> EntityProperty get_user_property(property_key, account_id=account_id, user_key=user_key, username=username)

Get user property

Returns the value of a user's property. If no property key is provided [Get user property keys](#api-rest-api-3-user-properties-get) is called.  Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to get a property from any user.  *  Access to Jira, to get a property from the calling user's record.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.entity_property import EntityProperty
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPropertiesApi(api_client)
    property_key = 'property_key_example' # str | The key of the user's property.
    account_id = '5b10ac8d82e05b22cc7d4ef5' # str | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    user_key = 'user_key_example' # str | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username = 'username_example' # str | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)

    try:
        # Get user property
        api_response = api_instance.get_user_property(property_key, account_id=account_id, user_key=user_key, username=username)
        print("The response of UserPropertiesApi->get_user_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPropertiesApi->get_user_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_key** | **str**| The key of the user&#39;s property. | 
 **account_id** | **str**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
 **user_key** | **str**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **str**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if &#x60;accountId&#x60; is missing. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
**404** | Returned if the user is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_property_keys**
> PropertyKeys get_user_property_keys(account_id=account_id, user_key=user_key, username=username)

Get user property keys

Returns the keys of all properties for a user.  Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to access the property keys on any user.  *  Access to Jira, to access the calling user's property keys.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.property_keys import PropertyKeys
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPropertiesApi(api_client)
    account_id = '5b10ac8d82e05b22cc7d4ef5' # str | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    user_key = 'user_key_example' # str | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username = 'username_example' # str | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)

    try:
        # Get user property keys
        api_response = api_instance.get_user_property_keys(account_id=account_id, user_key=user_key, username=username)
        print("The response of UserPropertiesApi->get_user_property_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPropertiesApi->get_user_property_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
 **user_key** | **str**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **str**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if &#x60;accountId&#x60; is missing. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
**404** | Returned if the user is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_user_property**
> object set_user_property(property_key, body, account_id=account_id, user_key=user_key, username=username)

Set user property

Sets the value of a user's property. Use this resource to store custom data against a user.  Note: This operation does not access the [user properties](https://confluence.atlassian.com/x/8YxjL) created and maintained in Jira.  **[Permissions](#permissions) required:**   *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg), to set a property on any user.  *  Access to Jira, to set a property on the calling user's record.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserPropertiesApi(api_client)
    property_key = 'property_key_example' # str | The key of the user's property. The maximum length is 255 characters.
    body = None # object | 
    account_id = '5b10ac8d82e05b22cc7d4ef5' # str | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. (optional)
    user_key = 'user_key_example' # str | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)
    username = 'username_example' # str | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. (optional)

    try:
        # Set user property
        api_response = api_instance.set_user_property(property_key, body, account_id=account_id, user_key=user_key, username=username)
        print("The response of UserPropertiesApi->set_user_property:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserPropertiesApi->set_user_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_key** | **str**| The key of the user&#39;s property. The maximum length is 255 characters. | 
 **body** | **object**|  | 
 **account_id** | **str**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
 **user_key** | **str**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **username** | **str**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the user property is updated. |  -  |
**201** | Returned if the user property is created. |  -  |
**400** | Returned if &#x60;accountId&#x60; is missing. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission or is not accessing their user record. |  -  |
**404** | Returned if the user is not found. |  -  |
**405** | Returned if the property key is not specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

