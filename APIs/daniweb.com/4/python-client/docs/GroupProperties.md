# GroupProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**privacy** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.group_properties import GroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GroupProperties from a JSON string
group_properties_instance = GroupProperties.from_json(json)
# print the JSON string representation of the object
print(GroupProperties.to_json())

# convert the object into a dict
group_properties_dict = group_properties_instance.to_dict()
# create an instance of GroupProperties from a dict
group_properties_from_dict = GroupProperties.from_dict(group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


