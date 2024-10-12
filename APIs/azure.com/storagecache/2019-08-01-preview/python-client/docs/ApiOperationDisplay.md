# ApiOperationDisplay

The object that represents the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **str** | Operation type: Read, write, delete, etc. | [optional] 
**provider** | **str** | Service provider: Microsoft.StorageCache | [optional] 
**resource** | **str** | Resource on which the operation is performed: cache, etc. | [optional] 

## Example

```python
from openapi_client.models.api_operation_display import ApiOperationDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationDisplay from a JSON string
api_operation_display_instance = ApiOperationDisplay.from_json(json)
# print the JSON string representation of the object
print(ApiOperationDisplay.to_json())

# convert the object into a dict
api_operation_display_dict = api_operation_display_instance.to_dict()
# create an instance of ApiOperationDisplay from a dict
api_operation_display_from_dict = ApiOperationDisplay.from_dict(api_operation_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


