# openapi_client.MonitorApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**monitor_dep_graph**](MonitorApi.md#monitor_dep_graph) | **POST** /monitor/dep-graph | Monitor Dep Graph


# **monitor_dep_graph**
> monitor_dep_graph(org=org, monitor_dep_graph_request=monitor_dep_graph_request)

Monitor Dep Graph

Use this endpoint to monitor a [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata).

### Example


```python
import openapi_client
from openapi_client.models.monitor_dep_graph_request import MonitorDepGraphRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MonitorApi(api_client)
    org = '9695cbb1-3a87-4d6f-8ae1-61a1c37ee9f7' # str | The organization to test the package with. See \"The Snyk organization for a request\" above. (optional)
    monitor_dep_graph_request = openapi_client.MonitorDepGraphRequest() # MonitorDepGraphRequest |  (optional)

    try:
        # Monitor Dep Graph
        api_instance.monitor_dep_graph(org=org, monitor_dep_graph_request=monitor_dep_graph_request)
    except Exception as e:
        print("Exception when calling MonitorApi->monitor_dep_graph: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **str**| The organization to test the package with. See \&quot;The Snyk organization for a request\&quot; above. | [optional] 
 **monitor_dep_graph_request** | [**MonitorDepGraphRequest**](MonitorDepGraphRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

