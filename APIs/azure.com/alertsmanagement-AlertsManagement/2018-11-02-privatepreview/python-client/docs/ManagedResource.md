# ManagedResource

An azure managed resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Resource location | 
**tags** | **object** | Resource tags | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_resource import ManagedResource

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedResource from a JSON string
managed_resource_instance = ManagedResource.from_json(json)
# print the JSON string representation of the object
print(ManagedResource.to_json())

# convert the object into a dict
managed_resource_dict = managed_resource_instance.to_dict()
# create an instance of ManagedResource from a dict
managed_resource_from_dict = ManagedResource.from_dict(managed_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


