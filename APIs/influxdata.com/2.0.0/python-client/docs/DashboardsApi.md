# openapi_client.DashboardsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_dashboards_id**](DashboardsApi.md#delete_dashboards_id) | **DELETE** /dashboards/{dashboardID} | Delete a dashboard
[**delete_dashboards_id_cells_id_0**](DashboardsApi.md#delete_dashboards_id_cells_id_0) | **DELETE** /dashboards/{dashboardID}/cells/{cellID} | Delete a dashboard cell
[**delete_dashboards_id_labels_id**](DashboardsApi.md#delete_dashboards_id_labels_id) | **DELETE** /dashboards/{dashboardID}/labels/{labelID} | Delete a label from a dashboard
[**delete_dashboards_id_members_id**](DashboardsApi.md#delete_dashboards_id_members_id) | **DELETE** /dashboards/{dashboardID}/members/{userID} | Remove a member from a dashboard
[**delete_dashboards_id_owners_id**](DashboardsApi.md#delete_dashboards_id_owners_id) | **DELETE** /dashboards/{dashboardID}/owners/{userID} | Remove an owner from a dashboard
[**get_dashboards**](DashboardsApi.md#get_dashboards) | **GET** /dashboards | List all dashboards
[**get_dashboards_id**](DashboardsApi.md#get_dashboards_id) | **GET** /dashboards/{dashboardID} | Retrieve a Dashboard
[**get_dashboards_id_cells_id_view_0**](DashboardsApi.md#get_dashboards_id_cells_id_view_0) | **GET** /dashboards/{dashboardID}/cells/{cellID}/view | Retrieve the view for a cell
[**get_dashboards_id_labels**](DashboardsApi.md#get_dashboards_id_labels) | **GET** /dashboards/{dashboardID}/labels | List all labels for a dashboard
[**get_dashboards_id_members**](DashboardsApi.md#get_dashboards_id_members) | **GET** /dashboards/{dashboardID}/members | List all dashboard members
[**get_dashboards_id_owners**](DashboardsApi.md#get_dashboards_id_owners) | **GET** /dashboards/{dashboardID}/owners | List all dashboard owners
[**patch_dashboards_id**](DashboardsApi.md#patch_dashboards_id) | **PATCH** /dashboards/{dashboardID} | Update a dashboard
[**patch_dashboards_id_cells_id_0**](DashboardsApi.md#patch_dashboards_id_cells_id_0) | **PATCH** /dashboards/{dashboardID}/cells/{cellID} | Update the non-positional information related to a cell
[**patch_dashboards_id_cells_id_view_0**](DashboardsApi.md#patch_dashboards_id_cells_id_view_0) | **PATCH** /dashboards/{dashboardID}/cells/{cellID}/view | Update the view for a cell
[**post_dashboards**](DashboardsApi.md#post_dashboards) | **POST** /dashboards | Create a dashboard
[**post_dashboards_id_cells_0**](DashboardsApi.md#post_dashboards_id_cells_0) | **POST** /dashboards/{dashboardID}/cells | Create a dashboard cell
[**post_dashboards_id_labels**](DashboardsApi.md#post_dashboards_id_labels) | **POST** /dashboards/{dashboardID}/labels | Add a label to a dashboard
[**post_dashboards_id_members**](DashboardsApi.md#post_dashboards_id_members) | **POST** /dashboards/{dashboardID}/members | Add a member to a dashboard
[**post_dashboards_id_owners**](DashboardsApi.md#post_dashboards_id_owners) | **POST** /dashboards/{dashboardID}/owners | Add an owner to a dashboard
[**put_dashboards_id_cells_0**](DashboardsApi.md#put_dashboards_id_cells_0) | **PUT** /dashboards/{dashboardID}/cells | Replace cells in a dashboard


# **delete_dashboards_id**
> delete_dashboards_id(dashboard_id, zap_trace_span=zap_trace_span)

Delete a dashboard

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a dashboard
        api_instance.delete_dashboards_id(dashboard_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling DashboardsApi->delete_dashboards_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The ID of the dashboard to update. | 
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
**404** | Dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_dashboards_id_cells_id_0**
> delete_dashboards_id_cells_id_0(dashboard_id, cell_id, zap_trace_span=zap_trace_span)

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to delete.
    cell_id = 'cell_id_example' # str | The ID of the cell to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a dashboard cell
        api_instance.delete_dashboards_id_cells_id_0(dashboard_id, cell_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling DashboardsApi->delete_dashboards_id_cells_id_0: %s\n" % e)
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

# **delete_dashboards_id_labels_id**
> delete_dashboards_id_labels_id(dashboard_id, label_id, zap_trace_span=zap_trace_span)

Delete a label from a dashboard

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    label_id = 'label_id_example' # str | The ID of the label to delete.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label from a dashboard
        api_instance.delete_dashboards_id_labels_id(dashboard_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling DashboardsApi->delete_dashboards_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The dashboard ID. | 
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
**404** | Dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_dashboards_id_members_id**
> delete_dashboards_id_members_id(user_id, dashboard_id, zap_trace_span=zap_trace_span)

Remove a member from a dashboard

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
    api_instance = openapi_client.DashboardsApi(api_client)
    user_id = 'user_id_example' # str | The ID of the member to remove.
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove a member from a dashboard
        api_instance.delete_dashboards_id_members_id(user_id, dashboard_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling DashboardsApi->delete_dashboards_id_members_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the member to remove. | 
 **dashboard_id** | **str**| The dashboard ID. | 
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
**204** | Member removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_dashboards_id_owners_id**
> delete_dashboards_id_owners_id(user_id, dashboard_id, zap_trace_span=zap_trace_span)

Remove an owner from a dashboard

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
    api_instance = openapi_client.DashboardsApi(api_client)
    user_id = 'user_id_example' # str | The ID of the owner to remove.
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Remove an owner from a dashboard
        api_instance.delete_dashboards_id_owners_id(user_id, dashboard_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling DashboardsApi->delete_dashboards_id_owners_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The ID of the owner to remove. | 
 **dashboard_id** | **str**| The dashboard ID. | 
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
**204** | Owner removed |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dashboards**
> Dashboards get_dashboards(zap_trace_span=zap_trace_span, offset=offset, limit=limit, descending=descending, owner=owner, sort_by=sort_by, id=id, org_id=org_id, org=org)

List all dashboards

### Example


```python
import openapi_client
from openapi_client.models.dashboards import Dashboards
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
    api_instance = openapi_client.DashboardsApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    offset = 56 # int |  (optional)
    limit = 20 # int |  (optional) (default to 20)
    descending = False # bool |  (optional) (default to False)
    owner = 'owner_example' # str | A user identifier. Returns only dashboards where this user has the `owner` role. (optional)
    sort_by = 'sort_by_example' # str | The column to sort by. (optional)
    id = ['id_example'] # List[str] | A list of dashboard identifiers. Returns only the listed dashboards. If both `id` and `owner` are specified, only `id` is used. (optional)
    org_id = 'org_id_example' # str | The identifier of the organization. (optional)
    org = 'org_example' # str | The name of the organization. (optional)

    try:
        # List all dashboards
        api_response = api_instance.get_dashboards(zap_trace_span=zap_trace_span, offset=offset, limit=limit, descending=descending, owner=owner, sort_by=sort_by, id=id, org_id=org_id, org=org)
        print("The response of DashboardsApi->get_dashboards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->get_dashboards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **offset** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] [default to 20]
 **descending** | **bool**|  | [optional] [default to False]
 **owner** | **str**| A user identifier. Returns only dashboards where this user has the &#x60;owner&#x60; role. | [optional] 
 **sort_by** | **str**| The column to sort by. | [optional] 
 **id** | [**List[str]**](str.md)| A list of dashboard identifiers. Returns only the listed dashboards. If both &#x60;id&#x60; and &#x60;owner&#x60; are specified, only &#x60;id&#x60; is used. | [optional] 
 **org_id** | **str**| The identifier of the organization. | [optional] 
 **org** | **str**| The name of the organization. | [optional] 

### Return type

[**Dashboards**](Dashboards.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All dashboards |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dashboards_id**
> PostDashboards201Response get_dashboards_id(dashboard_id, zap_trace_span=zap_trace_span, include=include)

Retrieve a Dashboard

### Example


```python
import openapi_client
from openapi_client.models.post_dashboards201_response import PostDashboards201Response
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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    include = 'include_example' # str | Includes the cell view properties in the response if set to `properties` (optional)

    try:
        # Retrieve a Dashboard
        api_response = api_instance.get_dashboards_id(dashboard_id, zap_trace_span=zap_trace_span, include=include)
        print("The response of DashboardsApi->get_dashboards_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->get_dashboards_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The ID of the dashboard to update. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **include** | **str**| Includes the cell view properties in the response if set to &#x60;properties&#x60; | [optional] 

### Return type

[**PostDashboards201Response**](PostDashboards201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve a single dashboard |  -  |
**404** | Dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dashboards_id_cells_id_view_0**
> View get_dashboards_id_cells_id_view_0(dashboard_id, cell_id, zap_trace_span=zap_trace_span)

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    cell_id = 'cell_id_example' # str | The cell ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve the view for a cell
        api_response = api_instance.get_dashboards_id_cells_id_view_0(dashboard_id, cell_id, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->get_dashboards_id_cells_id_view_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->get_dashboards_id_cells_id_view_0: %s\n" % e)
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

# **get_dashboards_id_labels**
> LabelsResponse get_dashboards_id_labels(dashboard_id, zap_trace_span=zap_trace_span)

List all labels for a dashboard

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a dashboard
        api_response = api_instance.get_dashboards_id_labels(dashboard_id, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->get_dashboards_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->get_dashboards_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The dashboard ID. | 
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
**200** | A list of all labels for a dashboard |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dashboards_id_members**
> ResourceMembers get_dashboards_id_members(dashboard_id, zap_trace_span=zap_trace_span)

List all dashboard members

### Example


```python
import openapi_client
from openapi_client.models.resource_members import ResourceMembers
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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all dashboard members
        api_response = api_instance.get_dashboards_id_members(dashboard_id, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->get_dashboards_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->get_dashboards_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The dashboard ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMembers**](ResourceMembers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of users who have member privileges for a dashboard |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_dashboards_id_owners**
> ResourceOwners get_dashboards_id_owners(dashboard_id, zap_trace_span=zap_trace_span)

List all dashboard owners

### Example


```python
import openapi_client
from openapi_client.models.resource_owners import ResourceOwners
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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all dashboard owners
        api_response = api_instance.get_dashboards_id_owners(dashboard_id, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->get_dashboards_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->get_dashboards_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The dashboard ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwners**](ResourceOwners.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of users who have owner privileges for a dashboard |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_dashboards_id**
> Dashboard patch_dashboards_id(dashboard_id, patch_dashboard_request, zap_trace_span=zap_trace_span)

Update a dashboard

### Example


```python
import openapi_client
from openapi_client.models.dashboard import Dashboard
from openapi_client.models.patch_dashboard_request import PatchDashboardRequest
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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    patch_dashboard_request = openapi_client.PatchDashboardRequest() # PatchDashboardRequest | Patching of a dashboard
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a dashboard
        api_response = api_instance.patch_dashboards_id(dashboard_id, patch_dashboard_request, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->patch_dashboards_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->patch_dashboards_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The ID of the dashboard to update. | 
 **patch_dashboard_request** | [**PatchDashboardRequest**](PatchDashboardRequest.md)| Patching of a dashboard | 
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
**200** | Updated dashboard |  -  |
**404** | Dashboard not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_dashboards_id_cells_id_0**
> Cell patch_dashboards_id_cells_id_0(dashboard_id, cell_id, cell_update, zap_trace_span=zap_trace_span)

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    cell_id = 'cell_id_example' # str | The ID of the cell to update.
    cell_update = openapi_client.CellUpdate() # CellUpdate | 
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update the non-positional information related to a cell
        api_response = api_instance.patch_dashboards_id_cells_id_0(dashboard_id, cell_id, cell_update, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->patch_dashboards_id_cells_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->patch_dashboards_id_cells_id_0: %s\n" % e)
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

# **patch_dashboards_id_cells_id_view_0**
> View patch_dashboards_id_cells_id_view_0(dashboard_id, cell_id, view, zap_trace_span=zap_trace_span)

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    cell_id = 'cell_id_example' # str | The ID of the cell to update.
    view = openapi_client.View() # View | 
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update the view for a cell
        api_response = api_instance.patch_dashboards_id_cells_id_view_0(dashboard_id, cell_id, view, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->patch_dashboards_id_cells_id_view_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->patch_dashboards_id_cells_id_view_0: %s\n" % e)
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

# **post_dashboards**
> PostDashboards201Response post_dashboards(create_dashboard_request, zap_trace_span=zap_trace_span)

Create a dashboard

### Example


```python
import openapi_client
from openapi_client.models.create_dashboard_request import CreateDashboardRequest
from openapi_client.models.post_dashboards201_response import PostDashboards201Response
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
    api_instance = openapi_client.DashboardsApi(api_client)
    create_dashboard_request = openapi_client.CreateDashboardRequest() # CreateDashboardRequest | Dashboard to create
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a dashboard
        api_response = api_instance.post_dashboards(create_dashboard_request, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->post_dashboards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->post_dashboards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_dashboard_request** | [**CreateDashboardRequest**](CreateDashboardRequest.md)| Dashboard to create | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**PostDashboards201Response**](PostDashboards201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added dashboard |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_dashboards_id_cells_0**
> Cell post_dashboards_id_cells_0(dashboard_id, create_cell, zap_trace_span=zap_trace_span)

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    create_cell = openapi_client.CreateCell() # CreateCell | Cell that will be added
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a dashboard cell
        api_response = api_instance.post_dashboards_id_cells_0(dashboard_id, create_cell, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->post_dashboards_id_cells_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->post_dashboards_id_cells_0: %s\n" % e)
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

# **post_dashboards_id_labels**
> LabelResponse post_dashboards_id_labels(dashboard_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a dashboard

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a dashboard
        api_response = api_instance.post_dashboards_id_labels(dashboard_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->post_dashboards_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->post_dashboards_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The dashboard ID. | 
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
**201** | The label added to the dashboard |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_dashboards_id_members**
> ResourceMember post_dashboards_id_members(dashboard_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add a member to a dashboard

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_member import ResourceMember
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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as member
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a member to a dashboard
        api_response = api_instance.post_dashboards_id_members(dashboard_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->post_dashboards_id_members:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->post_dashboards_id_members: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The dashboard ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as member | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceMember**](ResourceMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added to dashboard members |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_dashboards_id_owners**
> ResourceOwner post_dashboards_id_owners(dashboard_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)

Add an owner to a dashboard

### Example


```python
import openapi_client
from openapi_client.models.add_resource_member_request_body import AddResourceMemberRequestBody
from openapi_client.models.resource_owner import ResourceOwner
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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The dashboard ID.
    add_resource_member_request_body = openapi_client.AddResourceMemberRequestBody() # AddResourceMemberRequestBody | User to add as owner
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add an owner to a dashboard
        api_response = api_instance.post_dashboards_id_owners(dashboard_id, add_resource_member_request_body, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->post_dashboards_id_owners:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->post_dashboards_id_owners: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboard_id** | **str**| The dashboard ID. | 
 **add_resource_member_request_body** | [**AddResourceMemberRequestBody**](AddResourceMemberRequestBody.md)| User to add as owner | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**ResourceOwner**](ResourceOwner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Added to dashboard owners |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_dashboards_id_cells_0**
> Dashboard put_dashboards_id_cells_0(dashboard_id, cell, zap_trace_span=zap_trace_span)

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
    api_instance = openapi_client.DashboardsApi(api_client)
    dashboard_id = 'dashboard_id_example' # str | The ID of the dashboard to update.
    cell = [openapi_client.Cell()] # List[Cell] | 
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Replace cells in a dashboard
        api_response = api_instance.put_dashboards_id_cells_0(dashboard_id, cell, zap_trace_span=zap_trace_span)
        print("The response of DashboardsApi->put_dashboards_id_cells_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DashboardsApi->put_dashboards_id_cells_0: %s\n" % e)
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

