# GroupObjectsResponse

The result of grouping objects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the created group. | [optional] 

## Example

```python
from openapi_client.models.group_objects_response import GroupObjectsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GroupObjectsResponse from a JSON string
group_objects_response_instance = GroupObjectsResponse.from_json(json)
# print the JSON string representation of the object
print(GroupObjectsResponse.to_json())

# convert the object into a dict
group_objects_response_dict = group_objects_response_instance.to_dict()
# create an instance of GroupObjectsResponse from a dict
group_objects_response_from_dict = GroupObjectsResponse.from_dict(group_objects_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


