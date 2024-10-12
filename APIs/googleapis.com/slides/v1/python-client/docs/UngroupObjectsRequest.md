# UngroupObjectsRequest

Ungroups objects, such as groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_ids** | **List[str]** | The object IDs of the objects to ungroup. Only groups that are not inside other groups can be ungrouped. All the groups should be on the same page. The group itself is deleted. The visual sizes and positions of all the children are preserved. | [optional] 

## Example

```python
from openapi_client.models.ungroup_objects_request import UngroupObjectsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UngroupObjectsRequest from a JSON string
ungroup_objects_request_instance = UngroupObjectsRequest.from_json(json)
# print the JSON string representation of the object
print(UngroupObjectsRequest.to_json())

# convert the object into a dict
ungroup_objects_request_dict = ungroup_objects_request_instance.to_dict()
# create an instance of UngroupObjectsRequest from a dict
ungroup_objects_request_from_dict = UngroupObjectsRequest.from_dict(ungroup_objects_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


