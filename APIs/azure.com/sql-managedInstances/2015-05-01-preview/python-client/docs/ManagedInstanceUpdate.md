# ManagedInstanceUpdate

An update request for an Azure SQL Database managed instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedInstanceProperties**](ManagedInstanceProperties.md) |  | [optional] 
**sku** | [**ManagedInstanceUpdateSku**](ManagedInstanceUpdateSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.managed_instance_update import ManagedInstanceUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceUpdate from a JSON string
managed_instance_update_instance = ManagedInstanceUpdate.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceUpdate.to_json())

# convert the object into a dict
managed_instance_update_dict = managed_instance_update_instance.to_dict()
# create an instance of ManagedInstanceUpdate from a dict
managed_instance_update_from_dict = ManagedInstanceUpdate.from_dict(managed_instance_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


