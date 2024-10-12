# openapi_client.AppPropertiesApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addon_properties_resource_delete_addon_property_delete**](AppPropertiesApi.md#addon_properties_resource_delete_addon_property_delete) | **DELETE** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Delete app property
[**addon_properties_resource_get_addon_properties_get**](AppPropertiesApi.md#addon_properties_resource_get_addon_properties_get) | **GET** /rest/atlassian-connect/1/addons/{addonKey}/properties | Get app properties
[**addon_properties_resource_get_addon_property_get**](AppPropertiesApi.md#addon_properties_resource_get_addon_property_get) | **GET** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Get app property
[**addon_properties_resource_put_addon_property_put**](AppPropertiesApi.md#addon_properties_resource_put_addon_property_put) | **PUT** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Set app property


# **addon_properties_resource_delete_addon_property_delete**
> addon_properties_resource_delete_addon_property_delete(addon_key, property_key)

Delete app property

Deletes an app's property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPropertiesApi(api_client)
    addon_key = 'addon_key_example' # str | The key of the app, as defined in its descriptor.
    property_key = 'property_key_example' # str | The key of the property.

    try:
        # Delete app property
        api_instance.addon_properties_resource_delete_addon_property_delete(addon_key, property_key)
    except Exception as e:
        print("Exception when calling AppPropertiesApi->addon_properties_resource_delete_addon_property_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_key** | **str**| The key of the app, as defined in its descriptor. | 
 **property_key** | **str**| The key of the property. | 

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
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the property key is longer than 127 characters. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**404** | Returned if the property is not found or doesn&#39;t belong to the app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addon_properties_resource_get_addon_properties_get**
> PropertyKeys addon_properties_resource_get_addon_properties_get(addon_key)

Get app properties

Gets all the properties of an app.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request. Additionally, Forge apps published on the Marketplace can access properties of Connect apps they were [migrated from](https://developer.atlassian.com/platform/forge/build-a-connect-on-forge-app/).

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
    api_instance = openapi_client.AppPropertiesApi(api_client)
    addon_key = 'addon_key_example' # str | The key of the app, as defined in its descriptor.

    try:
        # Get app properties
        api_response = api_instance.addon_properties_resource_get_addon_properties_get(addon_key)
        print("The response of AppPropertiesApi->addon_properties_resource_get_addon_properties_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPropertiesApi->addon_properties_resource_get_addon_properties_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_key** | **str**| The key of the app, as defined in its descriptor. | 

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
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addon_properties_resource_get_addon_property_get**
> EntityProperty addon_properties_resource_get_addon_property_get(addon_key, property_key)

Get app property

Returns the key and value of an app's property.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request. Additionally, Forge apps published on the Marketplace can access properties of Connect apps they were [migrated from](https://developer.atlassian.com/platform/forge/build-a-connect-on-forge-app/).

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
    api_instance = openapi_client.AppPropertiesApi(api_client)
    addon_key = 'addon_key_example' # str | The key of the app, as defined in its descriptor.
    property_key = 'property_key_example' # str | The key of the property.

    try:
        # Get app property
        api_response = api_instance.addon_properties_resource_get_addon_property_get(addon_key, property_key)
        print("The response of AppPropertiesApi->addon_properties_resource_get_addon_property_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPropertiesApi->addon_properties_resource_get_addon_property_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_key** | **str**| The key of the app, as defined in its descriptor. | 
 **property_key** | **str**| The key of the property. | 

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
**400** | Returned if the property key is longer than 127 characters. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**404** | Returned if the property is not found or doesn&#39;t belong to the app. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **addon_properties_resource_put_addon_property_put**
> OperationMessage addon_properties_resource_put_addon_property_put(addon_key, property_key, body)

Set app property

Sets the value of an app's property. Use this resource to store custom data for your app.  The value of the request body must be a [valid](http://tools.ietf.org/html/rfc4627), non-empty JSON blob. The maximum length is 32768 characters.  **[Permissions](#permissions) required:** Only a Connect app whose key matches `addonKey` can make this request.

### Example


```python
import openapi_client
from openapi_client.models.operation_message import OperationMessage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPropertiesApi(api_client)
    addon_key = 'addon_key_example' # str | The key of the app, as defined in its descriptor.
    property_key = 'property_key_example' # str | The key of the property.
    body = None # object | 

    try:
        # Set app property
        api_response = api_instance.addon_properties_resource_put_addon_property_put(addon_key, property_key, body)
        print("The response of AppPropertiesApi->addon_properties_resource_put_addon_property_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPropertiesApi->addon_properties_resource_put_addon_property_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon_key** | **str**| The key of the app, as defined in its descriptor. | 
 **property_key** | **str**| The key of the property. | 
 **body** | **object**|  | 

### Return type

[**OperationMessage**](OperationMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the property is updated. |  -  |
**201** | Returned is the property is created. |  -  |
**400** | Returned if:   * the property key is longer than 127 characters.   * the value is not valid JSON.   * the value is longer than 32768 characters. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

