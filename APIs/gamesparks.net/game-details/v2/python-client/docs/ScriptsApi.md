# openapi_client.ScriptsApi

All URIs are relative to *http://config2.gamesparks.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export_zip_using_get**](ScriptsApi.md#export_zip_using_get) | **GET** /restv2/game/{apiKey}/admin/scripts/export | exportZip
[**get_script_differences_using_get**](ScriptsApi.md#get_script_differences_using_get) | **GET** /restv2/game/{apiKey}/admin/scripts/differences/{snapshotId1}/{snapshotId2} | getScriptDifferences
[**get_script_versions_using_get**](ScriptsApi.md#get_script_versions_using_get) | **GET** /restv2/game/{apiKey}/admin/scripts/versions/{page} | getScriptVersions
[**get_script_versions_using_get1**](ScriptsApi.md#get_script_versions_using_get1) | **GET** /restv2/game/{apiKey}/admin/scripts/versions | getScriptVersions
[**import_accept_using_post**](ScriptsApi.md#import_accept_using_post) | **POST** /restv2/game/{apiKey}/admin/scripts/import/accept | importAccept
[**import_zip_using_post**](ScriptsApi.md#import_zip_using_post) | **POST** /restv2/game/{apiKey}/admin/scripts/import/preview | importZip


# **export_zip_using_get**
> export_zip_using_get(api_key)

exportZip

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    api_key = 'api_key_example' # str | apiKey

    try:
        # exportZip
        api_instance.export_zip_using_get(api_key)
    except Exception as e:
        print("Exception when calling ScriptsApi->export_zip_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_script_differences_using_get**
> ScriptsDifferenceListModel get_script_differences_using_get(api_key, snapshot_id1, snapshot_id2)

getScriptDifferences

### Example


```python
import openapi_client
from openapi_client.models.scripts_difference_list_model import ScriptsDifferenceListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    snapshot_id1 = 'snapshot_id1_example' # str | snapshotId1
    snapshot_id2 = 'snapshot_id2_example' # str | snapshotId2

    try:
        # getScriptDifferences
        api_response = api_instance.get_script_differences_using_get(api_key, snapshot_id1, snapshot_id2)
        print("The response of ScriptsApi->get_script_differences_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->get_script_differences_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **snapshot_id1** | **str**| snapshotId1 | 
 **snapshot_id2** | **str**| snapshotId2 | 

### Return type

[**ScriptsDifferenceListModel**](ScriptsDifferenceListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_script_versions_using_get**
> SnapshotScriptVersionListModel get_script_versions_using_get(api_key, page, page_size=page_size)

getScriptVersions

### Example


```python
import openapi_client
from openapi_client.models.snapshot_script_version_list_model import SnapshotScriptVersionListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    page = 56 # int | page
    page_size = 100 # int | pageSize (optional) (default to 100)

    try:
        # getScriptVersions
        api_response = api_instance.get_script_versions_using_get(api_key, page, page_size=page_size)
        print("The response of ScriptsApi->get_script_versions_using_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->get_script_versions_using_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **page** | **int**| page | 
 **page_size** | **int**| pageSize | [optional] [default to 100]

### Return type

[**SnapshotScriptVersionListModel**](SnapshotScriptVersionListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_script_versions_using_get1**
> SnapshotScriptVersionListModel get_script_versions_using_get1(api_key, page_size=page_size)

getScriptVersions

### Example


```python
import openapi_client
from openapi_client.models.snapshot_script_version_list_model import SnapshotScriptVersionListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    page_size = 100 # int | pageSize (optional) (default to 100)

    try:
        # getScriptVersions
        api_response = api_instance.get_script_versions_using_get1(api_key, page_size=page_size)
        print("The response of ScriptsApi->get_script_versions_using_get1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->get_script_versions_using_get1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **page_size** | **int**| pageSize | [optional] [default to 100]

### Return type

[**SnapshotScriptVersionListModel**](SnapshotScriptVersionListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_accept_using_post**
> MessageModel import_accept_using_post(api_key, body, file)

importAccept

### Example


```python
import openapi_client
from openapi_client.models.message_model import MessageModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    body = 'body_example' # str | body
    file = None # bytearray | file

    try:
        # importAccept
        api_response = api_instance.import_accept_using_post(api_key, body, file)
        print("The response of ScriptsApi->import_accept_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->import_accept_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **body** | **str**| body | 
 **file** | **bytearray**| file | 

### Return type

[**MessageModel**](MessageModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **import_zip_using_post**
> ScriptsDifferenceListModel import_zip_using_post(api_key, file)

importZip

### Example


```python
import openapi_client
from openapi_client.models.scripts_difference_list_model import ScriptsDifferenceListModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://config2.gamesparks.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://config2.gamesparks.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    api_key = 'api_key_example' # str | apiKey
    file = None # bytearray | file

    try:
        # importZip
        api_response = api_instance.import_zip_using_post(api_key, file)
        print("The response of ScriptsApi->import_zip_using_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->import_zip_using_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_key** | **str**| apiKey | 
 **file** | **bytearray**| file | 

### Return type

[**ScriptsDifferenceListModel**](ScriptsDifferenceListModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | json error |  -  |
**403** | not allowed |  -  |
**404** | not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

