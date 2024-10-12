# ManagedInstanceOperation

A managed instance operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedInstanceOperationProperties**](ManagedInstanceOperationProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_operation import ManagedInstanceOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceOperation from a JSON string
managed_instance_operation_instance = ManagedInstanceOperation.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceOperation.to_json())

# convert the object into a dict
managed_instance_operation_dict = managed_instance_operation_instance.to_dict()
# create an instance of ManagedInstanceOperation from a dict
managed_instance_operation_from_dict = ManagedInstanceOperation.from_dict(managed_instance_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


