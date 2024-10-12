# openapi_client.AppPkgmApi

All URIs are relative to *http://etsi.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**app_dget**](AppPkgmApi.md#app_dget) | **GET** /onboarded_app_packages/{appDId}/appd | Reads the content of the AppD of on-boarded individual application package resources.
[**app_did_get**](AppPkgmApi.md#app_did_get) | **GET** /onboarded_app_packages/{appDId}/package_content | Fetch the onboarded application package content identified by appPkgId or appDId.
[**app_did_put**](AppPkgmApi.md#app_did_put) | **PUT** /onboarded_app_packages/{appDId}/package_content | Uploads the content of application package.
[**app_package_delete**](AppPkgmApi.md#app_package_delete) | **DELETE** /app_packages/{appPkgId} | Deletes an individual application package resources
[**app_package_get**](AppPkgmApi.md#app_package_get) | **GET** /app_packages/{appPkgId} | Queries the information related to individual application package resources
[**app_package_patch**](AppPkgmApi.md#app_package_patch) | **PATCH** /app_packages/{appPkgId} | Updates the operational state of an individual application package resource
[**app_packages_get**](AppPkgmApi.md#app_packages_get) | **GET** /app_packages | Queries information relating to on-boarded application packages in the MEO
[**app_packages_post**](AppPkgmApi.md#app_packages_post) | **POST** /app_packages | Create a resource for on-boarding an application package to a MEO
[**app_pkg_get**](AppPkgmApi.md#app_pkg_get) | **GET** /app_packages/{appPkgId}/package_content | Fetch the onboarded application package content identified by appPkgId or appDId.
[**app_pkg_id_get**](AppPkgmApi.md#app_pkg_id_get) | **GET** /app_packages/{appPkgId}/appd | Reads the content of the AppD of on-boarded individual application package resources.
[**app_pkg_put**](AppPkgmApi.md#app_pkg_put) | **PUT** /app_packages/{appPkgId}/package_content | Uploads the content of application package.
[**individual_subscription_delete**](AppPkgmApi.md#individual_subscription_delete) | **DELETE** /subscriptions/{subscriptionId} | Deletes the individual subscription to notifications about application package changes in MEO.
[**individual_subscription_get**](AppPkgmApi.md#individual_subscription_get) | **GET** /subscriptions/{subscriptionId} | Used to represent an individual subscription to notifications about application package changes.
[**subscriptions_get**](AppPkgmApi.md#subscriptions_get) | **GET** /subscriptions | used to retrieve the information of subscriptions to individual application package resource in MEO
[**subscriptions_post**](AppPkgmApi.md#subscriptions_post) | **POST** /subscriptions | Subscribe to notifications about on-boarding an application package


# **app_dget**
> AppD app_dget(app_did, filter=filter, all_fields=all_fields, fields=fields, exclude_fields=exclude_fields, exclude_default=exclude_default)

Reads the content of the AppD of on-boarded individual application package resources.

Reads the content of the AppD of on-boarded individual application package resources.

### Example


```python
import openapi_client
from openapi_client.models.app_d import AppD
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_did = 'app_did_example' # str | Identifier of an application descriptor
    filter = 'filter_example' # str | Attribute-based filtering parameters according to ETSI GS MEC 009 (optional)
    all_fields = 'all_fields_example' # str | Include all complex attributes in the response. (optional)
    fields = 'fields_example' # str | Complex attributes of AppPkgInfo to be included into the response (optional)
    exclude_fields = 'exclude_fields_example' # str | Complex attributes of AppPkgInfo to be excluded from the response. (optional)
    exclude_default = 'exclude_default_example' # str | Indicates to exclude the following complex attributes of AppPkgInfo from the response. (optional)

    try:
        # Reads the content of the AppD of on-boarded individual application package resources.
        api_response = api_instance.app_dget(app_did, filter=filter, all_fields=all_fields, fields=fields, exclude_fields=exclude_fields, exclude_default=exclude_default)
        print("The response of AppPkgmApi->app_dget:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_dget: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_did** | **str**| Identifier of an application descriptor | 
 **filter** | **str**| Attribute-based filtering parameters according to ETSI GS MEC 009 | [optional] 
 **all_fields** | **str**| Include all complex attributes in the response. | [optional] 
 **fields** | **str**| Complex attributes of AppPkgInfo to be included into the response | [optional] 
 **exclude_fields** | **str**| Complex attributes of AppPkgInfo to be excluded from the response. | [optional] 
 **exclude_default** | **str**| Indicates to exclude the following complex attributes of AppPkgInfo from the response. | [optional] 

### Return type

[**AppD**](AppD.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, text/plain, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Content of the AppD is returned. |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_did_get**
> app_did_get(app_did)

Fetch the onboarded application package content identified by appPkgId or appDId.

Fetch the onboarded application package content identified by appPkgId or appDId.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_did = 'app_did_example' # str | Identifier of an application descriptor

    try:
        # Fetch the onboarded application package content identified by appPkgId or appDId.
        api_instance.app_did_get(app_did)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_did_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_did** | **str**| Identifier of an application descriptor | 

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
**200** | The payload body shall contain a copy of the file representing the AppD or a ZIP file that contains the file or multiple files representing the AppD. |  -  |
**206** | Partial content |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**416** | Range Not Satisfiable . |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_did_put**
> app_did_put(app_did, body=body)

Uploads the content of application package.

Uploads the content of application package.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_did = 'app_did_example' # str | Identifier of an application descriptor
    body = None # bytearray |  (optional)

    try:
        # Uploads the content of application package.
        api_instance.app_did_put(app_did, body=body)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_did_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_did** | **str**| Identifier of an application descriptor | 
 **body** | **bytearray**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/zip
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The application package has been accepted for uploading, but the processing has not been completed. |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**409** | Conflict : The operation cannot be executed currently, due to a conflict with the state of the resource |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_package_delete**
> app_package_delete(app_pkg_id)

Deletes an individual application package resources

Deletes an individual application package resources

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_pkg_id = 'app_pkg_id_example' # str | Identifier of an individual application package resource

    try:
        # Deletes an individual application package resources
        api_instance.app_package_delete(app_pkg_id)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_package_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_pkg_id** | **str**| Identifier of an individual application package resource | 

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
**204** | No Content |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_package_get**
> AppPkgInfo app_package_get(app_pkg_id)

Queries the information related to individual application package resources

Queries the information related to individual application package resources

### Example


```python
import openapi_client
from openapi_client.models.app_pkg_info import AppPkgInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_pkg_id = 'app_pkg_id_example' # str | Identifier of an individual application package resource

    try:
        # Queries the information related to individual application package resources
        api_response = api_instance.app_package_get(app_pkg_id)
        print("The response of AppPkgmApi->app_package_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_package_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_pkg_id** | **str**| Identifier of an individual application package resource | 

### Return type

[**AppPkgInfo**](AppPkgInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains a representation of the application package resource |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_package_patch**
> AppPkgInfoModifications app_package_patch(app_pkg_id, app_pkg_info_modifications)

Updates the operational state of an individual application package resource

Updates the operational state of an individual application package resources

### Example


```python
import openapi_client
from openapi_client.models.app_pkg_info_modifications import AppPkgInfoModifications
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_pkg_id = 'app_pkg_id_example' # str | Identifier of an individual application package resource
    app_pkg_info_modifications = openapi_client.AppPkgInfoModifications() # AppPkgInfoModifications | Operational state to be set

    try:
        # Updates the operational state of an individual application package resource
        api_response = api_instance.app_package_patch(app_pkg_id, app_pkg_info_modifications)
        print("The response of AppPkgmApi->app_package_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_package_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_pkg_id** | **str**| Identifier of an individual application package resource | 
 **app_pkg_info_modifications** | [**AppPkgInfoModifications**](AppPkgInfoModifications.md)| Operational state to be set | 

### Return type

[**AppPkgInfoModifications**](AppPkgInfoModifications.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Shows that the operation has been completed successfully |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**409** | Conflict : The operation cannot be executed currently, due to a conflict with the state of the resource |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_packages_get**
> List[AppPkgInfo] app_packages_get(filter=filter, all_fields=all_fields, fields=fields, exclude_fields=exclude_fields, exclude_default=exclude_default)

Queries information relating to on-boarded application packages in the MEO

queries information relating to on-boarded application packages in the MEO

### Example


```python
import openapi_client
from openapi_client.models.app_pkg_info import AppPkgInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    filter = 'filter_example' # str | Attribute-based filtering parameters according to ETSI GS MEC 009 (optional)
    all_fields = 'all_fields_example' # str | Include all complex attributes in the response. (optional)
    fields = 'fields_example' # str | Complex attributes of AppPkgInfo to be included into the response (optional)
    exclude_fields = 'exclude_fields_example' # str | Complex attributes of AppPkgInfo to be excluded from the response. (optional)
    exclude_default = 'exclude_default_example' # str | Indicates to exclude the following complex attributes of AppPkgInfo from the response. (optional)

    try:
        # Queries information relating to on-boarded application packages in the MEO
        api_response = api_instance.app_packages_get(filter=filter, all_fields=all_fields, fields=fields, exclude_fields=exclude_fields, exclude_default=exclude_default)
        print("The response of AppPkgmApi->app_packages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_packages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **str**| Attribute-based filtering parameters according to ETSI GS MEC 009 | [optional] 
 **all_fields** | **str**| Include all complex attributes in the response. | [optional] 
 **fields** | **str**| Complex attributes of AppPkgInfo to be included into the response | [optional] 
 **exclude_fields** | **str**| Complex attributes of AppPkgInfo to be excluded from the response. | [optional] 
 **exclude_default** | **str**| Indicates to exclude the following complex attributes of AppPkgInfo from the response. | [optional] 

### Return type

[**List[AppPkgInfo]**](AppPkgInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains a representation of the application package resource |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_packages_post**
> List[AppPkgInfo] app_packages_post(create_app_pkg)

Create a resource for on-boarding an application package to a MEO

Create a resource for on-boarding an application package to a MEO

### Example


```python
import openapi_client
from openapi_client.models.app_pkg_info import AppPkgInfo
from openapi_client.models.create_app_pkg import CreateAppPkg
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    create_app_pkg = openapi_client.CreateAppPkg() # CreateAppPkg | Resource to be created

    try:
        # Create a resource for on-boarding an application package to a MEO
        api_response = api_instance.app_packages_post(create_app_pkg)
        print("The response of AppPkgmApi->app_packages_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_packages_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_app_pkg** | [**CreateAppPkg**](CreateAppPkg.md)| Resource to be created | 

### Return type

[**List[AppPkgInfo]**](AppPkgInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response for resource creation |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_pkg_get**
> app_pkg_get(app_pkg_id)

Fetch the onboarded application package content identified by appPkgId or appDId.

Fetch the onboarded application package content identified by appPkgId or appDId.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_pkg_id = 'app_pkg_id_example' # str | Identifier of an on-boarded individual application package

    try:
        # Fetch the onboarded application package content identified by appPkgId or appDId.
        api_instance.app_pkg_get(app_pkg_id)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_pkg_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_pkg_id** | **str**| Identifier of an on-boarded individual application package | 

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
**200** | The payload body shall contain a copy of the file representing the AppD or a ZIP file that contains the file or multiple files representing the AppD. |  -  |
**206** | Partial content |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**416** | Range Not Satisfiable . |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_pkg_id_get**
> AppD app_pkg_id_get(app_pkg_id, filter=filter, all_fields=all_fields, fields=fields, exclude_fields=exclude_fields, exclude_default=exclude_default)

Reads the content of the AppD of on-boarded individual application package resources.

Reads the content of the AppD of on-boarded individual application package resources.

### Example


```python
import openapi_client
from openapi_client.models.app_d import AppD
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_pkg_id = 'app_pkg_id_example' # str | Identifier of an on-boarded individual application package
    filter = 'filter_example' # str | Attribute-based filtering parameters according to ETSI GS MEC 009 (optional)
    all_fields = 'all_fields_example' # str | Include all complex attributes in the response. (optional)
    fields = 'fields_example' # str | Complex attributes of AppPkgInfo to be included into the response (optional)
    exclude_fields = 'exclude_fields_example' # str | Complex attributes of AppPkgInfo to be excluded from the response. (optional)
    exclude_default = 'exclude_default_example' # str | Indicates to exclude the following complex attributes of AppPkgInfo from the response. (optional)

    try:
        # Reads the content of the AppD of on-boarded individual application package resources.
        api_response = api_instance.app_pkg_id_get(app_pkg_id, filter=filter, all_fields=all_fields, fields=fields, exclude_fields=exclude_fields, exclude_default=exclude_default)
        print("The response of AppPkgmApi->app_pkg_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_pkg_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_pkg_id** | **str**| Identifier of an on-boarded individual application package | 
 **filter** | **str**| Attribute-based filtering parameters according to ETSI GS MEC 009 | [optional] 
 **all_fields** | **str**| Include all complex attributes in the response. | [optional] 
 **fields** | **str**| Complex attributes of AppPkgInfo to be included into the response | [optional] 
 **exclude_fields** | **str**| Complex attributes of AppPkgInfo to be excluded from the response. | [optional] 
 **exclude_default** | **str**| Indicates to exclude the following complex attributes of AppPkgInfo from the response. | [optional] 

### Return type

[**AppD**](AppD.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, text/plain, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Content of the AppD is returned. |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_pkg_put**
> app_pkg_put(app_pkg_id, body=body)

Uploads the content of application package.

Uploads the content of application package.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_pkg_id = 'app_pkg_id_example' # str | Identifier of an on-boarded individual application package
    body = None # bytearray |  (optional)

    try:
        # Uploads the content of application package.
        api_instance.app_pkg_put(app_pkg_id, body=body)
    except Exception as e:
        print("Exception when calling AppPkgmApi->app_pkg_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_pkg_id** | **str**| Identifier of an on-boarded individual application package | 
 **body** | **bytearray**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/zip
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The application package has been accepted for uploading, but the processing has not been completed. |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**409** | Conflict : The operation cannot be executed currently, due to a conflict with the state of the resource |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **individual_subscription_delete**
> individual_subscription_delete(subscription_id)

Deletes the individual subscription to notifications about application package changes in MEO.

Deletes the individual subscription to notifications about application package changes in MEO.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of an individual subscription to notifications about application package changes

    try:
        # Deletes the individual subscription to notifications about application package changes in MEO.
        api_instance.individual_subscription_delete(subscription_id)
    except Exception as e:
        print("Exception when calling AppPkgmApi->individual_subscription_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of an individual subscription to notifications about application package changes | 

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
**204** | No Content |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **individual_subscription_get**
> AppPkgSubscriptionInfo individual_subscription_get(subscription_id)

Used to represent an individual subscription to notifications about application package changes.

Used to represent an individual subscription to notifications about application package changes.

### Example


```python
import openapi_client
from openapi_client.models.app_pkg_subscription_info import AppPkgSubscriptionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    subscription_id = 'subscription_id_example' # str | Identifier of an individual subscription to notifications about application package changes

    try:
        # Used to represent an individual subscription to notifications about application package changes.
        api_response = api_instance.individual_subscription_get(subscription_id)
        print("The response of AppPkgmApi->individual_subscription_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->individual_subscription_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Identifier of an individual subscription to notifications about application package changes | 

### Return type

[**AppPkgSubscriptionInfo**](AppPkgSubscriptionInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Representation of the resource. |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_get**
> AppPkgSubscriptionLinkList subscriptions_get()

used to retrieve the information of subscriptions to individual application package resource in MEO

used to retrieve the information of subscriptions to individual application package resource in MEO package

### Example


```python
import openapi_client
from openapi_client.models.app_pkg_subscription_link_list import AppPkgSubscriptionLinkList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)

    try:
        # used to retrieve the information of subscriptions to individual application package resource in MEO
        api_response = api_instance.subscriptions_get()
        print("The response of AppPkgmApi->subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->subscriptions_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AppPkgSubscriptionLinkList**](AppPkgSubscriptionLinkList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of zero or more subscriptions |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_post**
> AppPkgSubscriptionInfo subscriptions_post(app_pkg_subscription)

Subscribe to notifications about on-boarding an application package

Subscribe to notifications about on-boarding an application package

### Example


```python
import openapi_client
from openapi_client.models.app_pkg_subscription import AppPkgSubscription
from openapi_client.models.app_pkg_subscription_info import AppPkgSubscriptionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://etsi.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://etsi.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppPkgmApi(api_client)
    app_pkg_subscription = openapi_client.AppPkgSubscription() # AppPkgSubscription | The input parameters of subscribe operation to notifications

    try:
        # Subscribe to notifications about on-boarding an application package
        api_response = api_instance.subscriptions_post(app_pkg_subscription)
        print("The response of AppPkgmApi->subscriptions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppPkgmApi->subscriptions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_pkg_subscription** | [**AppPkgSubscription**](AppPkgSubscription.md)| The input parameters of subscribe operation to notifications | 

### Return type

[**AppPkgSubscriptionInfo**](AppPkgSubscriptionInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response for created subscription |  -  |
**400** | Bad Request : used to indicate that incorrect parameters were passed to the request. |  -  |
**401** | Unauthorized :  used when the client did not submit credentials. |  -  |
**403** | Forbidden :  operation is not allowed given the current status of the resource. |  -  |
**404** | Not Found :  used when a client provided a URI that cannot be mapped to a valid resource URI. |  -  |
**406** | Not Acceptable : used to indicate that the server cannot provide the any of the content formats supported by the client. |  -  |
**429** | Too Many Requests : used when a rate limiter has triggered. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

