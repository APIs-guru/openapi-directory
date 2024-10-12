# CallEntity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Created At | [optional] 
**description** | **str** | Description | [optional] 
**direction** | **str** | Direction | [optional] 
**ended_at** | **datetime** | Ended At | [optional] 
**id** | **str** | Call Identifier | [optional] 
**purpose** | **str** | Purpose | [optional] 
**relation** | [**Relation**](Relation.md) |  | [optional] 
**result** | **str** | Result | [optional] 
**started_at** | **datetime** | Started At | [optional] 
**status** | **str** | Status | [optional] 
**subject** | **str** | Subject | [optional] 
**updated_at** | **datetime** | Updated At | [optional] 

## Example

```python
from openapi_client.models.call_entity import CallEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CallEntity from a JSON string
call_entity_instance = CallEntity.from_json(json)
# print the JSON string representation of the object
print(CallEntity.to_json())

# convert the object into a dict
call_entity_dict = call_entity_instance.to_dict()
# create an instance of CallEntity from a dict
call_entity_from_dict = CallEntity.from_dict(call_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


