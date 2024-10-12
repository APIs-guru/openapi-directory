# UpdateCommentResponse


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
from openapi_client.models.update_comment_response import UpdateCommentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCommentResponse from a JSON string
update_comment_response_instance = UpdateCommentResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateCommentResponse.to_json())

# convert the object into a dict
update_comment_response_dict = update_comment_response_instance.to_dict()
# create an instance of UpdateCommentResponse from a dict
update_comment_response_from_dict = UpdateCommentResponse.from_dict(update_comment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


