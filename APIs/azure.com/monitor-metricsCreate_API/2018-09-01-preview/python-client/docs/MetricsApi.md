# openapi_client.MetricsApi

All URIs are relative to *https://monitoring.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_create**](MetricsApi.md#metrics_create) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProvider}/{resourceTypeName}/{resourceName}/metrics | 


# **metrics_create**
> AzureMetricsResult metrics_create(content_type, content_length, authorization, subscription_id, resource_group_name, resource_provider, resource_type_name, resource_name, body)



**Post the metric values for a resource**.

### Example


```python
import openapi_client
from openapi_client.models.azure_metrics_document import AzureMetricsDocument
from openapi_client.models.azure_metrics_result import AzureMetricsResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://monitoring.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://monitoring.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetricsApi(api_client)
    content_type = 'content_type_example' # str | Supports application/json and application/x-ndjson
    content_length = 56 # int | Content length of the payload
    authorization = 'authorization_example' # str | Authorization token issue for issued for audience \"https:\\\\monitoring.azure.com\\\"
    subscription_id = 'subscription_id_example' # str | The azure subscription id
    resource_group_name = 'resource_group_name_example' # str | The ARM resource group name
    resource_provider = 'resource_provider_example' # str | The ARM resource provider name
    resource_type_name = 'resource_type_name_example' # str | The ARM resource type name
    resource_name = 'resource_name_example' # str | The ARM resource name
    body = openapi_client.AzureMetricsDocument() # AzureMetricsDocument | The Azure metrics document json payload

    try:
        api_response = api_instance.metrics_create(content_type, content_length, authorization, subscription_id, resource_group_name, resource_provider, resource_type_name, resource_name, body)
        print("The response of MetricsApi->metrics_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->metrics_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Supports application/json and application/x-ndjson | 
 **content_length** | **int**| Content length of the payload | 
 **authorization** | **str**| Authorization token issue for issued for audience \&quot;https:\\\\monitoring.azure.com\\\&quot; | 
 **subscription_id** | **str**| The azure subscription id | 
 **resource_group_name** | **str**| The ARM resource group name | 
 **resource_provider** | **str**| The ARM resource provider name | 
 **resource_type_name** | **str**| The ARM resource type name | 
 **resource_name** | **str**| The ARM resource name | 
 **body** | [**AzureMetricsDocument**](AzureMetricsDocument.md)| The Azure metrics document json payload | 

### Return type

[**AzureMetricsResult**](AzureMetricsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The azure metrics publish succeeded |  -  |
**0** | An unexpected error from the server. See response object for the reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

