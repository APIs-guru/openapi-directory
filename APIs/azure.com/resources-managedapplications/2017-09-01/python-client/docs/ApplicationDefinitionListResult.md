# ApplicationDefinitionListResult

List of managed application definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[ApplicationDefinition]**](ApplicationDefinition.md) | The array of managed application definitions. | [optional] 

## Example

```python
from openapi_client.models.application_definition_list_result import ApplicationDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDefinitionListResult from a JSON string
application_definition_list_result_instance = ApplicationDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(ApplicationDefinitionListResult.to_json())

# convert the object into a dict
application_definition_list_result_dict = application_definition_list_result_instance.to_dict()
# create an instance of ApplicationDefinitionListResult from a dict
application_definition_list_result_from_dict = ApplicationDefinitionListResult.from_dict(application_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


