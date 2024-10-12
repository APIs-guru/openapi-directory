# openapi_client.LabelsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_labels_id**](LabelsApi.md#delete_labels_id) | **DELETE** /labels/{labelID} | Delete a label
[**get_labels**](LabelsApi.md#get_labels) | **GET** /labels | List all labels
[**get_labels_id**](LabelsApi.md#get_labels_id) | **GET** /labels/{labelID} | Retrieve a label
[**patch_labels_id**](LabelsApi.md#patch_labels_id) | **PATCH** /labels/{labelID} | Update a label
[**post_labels**](LabelsApi.md#post_labels) | **POST** /labels | Create a label


# **delete_labels_id**
> delete_labels_id(label_id, zap_trace_span=zap_trace_span)

Delete a label

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
    api_instance = openapi_client.LabelsApi(api_client)
    label_id = 'label_id_example' # str | The ID of the label to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label
        api_instance.delete_labels_id(label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling LabelsApi->delete_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**404** | Label not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_labels**
> LabelsResponse get_labels(zap_trace_span=zap_trace_span, org_id=org_id)

List all labels

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
    api_instance = openapi_client.LabelsApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    org_id = 'org_id_example' # str | The organization ID. (optional)

    try:
        # List all labels
        api_response = api_instance.get_labels(zap_trace_span=zap_trace_span, org_id=org_id)
        print("The response of LabelsApi->get_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->get_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **org_id** | **str**| The organization ID. | [optional] 

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
**200** | A list of labels |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_labels_id**
> LabelResponse get_labels_id(label_id, zap_trace_span=zap_trace_span)

Retrieve a label

### Example


```python
import openapi_client
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
    api_instance = openapi_client.LabelsApi(api_client)
    label_id = 'label_id_example' # str | The ID of the label to update.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a label
        api_response = api_instance.get_labels_id(label_id, zap_trace_span=zap_trace_span)
        print("The response of LabelsApi->get_labels_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->get_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_id** | **str**| The ID of the label to update. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A label |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_labels_id**
> LabelResponse patch_labels_id(label_id, label_update, zap_trace_span=zap_trace_span)

Update a label

### Example


```python
import openapi_client
from openapi_client.models.label_response import LabelResponse
from openapi_client.models.label_update import LabelUpdate
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
    api_instance = openapi_client.LabelsApi(api_client)
    label_id = 'label_id_example' # str | The ID of the label to update.
    label_update = openapi_client.LabelUpdate() # LabelUpdate | Label update
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a label
        api_response = api_instance.patch_labels_id(label_id, label_update, zap_trace_span=zap_trace_span)
        print("The response of LabelsApi->patch_labels_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->patch_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_id** | **str**| The ID of the label to update. | 
 **label_update** | [**LabelUpdate**](LabelUpdate.md)| Label update | 
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
**200** | Updated label |  -  |
**404** | Label not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_labels**
> LabelResponse post_labels(label_create_request)

Create a label

### Example


```python
import openapi_client
from openapi_client.models.label_create_request import LabelCreateRequest
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
    api_instance = openapi_client.LabelsApi(api_client)
    label_create_request = openapi_client.LabelCreateRequest() # LabelCreateRequest | Label to create

    try:
        # Create a label
        api_response = api_instance.post_labels(label_create_request)
        print("The response of LabelsApi->post_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->post_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_create_request** | [**LabelCreateRequest**](LabelCreateRequest.md)| Label to create | 

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
**201** | Added label |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

