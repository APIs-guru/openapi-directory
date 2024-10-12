# Connection

Contains information about the IP connection associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_ip** | **str** | Destination IP address. Not present for sockets that are listening and not connected. | [optional] 
**destination_port** | **int** | Destination port. Not present for sockets that are listening and not connected. | [optional] 
**protocol** | **str** | IANA Internet Protocol Number such as TCP(6) and UDP(17). | [optional] 
**source_ip** | **str** | Source IP address. | [optional] 
**source_port** | **int** | Source port. | [optional] 

## Example

```python
from openapi_client.models.connection import Connection

# TODO update the JSON string below
json = "{}"
# create an instance of Connection from a JSON string
connection_instance = Connection.from_json(json)
# print the JSON string representation of the object
print(Connection.to_json())

# convert the object into a dict
connection_dict = connection_instance.to_dict()
# create an instance of Connection from a dict
connection_from_dict = Connection.from_dict(connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


