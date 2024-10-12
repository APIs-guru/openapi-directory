# ExportStats

Progress information for an export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exported_artifact_count** | **str** | The number of messages or files already processed for export. | [optional] 
**size_in_bytes** | **str** | The size of export in bytes. | [optional] 
**total_artifact_count** | **str** | The number of messages or files to be exported. | [optional] 

## Example

```python
from openapi_client.models.export_stats import ExportStats

# TODO update the JSON string below
json = "{}"
# create an instance of ExportStats from a JSON string
export_stats_instance = ExportStats.from_json(json)
# print the JSON string representation of the object
print(ExportStats.to_json())

# convert the object into a dict
export_stats_dict = export_stats_instance.to_dict()
# create an instance of ExportStats from a dict
export_stats_from_dict = ExportStats.from_dict(export_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


