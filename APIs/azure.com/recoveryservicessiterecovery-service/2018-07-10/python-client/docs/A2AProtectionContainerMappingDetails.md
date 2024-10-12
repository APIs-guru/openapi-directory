# A2AProtectionContainerMappingDetails

A2A provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_auto_update_status** | **str** | A value indicating whether the auto update is enabled. | [optional] 
**automation_account_arm_id** | **str** | The automation account arm id. | [optional] 
**job_schedule_name** | **str** | The job schedule arm name. | [optional] 
**schedule_name** | **str** | The schedule arm name. | [optional] 

## Example

```python
from openapi_client.models.a2_a_protection_container_mapping_details import A2AProtectionContainerMappingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of A2AProtectionContainerMappingDetails from a JSON string
a2_a_protection_container_mapping_details_instance = A2AProtectionContainerMappingDetails.from_json(json)
# print the JSON string representation of the object
print(A2AProtectionContainerMappingDetails.to_json())

# convert the object into a dict
a2_a_protection_container_mapping_details_dict = a2_a_protection_container_mapping_details_instance.to_dict()
# create an instance of A2AProtectionContainerMappingDetails from a dict
a2_a_protection_container_mapping_details_from_dict = A2AProtectionContainerMappingDetails.from_dict(a2_a_protection_container_mapping_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


