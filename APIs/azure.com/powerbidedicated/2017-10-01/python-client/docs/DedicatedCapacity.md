# DedicatedCapacity

Represents an instance of a Dedicated Capacity resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DedicatedCapacityProperties**](DedicatedCapacityProperties.md) |  | [optional] 
**id** | **str** | An identifier that represents the PowerBI Dedicated resource. | [optional] [readonly] 
**location** | **str** | Location of the PowerBI Dedicated resource. | 
**name** | **str** | The name of the PowerBI Dedicated resource. | [optional] [readonly] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | 
**tags** | **Dict[str, str]** | Key-value pairs of additional resource provisioning properties. | [optional] 
**type** | **str** | The type of the PowerBI Dedicated resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.dedicated_capacity import DedicatedCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedCapacity from a JSON string
dedicated_capacity_instance = DedicatedCapacity.from_json(json)
# print the JSON string representation of the object
print(DedicatedCapacity.to_json())

# convert the object into a dict
dedicated_capacity_dict = dedicated_capacity_instance.to_dict()
# create an instance of DedicatedCapacity from a dict
dedicated_capacity_from_dict = DedicatedCapacity.from_dict(dedicated_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


