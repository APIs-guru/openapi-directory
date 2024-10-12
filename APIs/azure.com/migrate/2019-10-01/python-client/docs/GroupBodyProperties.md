# GroupBodyProperties

Body properties of group update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machines** | **List[str]** | List of machine names that are part of this group. | [optional] 
**operation_type** | **str** | Whether to add or remove the machines. | [optional] 

## Example

```python
from openapi_client.models.group_body_properties import GroupBodyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GroupBodyProperties from a JSON string
group_body_properties_instance = GroupBodyProperties.from_json(json)
# print the JSON string representation of the object
print(GroupBodyProperties.to_json())

# convert the object into a dict
group_body_properties_dict = group_body_properties_instance.to_dict()
# create an instance of GroupBodyProperties from a dict
group_body_properties_from_dict = GroupBodyProperties.from_dict(group_body_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


