# OperationResource

The azure async operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Errors**](Errors.md) |  | [optional] 
**status** | **str** | The async operation state. | [optional] 

## Example

```python
from openapi_client.models.operation_resource import OperationResource

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResource from a JSON string
operation_resource_instance = OperationResource.from_json(json)
# print the JSON string representation of the object
print(OperationResource.to_json())

# convert the object into a dict
operation_resource_dict = operation_resource_instance.to_dict()
# create an instance of OperationResource from a dict
operation_resource_from_dict = OperationResource.from_dict(operation_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


