# OperationsList200ResponseValueInner

Description of an action supported by the Data Migration Service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**OperationsList200ResponseValueInnerDisplay**](OperationsList200ResponseValueInnerDisplay.md) |  | [optional] 
**name** | **str** | The fully qualified action name, e.g. Microsoft.DataMigration/services/read | [optional] 

## Example

```python
from openapi_client.models.operations_list200_response_value_inner import OperationsList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsList200ResponseValueInner from a JSON string
operations_list200_response_value_inner_instance = OperationsList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(OperationsList200ResponseValueInner.to_json())

# convert the object into a dict
operations_list200_response_value_inner_dict = operations_list200_response_value_inner_instance.to_dict()
# create an instance of OperationsList200ResponseValueInner from a dict
operations_list200_response_value_inner_from_dict = OperationsList200ResponseValueInner.from_dict(operations_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


