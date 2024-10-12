# HttpRouteRetryPolicy

The specifications for retries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_retries** | **int** | Specifies the allowed number of retries. This number must be &gt; 0. If not specified, default to 1. | [optional] 
**per_try_timeout** | **str** | Specifies a non-zero timeout per retry attempt. | [optional] 
**retry_conditions** | **List[str]** | Specifies one or more conditions when this retry policy applies. Valid values are: 5xx: Proxy will attempt a retry if the destination service responds with any 5xx response code, of if the destination service does not respond at all, example: disconnect, reset, read timeout, connection failure and refused streams. gateway-error: Similar to 5xx, but only applies to response codes 502, 503, 504. reset: Proxy will attempt a retry if the destination service does not respond at all (disconnect/reset/read timeout) connect-failure: Proxy will retry on failures connecting to destination for example due to connection timeouts. retriable-4xx: Proxy will retry fro retriable 4xx response codes. Currently the only retriable error supported is 409. refused-stream: Proxy will retry if the destination resets the stream with a REFUSED_STREAM error code. This reset type indicates that it is safe to retry. | [optional] 

## Example

```python
from openapi_client.models.http_route_retry_policy import HttpRouteRetryPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteRetryPolicy from a JSON string
http_route_retry_policy_instance = HttpRouteRetryPolicy.from_json(json)
# print the JSON string representation of the object
print(HttpRouteRetryPolicy.to_json())

# convert the object into a dict
http_route_retry_policy_dict = http_route_retry_policy_instance.to_dict()
# create an instance of HttpRouteRetryPolicy from a dict
http_route_retry_policy_from_dict = HttpRouteRetryPolicy.from_dict(http_route_retry_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


