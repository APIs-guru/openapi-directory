# openapi_client.DeleteApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_delete**](DeleteApi.md#post_delete) | **POST** /delete | Delete time series data from InfluxDB


# **post_delete**
> post_delete(delete_predicate_request, zap_trace_span=zap_trace_span, org=org, bucket=bucket, org_id=org_id, bucket_id=bucket_id)

Delete time series data from InfluxDB

### Example


```python
import openapi_client
from openapi_client.models.delete_predicate_request import DeletePredicateRequest
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
    api_instance = openapi_client.DeleteApi(api_client)
    delete_predicate_request = openapi_client.DeletePredicateRequest() # DeletePredicateRequest | Predicate delete request
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    org = 'org_example' # str | Specifies the organization to delete data from. (optional)
    bucket = 'bucket_example' # str | Specifies the bucket to delete data from. (optional)
    org_id = 'org_id_example' # str | Specifies the organization ID of the resource. (optional)
    bucket_id = 'bucket_id_example' # str | Specifies the bucket ID to delete data from. (optional)

    try:
        # Delete time series data from InfluxDB
        api_instance.post_delete(delete_predicate_request, zap_trace_span=zap_trace_span, org=org, bucket=bucket, org_id=org_id, bucket_id=bucket_id)
    except Exception as e:
        print("Exception when calling DeleteApi->post_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_predicate_request** | [**DeletePredicateRequest**](DeletePredicateRequest.md)| Predicate delete request | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **org** | **str**| Specifies the organization to delete data from. | [optional] 
 **bucket** | **str**| Specifies the bucket to delete data from. | [optional] 
 **org_id** | **str**| Specifies the organization ID of the resource. | [optional] 
 **bucket_id** | **str**| Specifies the bucket ID to delete data from. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | delete has been accepted |  -  |
**400** | Invalid request. |  -  |
**403** | no token was sent or does not have sufficient permissions. |  -  |
**404** | the bucket or organization is not found. |  -  |
**0** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

