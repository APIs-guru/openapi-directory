# ProfileUpdateProperties

Defines the properties of an experiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_state** | **str** | The enabled state of the Profile | [optional] 

## Example

```python
from openapi_client.models.profile_update_properties import ProfileUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileUpdateProperties from a JSON string
profile_update_properties_instance = ProfileUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ProfileUpdateProperties.to_json())

# convert the object into a dict
profile_update_properties_dict = profile_update_properties_instance.to_dict()
# create an instance of ProfileUpdateProperties from a dict
profile_update_properties_from_dict = ProfileUpdateProperties.from_dict(profile_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


