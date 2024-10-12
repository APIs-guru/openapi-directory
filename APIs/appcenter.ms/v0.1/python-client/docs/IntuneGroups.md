# IntuneGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_context** | **str** | context | [optional] 
**value** | [**List[IntuneGroupsValueInner]**](IntuneGroupsValueInner.md) | categories for intune app | [optional] 

## Example

```python
from openapi_client.models.intune_groups import IntuneGroups

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneGroups from a JSON string
intune_groups_instance = IntuneGroups.from_json(json)
# print the JSON string representation of the object
print(IntuneGroups.to_json())

# convert the object into a dict
intune_groups_dict = intune_groups_instance.to_dict()
# create an instance of IntuneGroups from a dict
intune_groups_from_dict = IntuneGroups.from_dict(intune_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


