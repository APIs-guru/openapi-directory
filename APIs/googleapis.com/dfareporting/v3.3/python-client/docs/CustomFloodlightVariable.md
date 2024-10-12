# CustomFloodlightVariable

A custom floodlight variable. This field may only be used when calling batchinsert; it is not supported by batchupdate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customFloodlightVariable\&quot;. | [optional] 
**type** | **str** | The type of custom floodlight variable to supply a value for. These map to the \&quot;u[1-20]&#x3D;\&quot; in the tags. | [optional] 
**value** | **str** | The value of the custom floodlight variable. The length of string must not exceed 100 characters. | [optional] 

## Example

```python
from openapi_client.models.custom_floodlight_variable import CustomFloodlightVariable

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFloodlightVariable from a JSON string
custom_floodlight_variable_instance = CustomFloodlightVariable.from_json(json)
# print the JSON string representation of the object
print(CustomFloodlightVariable.to_json())

# convert the object into a dict
custom_floodlight_variable_dict = custom_floodlight_variable_instance.to_dict()
# create an instance of CustomFloodlightVariable from a dict
custom_floodlight_variable_from_dict = CustomFloodlightVariable.from_dict(custom_floodlight_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


