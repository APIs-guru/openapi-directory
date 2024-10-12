# OperationManagedZoneContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_value** | [**ManagedZone**](ManagedZone.md) |  | [optional] 
**old_value** | [**ManagedZone**](ManagedZone.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_managed_zone_context import OperationManagedZoneContext

# TODO update the JSON string below
json = "{}"
# create an instance of OperationManagedZoneContext from a JSON string
operation_managed_zone_context_instance = OperationManagedZoneContext.from_json(json)
# print the JSON string representation of the object
print(OperationManagedZoneContext.to_json())

# convert the object into a dict
operation_managed_zone_context_dict = operation_managed_zone_context_instance.to_dict()
# create an instance of OperationManagedZoneContext from a dict
operation_managed_zone_context_from_dict = OperationManagedZoneContext.from_dict(operation_managed_zone_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


