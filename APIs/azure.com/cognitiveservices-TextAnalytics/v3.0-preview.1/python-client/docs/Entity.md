# Entity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**length** | **int** | Length (in Unicode characters) for the entity text. | 
**offset** | **int** | Start position (in Unicode characters) for the entity text. | 
**score** | **float** | Confidence score between 0 and 1 of the extracted entity. | 
**subtype** | **str** | Entity sub type, such as Age/Year/TimeRange etc | [optional] 
**text** | **str** | Entity text as appears in the request. | 
**type** | **str** | Entity type, such as Person/Location/Org/SSN etc | 

## Example

```python
from openapi_client.models.entity import Entity

# TODO update the JSON string below
json = "{}"
# create an instance of Entity from a JSON string
entity_instance = Entity.from_json(json)
# print the JSON string representation of the object
print(Entity.to_json())

# convert the object into a dict
entity_dict = entity_instance.to_dict()
# create an instance of Entity from a dict
entity_from_dict = Entity.from_dict(entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


