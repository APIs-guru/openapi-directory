# AvailableOperationDisplay

Operation supported by the Service Fabric resource provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Operation description | [optional] 
**operation** | **str** | The operation that can be performed. | [optional] 
**provider** | **str** | The name of the provider. | [optional] 
**resource** | **str** | The resource on which the operation is performed | [optional] 

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


