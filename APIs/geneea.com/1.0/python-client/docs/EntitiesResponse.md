# EntitiesResponse

Response for the named-entity recognition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[Entity]**](Entity.md) | Found named entities in the document | 
**id** | **str** | Unique identifier of the document | [optional] 
**language** | **str** | The used language of the document | 
**text** | **str** | The raw text of the document which has been analysed | [optional] 

## Example

```python
from openapi_client.models.entities_response import EntitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EntitiesResponse from a JSON string
entities_response_instance = EntitiesResponse.from_json(json)
# print the JSON string representation of the object
print(EntitiesResponse.to_json())

# convert the object into a dict
entities_response_dict = entities_response_instance.to_dict()
# create an instance of EntitiesResponse from a dict
entities_response_from_dict = EntitiesResponse.from_dict(entities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


