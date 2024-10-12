# SelectedFieldInfo

Path to a field/column/property in a stream to be selected. For example, if the field to be selected is a database column called \"foo\", this will be [\"foo\"]. Use multiple path elements for nested schemas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_path** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.selected_field_info import SelectedFieldInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SelectedFieldInfo from a JSON string
selected_field_info_instance = SelectedFieldInfo.from_json(json)
# print the JSON string representation of the object
print(SelectedFieldInfo.to_json())

# convert the object into a dict
selected_field_info_dict = selected_field_info_instance.to_dict()
# create an instance of SelectedFieldInfo from a dict
selected_field_info_from_dict = SelectedFieldInfo.from_dict(selected_field_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


