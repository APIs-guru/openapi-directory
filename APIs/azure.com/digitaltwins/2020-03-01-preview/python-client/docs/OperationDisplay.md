# OperationDisplay

The object that represents the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Friendly description for the operation, | [optional] [readonly] 
**operation** | **str** | Name of the operation | [optional] [readonly] 
**provider** | **str** | Service provider: Microsoft DigitalTwins | [optional] [readonly] 
**resource** | **str** | Resource Type: DigitalTwinsInstances | [optional] [readonly] 

## Example

```python
from openapi_client.models.operation_display import OperationDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDisplay from a JSON string
operation_display_instance = OperationDisplay.from_json(json)
# print the JSON string representation of the object
print(OperationDisplay.to_json())

# convert the object into a dict
operation_display_dict = operation_display_instance.to_dict()
# create an instance of OperationDisplay from a dict
operation_display_from_dict = OperationDisplay.from_dict(operation_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


