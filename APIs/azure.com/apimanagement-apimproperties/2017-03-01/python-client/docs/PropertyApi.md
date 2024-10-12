# openapi_client.PropertyApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**property_create_or_update**](PropertyApi.md#property_create_or_update) | **PUT** /properties/{propId} | 
[**property_delete**](PropertyApi.md#property_delete) | **DELETE** /properties/{propId} | 
[**property_get**](PropertyApi.md#property_get) | **GET** /properties/{propId} | 
[**property_list**](PropertyApi.md#property_list) | **GET** /properties | 
[**property_update**](PropertyApi.md#property_update) | **PATCH** /properties/{propId} | 


# **property_create_or_update**
> PropertyContract property_create_or_update(prop_id, api_version, parameters)



Creates or updates a property.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.property_contract import PropertyContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyApi(api_client)
    prop_id = 'prop_id_example' # str | Identifier of the property.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.PropertyContract() # PropertyContract | Create parameters.

    try:
        api_response = api_instance.property_create_or_update(prop_id, api_version, parameters)
        print("The response of PropertyApi->property_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertyApi->property_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prop_id** | **str**| Identifier of the property. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**PropertyContract**](PropertyContract.md)| Create parameters. | 

### Return type

[**PropertyContract**](PropertyContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Property was successfully updated. |  -  |
**201** | Property was successfully created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **property_delete**
> property_delete(prop_id, if_match, api_version)



Deletes specific property from the API Management service instance.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyApi(api_client)
    prop_id = 'prop_id_example' # str | Identifier of the property.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the property to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_instance.property_delete(prop_id, if_match, api_version)
    except Exception as e:
        print("Exception when calling PropertyApi->property_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prop_id** | **str**| Identifier of the property. | 
 **if_match** | **str**| The entity state (Etag) version of the property to delete. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Property was successfully deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **property_get**
> PropertyContract property_get(prop_id, api_version)



Gets the details of the property specified by its identifier.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.property_contract import PropertyContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyApi(api_client)
    prop_id = 'prop_id_example' # str | Identifier of the property.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        api_response = api_instance.property_get(prop_id, api_version)
        print("The response of PropertyApi->property_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertyApi->property_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prop_id** | **str**| Identifier of the property. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**PropertyContract**](PropertyContract.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the specified Property entity. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **property_list**
> PropertyCollection property_list(api_version, filter=filter, top=top, skip=skip)



Lists a collection of properties defined within a service instance.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.property_collection import PropertyCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    filter = 'filter_example' # str | | Field | Supported operators    | Supported functions                                   | |-------|------------------------|-------------------------------------------------------| | tags  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith, any, all | | name  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith           | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.property_list(api_version, filter=filter, top=top, skip=skip)
        print("The response of PropertyApi->property_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertyApi->property_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **filter** | **str**| | Field | Supported operators    | Supported functions                                   | |-------|------------------------|-------------------------------------------------------| | tags  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith, any, all | | name  | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith           | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**PropertyCollection**](PropertyCollection.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Collection of the Property entities for the specified API Management service instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **property_update**
> property_update(prop_id, if_match, api_version, parameters)



Updates the specific property.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.property_update_parameters import PropertyUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyApi(api_client)
    prop_id = 'prop_id_example' # str | Identifier of the property.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the property to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    parameters = openapi_client.PropertyUpdateParameters() # PropertyUpdateParameters | Update parameters.

    try:
        api_instance.property_update(prop_id, if_match, api_version, parameters)
    except Exception as e:
        print("Exception when calling PropertyApi->property_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prop_id** | **str**| Identifier of the property. | 
 **if_match** | **str**| The entity state (Etag) version of the property to update. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **parameters** | [**PropertyUpdateParameters**](PropertyUpdateParameters.md)| Update parameters. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Property was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

