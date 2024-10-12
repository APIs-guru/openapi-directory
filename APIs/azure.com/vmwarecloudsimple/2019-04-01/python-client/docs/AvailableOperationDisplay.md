# AvailableOperationDisplay

Resource provider available operation display model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the operation for display purposes | [optional] 
**operation** | **str** | Name of the operation for display purposes | [optional] 
**provider** | **str** | Name of the provider for display purposes | [optional] 
**resource** | **str** | Name of the resource type for display purposes | [optional] 

## Example

```python
from openapi_client.models.available_operation_display import AvailableOperationDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableOperationDisplay from a JSON string
available_operation_display_instance = AvailableOperationDisplay.from_json(json)
# print the JSON string representation of the object
print(AvailableOperationDisplay.to_json())

# convert the object into a dict
available_operation_display_dict = available_operation_display_instance.to_dict()
# create an instance of AvailableOperationDisplay from a dict
available_operation_display_from_dict = AvailableOperationDisplay.from_dict(available_operation_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


