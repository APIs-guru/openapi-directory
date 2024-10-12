# UpdateSystemModelsUpdateGroupClientRelationship


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | The subscription status.  The status is active by default. | [optional] 
**client_id** | **str** | Read Only after creation. The client id of the subscriber. | 
**last_checkin** | **datetime** | ReadOnly. The timestamp of the last checkin. | [optional] 
**relationship_id** | **str** | Read Only after creation. The relationship id.  A relationship id will be assigned if not provided on creation. | [optional] 
**update_group_id** | **str** | Read Only after creation. The update group to subscribe to. | 

## Example

```python
from openapi_client.models.update_system_models_update_group_client_relationship import UpdateSystemModelsUpdateGroupClientRelationship

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsUpdateGroupClientRelationship from a JSON string
update_system_models_update_group_client_relationship_instance = UpdateSystemModelsUpdateGroupClientRelationship.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsUpdateGroupClientRelationship.to_json())

# convert the object into a dict
update_system_models_update_group_client_relationship_dict = update_system_models_update_group_client_relationship_instance.to_dict()
# create an instance of UpdateSystemModelsUpdateGroupClientRelationship from a dict
update_system_models_update_group_client_relationship_from_dict = UpdateSystemModelsUpdateGroupClientRelationship.from_dict(update_system_models_update_group_client_relationship_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


