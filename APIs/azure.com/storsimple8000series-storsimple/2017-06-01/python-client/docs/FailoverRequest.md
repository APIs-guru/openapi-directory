# FailoverRequest

The request object for triggering a failover of volume containers, from a source device to a target device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_device_id** | **str** | The ARM path ID of the device which will act as the failover target. | [optional] 
**volume_containers** | **List[str]** | The list of path IDs of the volume containers which needs to be failed-over to the target device. | [optional] 

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


