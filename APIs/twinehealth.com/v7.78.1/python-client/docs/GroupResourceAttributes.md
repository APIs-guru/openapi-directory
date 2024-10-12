# GroupResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bio** | **str** | A description of the group | [optional] 
**name** | **str** | The name of the group | 

## Example

```python
from openapi_client.models.group_resource_attributes import GroupResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of GroupResourceAttributes from a JSON string
group_resource_attributes_instance = GroupResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(GroupResourceAttributes.to_json())

# convert the object into a dict
group_resource_attributes_dict = group_resource_attributes_instance.to_dict()
# create an instance of GroupResourceAttributes from a dict
group_resource_attributes_from_dict = GroupResourceAttributes.from_dict(group_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


