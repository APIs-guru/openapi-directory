# ConnectedResource

Describes properties of a connected resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected_resource_id** | **str** | The Azure resource id of the connected resource | [optional] [readonly] 
**tcp_ports** | **str** | The allowed tcp ports | [optional] [readonly] 
**udp_ports** | **str** | The allowed udp ports | [optional] [readonly] 

## Example

```python
from openapi_client.models.connected_resource import ConnectedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectedResource from a JSON string
connected_resource_instance = ConnectedResource.from_json(json)
# print the JSON string representation of the object
print(ConnectedResource.to_json())

# convert the object into a dict
connected_resource_dict = connected_resource_instance.to_dict()
# create an instance of ConnectedResource from a dict
connected_resource_from_dict = ConnectedResource.from_dict(connected_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


