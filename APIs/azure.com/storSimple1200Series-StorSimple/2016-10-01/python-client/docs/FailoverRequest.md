# FailoverRequest

The Failover request object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accesspoint_ids** | **List[str]** |  | [optional] 
**keep_source_device** | **bool** |  | [optional] 
**skip_validation** | **bool** |  | [optional] 
**target_device_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.failover_request import FailoverRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverRequest from a JSON string
failover_request_instance = FailoverRequest.from_json(json)
# print the JSON string representation of the object
print(FailoverRequest.to_json())

# convert the object into a dict
failover_request_dict = failover_request_instance.to_dict()
# create an instance of FailoverRequest from a dict
failover_request_from_dict = FailoverRequest.from_dict(failover_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


