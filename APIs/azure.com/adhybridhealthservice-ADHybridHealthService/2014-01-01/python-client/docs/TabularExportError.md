# TabularExportError

The details for export error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merged_entity_id** | **str** | The merged entity Id. | [optional] 
**service_id** | **str** | The service Id. | [optional] 
**service_member_id** | **str** | The server Id. | [optional] 
**tabular_export_error_data** | **str** | The export error data. | [optional] 

## Example

```python
from openapi_client.models.tabular_export_error import TabularExportError

# TODO update the JSON string below
json = "{}"
# create an instance of TabularExportError from a JSON string
tabular_export_error_instance = TabularExportError.from_json(json)
# print the JSON string representation of the object
print(TabularExportError.to_json())

# convert the object into a dict
tabular_export_error_dict = tabular_export_error_instance.to_dict()
# create an instance of TabularExportError from a dict
tabular_export_error_from_dict = TabularExportError.from_dict(tabular_export_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


