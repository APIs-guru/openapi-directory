# DeleteItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.delete_item_response import DeleteItemResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteItemResponse from a JSON string
delete_item_response_instance = DeleteItemResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteItemResponse.to_json())

# convert the object into a dict
delete_item_response_dict = delete_item_response_instance.to_dict()
# create an instance of DeleteItemResponse from a dict
delete_item_response_from_dict = DeleteItemResponse.from_dict(delete_item_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


