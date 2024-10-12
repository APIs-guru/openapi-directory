# OperationDetail

Operation detail payload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_action** | **bool** | Indicates whether the operation is a data action | [optional] 
**display** | [**OperationDisplay**](OperationDisplay.md) |  | [optional] 
**name** | **str** | Name of the operation | [optional] 
**origin** | **str** | Origin of the operation | [optional] 
**properties** | [**OperationProperties**](OperationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_detail import OperationDetail

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDetail from a JSON string
operation_detail_instance = OperationDetail.from_json(json)
# print the JSON string representation of the object
print(OperationDetail.to_json())

# convert the object into a dict
operation_detail_dict = operation_detail_instance.to_dict()
# create an instance of OperationDetail from a dict
operation_detail_from_dict = OperationDetail.from_dict(operation_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


