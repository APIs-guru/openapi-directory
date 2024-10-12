# CommonExportProperties

The common properties of the export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | [**QueryDefinition**](QueryDefinition.md) |  | 
**delivery_info** | [**ExportDeliveryInfo**](ExportDeliveryInfo.md) |  | 
**format** | **str** | The format of the export being delivered. | [optional] 

## Example

```python
from openapi_client.models.common_export_properties import CommonExportProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CommonExportProperties from a JSON string
common_export_properties_instance = CommonExportProperties.from_json(json)
# print the JSON string representation of the object
print(CommonExportProperties.to_json())

# convert the object into a dict
common_export_properties_dict = common_export_properties_instance.to_dict()
# create an instance of CommonExportProperties from a dict
common_export_properties_from_dict = CommonExportProperties.from_dict(common_export_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


