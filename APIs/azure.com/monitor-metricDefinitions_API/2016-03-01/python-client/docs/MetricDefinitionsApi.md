# openapi_client.MetricDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metric_definitions_list**](MetricDefinitionsApi.md#metric_definitions_list) | **GET** /{resourceUri}/providers/microsoft.insights/metricDefinitions | 


# **metric_definitions_list**
> MetricDefinitionCollection metric_definitions_list(resource_uri, api_version, filter=filter)



Lists the metric definitions for the resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_definition_collection import MetricDefinitionCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetricDefinitionsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | Reduces the set of data collected by retrieving particular metric definitions from all the definitions available for the resource.<br>For example, to get just the definition for the 'CPU percentage' counter: $filter=name.value eq '\\Processor(_Total)\\% Processor Time'.<br>Multiple metrics can be retrieved by joining together *'name eq <value>'* clauses separated by *or* logical operators.<br>**NOTE**: No other syntax is allowed. (optional)

    try:
        api_response = api_instance.metric_definitions_list(resource_uri, api_version, filter=filter)
        print("The response of MetricDefinitionsApi->metric_definitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricDefinitionsApi->metric_definitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| Reduces the set of data collected by retrieving particular metric definitions from all the definitions available for the resource.&lt;br&gt;For example, to get just the definition for the &#39;CPU percentage&#39; counter: $filter&#x3D;name.value eq &#39;\\Processor(_Total)\\% Processor Time&#39;.&lt;br&gt;Multiple metrics can be retrieved by joining together *&#39;name eq &lt;value&gt;&#39;* clauses separated by *or* logical operators.&lt;br&gt;**NOTE**: No other syntax is allowed. | [optional] 

### Return type

[**MetricDefinitionCollection**](MetricDefinitionCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get the list of metric definitions |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

