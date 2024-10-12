# AppWhitelistingGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppWhitelistingGroupData**](AppWhitelistingGroupData.md) |  | 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**location** | **str** | Location where the resource is stored | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_whitelisting_group import AppWhitelistingGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AppWhitelistingGroup from a JSON string
app_whitelisting_group_instance = AppWhitelistingGroup.from_json(json)
# print the JSON string representation of the object
print(AppWhitelistingGroup.to_json())

# convert the object into a dict
app_whitelisting_group_dict = app_whitelisting_group_instance.to_dict()
# create an instance of AppWhitelistingGroup from a dict
app_whitelisting_group_from_dict = AppWhitelistingGroup.from_dict(app_whitelisting_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


