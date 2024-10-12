# RdpConnection

Represents a .rdp file

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **str** | The contents of the .rdp file | [optional] 

## Example

```python
from openapi_client.models.rdp_connection import RdpConnection

# TODO update the JSON string below
json = "{}"
# create an instance of RdpConnection from a JSON string
rdp_connection_instance = RdpConnection.from_json(json)
# print the JSON string representation of the object
print(RdpConnection.to_json())

# convert the object into a dict
rdp_connection_dict = rdp_connection_instance.to_dict()
# create an instance of RdpConnection from a dict
rdp_connection_from_dict = RdpConnection.from_dict(rdp_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


