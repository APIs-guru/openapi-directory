# ClientScriptForConnect

Client script details for file / folder restore.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_type** | **str** | OS type - Windows, Linux etc. for which this file / folder restore client script works. | [optional] 
**script_content** | **str** | File content of the client script for file / folder restore. | [optional] 
**script_extension** | **str** | File extension of the client script for file / folder restore - .ps1 , .sh , etc. | [optional] 
**script_name_suffix** | **str** | Mandator suffix that should be added to the name of script that is given for download to user.              If its null or empty then , ignore it. | [optional] 
**url** | **str** | URL of Executable from where to source the content. If this is not null then ScriptContent should not be used | [optional] 

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


