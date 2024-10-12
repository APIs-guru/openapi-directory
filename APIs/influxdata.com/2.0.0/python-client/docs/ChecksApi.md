# openapi_client.ChecksApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_check**](ChecksApi.md#create_check) | **POST** /checks | Add new check
[**delete_checks_id**](ChecksApi.md#delete_checks_id) | **DELETE** /checks/{checkID} | Delete a check
[**delete_checks_id_labels_id**](ChecksApi.md#delete_checks_id_labels_id) | **DELETE** /checks/{checkID}/labels/{labelID} | Delete label from a check
[**get_checks**](ChecksApi.md#get_checks) | **GET** /checks | List all checks
[**get_checks_id**](ChecksApi.md#get_checks_id) | **GET** /checks/{checkID} | Retrieve a check
[**get_checks_id_labels**](ChecksApi.md#get_checks_id_labels) | **GET** /checks/{checkID}/labels | List all labels for a check
[**get_checks_id_query**](ChecksApi.md#get_checks_id_query) | **GET** /checks/{checkID}/query | Retrieve a check query
[**patch_checks_id**](ChecksApi.md#patch_checks_id) | **PATCH** /checks/{checkID} | Update a check
[**post_checks_id_labels**](ChecksApi.md#post_checks_id_labels) | **POST** /checks/{checkID}/labels | Add a label to a check
[**put_checks_id**](ChecksApi.md#put_checks_id) | **PUT** /checks/{checkID} | Update a check


# **create_check**
> Check create_check(post_check)

Add new check

### Example


```python
import openapi_client
from openapi_client.models.check import Check
from openapi_client.models.post_check import PostCheck
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    post_check = openapi_client.PostCheck() # PostCheck | Check to create

    try:
        # Add new check
        api_response = api_instance.create_check(post_check)
        print("The response of ChecksApi->create_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->create_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_check** | [**PostCheck**](PostCheck.md)| Check to create | 

### Return type

[**Check**](Check.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Check created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_checks_id**
> delete_checks_id(check_id, zap_trace_span=zap_trace_span)

Delete a check

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    check_id = 'check_id_example' # str | The check ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a check
        api_instance.delete_checks_id(check_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling ChecksApi->delete_checks_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **str**| The check ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Delete has been accepted |  -  |
**404** | The check was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_checks_id_labels_id**
> delete_checks_id_labels_id(check_id, label_id, zap_trace_span=zap_trace_span)

Delete label from a check

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    check_id = 'check_id_example' # str | The check ID.
    label_id = 'label_id_example' # str | The ID of the label to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete label from a check
        api_instance.delete_checks_id_labels_id(check_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling ChecksApi->delete_checks_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **str**| The check ID. | 
 **label_id** | **str**| The ID of the label to delete. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Delete has been accepted |  -  |
**404** | Check or label not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_checks**
> Checks get_checks(org_id, zap_trace_span=zap_trace_span, offset=offset, limit=limit)

List all checks

### Example


```python
import openapi_client
from openapi_client.models.checks import Checks
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    org_id = 'org_id_example' # str | Only show checks that belong to a specific organization ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    offset = 56 # int |  (optional)
    limit = 20 # int |  (optional) (default to 20)

    try:
        # List all checks
        api_response = api_instance.get_checks(org_id, zap_trace_span=zap_trace_span, offset=offset, limit=limit)
        print("The response of ChecksApi->get_checks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->get_checks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Only show checks that belong to a specific organization ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]

### Return type

[**Checks**](Checks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of checks |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_checks_id**
> Check get_checks_id(check_id, zap_trace_span=zap_trace_span)

Retrieve a check

### Example


```python
import openapi_client
from openapi_client.models.check import Check
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    check_id = 'check_id_example' # str | The check ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a check
        api_response = api_instance.get_checks_id(check_id, zap_trace_span=zap_trace_span)
        print("The response of ChecksApi->get_checks_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->get_checks_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **str**| The check ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Check**](Check.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The check requested |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_checks_id_labels**
> LabelsResponse get_checks_id_labels(check_id, zap_trace_span=zap_trace_span)

List all labels for a check

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    check_id = 'check_id_example' # str | The check ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a check
        api_response = api_instance.get_checks_id_labels(check_id, zap_trace_span=zap_trace_span)
        print("The response of ChecksApi->get_checks_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->get_checks_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **str**| The check ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all labels for a check |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_checks_id_query**
> FluxResponse get_checks_id_query(check_id, zap_trace_span=zap_trace_span)

Retrieve a check query

### Example


```python
import openapi_client
from openapi_client.models.flux_response import FluxResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    check_id = 'check_id_example' # str | The check ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a check query
        api_response = api_instance.get_checks_id_query(check_id, zap_trace_span=zap_trace_span)
        print("The response of ChecksApi->get_checks_id_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->get_checks_id_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **str**| The check ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**FluxResponse**](FluxResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The check query requested |  -  |
**400** | Invalid request |  -  |
**404** | Check not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_checks_id**
> Check patch_checks_id(check_id, check_patch, zap_trace_span=zap_trace_span)

Update a check

### Example


```python
import openapi_client
from openapi_client.models.check import Check
from openapi_client.models.check_patch import CheckPatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    check_id = 'check_id_example' # str | The check ID.
    check_patch = openapi_client.CheckPatch() # CheckPatch | Check update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a check
        api_response = api_instance.patch_checks_id(check_id, check_patch, zap_trace_span=zap_trace_span)
        print("The response of ChecksApi->patch_checks_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->patch_checks_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **str**| The check ID. | 
 **check_patch** | [**CheckPatch**](CheckPatch.md)| Check update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Check**](Check.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated check |  -  |
**404** | The check was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_checks_id_labels**
> LabelResponse post_checks_id_labels(check_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a check

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    check_id = 'check_id_example' # str | The check ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a check
        api_response = api_instance.post_checks_id_labels(check_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of ChecksApi->post_checks_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->post_checks_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **str**| The check ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The label was added to the check |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_checks_id**
> Check put_checks_id(check_id, check, zap_trace_span=zap_trace_span)

Update a check

### Example


```python
import openapi_client
from openapi_client.models.check import Check
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChecksApi(api_client)
    check_id = 'check_id_example' # str | The check ID.
    check = openapi_client.Check() # Check | Check update to apply
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a check
        api_response = api_instance.put_checks_id(check_id, check, zap_trace_span=zap_trace_span)
        print("The response of ChecksApi->put_checks_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChecksApi->put_checks_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_id** | **str**| The check ID. | 
 **check** | [**Check**](Check.md)| Check update to apply | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Check**](Check.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An updated check |  -  |
**404** | The check was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

