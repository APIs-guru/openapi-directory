# UpdateConfigurationMachineRunProperties

Software update configuration machine run properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configured_duration** | **str** | configured duration for the software update configuration run. | [optional] [readonly] 
**correlation_id** | **str** | correlation id of the software update configuration machine run | [optional] [readonly] 
**created_by** | **str** | createdBy property, which only appears in the response. | [optional] [readonly] 
**creation_time** | **datetime** | Creation time of the resource, which only appears in the response. | [optional] [readonly] 
**end_time** | **datetime** | End time of the software update configuration machine run. | [optional] [readonly] 
**error** | [**SoftwareUpdateConfigurationMachineRunsListDefaultResponse**](SoftwareUpdateConfigurationMachineRunsListDefaultResponse.md) |  | [optional] 
**job** | [**JobNavigation**](JobNavigation.md) |  | [optional] 
**last_modified_by** | **str** | lastModifiedBy property, which only appears in the response. | [optional] [readonly] 
**last_modified_time** | **datetime** | Last time resource was modified, which only appears in the response. | [optional] [readonly] 
**os_type** | **str** | Operating system target of the software update configuration triggered this run | [optional] [readonly] 
**software_update_configuration** | [**UpdateConfigurationNavigation**](UpdateConfigurationNavigation.md) |  | [optional] 
**source_computer_id** | **str** | source computer id of the software update configuration machine run | [optional] [readonly] 
**start_time** | **datetime** | Start time of the software update configuration machine run. | [optional] [readonly] 
**status** | **str** | Status of the software update configuration machine run. | [optional] [readonly] 
**target_computer** | **str** | name of the updated computer | [optional] [readonly] 
**target_computer_type** | **str** | type of the updated computer. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_configuration_machine_run_properties import UpdateConfigurationMachineRunProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConfigurationMachineRunProperties from a JSON string
update_configuration_machine_run_properties_instance = UpdateConfigurationMachineRunProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateConfigurationMachineRunProperties.to_json())

# convert the object into a dict
update_configuration_machine_run_properties_dict = update_configuration_machine_run_properties_instance.to_dict()
# create an instance of UpdateConfigurationMachineRunProperties from a dict
update_configuration_machine_run_properties_from_dict = UpdateConfigurationMachineRunProperties.from_dict(update_configuration_machine_run_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


