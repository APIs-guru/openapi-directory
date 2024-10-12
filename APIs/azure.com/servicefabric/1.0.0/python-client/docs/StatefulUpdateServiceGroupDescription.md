# StatefulUpdateServiceGroupDescription

The description of the stateful update service group

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
from openapi_client.models.stateful_update_service_group_description import StatefulUpdateServiceGroupDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulUpdateServiceGroupDescription from a JSON string
stateful_update_service_group_description_instance = StatefulUpdateServiceGroupDescription.from_json(json)
# print the JSON string representation of the object
print(StatefulUpdateServiceGroupDescription.to_json())

# convert the object into a dict
stateful_update_service_group_description_dict = stateful_update_service_group_description_instance.to_dict()
# create an instance of StatefulUpdateServiceGroupDescription from a dict
stateful_update_service_group_description_from_dict = StatefulUpdateServiceGroupDescription.from_dict(stateful_update_service_group_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


