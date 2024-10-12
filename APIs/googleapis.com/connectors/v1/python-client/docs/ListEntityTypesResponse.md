# ListEntityTypesResponse

Response message for ListEntityTypes API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types** | [**List[RuntimeEntitySchema]**](RuntimeEntitySchema.md) | list of entity types | [optional] 
**next_page_token** | **str** | token for next page | [optional] 

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


