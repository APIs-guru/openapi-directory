# openapi_client.PatrowlEngineApi

All URIs are relative to *http://patrowl.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clean_scan_page**](PatrowlEngineApi.md#clean_scan_page) | **GET** /clean/{scanId} | Clean scan
[**clean_scans_page**](PatrowlEngineApi.md#clean_scans_page) | **GET** /clean | Clean all scans
[**get_default_page**](PatrowlEngineApi.md#get_default_page) | **GET** / | Index page
[**get_finding_page**](PatrowlEngineApi.md#get_finding_page) | **GET** /getfindings/{scanId} | Get findings on finished scans
[**get_info_page**](PatrowlEngineApi.md#get_info_page) | **GET** /info | Engine info page
[**get_liveness_page**](PatrowlEngineApi.md#get_liveness_page) | **GET** /liveness | Liveness page
[**get_readiness_page**](PatrowlEngineApi.md#get_readiness_page) | **GET** /readiness | Readiness page
[**get_test_page**](PatrowlEngineApi.md#get_test_page) | **GET** /test | Test page
[**reload_configuration_page**](PatrowlEngineApi.md#reload_configuration_page) | **GET** /reloadconfig | Configuration reloading page
[**start_scan_page**](PatrowlEngineApi.md#start_scan_page) | **POST** /startscan | Start a new scan
[**status_scan_page**](PatrowlEngineApi.md#status_scan_page) | **GET** /status/{scanId} | Status of a scan
[**status_scans_page**](PatrowlEngineApi.md#status_scans_page) | **GET** /status | Status on all scans
[**stop_scan_page**](PatrowlEngineApi.md#stop_scan_page) | **GET** /stop/{scanId} | Stop a scan
[**stop_scans_page**](PatrowlEngineApi.md#stop_scans_page) | **GET** /stopscans | Stop all scans


# **clean_scan_page**
> ApiResponse clean_scan_page(scan_id)

Clean scan

Clean scan identified by id.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)
    scan_id = 56 # int | Numeric ID of the scan to clean

    try:
        # Clean scan
        api_response = api_instance.clean_scan_page(scan_id)
        print("The response of PatrowlEngineApi->clean_scan_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->clean_scan_page: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scan_id** | **int**| Numeric ID of the scan to clean | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **clean_scans_page**
> ApiResponse clean_scans_page()

Clean all scans

Clean all current scans.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Clean all scans
        api_response = api_instance.clean_scans_page()
        print("The response of PatrowlEngineApi->clean_scans_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->clean_scans_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_default_page**
> ApiResponse get_default_page()

Index page

Return index page

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Index page
        api_response = api_instance.get_default_page()
        print("The response of PatrowlEngineApi->get_default_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->get_default_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_finding_page**
> List[FindingsInner] get_finding_page(scan_id)

Get findings on finished scans

Get findings on finished scans.

### Example


```python
import openapi_client
from openapi_client.models.findings_inner import FindingsInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)
    scan_id = 56 # int | Numeric ID of the scan to get findings

    try:
        # Get findings on finished scans
        api_response = api_instance.get_finding_page(scan_id)
        print("The response of PatrowlEngineApi->get_finding_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->get_finding_page: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scan_id** | **int**| Numeric ID of the scan to get findings | 

### Return type

[**List[FindingsInner]**](FindingsInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_info_page**
> ApiResponse get_info_page()

Engine info page

Return information on engine.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Engine info page
        api_response = api_instance.get_info_page()
        print("The response of PatrowlEngineApi->get_info_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->get_info_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_liveness_page**
> get_liveness_page()

Liveness page

Return liveness page

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Liveness page
        api_instance.get_liveness_page()
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->get_liveness_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_readiness_page**
> get_readiness_page()

Readiness page

Return liveness page

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Readiness page
        api_instance.get_readiness_page()
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->get_readiness_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_test_page**
> get_test_page()

Test page

Return test page

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Test page
        api_instance.get_test_page()
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->get_test_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reload_configuration_page**
> ApiResponse reload_configuration_page()

Configuration reloading page

Reload the configuration file.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Configuration reloading page
        api_response = api_instance.reload_configuration_page()
        print("The response of PatrowlEngineApi->reload_configuration_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->reload_configuration_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_scan_page**
> ApiResponse start_scan_page(scan_definition)

Start a new scan

Start a new scan.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.models.scan_definition import ScanDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)
    scan_definition = openapi_client.ScanDefinition() # ScanDefinition | 

    try:
        # Start a new scan
        api_response = api_instance.start_scan_page(scan_definition)
        print("The response of PatrowlEngineApi->start_scan_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->start_scan_page: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scan_definition** | [**ScanDefinition**](ScanDefinition.md)|  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **status_scan_page**
> ApiResponse status_scan_page(scan_id)

Status of a scan

Status of a scan identified by id.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)
    scan_id = 56 # int | Numeric ID of the scan to get status

    try:
        # Status of a scan
        api_response = api_instance.status_scan_page(scan_id)
        print("The response of PatrowlEngineApi->status_scan_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->status_scan_page: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scan_id** | **int**| Numeric ID of the scan to get status | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **status_scans_page**
> ApiResponse status_scans_page()

Status on all scans

Status all current scans.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Status on all scans
        api_response = api_instance.status_scans_page()
        print("The response of PatrowlEngineApi->status_scans_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->status_scans_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_scan_page**
> ApiResponse stop_scan_page(scan_id)

Stop a scan

Stop a scan identified by id.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)
    scan_id = 56 # int | Numeric ID of the scan to stop

    try:
        # Stop a scan
        api_response = api_instance.stop_scan_page(scan_id)
        print("The response of PatrowlEngineApi->stop_scan_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->stop_scan_page: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scan_id** | **int**| Numeric ID of the scan to stop | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stop_scans_page**
> ApiResponse stop_scans_page()

Stop all scans

Stop all current scans.

### Example


```python
import openapi_client
from openapi_client.models.api_response import ApiResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://patrowl.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://patrowl.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatrowlEngineApi(api_client)

    try:
        # Stop all scans
        api_response = api_instance.stop_scans_page()
        print("The response of PatrowlEngineApi->stop_scans_page:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatrowlEngineApi->stop_scans_page: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

