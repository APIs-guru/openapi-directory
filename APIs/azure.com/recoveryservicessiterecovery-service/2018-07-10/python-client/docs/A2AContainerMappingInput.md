# A2AContainerMappingInput

A2A container mapping input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_auto_update_status** | **str** | A value indicating whether the auto update is enabled. | [optional] 
**automation_account_arm_id** | **str** | The automation account arm id. | [optional] 

## Example

```python
from openapi_client.models.a2_a_container_mapping_input import A2AContainerMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of A2AContainerMappingInput from a JSON string
a2_a_container_mapping_input_instance = A2AContainerMappingInput.from_json(json)
# print the JSON string representation of the object
print(A2AContainerMappingInput.to_json())

# convert the object into a dict
a2_a_container_mapping_input_dict = a2_a_container_mapping_input_instance.to_dict()
# create an instance of A2AContainerMappingInput from a dict
a2_a_container_mapping_input_from_dict = A2AContainerMappingInput.from_dict(a2_a_container_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


