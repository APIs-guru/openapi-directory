# SoftwareUpdateConfigurationRunProperties

Software update configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**computer_count** | **int** | Number of computers in the software update configuration run. | [optional] [readonly] 
**configured_duration** | **str** | Configured duration for the software update configuration run. | [optional] [readonly] 
**created_by** | **str** | CreatedBy property, which only appears in the response. | [optional] [readonly] 
**creation_time** | **datetime** | Creation time of the resource, which only appears in the response. | [optional] [readonly] 
**end_time** | **datetime** | End time of the software update configuration run. | [optional] [readonly] 
**failed_count** | **int** | Number of computers with failed status. | [optional] [readonly] 
**last_modified_by** | **str** | LastModifiedBy property, which only appears in the response. | [optional] [readonly] 
**last_modified_time** | **datetime** | Last time resource was modified, which only appears in the response. | [optional] [readonly] 
**os_type** | **str** | Operating system target of the software update configuration triggered this run | [optional] [readonly] 
**software_update_configuration** | [**UpdateConfigurationNavigation**](UpdateConfigurationNavigation.md) |  | [optional] 
**start_time** | **datetime** | Start time of the software update configuration run. | [optional] [readonly] 
**status** | **str** | Status of the software update configuration run. | [optional] [readonly] 
**tasks** | [**SoftareUpdateConfigurationRunTasks**](SoftareUpdateConfigurationRunTasks.md) |  | [optional] 

## Example

```python
from openapi_client.models.software_update_configuration_run_properties import SoftwareUpdateConfigurationRunProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationRunProperties from a JSON string
software_update_configuration_run_properties_instance = SoftwareUpdateConfigurationRunProperties.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationRunProperties.to_json())

# convert the object into a dict
software_update_configuration_run_properties_dict = software_update_configuration_run_properties_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationRunProperties from a dict
software_update_configuration_run_properties_from_dict = SoftwareUpdateConfigurationRunProperties.from_dict(software_update_configuration_run_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


