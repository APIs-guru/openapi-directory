# DedicatedCapacityProperties

Properties of Dedicated Capacity resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The current deployment state of PowerBI Dedicated resource. The provisioningState is to indicate states for resource provisioning. | [optional] [readonly] 
**state** | **str** | The current state of PowerBI Dedicated resource. The state is to indicate more states outside of resource provisioning. | [optional] [readonly] 
**administration** | [**DedicatedCapacityAdministrators**](DedicatedCapacityAdministrators.md) |  | [optional] 

## Example

```python
from openapi_client.models.dedicated_capacity_properties import DedicatedCapacityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCapacityProperties from a JSON string
dedicated_capacity_properties_instance = DedicatedCapacityProperties.from_json(json)
# print the JSON string representation of the object
print(DedicatedCapacityProperties.to_json())

# convert the object into a dict
dedicated_capacity_properties_dict = dedicated_capacity_properties_instance.to_dict()
# create an instance of DedicatedCapacityProperties from a dict
dedicated_capacity_properties_from_dict = DedicatedCapacityProperties.from_dict(dedicated_capacity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


