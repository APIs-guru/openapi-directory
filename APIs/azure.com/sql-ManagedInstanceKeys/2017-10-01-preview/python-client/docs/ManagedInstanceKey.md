# ManagedInstanceKey

A managed instance key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of encryption protector. This is metadata used for the Azure portal experience. | [optional] [readonly] 
**properties** | [**ManagedInstanceKeyProperties**](ManagedInstanceKeyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_key import ManagedInstanceKey

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceKey from a JSON string
managed_instance_key_instance = ManagedInstanceKey.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceKey.to_json())

# convert the object into a dict
managed_instance_key_dict = managed_instance_key_instance.to_dict()
# create an instance of ManagedInstanceKey from a dict
managed_instance_key_from_dict = ManagedInstanceKey.from_dict(managed_instance_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


