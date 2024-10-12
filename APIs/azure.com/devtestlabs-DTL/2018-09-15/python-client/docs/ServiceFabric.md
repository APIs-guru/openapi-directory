# ServiceFabric

A Service Fabric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceFabricProperties**](ServiceFabricProperties.md) |  | 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_fabric import ServiceFabric

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceFabric from a JSON string
service_fabric_instance = ServiceFabric.from_json(json)
# print the JSON string representation of the object
print(ServiceFabric.to_json())

# convert the object into a dict
service_fabric_dict = service_fabric_instance.to_dict()
# create an instance of ServiceFabric from a dict
service_fabric_from_dict = ServiceFabric.from_dict(service_fabric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


