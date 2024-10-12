# openapi_client.PropertyManagementApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_name**](PropertyManagementApi.md#create_name) | **POST** /Names/$/Create | Creates a Service Fabric name.
[**delete_name**](PropertyManagementApi.md#delete_name) | **DELETE** /Names/{nameId} | Deletes a Service Fabric name.
[**delete_property**](PropertyManagementApi.md#delete_property) | **DELETE** /Names/{nameId}/$/GetProperty | Deletes the specified Service Fabric property.
[**get_name_exists_info**](PropertyManagementApi.md#get_name_exists_info) | **GET** /Names/{nameId} | Returns whether the Service Fabric name exists.
[**get_property_info**](PropertyManagementApi.md#get_property_info) | **GET** /Names/{nameId}/$/GetProperty | Gets the specified Service Fabric property.
[**get_property_info_list**](PropertyManagementApi.md#get_property_info_list) | **GET** /Names/{nameId}/$/GetProperties | Gets information on all Service Fabric properties under a given name.
[**get_sub_name_info_list**](PropertyManagementApi.md#get_sub_name_info_list) | **GET** /Names/{nameId}/$/GetSubNames | Enumerates all the Service Fabric names under a given name.
[**put_property**](PropertyManagementApi.md#put_property) | **PUT** /Names/{nameId}/$/GetProperty | Creates or updates a Service Fabric property.
[**submit_property_batch**](PropertyManagementApi.md#submit_property_batch) | **POST** /Names/{nameId}/$/GetProperties/$/SubmitBatch | Submits a property batch.


# **create_name**
> create_name(api_version, name_description, timeout=timeout)

Creates a Service Fabric name.

Creates the specified Service Fabric name.

### Example


```python
import openapi_client
from openapi_client.models.name_description import NameDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_description = openapi_client.NameDescription() # NameDescription | Describes the Service Fabric name to be created.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Creates a Service Fabric name.
        api_instance.create_name(api_version, name_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->create_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_description** | [**NameDescription**](NameDescription.md)| Describes the Service Fabric name to be created. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**201** | A successful response means that the name has been created. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_name**
> delete_name(api_version, name_id, timeout=timeout)

Deletes a Service Fabric name.

Deletes the specified Service Fabric name. A name must be created before it can be deleted. Deleting a name with child properties will fail.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_id = 'name_id_example' # str | The Service Fabric name, without the 'fabric:' URI scheme.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Deletes a Service Fabric name.
        api_instance.delete_name(api_version, name_id, timeout=timeout)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->delete_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_id** | **str**| The Service Fabric name, without the &#39;fabric:&#39; URI scheme. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful response means that the Service Fabric name has been deleted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_property**
> delete_property(api_version, name_id, property_name, timeout=timeout)

Deletes the specified Service Fabric property.

Deletes the specified Service Fabric property under a given name. A property must be created before it can be deleted.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_id = 'name_id_example' # str | The Service Fabric name, without the 'fabric:' URI scheme.
    property_name = 'property_name_example' # str | Specifies the name of the property to get.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Deletes the specified Service Fabric property.
        api_instance.delete_property(api_version, name_id, property_name, timeout=timeout)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->delete_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_id** | **str**| The Service Fabric name, without the &#39;fabric:&#39; URI scheme. | 
 **property_name** | **str**| Specifies the name of the property to get. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful response means that the property has been deleted. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_name_exists_info**
> get_name_exists_info(api_version, name_id, timeout=timeout)

Returns whether the Service Fabric name exists.

Returns whether the specified Service Fabric name exists.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_id = 'name_id_example' # str | The Service Fabric name, without the 'fabric:' URI scheme.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Returns whether the Service Fabric name exists.
        api_instance.get_name_exists_info(api_version, name_id, timeout=timeout)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->get_name_exists_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_id** | **str**| The Service Fabric name, without the &#39;fabric:&#39; URI scheme. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful response means that the Service Fabric name exists. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_property_info**
> PropertyInfo get_property_info(api_version, name_id, property_name, timeout=timeout)

Gets the specified Service Fabric property.

Gets the specified Service Fabric property under a given name. This will always return both value and metadata.

### Example


```python
import openapi_client
from openapi_client.models.property_info import PropertyInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_id = 'name_id_example' # str | The Service Fabric name, without the 'fabric:' URI scheme.
    property_name = 'property_name_example' # str | Specifies the name of the property to get.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the specified Service Fabric property.
        api_response = api_instance.get_property_info(api_version, name_id, property_name, timeout=timeout)
        print("The response of PropertyManagementApi->get_property_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->get_property_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_id** | **str**| The Service Fabric name, without the &#39;fabric:&#39; URI scheme. | 
 **property_name** | **str**| Specifies the name of the property to get. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PropertyInfo**](PropertyInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Details on the Service Fabric property. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_property_info_list**
> PagedPropertyInfoList get_property_info_list(api_version, name_id, include_values=include_values, continuation_token=continuation_token, timeout=timeout)

Gets information on all Service Fabric properties under a given name.

A Service Fabric name can have one or more named properties that stores custom information. This operation gets the information about these properties in a paged list. The information include name, value and metadata about each of the properties.

### Example


```python
import openapi_client
from openapi_client.models.paged_property_info_list import PagedPropertyInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_id = 'name_id_example' # str | The Service Fabric name, without the 'fabric:' URI scheme.
    include_values = False # bool | Allows specifying whether to include the values of the properties returned. True if values should be returned with the metadata; False to return only property metadata. (optional) (default to False)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets information on all Service Fabric properties under a given name.
        api_response = api_instance.get_property_info_list(api_version, name_id, include_values=include_values, continuation_token=continuation_token, timeout=timeout)
        print("The response of PropertyManagementApi->get_property_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->get_property_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_id** | **str**| The Service Fabric name, without the &#39;fabric:&#39; URI scheme. | 
 **include_values** | **bool**| Allows specifying whether to include the values of the properties returned. True if values should be returned with the metadata; False to return only property metadata. | [optional] [default to False]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedPropertyInfoList**](PagedPropertyInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paged list of Service Fabric properties. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sub_name_info_list**
> PagedSubNameInfoList get_sub_name_info_list(api_version, name_id, recursive=recursive, continuation_token=continuation_token, timeout=timeout)

Enumerates all the Service Fabric names under a given name.

Enumerates all the Service Fabric names under a given name. If the subnames do not fit in a page, one page of results is returned as well as a continuation token which can be used to get the next page. Querying a name that doesn't exist will fail.

### Example


```python
import openapi_client
from openapi_client.models.paged_sub_name_info_list import PagedSubNameInfoList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_id = 'name_id_example' # str | The Service Fabric name, without the 'fabric:' URI scheme.
    recursive = False # bool | Allows specifying that the search performed should be recursive. (optional) (default to False)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Enumerates all the Service Fabric names under a given name.
        api_response = api_instance.get_sub_name_info_list(api_version, name_id, recursive=recursive, continuation_token=continuation_token, timeout=timeout)
        print("The response of PropertyManagementApi->get_sub_name_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->get_sub_name_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_id** | **str**| The Service Fabric name, without the &#39;fabric:&#39; URI scheme. | 
 **recursive** | **bool**| Allows specifying that the search performed should be recursive. | [optional] [default to False]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedSubNameInfoList**](PagedSubNameInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paged list of Service Fabric names. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_property**
> put_property(api_version, name_id, property_description, timeout=timeout)

Creates or updates a Service Fabric property.

Creates or updates the specified Service Fabric property under a given name.

### Example


```python
import openapi_client
from openapi_client.models.property_description import PropertyDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_id = 'name_id_example' # str | The Service Fabric name, without the 'fabric:' URI scheme.
    property_description = openapi_client.PropertyDescription() # PropertyDescription | Describes the Service Fabric property to be created.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Creates or updates a Service Fabric property.
        api_instance.put_property(api_version, name_id, property_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->put_property: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_id** | **str**| The Service Fabric name, without the &#39;fabric:&#39; URI scheme. | 
 **property_description** | [**PropertyDescription**](PropertyDescription.md)| Describes the Service Fabric property to be created. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful response means that the property has been created or updated. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_property_batch**
> SuccessfulPropertyBatchInfo submit_property_batch(api_version, name_id, property_batch_description_list, timeout=timeout)

Submits a property batch.

Submits a batch of property operations. Either all or none of the operations will be committed.

### Example


```python
import openapi_client
from openapi_client.models.property_batch_description_list import PropertyBatchDescriptionList
from openapi_client.models.successful_property_batch_info import SuccessfulPropertyBatchInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PropertyManagementApi(api_client)
    api_version = 6.0 # str | The version of this API. This is a required parameter and its value must be \"6.0\".  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  (default to 6.0)
    name_id = 'name_id_example' # str | The Service Fabric name, without the 'fabric:' URI scheme.
    property_batch_description_list = openapi_client.PropertyBatchDescriptionList() # PropertyBatchDescriptionList | Describes the property batch operations to be submitted.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Submits a property batch.
        api_response = api_instance.submit_property_batch(api_version, name_id, property_batch_description_list, timeout=timeout)
        print("The response of PropertyManagementApi->submit_property_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PropertyManagementApi->submit_property_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of this API. This is a required parameter and its value must be \&quot;6.0\&quot;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version.  | [default to 6.0]
 **name_id** | **str**| The Service Fabric name, without the &#39;fabric:&#39; URI scheme. | 
 **property_batch_description_list** | [**PropertyBatchDescriptionList**](PropertyBatchDescriptionList.md)| Describes the property batch operations to be submitted. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**SuccessfulPropertyBatchInfo**](SuccessfulPropertyBatchInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response means that the property batch succeeded. |  -  |
**409** | A 409 response means that one of the property batch operations failed, and contains more information about the failure. None of the operations were commited. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

