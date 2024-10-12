# SignalRResource

A class represent a SignalR service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Fully qualified resource Id for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**properties** | [**SignalRProperties**](SignalRProperties.md) |  | [optional] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 
**type** | **str** | The type of the service - e.g. \&quot;Microsoft.SignalRService/SignalR\&quot; | [optional] [readonly] 
**location** | **str** | The GEO location of the SignalR service. e.g. West US | East US | North Central US | South Central US. | [optional] 
**tags** | **Dict[str, str]** | Tags of the service which is a list of key value pairs that describe the resource. | [optional] 

## Example

```python
from openapi_client.models.signal_r_resource import SignalRResource

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRResource from a JSON string
signal_r_resource_instance = SignalRResource.from_json(json)
# print the JSON string representation of the object
print(SignalRResource.to_json())

# convert the object into a dict
signal_r_resource_dict = signal_r_resource_instance.to_dict()
# create an instance of SignalRResource from a dict
signal_r_resource_from_dict = SignalRResource.from_dict(signal_r_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


