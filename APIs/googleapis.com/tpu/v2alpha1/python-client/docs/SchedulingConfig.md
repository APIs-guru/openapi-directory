# SchedulingConfig

Sets the scheduling options for this node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preemptible** | **bool** | Defines whether the node is preemptible. | [optional] 
**reserved** | **bool** | Whether the node is created under a reservation. | [optional] 
**spot** | **bool** | Optional. Defines whether the node is Spot VM. | [optional] 

## Example

```python
from openapi_client.models.scheduling_config import SchedulingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulingConfig from a JSON string
scheduling_config_instance = SchedulingConfig.from_json(json)
# print the JSON string representation of the object
print(SchedulingConfig.to_json())

# convert the object into a dict
scheduling_config_dict = scheduling_config_instance.to_dict()
# create an instance of SchedulingConfig from a dict
scheduling_config_from_dict = SchedulingConfig.from_dict(scheduling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


