# DeployedStatelessServiceInstanceInfo

Information about a stateless service instance deployed on a node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | Id of a stateless service instance. InstanceId is used by Service Fabric to uniquely identify an instance of a partition of a stateless service. It is unique within a partition and does not change for the lifetime of the instance. If the instance has failed over on the same or different node, it will get a different value for the InstanceId. | [optional] 

## Example

```python
from openapi_client.models.deployed_stateless_service_instance_info import DeployedStatelessServiceInstanceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeployedStatelessServiceInstanceInfo from a JSON string
deployed_stateless_service_instance_info_instance = DeployedStatelessServiceInstanceInfo.from_json(json)
# print the JSON string representation of the object
print(DeployedStatelessServiceInstanceInfo.to_json())

# convert the object into a dict
deployed_stateless_service_instance_info_dict = deployed_stateless_service_instance_info_instance.to_dict()
# create an instance of DeployedStatelessServiceInstanceInfo from a dict
deployed_stateless_service_instance_info_from_dict = DeployedStatelessServiceInstanceInfo.from_dict(deployed_stateless_service_instance_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


