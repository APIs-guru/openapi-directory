# AppWhitelistingGroups

Represents a list of VM/server groups and set of rules that are Recommended by Azure Security Center to be allowed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AppWhitelistingGroup]**](AppWhitelistingGroup.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_whitelisting_groups import AppWhitelistingGroups

# TODO update the JSON string below
json = "{}"
# create an instance of AppWhitelistingGroups from a JSON string
app_whitelisting_groups_instance = AppWhitelistingGroups.from_json(json)
# print the JSON string representation of the object
print(AppWhitelistingGroups.to_json())

# convert the object into a dict
app_whitelisting_groups_dict = app_whitelisting_groups_instance.to_dict()
# create an instance of AppWhitelistingGroups from a dict
app_whitelisting_groups_from_dict = AppWhitelistingGroups.from_dict(app_whitelisting_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


