# BuildSystemSharedDTOStepConfiguration

Step Configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurations** | **List[str]** | The configuration names supported.  The configurations collection is empty for steps which do not require configuration. | [optional] 
**step_implementation_id** | **str** | The Implementation ID of the step this configuration is for | 

## Example

```python
from openapi_client.models.build_system_shared_dto_step_configuration import BuildSystemSharedDTOStepConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOStepConfiguration from a JSON string
build_system_shared_dto_step_configuration_instance = BuildSystemSharedDTOStepConfiguration.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOStepConfiguration.to_json())

# convert the object into a dict
build_system_shared_dto_step_configuration_dict = build_system_shared_dto_step_configuration_instance.to_dict()
# create an instance of BuildSystemSharedDTOStepConfiguration from a dict
build_system_shared_dto_step_configuration_from_dict = BuildSystemSharedDTOStepConfiguration.from_dict(build_system_shared_dto_step_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


