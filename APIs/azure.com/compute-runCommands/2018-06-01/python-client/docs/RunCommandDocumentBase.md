# RunCommandDocumentBase

Describes the properties of a Run Command metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | **str** | The VM run command schema. | 
**description** | **str** | The VM run command description. | 
**id** | **str** | The VM run command id. | 
**label** | **str** | The VM run command label. | 
**os_type** | **str** | The Operating System type. | 

## Example

```python
from openapi_client.models.run_command_document_base import RunCommandDocumentBase

# TODO update the JSON string below
json = "{}"
# create an instance of RunCommandDocumentBase from a JSON string
run_command_document_base_instance = RunCommandDocumentBase.from_json(json)
# print the JSON string representation of the object
print(RunCommandDocumentBase.to_json())

# convert the object into a dict
run_command_document_base_dict = run_command_document_base_instance.to_dict()
# create an instance of RunCommandDocumentBase from a dict
run_command_document_base_from_dict = RunCommandDocumentBase.from_dict(run_command_document_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


