# ExportConfigurationListResult

List of export configurations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** |  | [optional] 
**total** | **int** | the total count of exports | [optional] 
**values** | [**List[ExportConfigurationsList200ResponseValuesInner]**](ExportConfigurationsList200ResponseValuesInner.md) |  | 

## Example

```python
from openapi_client.models.export_configuration_list_result import ExportConfigurationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExportConfigurationListResult from a JSON string
export_configuration_list_result_instance = ExportConfigurationListResult.from_json(json)
# print the JSON string representation of the object
print(ExportConfigurationListResult.to_json())

# convert the object into a dict
export_configuration_list_result_dict = export_configuration_list_result_instance.to_dict()
# create an instance of ExportConfigurationListResult from a dict
export_configuration_list_result_from_dict = ExportConfigurationListResult.from_dict(export_configuration_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


