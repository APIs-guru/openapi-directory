# AvailabilitySetProperties

The instance view of a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platform_fault_domain_count** | **int** | Fault Domain count. | [optional] 
**platform_update_domain_count** | **int** | Update Domain count. | [optional] 
**statuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] [readonly] 
**virtual_machines** | [**List[SubResource]**](SubResource.md) | A list of references to all virtual machines in the availability set. | [optional] 

## Example

```python
from openapi_client.models.availability_set_properties import AvailabilitySetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AvailabilitySetProperties from a JSON string
availability_set_properties_instance = AvailabilitySetProperties.from_json(json)
# print the JSON string representation of the object
print(AvailabilitySetProperties.to_json())

# convert the object into a dict
availability_set_properties_dict = availability_set_properties_instance.to_dict()
# create an instance of AvailabilitySetProperties from a dict
availability_set_properties_from_dict = AvailabilitySetProperties.from_dict(availability_set_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


