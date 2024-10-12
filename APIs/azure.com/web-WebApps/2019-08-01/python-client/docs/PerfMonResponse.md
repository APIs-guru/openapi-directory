# PerfMonResponse

Performance monitor API response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The response code. | [optional] 
**data** | [**PerfMonSet**](PerfMonSet.md) |  | [optional] 
**message** | **str** | The message. | [optional] 

## Example

```python
from openapi_client.models.perf_mon_response import PerfMonResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PerfMonResponse from a JSON string
perf_mon_response_instance = PerfMonResponse.from_json(json)
# print the JSON string representation of the object
print(PerfMonResponse.to_json())

# convert the object into a dict
perf_mon_response_dict = perf_mon_response_instance.to_dict()
# create an instance of PerfMonResponse from a dict
perf_mon_response_from_dict = PerfMonResponse.from_dict(perf_mon_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


