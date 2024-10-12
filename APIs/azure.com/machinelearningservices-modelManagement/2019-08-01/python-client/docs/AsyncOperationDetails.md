# AsyncOperationDetails

The async operation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub_operation_state** | **str** | The suboperation state. | [optional] 
**sub_operation_type** | **str** | The suboperation type. | [optional] 

## Example

```python
from openapi_client.models.async_operation_details import AsyncOperationDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AsyncOperationDetails from a JSON string
async_operation_details_instance = AsyncOperationDetails.from_json(json)
# print the JSON string representation of the object
print(AsyncOperationDetails.to_json())

# convert the object into a dict
async_operation_details_dict = async_operation_details_instance.to_dict()
# create an instance of AsyncOperationDetails from a dict
async_operation_details_from_dict = AsyncOperationDetails.from_dict(async_operation_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


