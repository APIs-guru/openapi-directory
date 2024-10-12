# IntuneGroupsValueInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | the display name of the group | [optional] 
**id** | **str** | the id of the Group | [optional] 

## Example

```python
from openapi_client.models.intune_groups_value_inner import IntuneGroupsValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneGroupsValueInner from a JSON string
intune_groups_value_inner_instance = IntuneGroupsValueInner.from_json(json)
# print the JSON string representation of the object
print(IntuneGroupsValueInner.to_json())

# convert the object into a dict
intune_groups_value_inner_dict = intune_groups_value_inner_instance.to_dict()
# create an instance of IntuneGroupsValueInner from a dict
intune_groups_value_inner_from_dict = IntuneGroupsValueInner.from_dict(intune_groups_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


