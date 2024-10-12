# IntuneGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | the display name of the group | [optional] 
**id** | **str** | the id of the Group | [optional] 
**security_enabled** | **bool** | species if it is a security group | [optional] 

## Example

```python
from openapi_client.models.intune_group import IntuneGroup

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneGroup from a JSON string
intune_group_instance = IntuneGroup.from_json(json)
# print the JSON string representation of the object
print(IntuneGroup.to_json())

# convert the object into a dict
intune_group_dict = intune_group_instance.to_dict()
# create an instance of IntuneGroup from a dict
intune_group_from_dict = IntuneGroup.from_dict(intune_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


