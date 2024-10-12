# OperationListResult

A list of IoT Central operations. It contains a list of operations and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of IoT Central description objects. | [optional] 
**value** | [**List[Operation]**](Operation.md) | A list of operations supported by the Microsoft.IoTCentral resource provider. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_list_result import OperationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of OperationListResult from a JSON string
operation_list_result_instance = OperationListResult.from_json(json)
# print the JSON string representation of the object
print(OperationListResult.to_json())

# convert the object into a dict
operation_list_result_dict = operation_list_result_instance.to_dict()
# create an instance of OperationListResult from a dict
operation_list_result_from_dict = OperationListResult.from_dict(operation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


