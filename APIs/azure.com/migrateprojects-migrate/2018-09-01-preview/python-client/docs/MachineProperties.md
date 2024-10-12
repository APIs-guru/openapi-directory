# MachineProperties

Properties of the machine resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assessment_data** | [**List[AssessmentDetails]**](AssessmentDetails.md) | Gets or sets the assessment details of the machine published by various sources. | [optional] 
**discovery_data** | [**List[DiscoveryDetails]**](DiscoveryDetails.md) | Gets or sets the discovery details of the machine published by various sources. | [optional] 
**last_updated_time** | **datetime** | Gets or sets the time of the last modification of the machine. | [optional] 
**migration_data** | [**List[MigrationDetails]**](MigrationDetails.md) | Gets or sets the migration details of the machine published by various sources. | [optional] 

## Example

```python
from openapi_client.models.machine_properties import MachineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MachineProperties from a JSON string
machine_properties_instance = MachineProperties.from_json(json)
# print the JSON string representation of the object
print(MachineProperties.to_json())

# convert the object into a dict
machine_properties_dict = machine_properties_instance.to_dict()
# create an instance of MachineProperties from a dict
machine_properties_from_dict = MachineProperties.from_dict(machine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


