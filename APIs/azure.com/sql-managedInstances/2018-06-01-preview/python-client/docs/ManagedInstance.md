# ManagedInstance

An Azure SQL managed instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **object** | Azure Active Directory identity configuration for a resource. | [optional] 
**properties** | [**ManagedInstanceProperties**](ManagedInstanceProperties.md) |  | [optional] 
**sku** | **object** | An ARM Resource SKU. | [optional] 
**location** | **str** | Resource location. | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance import ManagedInstance

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstance from a JSON string
managed_instance_instance = ManagedInstance.from_json(json)
# print the JSON string representation of the object
print(ManagedInstance.to_json())

# convert the object into a dict
managed_instance_dict = managed_instance_instance.to_dict()
# create an instance of ManagedInstance from a dict
managed_instance_from_dict = ManagedInstance.from_dict(managed_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


