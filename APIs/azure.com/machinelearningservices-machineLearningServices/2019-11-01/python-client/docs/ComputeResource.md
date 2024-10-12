# ComputeResource

Machine Learning compute object wrapped into ARM resource envelope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**location** | **str** | Specifies the location of the resource. | [optional] 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 
**properties** | [**Compute**](Compute.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_resource import ComputeResource

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeResource from a JSON string
compute_resource_instance = ComputeResource.from_json(json)
# print the JSON string representation of the object
print(ComputeResource.to_json())

# convert the object into a dict
compute_resource_dict = compute_resource_instance.to_dict()
# create an instance of ComputeResource from a dict
compute_resource_from_dict = ComputeResource.from_dict(compute_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


