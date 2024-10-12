# DeletedSasDefinitionListResult

The deleted SAS definition list result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of deleted SAS definitions. | [optional] [readonly] 
**value** | [**List[DeletedSasDefinitionItem]**](DeletedSasDefinitionItem.md) | A response message containing a list of the deleted SAS definitions in the vault along with a link to the next page of deleted sas definitions | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_sas_definition_list_result import DeletedSasDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedSasDefinitionListResult from a JSON string
deleted_sas_definition_list_result_instance = DeletedSasDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(DeletedSasDefinitionListResult.to_json())

# convert the object into a dict
deleted_sas_definition_list_result_dict = deleted_sas_definition_list_result_instance.to_dict()
# create an instance of DeletedSasDefinitionListResult from a dict
deleted_sas_definition_list_result_from_dict = DeletedSasDefinitionListResult.from_dict(deleted_sas_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


