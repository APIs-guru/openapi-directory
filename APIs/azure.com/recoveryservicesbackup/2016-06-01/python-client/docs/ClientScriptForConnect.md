# ClientScriptForConnect

Client script details for the file or folder restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_type** | **str** | The operating system platform (\&quot;Windows\&quot; or \&quot;Linux\&quot;) for which this file or folder restore client script works. | [optional] 
**script_content** | **str** | File content of the client script for file or folder restore. | [optional] 
**script_extension** | **str** | File extension of the client script for the file or folder restore. Some examples of the extension are: .ps1 and .sh. | [optional] 

## Example

```python
from openapi_client.models.client_script_for_connect import ClientScriptForConnect

# TODO update the JSON string below
json = "{}"
# create an instance of ClientScriptForConnect from a JSON string
client_script_for_connect_instance = ClientScriptForConnect.from_json(json)
# print the JSON string representation of the object
print(ClientScriptForConnect.to_json())

# convert the object into a dict
client_script_for_connect_dict = client_script_for_connect_instance.to_dict()
# create an instance of ClientScriptForConnect from a dict
client_script_for_connect_from_dict = ClientScriptForConnect.from_dict(client_script_for_connect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


