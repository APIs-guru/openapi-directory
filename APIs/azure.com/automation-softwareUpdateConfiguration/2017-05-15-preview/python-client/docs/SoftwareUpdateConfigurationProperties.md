# SoftwareUpdateConfigurationProperties

Software update configuration properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_by** | **str** | CreatedBy property, which only appears in the response. | [optional] [readonly] 
**creation_time** | **datetime** | Creation time of the resource, which only appears in the response. | [optional] [readonly] 
**error** | [**SoftwareUpdateConfigurationsListDefaultResponse**](SoftwareUpdateConfigurationsListDefaultResponse.md) |  | [optional] 
**last_modified_by** | **str** | LastModifiedBy property, which only appears in the response. | [optional] [readonly] 
**last_modified_time** | **datetime** | Last time resource was modified, which only appears in the response. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state for the software update configuration, which only appears in the response. | [optional] [readonly] 
**schedule_info** | [**ScheduleProperties**](ScheduleProperties.md) |  | 
**tasks** | [**SoftwareUpdateConfigurationTasks**](SoftwareUpdateConfigurationTasks.md) |  | [optional] 
**update_configuration** | [**UpdateConfiguration**](UpdateConfiguration.md) |  | 

## Example

```python
from openapi_client.models.software_update_configuration_properties import SoftwareUpdateConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SoftwareUpdateConfigurationProperties from a JSON string
software_update_configuration_properties_instance = SoftwareUpdateConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(SoftwareUpdateConfigurationProperties.to_json())

# convert the object into a dict
software_update_configuration_properties_dict = software_update_configuration_properties_instance.to_dict()
# create an instance of SoftwareUpdateConfigurationProperties from a dict
software_update_configuration_properties_from_dict = SoftwareUpdateConfigurationProperties.from_dict(software_update_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


