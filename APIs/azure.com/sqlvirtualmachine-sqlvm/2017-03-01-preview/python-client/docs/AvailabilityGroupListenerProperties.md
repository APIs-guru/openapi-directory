# AvailabilityGroupListenerProperties

The properties of an availability group listener.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_group_name** | **str** | Name of the availability group. | [optional] 
**create_default_availability_group_if_not_exist** | **bool** | Create a default availability group if it does not exist. | [optional] 
**load_balancer_configurations** | [**List[LoadBalancerConfiguration]**](LoadBalancerConfiguration.md) | List of load balancer configurations for an availability group listener. | [optional] 
**port** | **int** | Listener port. | [optional] 
**provisioning_state** | **str** | Provisioning state to track the async operation status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.availability_group_listener_properties import AvailabilityGroupListenerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilityGroupListenerProperties from a JSON string
availability_group_listener_properties_instance = AvailabilityGroupListenerProperties.from_json(json)
# print the JSON string representation of the object
print(AvailabilityGroupListenerProperties.to_json())

# convert the object into a dict
availability_group_listener_properties_dict = availability_group_listener_properties_instance.to_dict()
# create an instance of AvailabilityGroupListenerProperties from a dict
availability_group_listener_properties_from_dict = AvailabilityGroupListenerProperties.from_dict(availability_group_listener_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


