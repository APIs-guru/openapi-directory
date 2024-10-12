# ApplianceDefinitionListResult

List of appliance definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[ApplianceDefinition]**](ApplianceDefinition.md) | The array of appliance definitions. | [optional] 

## Example

```python
from openapi_client.models.appliance_definition_list_result import ApplianceDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceDefinitionListResult from a JSON string
appliance_definition_list_result_instance = ApplianceDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(ApplianceDefinitionListResult.to_json())

# convert the object into a dict
appliance_definition_list_result_dict = appliance_definition_list_result_instance.to_dict()
# create an instance of ApplianceDefinitionListResult from a dict
appliance_definition_list_result_from_dict = ApplianceDefinitionListResult.from_dict(appliance_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


