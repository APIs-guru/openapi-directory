# ListEntitiesResponse

Response message for EntityService.ListEntities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[Entity]**](Entity.md) | List containing entity rows. | [optional] 
**next_page_token** | **str** | Next page token if more records are available. | [optional] 

## Example

```python
from openapi_client.models.list_entities_response import ListEntitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEntitiesResponse from a JSON string
list_entities_response_instance = ListEntitiesResponse.from_json(json)
# print the JSON string representation of the object
print(ListEntitiesResponse.to_json())

# convert the object into a dict
list_entities_response_dict = list_entities_response_instance.to_dict()
# create an instance of ListEntitiesResponse from a dict
list_entities_response_from_dict = ListEntitiesResponse.from_dict(list_entities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


