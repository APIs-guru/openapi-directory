# MessageModerationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** |  | 
**ai_moderation_response** | [**ModerationResponse**](ModerationResponse.md) |  | [optional] 
**blocked_word** | **str** |  | [optional] 
**blocklist_name** | **str** |  | [optional] 
**created_at** | **datetime** |  | 
**message_id** | **str** |  | 
**moderated_by** | **str** |  | [optional] 
**moderation_thresholds** | [**Thresholds**](Thresholds.md) |  | [optional] 
**updated_at** | **datetime** |  | 
**user_bad_karma** | **bool** |  | 
**user_karma** | **float** |  | 

## Example

```python
from openapi_client.models.message_moderation_result import MessageModerationResult

# TODO update the JSON string below
json = "{}"
# create an instance of MessageModerationResult from a JSON string
message_moderation_result_instance = MessageModerationResult.from_json(json)
# print the JSON string representation of the object
print(MessageModerationResult.to_json())

# convert the object into a dict
message_moderation_result_dict = message_moderation_result_instance.to_dict()
# create an instance of MessageModerationResult from a dict
message_moderation_result_from_dict = MessageModerationResult.from_dict(message_moderation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


