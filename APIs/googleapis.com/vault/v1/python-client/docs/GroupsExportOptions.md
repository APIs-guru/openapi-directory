# GroupsExportOptions

Options for Groups exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_format** | **str** | The file format for exported messages. | [optional] 

## Example

```python
from openapi_client.models.groups_export_options import GroupsExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GroupsExportOptions from a JSON string
groups_export_options_instance = GroupsExportOptions.from_json(json)
# print the JSON string representation of the object
print(GroupsExportOptions.to_json())

# convert the object into a dict
groups_export_options_dict = groups_export_options_instance.to_dict()
# create an instance of GroupsExportOptions from a dict
groups_export_options_from_dict = GroupsExportOptions.from_dict(groups_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


