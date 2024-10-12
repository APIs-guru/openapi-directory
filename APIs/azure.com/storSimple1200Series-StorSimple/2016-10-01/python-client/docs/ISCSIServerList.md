# ISCSIServerList

Collection of Iscsi servers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ISCSIServer]**](ISCSIServer.md) | The value. | 

## Example

```python
from openapi_client.models.iscsi_server_list import ISCSIServerList

# TODO update the JSON string below
json = "{}"
# create an instance of ISCSIServerList from a JSON string
iscsi_server_list_instance = ISCSIServerList.from_json(json)
# print the JSON string representation of the object
print(ISCSIServerList.to_json())

# convert the object into a dict
iscsi_server_list_dict = iscsi_server_list_instance.to_dict()
# create an instance of ISCSIServerList from a dict
iscsi_server_list_from_dict = ISCSIServerList.from_dict(iscsi_server_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


