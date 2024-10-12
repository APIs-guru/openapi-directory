# openapi_client.ImportErrorApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_import_error**](ImportErrorApi.md#get_import_error) | **GET** /importErrors/{import_error_id} | Get an import error
[**get_import_errors**](ImportErrorApi.md#get_import_errors) | **GET** /importErrors | List import errors


# **get_import_error**
> ImportError get_import_error(import_error_id)

Get an import error

### Example


```python
import openapi_client
from openapi_client.models.import_error import ImportError
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImportErrorApi(api_client)
    import_error_id = 56 # int | The import error ID.

    try:
        # Get an import error
        api_response = api_instance.get_import_error(import_error_id)
        print("The response of ImportErrorApi->get_import_error:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportErrorApi->get_import_error: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **import_error_id** | **int**| The import error ID. | 

### Return type

[**ImportError**](ImportError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |
**404** | A specified resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_import_errors**
> ImportErrorCollection get_import_errors(limit=limit, offset=offset, order_by=order_by)

List import errors

### Example


```python
import openapi_client
from openapi_client.models.import_error_collection import ImportErrorCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImportErrorApi(api_client)
    limit = 100 # int | The numbers of items to return. (optional) (default to 100)
    offset = 56 # int | The number of items to skip before starting to collect the result set. (optional)
    order_by = 'order_by_example' # str | The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0*  (optional)

    try:
        # List import errors
        api_response = api_instance.get_import_errors(limit=limit, offset=offset, order_by=order_by)
        print("The response of ImportErrorApi->get_import_errors:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImportErrorApi->get_import_errors: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| The numbers of items to return. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] 
 **order_by** | **str**| The name of the field to order the results by. Prefix a field name with &#x60;-&#x60; to reverse the sort order.  *New in version 2.1.0*  | [optional] 

### Return type

[**ImportErrorCollection**](ImportErrorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**401** | Request not authenticated due to missing, invalid, authentication info. |  -  |
**403** | Client does not have sufficient permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

