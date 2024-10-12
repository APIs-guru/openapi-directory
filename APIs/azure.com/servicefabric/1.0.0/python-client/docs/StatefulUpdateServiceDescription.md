# StatefulUpdateServiceDescription

The description of the stateful update service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_replica_set_size** | **int** |  | [optional] 
**quorum_loss_wait_duration_in_milliseconds** | **int** |  | [optional] 
**replica_restart_wait_duration_in_milliseconds** | **int** |  | [optional] 
**stand_by_replica_keep_duration_in_milliseconds** | **int** |  | [optional] 
**target_replica_set_size** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.stateful_update_service_description import StatefulUpdateServiceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulUpdateServiceDescription from a JSON string
stateful_update_service_description_instance = StatefulUpdateServiceDescription.from_json(json)
# print the JSON string representation of the object
print(StatefulUpdateServiceDescription.to_json())

# convert the object into a dict
stateful_update_service_description_dict = stateful_update_service_description_instance.to_dict()
# create an instance of StatefulUpdateServiceDescription from a dict
stateful_update_service_description_from_dict = StatefulUpdateServiceDescription.from_dict(stateful_update_service_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


