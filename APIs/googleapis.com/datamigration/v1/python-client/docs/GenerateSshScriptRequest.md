# GenerateSshScriptRequest

Request message for 'GenerateSshScript' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vm** | **str** | Required. Bastion VM Instance name to use or to create. | [optional] 
**vm_creation_config** | [**VmCreationConfig**](VmCreationConfig.md) |  | [optional] 
**vm_port** | **int** | The port that will be open on the bastion host. | [optional] 
**vm_selection_config** | [**VmSelectionConfig**](VmSelectionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.generate_ssh_script_request import GenerateSshScriptRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GenerateSshScriptRequest from a JSON string
generate_ssh_script_request_instance = GenerateSshScriptRequest.from_json(json)
# print the JSON string representation of the object
print(GenerateSshScriptRequest.to_json())

# convert the object into a dict
generate_ssh_script_request_dict = generate_ssh_script_request_instance.to_dict()
# create an instance of GenerateSshScriptRequest from a dict
generate_ssh_script_request_from_dict = GenerateSshScriptRequest.from_dict(generate_ssh_script_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


