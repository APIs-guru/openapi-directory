# ISCSIServer

The iSCSI server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ISCSIServerProperties**](ISCSIServerProperties.md) |  | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.iscsi_server import ISCSIServer

# TODO update the JSON string below
json = "{}"
# create an instance of ISCSIServer from a JSON string
iscsi_server_instance = ISCSIServer.from_json(json)
# print the JSON string representation of the object
print(ISCSIServer.to_json())

# convert the object into a dict
iscsi_server_dict = iscsi_server_instance.to_dict()
# create an instance of ISCSIServer from a dict
iscsi_server_from_dict = ISCSIServer.from_dict(iscsi_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


