# ExportRDBParameters

Parameters for Redis export operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | **str** | Container name to export to. | 
**format** | **str** | File format. | [optional] 
**prefix** | **str** | Prefix to use for exported files. | 

## Example

```python
from openapi_client.models.export_rdb_parameters import ExportRDBParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ExportRDBParameters from a JSON string
export_rdb_parameters_instance = ExportRDBParameters.from_json(json)
# print the JSON string representation of the object
print(ExportRDBParameters.to_json())

# convert the object into a dict
export_rdb_parameters_dict = export_rdb_parameters_instance.to_dict()
# create an instance of ExportRDBParameters from a dict
export_rdb_parameters_from_dict = ExportRDBParameters.from_dict(export_rdb_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


