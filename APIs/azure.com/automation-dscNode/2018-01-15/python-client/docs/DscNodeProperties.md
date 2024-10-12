# DscNodeProperties

The properties of a DscNode

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
**total_count** | **int** | Gets the total number of records matching filter criteria. | [optional] 

## Example

```python
from openapi_client.models.dsc_node_properties import DscNodeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DscNodeProperties from a JSON string
dsc_node_properties_instance = DscNodeProperties.from_json(json)
# print the JSON string representation of the object
print(DscNodeProperties.to_json())

# convert the object into a dict
dsc_node_properties_dict = dsc_node_properties_instance.to_dict()
# create an instance of DscNodeProperties from a dict
dsc_node_properties_from_dict = DscNodeProperties.from_dict(dsc_node_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


