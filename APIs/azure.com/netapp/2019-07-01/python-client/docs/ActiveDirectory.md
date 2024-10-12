# ActiveDirectory

Active Directory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_directory_id** | **str** | Id of the Active Directory | [optional] 
**dns** | **str** | Comma separated list of DNS server IP addresses for the Active Directory domain | [optional] 
**domain** | **str** | Name of the Active Directory domain | [optional] 
**organizational_unit** | **str** | The Organizational Unit (OU) within the Windows Active Directory | [optional] 
**password** | **str** | Plain text password of Active Directory domain administrator | [optional] 
**smb_server_name** | **str** | NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes | [optional] 
**status** | **str** | Status of the Active Directory | [optional] 
**username** | **str** | Username of Active Directory domain administrator | [optional] 

## Example

```python
from openapi_client.models.active_directory import ActiveDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveDirectory from a JSON string
active_directory_instance = ActiveDirectory.from_json(json)
# print the JSON string representation of the object
print(ActiveDirectory.to_json())

# convert the object into a dict
active_directory_dict = active_directory_instance.to_dict()
# create an instance of ActiveDirectory from a dict
active_directory_from_dict = ActiveDirectory.from_dict(active_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


