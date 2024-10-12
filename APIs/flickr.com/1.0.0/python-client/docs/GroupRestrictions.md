# GroupRestrictions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**art_ok** | **bool** |  | [optional] 
**has_geo** | **bool** |  | [optional] 
**images_ok** | **bool** |  | [optional] 
**moderate_ok** | **bool** |  | [optional] 
**photos_ok** | **bool** |  | [optional] 
**restricted_ok** | **bool** |  | [optional] 
**safe_ok** | **bool** |  | [optional] 
**screens_ok** | **bool** |  | [optional] 
**videos_ok** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.group_restrictions import GroupRestrictions

# TODO update the JSON string below
json = "{}"
# create an instance of GroupRestrictions from a JSON string
group_restrictions_instance = GroupRestrictions.from_json(json)
# print the JSON string representation of the object
print(GroupRestrictions.to_json())

# convert the object into a dict
group_restrictions_dict = group_restrictions_instance.to_dict()
# create an instance of GroupRestrictions from a dict
group_restrictions_from_dict = GroupRestrictions.from_dict(group_restrictions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


