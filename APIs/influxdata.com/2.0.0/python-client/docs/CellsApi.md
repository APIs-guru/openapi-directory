# openapi_client.CellsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_dashboards_id_cells_id**](CellsApi.md#delete_dashboards_id_cells_id) | **DELETE** /dashboards/{dashboardID}/cells/{cellID} | Delete a dashboard cell
[**get_dashboards_id_cells_id_view**](CellsApi.md#get_dashboards_id_cells_id_view) | **GET** /dashboards/{dashboardID}/cells/{cellID}/view | Retrieve the view for a cell
[**patch_dashboards_id_cells_id**](CellsApi.md#patch_dashboards_id_cells_id) | **PATCH** /dashboards/{dashboardID}/cells/{cellID} | Update the non-positional information related to a cell
[**patch_dashboards_id_cells_id_view**](CellsApi.md#patch_dashboards_id_cells_id_view) | **PATCH** /dashboards/{dashboardID}/cells/{cellID}/view | Update the view for a cell
[**post_dashboards_id_cells**](CellsApi.md#post_dashboards_id_cells) | **POST** /dashboards/{dashboardID}/cells | Create a dashboard cell
[**put_dashboards_id_cells**](CellsApi.md#put_dashboards_id_cells) | **PUT** /dashboards/{dashboardID}/cells | Replace cells in a dashboard


# **delete_dashboards_id_cells_id**
> delete_dashboards_id_cells_id(dashboard_id, cell_id, zap_trace_span=zap_trace_span)

Delete a dashboard cell

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
    api_instance = openapi_client.CellsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to delete.
    cell_id = 'cell_id_example' # str | The ID of the cell to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a dashboard cell
        api_instance.delete_dashboards_id_cells_id(dashboard_id, cell_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling CellsApi->delete_dashboards_id_cells_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The ID of the dashboard to delete. | 
 **cell_id** | **str**| The ID of the cell to delete. | 
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
**204** | Cell successfully deleted |  -  |
**404** | Cell or dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dashboards_id_cells_id_view**
> View get_dashboards_id_cells_id_view(dashboard_id, cell_id, zap_trace_span=zap_trace_span)

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
    api_instance = openapi_client.CellsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    cell_id = 'cell_id_example' # str | The cell ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve the view for a cell
        api_response = api_instance.get_dashboards_id_cells_id_view(dashboard_id, cell_id, zap_trace_span=zap_trace_span)
        print("The response of CellsApi->get_dashboards_id_cells_id_view:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellsApi->get_dashboards_id_cells_id_view: %s\n" % e)
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

# **patch_dashboards_id_cells_id**
> Cell patch_dashboards_id_cells_id(dashboard_id, cell_id, cell_update, zap_trace_span=zap_trace_span)

Update the non-positional information related to a cell

Updates the non positional information related to a cell. Updates to a single cell's positional data could cause grid conflicts.

### Example


```python
import openapi_client
from openapi_client.models.cell import Cell
from openapi_client.models.cell_update import CellUpdate
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
    api_instance = openapi_client.CellsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    cell_id = 'cell_id_example' # str | The ID of the cell to update.
    cell_update = openapi_client.CellUpdate() # CellUpdate | 
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update the non-positional information related to a cell
        api_response = api_instance.patch_dashboards_id_cells_id(dashboard_id, cell_id, cell_update, zap_trace_span=zap_trace_span)
        print("The response of CellsApi->patch_dashboards_id_cells_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellsApi->patch_dashboards_id_cells_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The ID of the dashboard to update. | 
 **cell_id** | **str**| The ID of the cell to update. | 
 **cell_update** | [**CellUpdate**](CellUpdate.md)|  | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Cell**](Cell.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated dashboard cell |  -  |
**404** | Cell or dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_dashboards_id_cells_id_view**
> View patch_dashboards_id_cells_id_view(dashboard_id, cell_id, view, zap_trace_span=zap_trace_span)

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
    api_instance = openapi_client.CellsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    cell_id = 'cell_id_example' # str | The ID of the cell to update.
    view = openapi_client.View() # View | 
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update the view for a cell
        api_response = api_instance.patch_dashboards_id_cells_id_view(dashboard_id, cell_id, view, zap_trace_span=zap_trace_span)
        print("The response of CellsApi->patch_dashboards_id_cells_id_view:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellsApi->patch_dashboards_id_cells_id_view: %s\n" % e)
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

# **post_dashboards_id_cells**
> Cell post_dashboards_id_cells(dashboard_id, create_cell, zap_trace_span=zap_trace_span)

Create a dashboard cell

### Example


```python
import openapi_client
from openapi_client.models.cell import Cell
from openapi_client.models.create_cell import CreateCell
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
    api_instance = openapi_client.CellsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    create_cell = openapi_client.CreateCell() # CreateCell | Cell that will be added
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a dashboard cell
        api_response = api_instance.post_dashboards_id_cells(dashboard_id, create_cell, zap_trace_span=zap_trace_span)
        print("The response of CellsApi->post_dashboards_id_cells:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellsApi->post_dashboards_id_cells: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The ID of the dashboard to update. | 
 **create_cell** | [**CreateCell**](CreateCell.md)| Cell that will be added | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Cell**](Cell.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Cell successfully added |  -  |
**404** | Dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_dashboards_id_cells**
> Dashboard put_dashboards_id_cells(dashboard_id, cell, zap_trace_span=zap_trace_span)

Replace cells in a dashboard

Replaces all cells in a dashboard. This is used primarily to update the positional information of all cells.

### Example


```python
import openapi_client
from openapi_client.models.cell import Cell
from openapi_client.models.dashboard import Dashboard
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
    api_instance = openapi_client.CellsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    cell = [openapi_client.Cell()] # List[Cell] | 
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Replace cells in a dashboard
        api_response = api_instance.put_dashboards_id_cells(dashboard_id, cell, zap_trace_span=zap_trace_span)
        print("The response of CellsApi->put_dashboards_id_cells:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CellsApi->put_dashboards_id_cells: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The ID of the dashboard to update. | 
 **cell** | [**List[Cell]**](Cell.md)|  | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Replaced dashboard cells |  -  |
**404** | Dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

