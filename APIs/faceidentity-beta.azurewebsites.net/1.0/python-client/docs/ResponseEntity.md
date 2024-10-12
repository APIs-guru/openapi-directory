# ResponseEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **object** |  | [optional] 
**status_code** | **str** |  | [optional] 
**status_code_value** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_entity import ResponseEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseEntity from a JSON string
response_entity_instance = ResponseEntity.from_json(json)
# print the JSON string representation of the object
print(ResponseEntity.to_json())

# convert the object into a dict
response_entity_dict = response_entity_instance.to_dict()
# create an instance of ResponseEntity from a dict
response_entity_from_dict = ResponseEntity.from_dict(response_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


