# ExportProperties

The properties of the export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule** | [**ExportSchedule**](ExportSchedule.md) |  | [optional] 
**definition** | [**QueryDefinition**](QueryDefinition.md) |  | 
**delivery_info** | [**ExportDeliveryInfo**](ExportDeliveryInfo.md) |  | 
**format** | **str** | The format of the export being delivered. | [optional] 

## Example

```python
from openapi_client.models.export_properties import ExportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExportProperties from a JSON string
export_properties_instance = ExportProperties.from_json(json)
# print the JSON string representation of the object
print(ExportProperties.to_json())

# convert the object into a dict
export_properties_dict = export_properties_instance.to_dict()
# create an instance of ExportProperties from a dict
export_properties_from_dict = ExportProperties.from_dict(export_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


