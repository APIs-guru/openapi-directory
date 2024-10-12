# GroupProperties

Properties of group resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessments** | **List[str]** | List of References to Assessments created on this group. | [optional] [readonly] 
**created_timestamp** | **datetime** | Time when this project was created. Date-Time represented in ISO-8601 format. | [optional] [readonly] 
**machines** | **List[str]** | List of machine names that are part of this group. | 
**updated_timestamp** | **datetime** | Time when this project was last updated. Date-Time represented in ISO-8601 format. | [optional] [readonly] 

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


