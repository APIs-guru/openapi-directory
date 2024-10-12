# IntuneGroupValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | the display name of the group | [optional] 
**id** | **str** | the id of the Group | [optional] 

## Example

```python
from openapi_client.models.intune_group_value import IntuneGroupValue

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneGroupValue from a JSON string
intune_group_value_instance = IntuneGroupValue.from_json(json)
# print the JSON string representation of the object
print(IntuneGroupValue.to_json())

# convert the object into a dict
intune_group_value_dict = intune_group_value_instance.to_dict()
# create an instance of IntuneGroupValue from a dict
intune_group_value_from_dict = IntuneGroupValue.from_dict(intune_group_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


