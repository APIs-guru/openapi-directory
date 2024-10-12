# openapi_client.DagWarningApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dag_warnings**](DagWarningApi.md#get_dag_warnings) | **GET** /dagWarnings | List dag warnings


# **get_dag_warnings**
> DagWarningCollection get_dag_warnings(dag_id=dag_id, warning_type=warning_type, limit=limit, offset=offset, order_by=order_by)

List dag warnings

### Example


```python
import openapi_client
from openapi_client.models.dag_warning_collection import DagWarningCollection
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
    api_instance = openapi_client.DagWarningApi(api_client)
    dag_id = 'dag_id_example' # str | If set, only return DAG warnings with this dag_id. (optional)
    warning_type = 'warning_type_example' # str | If set, only return DAG warnings with this type. (optional)
    limit = 100 # int | The numbers of items to return. (optional) (default to 100)
    offset = 56 # int | The number of items to skip before starting to collect the result set. (optional)
    order_by = 'order_by_example' # str | The name of the field to order the results by. Prefix a field name with `-` to reverse the sort order.  *New in version 2.1.0*  (optional)

    try:
        # List dag warnings
        api_response = api_instance.get_dag_warnings(dag_id=dag_id, warning_type=warning_type, limit=limit, offset=offset, order_by=order_by)
        print("The response of DagWarningApi->get_dag_warnings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DagWarningApi->get_dag_warnings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dag_id** | **str**| If set, only return DAG warnings with this dag_id. | [optional] 
 **warning_type** | **str**| If set, only return DAG warnings with this type. | [optional] 
 **limit** | **int**| The numbers of items to return. | [optional] [default to 100]
 **offset** | **int**| The number of items to skip before starting to collect the result set. | [optional] 
 **order_by** | **str**| The name of the field to order the results by. Prefix a field name with &#x60;-&#x60; to reverse the sort order.  *New in version 2.1.0*  | [optional] 

### Return type

[**DagWarningCollection**](DagWarningCollection.md)

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

