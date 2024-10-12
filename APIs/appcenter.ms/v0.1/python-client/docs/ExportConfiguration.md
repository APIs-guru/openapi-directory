# ExportConfiguration

Export configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backfill** | **bool** | Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation. | [optional] 
**export_entities** | **List[str]** |  | [optional] 
**resource_group** | **str** | The resource group name on azure | [optional] 
**resource_name** | **str** | The resource name on azure | [optional] 
**type** | **str** | Type of export configuration | 

## Example

```python
from openapi_client.models.export_configuration import ExportConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ExportConfiguration from a JSON string
export_configuration_instance = ExportConfiguration.from_json(json)
# print the JSON string representation of the object
print(ExportConfiguration.to_json())

# convert the object into a dict
export_configuration_dict = export_configuration_instance.to_dict()
# create an instance of ExportConfiguration from a dict
export_configuration_from_dict = ExportConfiguration.from_dict(export_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


