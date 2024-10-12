# DedicatedHostInstanceView

The instance view of a dedicated host.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_id** | **str** | Specifies the unique id of the dedicated physical machine on which the dedicated host resides. | [optional] [readonly] 
**available_capacity** | [**DedicatedHostAvailableCapacity**](DedicatedHostAvailableCapacity.md) |  | [optional] 
**statuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] 

## Example

```python
from openapi_client.models.dedicated_host_instance_view import DedicatedHostInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostInstanceView from a JSON string
dedicated_host_instance_view_instance = DedicatedHostInstanceView.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostInstanceView.to_json())

# convert the object into a dict
dedicated_host_instance_view_dict = dedicated_host_instance_view_instance.to_dict()
# create an instance of DedicatedHostInstanceView from a dict
dedicated_host_instance_view_from_dict = DedicatedHostInstanceView.from_dict(dedicated_host_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


