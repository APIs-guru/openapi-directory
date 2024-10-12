# GenericResource

Resource information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**Identity**](Identity.md) |  | [optional] 
**managed_by** | **str** | ID of the resource that manages this resource. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.generic_resource import GenericResource

# TODO update the JSON string below
json = "{}"
# create an instance of GenericResource from a JSON string
generic_resource_instance = GenericResource.from_json(json)
# print the JSON string representation of the object
print(GenericResource.to_json())

# convert the object into a dict
generic_resource_dict = generic_resource_instance.to_dict()
# create an instance of GenericResource from a dict
generic_resource_from_dict = GenericResource.from_dict(generic_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


