# EntityResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**db_connection** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.entity_response import EntityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EntityResponse from a JSON string
entity_response_instance = EntityResponse.from_json(json)
# print the JSON string representation of the object
print(EntityResponse.to_json())

# convert the object into a dict
entity_response_dict = entity_response_instance.to_dict()
# create an instance of EntityResponse from a dict
entity_response_from_dict = EntityResponse.from_dict(entity_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


