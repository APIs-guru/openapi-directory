# ProfileEnumValidValuesFormat

Valid enum values in case of an enum property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**localized_value_names** | **Dict[str, str]** | Localized names of the enum member. | [optional] 
**value** | **int** | The integer value of the enum member. | [optional] 

## Example

```python
from openapi_client.models.profile_enum_valid_values_format import ProfileEnumValidValuesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileEnumValidValuesFormat from a JSON string
profile_enum_valid_values_format_instance = ProfileEnumValidValuesFormat.from_json(json)
# print the JSON string representation of the object
print(ProfileEnumValidValuesFormat.to_json())

# convert the object into a dict
profile_enum_valid_values_format_dict = profile_enum_valid_values_format_instance.to_dict()
# create an instance of ProfileEnumValidValuesFormat from a dict
profile_enum_valid_values_format_from_dict = ProfileEnumValidValuesFormat.from_dict(profile_enum_valid_values_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


