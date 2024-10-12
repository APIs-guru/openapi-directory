# ScriptInstanceInfoRuntimeInformationModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ScriptInstanceInfoRuntimeStatus**](ScriptInstanceInfoRuntimeStatus.md) |  | [optional] 
**status_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.script_instance_info_runtime_information_model import ScriptInstanceInfoRuntimeInformationModel

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptInstanceInfoRuntimeInformationModel from a JSON string
script_instance_info_runtime_information_model_instance = ScriptInstanceInfoRuntimeInformationModel.from_json(json)
# print the JSON string representation of the object
print(ScriptInstanceInfoRuntimeInformationModel.to_json())

# convert the object into a dict
script_instance_info_runtime_information_model_dict = script_instance_info_runtime_information_model_instance.to_dict()
# create an instance of ScriptInstanceInfoRuntimeInformationModel from a dict
script_instance_info_runtime_information_model_from_dict = ScriptInstanceInfoRuntimeInformationModel.from_dict(script_instance_info_runtime_information_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


