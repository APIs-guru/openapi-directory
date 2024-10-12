# DataBoxEdgeDevicePatch

The Data Box Edge/Gateway device patch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | The tags attached to the Data Box Edge/Gateway resource. | [optional] 

## Example

```python
from openapi_client.models.data_box_edge_device_patch import DataBoxEdgeDevicePatch

# TODO update the JSON string below
json = "{}"
# create an instance of DataBoxEdgeDevicePatch from a JSON string
data_box_edge_device_patch_instance = DataBoxEdgeDevicePatch.from_json(json)
# print the JSON string representation of the object
print(DataBoxEdgeDevicePatch.to_json())

# convert the object into a dict
data_box_edge_device_patch_dict = data_box_edge_device_patch_instance.to_dict()
# create an instance of DataBoxEdgeDevicePatch from a dict
data_box_edge_device_patch_from_dict = DataBoxEdgeDevicePatch.from_dict(data_box_edge_device_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


