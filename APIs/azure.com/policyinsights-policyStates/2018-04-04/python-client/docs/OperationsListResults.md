# OperationsListResults

List of available operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_count** | **int** | OData entity count; represents the number of operations returned. | [optional] 
**value** | [**List[Operation]**](Operation.md) | List of available operations. | [optional] 

## Example

```python
from openapi_client.models.operations_list_results import OperationsListResults

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsListResults from a JSON string
operations_list_results_instance = OperationsListResults.from_json(json)
# print the JSON string representation of the object
print(OperationsListResults.to_json())

# convert the object into a dict
operations_list_results_dict = operations_list_results_instance.to_dict()
# create an instance of OperationsListResults from a dict
operations_list_results_from_dict = OperationsListResults.from_dict(operations_list_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


