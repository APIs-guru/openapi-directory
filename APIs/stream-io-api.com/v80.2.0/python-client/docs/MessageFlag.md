# MessageFlag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_at** | **datetime** |  | [optional] 
**created_at** | **datetime** |  | 
**created_by_automod** | **bool** |  | 
**message** | [**Message**](Message.md) |  | [optional] 
**moderation_result** | [**MessageModerationResult**](MessageModerationResult.md) |  | [optional] 
**rejected_at** | **datetime** |  | [optional] 
**reviewed_at** | **datetime** |  | [optional] 
**reviewed_by** | [**UserObject**](UserObject.md) |  | [optional] 
**updated_at** | **datetime** |  | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.message_flag import MessageFlag

# TODO update the JSON string below
json = "{}"
# create an instance of MessageFlag from a JSON string
message_flag_instance = MessageFlag.from_json(json)
# print the JSON string representation of the object
print(MessageFlag.to_json())

# convert the object into a dict
message_flag_dict = message_flag_instance.to_dict()
# create an instance of MessageFlag from a dict
message_flag_from_dict = MessageFlag.from_dict(message_flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


