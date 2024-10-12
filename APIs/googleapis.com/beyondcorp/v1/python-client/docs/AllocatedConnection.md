# AllocatedConnection

Allocated connection of the AppGateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ingress_port** | **int** | Required. The ingress port of an allocated connection | [optional] 
**psc_uri** | **str** | Required. The PSC uri of an allocated connection | [optional] 

## Example

```python
from openapi_client.models.allocated_connection import AllocatedConnection

# TODO update the JSON string below
json = "{}"
# create an instance of AllocatedConnection from a JSON string
allocated_connection_instance = AllocatedConnection.from_json(json)
# print the JSON string representation of the object
print(AllocatedConnection.to_json())

# convert the object into a dict
allocated_connection_dict = allocated_connection_instance.to_dict()
# create an instance of AllocatedConnection from a dict
allocated_connection_from_dict = AllocatedConnection.from_dict(allocated_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


