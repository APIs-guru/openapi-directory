# ScaleUnit

Represents a cluster. Generally, the cluster will be a collection of hosts backed by failover cluster manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScaleUnitModel**](ScaleUnitModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scale_unit import ScaleUnit

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleUnit from a JSON string
scale_unit_instance = ScaleUnit.from_json(json)
# print the JSON string representation of the object
print(ScaleUnit.to_json())

# convert the object into a dict
scale_unit_dict = scale_unit_instance.to_dict()
# create an instance of ScaleUnit from a dict
scale_unit_from_dict = ScaleUnit.from_dict(scale_unit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


