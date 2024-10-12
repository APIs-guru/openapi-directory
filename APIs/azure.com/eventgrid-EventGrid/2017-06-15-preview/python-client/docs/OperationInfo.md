# OperationInfo

Information about an operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the operation | [optional] 
**operation** | **str** | Name of the operation | [optional] 
**provider** | **str** | Name of the provider | [optional] 
**resource** | **str** | Name of the resource type | [optional] 

## Example

```python
from openapi_client.models.operation_info import OperationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationInfo from a JSON string
operation_info_instance = OperationInfo.from_json(json)
# print the JSON string representation of the object
print(OperationInfo.to_json())

# convert the object into a dict
operation_info_dict = operation_info_instance.to_dict()
# create an instance of OperationInfo from a dict
operation_info_from_dict = OperationInfo.from_dict(operation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


