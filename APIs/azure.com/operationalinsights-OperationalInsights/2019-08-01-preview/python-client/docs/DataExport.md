# DataExport

The top level data export resource container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DataExportProperties**](DataExportProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_export import DataExport

# TODO update the JSON string below
json = "{}"
# create an instance of DataExport from a JSON string
data_export_instance = DataExport.from_json(json)
# print the JSON string representation of the object
print(DataExport.to_json())

# convert the object into a dict
data_export_dict = data_export_instance.to_dict()
# create an instance of DataExport from a dict
data_export_from_dict = DataExport.from_dict(data_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


