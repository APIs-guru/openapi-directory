# StatelessServiceInstanceInfo

Represents a stateless service instance. This includes information about the identity, status, health, node name, uptime, and other details about the instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | Id of a stateless service instance. InstanceId is used by Service Fabric to uniquely identify an instance of a partition of a stateless service. It is unique within a partition and does not change for the lifetime of the instance. If the instance is failedover on the same or different node, it will get a different value for the InstanceId. | [optional] 

## Example

```python
from openapi_client.models.stateless_service_instance_info import StatelessServiceInstanceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceInstanceInfo from a JSON string
stateless_service_instance_info_instance = StatelessServiceInstanceInfo.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceInstanceInfo.to_json())

# convert the object into a dict
stateless_service_instance_info_dict = stateless_service_instance_info_instance.to_dict()
# create an instance of StatelessServiceInstanceInfo from a dict
stateless_service_instance_info_from_dict = StatelessServiceInstanceInfo.from_dict(stateless_service_instance_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


