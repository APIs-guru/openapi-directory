# OperationsList

Lists the operations available in the AlertsManagement RP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to fetch the next set of alerts. | [optional] 
**value** | [**List[Operation]**](Operation.md) | Array of operations | 

## Example

```python
from openapi_client.models.operations_list import OperationsList

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsList from a JSON string
operations_list_instance = OperationsList.from_json(json)
# print the JSON string representation of the object
print(OperationsList.to_json())

# convert the object into a dict
operations_list_dict = operations_list_instance.to_dict()
# create an instance of OperationsList from a dict
operations_list_from_dict = OperationsList.from_dict(operations_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


