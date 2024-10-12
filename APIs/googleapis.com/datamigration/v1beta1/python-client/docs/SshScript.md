# SshScript

Response message for 'GenerateSshScript' request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **str** | The ssh configuration script. | [optional] 

## Example

```python
from openapi_client.models.ssh_script import SshScript

# TODO update the JSON string below
json = "{}"
# create an instance of SshScript from a JSON string
ssh_script_instance = SshScript.from_json(json)
# print the JSON string representation of the object
print(SshScript.to_json())

# convert the object into a dict
ssh_script_dict = ssh_script_instance.to_dict()
# create an instance of SshScript from a dict
ssh_script_from_dict = SshScript.from_dict(ssh_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


