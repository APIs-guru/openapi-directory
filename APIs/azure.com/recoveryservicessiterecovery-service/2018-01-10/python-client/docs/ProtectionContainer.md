# ProtectionContainer

Protection container details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProtectionContainerProperties**](ProtectionContainerProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.protection_container import ProtectionContainer

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionContainer from a JSON string
protection_container_instance = ProtectionContainer.from_json(json)
# print the JSON string representation of the object
print(ProtectionContainer.to_json())

# convert the object into a dict
protection_container_dict = protection_container_instance.to_dict()
# create an instance of ProtectionContainer from a dict
protection_container_from_dict = ProtectionContainer.from_dict(protection_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


