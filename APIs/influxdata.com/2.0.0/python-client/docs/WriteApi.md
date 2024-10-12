# openapi_client.WriteApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**post_write**](WriteApi.md#post_write) | **POST** /write | Write time series data into InfluxDB


# **post_write**
> post_write(org, bucket, body, zap_trace_span=zap_trace_span, content_encoding=content_encoding, content_type=content_type, content_length=content_length, accept=accept, org_id=org_id, precision=precision)

Write time series data into InfluxDB

### Example


```python
import openapi_client
from openapi_client.models.write_precision import WritePrecision
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
    api_instance = openapi_client.WriteApi(api_client)
    org = 'org_example' # str | Specifies the destination organization for writes. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence.
    bucket = 'bucket_example' # str | The destination bucket for writes.
    body = None # bytearray | Line protocol body
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    content_encoding = identity # str | When present, its value indicates to the database that compression is applied to the line-protocol body. (optional) (default to identity)
    content_type = text/plain; charset=utf-8 # str | Content-Type is used to indicate the format of the data sent to the server. (optional) (default to text/plain; charset=utf-8)
    content_length = 56 # int | Content-Length is an entity header is indicating the size of the entity-body, in bytes, sent to the database. If the length is greater than the database max body configuration option, a 413 response is sent. (optional)
    accept = application/json # str | Specifies the return content format. (optional) (default to application/json)
    org_id = 'org_id_example' # str | Specifies the ID of the destination organization for writes. If both `orgID` and `org` are specified, `org` takes precedence. (optional)
    precision = openapi_client.WritePrecision() # WritePrecision | The precision for the unix timestamps within the body line-protocol. (optional)

    try:
        # Write time series data into InfluxDB
        api_instance.post_write(org, bucket, body, zap_trace_span=zap_trace_span, content_encoding=content_encoding, content_type=content_type, content_length=content_length, accept=accept, org_id=org_id, precision=precision)
    except Exception as e:
        print("Exception when calling WriteApi->post_write: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **str**| Specifies the destination organization for writes. Takes either the ID or Name interchangeably. If both &#x60;orgID&#x60; and &#x60;org&#x60; are specified, &#x60;org&#x60; takes precedence. | 
 **bucket** | **str**| The destination bucket for writes. | 
 **body** | **bytearray**| Line protocol body | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **content_encoding** | **str**| When present, its value indicates to the database that compression is applied to the line-protocol body. | [optional] [default to identity]
 **content_type** | **str**| Content-Type is used to indicate the format of the data sent to the server. | [optional] [default to text/plain; charset&#x3D;utf-8]
 **content_length** | **int**| Content-Length is an entity header is indicating the size of the entity-body, in bytes, sent to the database. If the length is greater than the database max body configuration option, a 413 response is sent. | [optional] 
 **accept** | **str**| Specifies the return content format. | [optional] [default to application/json]
 **org_id** | **str**| Specifies the ID of the destination organization for writes. If both &#x60;orgID&#x60; and &#x60;org&#x60; are specified, &#x60;org&#x60; takes precedence. | [optional] 
 **precision** | [**WritePrecision**](.md)| The precision for the unix timestamps within the body line-protocol. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Write data is correctly formatted and accepted for writing to the bucket. |  -  |
**400** | Line protocol poorly formed and no points were written.  Response can be used to determine the first malformed line in the body line-protocol. All data in body was rejected and not written. |  -  |
**401** | Token does not have sufficient permissions to write to this organization and bucket or the organization and bucket do not exist. |  -  |
**403** | No token was sent and they are required. |  -  |
**413** | Write has been rejected because the payload is too large. Error message returns max size supported. All data in body was rejected and not written. |  -  |
**429** | Token is temporarily over quota. The Retry-After header describes when to try the write again. |  * Retry-After - A non-negative decimal integer indicating the seconds to delay after the response is received. <br>  |
**503** | Server is temporarily unavailable to accept writes.  The Retry-After header describes when to try the write again. |  * Retry-After - A non-negative decimal integer indicating the seconds to delay after the response is received. <br>  |
**0** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

