# A2AUpdateContainerMappingInput

A2A update protection container mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_auto_update_status** | **str** | A value indicating whether the auto update is enabled. | [optional] 
**automation_account_arm_id** | **str** | The automation account arm id. | [optional] 

## Example

```python
from openapi_client.models.a2_a_update_container_mapping_input import A2AUpdateContainerMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of A2AUpdateContainerMappingInput from a JSON string
a2_a_update_container_mapping_input_instance = A2AUpdateContainerMappingInput.from_json(json)
# print the JSON string representation of the object
print(A2AUpdateContainerMappingInput.to_json())

# convert the object into a dict
a2_a_update_container_mapping_input_dict = a2_a_update_container_mapping_input_instance.to_dict()
# create an instance of A2AUpdateContainerMappingInput from a dict
a2_a_update_container_mapping_input_from_dict = A2AUpdateContainerMappingInput.from_dict(a2_a_update_container_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


