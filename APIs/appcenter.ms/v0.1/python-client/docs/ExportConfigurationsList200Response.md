# ExportConfigurationsList200Response

List of export configurations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** |  | [optional] 
**total** | **int** | the total count of exports | [optional] 
**values** | [**List[ExportConfigurationsList200ResponseValuesInner]**](ExportConfigurationsList200ResponseValuesInner.md) |  | 

## Example

```python
from openapi_client.models.export_configurations_list200_response import ExportConfigurationsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExportConfigurationsList200Response from a JSON string
export_configurations_list200_response_instance = ExportConfigurationsList200Response.from_json(json)
# print the JSON string representation of the object
print(ExportConfigurationsList200Response.to_json())

# convert the object into a dict
export_configurations_list200_response_dict = export_configurations_list200_response_instance.to_dict()
# create an instance of ExportConfigurationsList200Response from a dict
export_configurations_list200_response_from_dict = ExportConfigurationsList200Response.from_dict(export_configurations_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


