# ResourceOperationDisplay

Display of the operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the operation | [optional] 
**operation** | **str** | The operation | [optional] 
**provider** | **str** | The resource provider name | [optional] 
**resource** | **str** | The resource name | [optional] 

## Example

```python
from openapi_client.models.resource_operation_display import ResourceOperationDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceOperationDisplay from a JSON string
resource_operation_display_instance = ResourceOperationDisplay.from_json(json)
# print the JSON string representation of the object
print(ResourceOperationDisplay.to_json())

# convert the object into a dict
resource_operation_display_dict = resource_operation_display_instance.to_dict()
# create an instance of ResourceOperationDisplay from a dict
resource_operation_display_from_dict = ResourceOperationDisplay.from_dict(resource_operation_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


