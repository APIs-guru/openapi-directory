# GroupLabel

A group label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text** | **str** | The group label name. | [optional] 
**title** | **str** | The title of the group label. | [optional] 
**type** | **str** | The type of the group label. | [optional] 

## Example

```python
from openapi_client.models.group_label import GroupLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GroupLabel from a JSON string
group_label_instance = GroupLabel.from_json(json)
# print the JSON string representation of the object
print(GroupLabel.to_json())

# convert the object into a dict
group_label_dict = group_label_instance.to_dict()
# create an instance of GroupLabel from a dict
group_label_from_dict = GroupLabel.from_dict(group_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


