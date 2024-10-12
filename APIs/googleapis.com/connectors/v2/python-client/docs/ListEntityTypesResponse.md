# ListEntityTypesResponse

Response message for EntityService.ListEntityTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Next page token if more entity types available. | [optional] 
**types** | [**List[EntityType]**](EntityType.md) | List of metadata related to all entity types. | [optional] 
**unsupported_type_names** | **List[str]** | List of entity type names which contain unsupported Datatypes. Check datatype.proto for more information. | [optional] 

## Example

```python
from openapi_client.models.list_entity_types_response import ListEntityTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEntityTypesResponse from a JSON string
list_entity_types_response_instance = ListEntityTypesResponse.from_json(json)
# print the JSON string representation of the object
print(ListEntityTypesResponse.to_json())

# convert the object into a dict
list_entity_types_response_dict = list_entity_types_response_instance.to_dict()
# create an instance of ListEntityTypesResponse from a dict
list_entity_types_response_from_dict = ListEntityTypesResponse.from_dict(list_entity_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


