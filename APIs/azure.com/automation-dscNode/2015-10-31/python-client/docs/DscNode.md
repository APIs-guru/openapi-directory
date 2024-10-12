# DscNode

Definition of the dsc node type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Gets or sets the account id of the node. | [optional] 
**etag** | **str** | Gets or sets the etag of the resource. | [optional] 
**extension_handler** | [**List[DscNodeExtensionHandlerAssociationProperty]**](DscNodeExtensionHandlerAssociationProperty.md) | Gets or sets the list of extensionHandler properties for a Node. | [optional] 
**ip** | **str** | Gets or sets the ip of the node. | [optional] 
**last_seen** | **datetime** | Gets or sets the last seen time of the node. | [optional] 
**node_configuration** | [**DscNodeConfigurationAssociationProperty**](DscNodeConfigurationAssociationProperty.md) |  | [optional] 
**node_id** | **str** | Gets or sets the node id. | [optional] 
**registration_time** | **datetime** | Gets or sets the registration time of the node. | [optional] 
**status** | **str** | Gets or sets the status of the node. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dsc_node import DscNode

# TODO update the JSON string below
json = "{}"
# create an instance of DscNode from a JSON string
dsc_node_instance = DscNode.from_json(json)
# print the JSON string representation of the object
print(DscNode.to_json())

# convert the object into a dict
dsc_node_dict = dsc_node_instance.to_dict()
# create an instance of DscNode from a dict
dsc_node_from_dict = DscNode.from_dict(dsc_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


