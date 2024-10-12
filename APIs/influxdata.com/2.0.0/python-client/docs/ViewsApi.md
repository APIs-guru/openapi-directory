# openapi_client.ViewsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_dashboards_id_cells_id_view_1**](ViewsApi.md#get_dashboards_id_cells_id_view_1) | **GET** /dashboards/{dashboardID}/cells/{cellID}/view | Retrieve the view for a cell
[**patch_dashboards_id_cells_id_view_1**](ViewsApi.md#patch_dashboards_id_cells_id_view_1) | **PATCH** /dashboards/{dashboardID}/cells/{cellID}/view | Update the view for a cell


# **get_dashboards_id_cells_id_view_1**
> View get_dashboards_id_cells_id_view_1(dashboard_id, cell_id, zap_trace_span=zap_trace_span)

Retrieve the view for a cell

### Example


```python
import openapi_client
from openapi_client.models.view import View
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
    api_instance = openapi_client.ViewsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    cell_id = 'cell_id_example' # str | The cell ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve the view for a cell
        api_response = api_instance.get_dashboards_id_cells_id_view_1(dashboard_id, cell_id, zap_trace_span=zap_trace_span)
        print("The response of ViewsApi->get_dashboards_id_cells_id_view_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewsApi->get_dashboards_id_cells_id_view_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The dashboard ID. | 
 **cell_id** | **str**| The cell ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A dashboard cells view |  -  |
**404** | Cell or dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_dashboards_id_cells_id_view_1**
> View patch_dashboards_id_cells_id_view_1(dashboard_id, cell_id, view, zap_trace_span=zap_trace_span)

Update the view for a cell

### Example


```python
import openapi_client
from openapi_client.models.view import View
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
    api_instance = openapi_client.ViewsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    cell_id = 'cell_id_example' # str | The ID of the cell to update.
    view = openapi_client.View() # View | 
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update the view for a cell
        api_response = api_instance.patch_dashboards_id_cells_id_view_1(dashboard_id, cell_id, view, zap_trace_span=zap_trace_span)
        print("The response of ViewsApi->patch_dashboards_id_cells_id_view_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ViewsApi->patch_dashboards_id_cells_id_view_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The ID of the dashboard to update. | 
 **cell_id** | **str**| The ID of the cell to update. | 
 **view** | [**View**](View.md)|  | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**View**](View.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated cell view |  -  |
**404** | Cell or dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

