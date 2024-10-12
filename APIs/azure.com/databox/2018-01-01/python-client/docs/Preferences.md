# Preferences

Preferences related to the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferred_data_center_region** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.preferences import Preferences

# TODO update the JSON string below
json = "{}"
# create an instance of Preferences from a JSON string
preferences_instance = Preferences.from_json(json)
# print the JSON string representation of the object
print(Preferences.to_json())

# convert the object into a dict
preferences_dict = preferences_instance.to_dict()
# create an instance of Preferences from a dict
preferences_from_dict = Preferences.from_dict(preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


