# TykHealthGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_requests_per_second** | **float** |  | [optional] 
**average_upstream_latency** | **float** |  | [optional] 
**key_failures_per_second** | **float** |  | [optional] 
**quota_violations_per_second** | **float** |  | [optional] 
**throttle_requests_per_second** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.tyk_health_get200_response import TykHealthGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TykHealthGet200Response from a JSON string
tyk_health_get200_response_instance = TykHealthGet200Response.from_json(json)
# print the JSON string representation of the object
print(TykHealthGet200Response.to_json())

# convert the object into a dict
tyk_health_get200_response_dict = tyk_health_get200_response_instance.to_dict()
# create an instance of TykHealthGet200Response from a dict
tyk_health_get200_response_from_dict = TykHealthGet200Response.from_dict(tyk_health_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


