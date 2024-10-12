# StatefulServiceDescription

The description of the stateful service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_move_cost** | [**DefaultMoveCost**](DefaultMoveCost.md) |  | [optional] 
**has_persisted_state** | **bool** |  | [optional] 
**is_default_move_cost_specified** | **bool** |  | [optional] 
**min_replica_set_size** | **int** |  | [optional] 
**quorum_loss_wait_duration_seconds** | **int** |  | [optional] 
**replica_restart_wait_duration_seconds** | **int** |  | [optional] 
**stand_by_replica_keep_duration_seconds** | **int** |  | [optional] 
**target_replica_set_size** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.stateful_service_description import StatefulServiceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceDescription from a JSON string
stateful_service_description_instance = StatefulServiceDescription.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceDescription.to_json())

# convert the object into a dict
stateful_service_description_dict = stateful_service_description_instance.to_dict()
# create an instance of StatefulServiceDescription from a dict
stateful_service_description_from_dict = StatefulServiceDescription.from_dict(stateful_service_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


