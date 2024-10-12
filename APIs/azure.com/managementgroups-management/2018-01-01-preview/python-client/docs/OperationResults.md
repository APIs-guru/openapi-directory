# OperationResults

The results of an asynchronous operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**name** | **str** | The name of the management group. For example, 00000000-0000-0000-0000-000000000000 | [optional] [readonly] 
**properties** | [**Properties**](Properties.md) |  | [optional] 
**type** | **str** | The type of the resource.  For example, /providers/Microsoft.Management/managementGroups | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_results import OperationResults

# TODO update the JSON string below
json = "{}"
# create an instance of OperationResults from a JSON string
operation_results_instance = OperationResults.from_json(json)
# print the JSON string representation of the object
print(OperationResults.to_json())

# convert the object into a dict
operation_results_dict = operation_results_instance.to_dict()
# create an instance of OperationResults from a dict
operation_results_from_dict = OperationResults.from_dict(operation_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


