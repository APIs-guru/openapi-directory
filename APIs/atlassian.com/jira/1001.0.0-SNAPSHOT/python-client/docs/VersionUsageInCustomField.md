# VersionUsageInCustomField

List of custom fields using the version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_field_id** | **int** | The ID of the custom field. | [optional] [readonly] 
**field_name** | **str** | The name of the custom field. | [optional] [readonly] 
**issue_count_with_version_in_custom_field** | **int** | Count of the issues where the custom field contains the version. | [optional] [readonly] 

## Example

```python
from openapi_client.models.version_usage_in_custom_field import VersionUsageInCustomField

# TODO update the JSON string below
json = "{}"
# create an instance of VersionUsageInCustomField from a JSON string
version_usage_in_custom_field_instance = VersionUsageInCustomField.from_json(json)
# print the JSON string representation of the object
print(VersionUsageInCustomField.to_json())

# convert the object into a dict
version_usage_in_custom_field_dict = version_usage_in_custom_field_instance.to_dict()
# create an instance of VersionUsageInCustomField from a dict
version_usage_in_custom_field_from_dict = VersionUsageInCustomField.from_dict(version_usage_in_custom_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


