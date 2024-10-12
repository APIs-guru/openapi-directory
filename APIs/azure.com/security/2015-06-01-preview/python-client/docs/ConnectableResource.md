# ConnectableResource

Describes the allowed inbound and outbound traffic of an Azure resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Azure resource id | [optional] [readonly] 
**inbound_connected_resources** | [**List[ConnectedResource]**](ConnectedResource.md) | The list of Azure resources that the resource has inbound allowed connection from | [optional] [readonly] 
**outbound_connected_resources** | [**List[ConnectedResource]**](ConnectedResource.md) | The list of Azure resources that the resource has outbound allowed connection to | [optional] [readonly] 

## Example

```python
from openapi_client.models.connectable_resource import ConnectableResource

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectableResource from a JSON string
connectable_resource_instance = ConnectableResource.from_json(json)
# print the JSON string representation of the object
print(ConnectableResource.to_json())

# convert the object into a dict
connectable_resource_dict = connectable_resource_instance.to_dict()
# create an instance of ConnectableResource from a dict
connectable_resource_from_dict = ConnectableResource.from_dict(connectable_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


