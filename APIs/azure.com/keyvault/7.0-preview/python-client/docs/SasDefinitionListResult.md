# SasDefinitionListResult

The storage account SAS definition list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of SAS definitions. | [optional] [readonly] 
**value** | [**List[SasDefinitionItem]**](SasDefinitionItem.md) | A response message containing a list of SAS definitions along with a link to the next page of SAS definitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sas_definition_list_result import SasDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SasDefinitionListResult from a JSON string
sas_definition_list_result_instance = SasDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(SasDefinitionListResult.to_json())

# convert the object into a dict
sas_definition_list_result_dict = sas_definition_list_result_instance.to_dict()
# create an instance of SasDefinitionListResult from a dict
sas_definition_list_result_from_dict = SasDefinitionListResult.from_dict(sas_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


