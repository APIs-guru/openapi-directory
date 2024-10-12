# UserFacingMessage

Provides a user-facing message with locale info. The maximum message length is 4096 characters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_message** | **str** | The default message displayed if no localized message is specified or the user&#39;s locale doesn&#39;t match with any of the localized messages. A default message must be provided if any localized messages are provided. | [optional] 
**localized_messages** | **Dict[str, str]** | A map containing pairs, where locale is a well-formed BCP 47 language (https://www.w3.org/International/articles/language-tags/) code, such as en-US, es-ES, or fr. | [optional] 

## Example

```python
from openapi_client.models.user_facing_message import UserFacingMessage

# TODO update the JSON string below
json = "{}"
# create an instance of UserFacingMessage from a JSON string
user_facing_message_instance = UserFacingMessage.from_json(json)
# print the JSON string representation of the object
print(UserFacingMessage.to_json())

# convert the object into a dict
user_facing_message_dict = user_facing_message_instance.to_dict()
# create an instance of UserFacingMessage from a dict
user_facing_message_from_dict = UserFacingMessage.from_dict(user_facing_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


