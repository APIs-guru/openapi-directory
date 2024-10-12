# EntityResult

The result of fetching an entity from Datastore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time at which the entity was created. This field is set for &#x60;FULL&#x60; entity results. If this entity is missing, this field will not be set. | [optional] 
**cursor** | **bytearray** | A cursor that points to the position after the result entity. Set only when the &#x60;EntityResult&#x60; is part of a &#x60;QueryResultBatch&#x60; message. | [optional] 
**entity** | [**Entity**](Entity.md) |  | [optional] 
**update_time** | **str** | The time at which the entity was last changed. This field is set for &#x60;FULL&#x60; entity results. If this entity is missing, this field will not be set. | [optional] 
**version** | **str** | The version of the entity, a strictly positive number that monotonically increases with changes to the entity. This field is set for &#x60;FULL&#x60; entity results. For missing entities in &#x60;LookupResponse&#x60;, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads. | [optional] 

## Example

```python
from openapi_client.models.entity_result import EntityResult

# TODO update the JSON string below
json = "{}"
# create an instance of EntityResult from a JSON string
entity_result_instance = EntityResult.from_json(json)
# print the JSON string representation of the object
print(EntityResult.to_json())

# convert the object into a dict
entity_result_dict = entity_result_instance.to_dict()
# create an instance of EntityResult from a dict
entity_result_from_dict = EntityResult.from_dict(entity_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


