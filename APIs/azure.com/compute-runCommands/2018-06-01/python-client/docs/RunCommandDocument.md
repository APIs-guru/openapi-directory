# RunCommandDocument

Describes the properties of a Run Command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**List[RunCommandParameterDefinition]**](RunCommandParameterDefinition.md) | The parameters used by the script. | [optional] 
**script** | **List[str]** | The script to be executed. | 
**var_schema** | **str** | The VM run command schema. | 
**description** | **str** | The VM run command description. | 
**id** | **str** | The VM run command id. | 
**label** | **str** | The VM run command label. | 
**os_type** | **str** | The Operating System type. | 

## Example

```python
from openapi_client.models.run_command_document import RunCommandDocument

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandDocument from a JSON string
run_command_document_instance = RunCommandDocument.from_json(json)
# print the JSON string representation of the object
print(RunCommandDocument.to_json())

# convert the object into a dict
run_command_document_dict = run_command_document_instance.to_dict()
# create an instance of RunCommandDocument from a dict
run_command_document_from_dict = RunCommandDocument.from_dict(run_command_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


