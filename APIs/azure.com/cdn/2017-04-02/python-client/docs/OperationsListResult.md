# OperationsListResult

Result of the request to list CDN operations. It contains a list of operations and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of operation list results if there are any. | [optional] 
**value** | [**List[Operation]**](Operation.md) | List of CDN operations supported by the CDN resource provider. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operations_list_result import OperationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsListResult from a JSON string
operations_list_result_instance = OperationsListResult.from_json(json)
# print the JSON string representation of the object
print(OperationsListResult.to_json())

# convert the object into a dict
operations_list_result_dict = operations_list_result_instance.to_dict()
# create an instance of OperationsListResult from a dict
operations_list_result_from_dict = OperationsListResult.from_dict(operations_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


