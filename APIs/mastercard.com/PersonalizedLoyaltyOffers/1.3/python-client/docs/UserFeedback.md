# UserFeedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback** | **str** | Response provided by the user. | [optional] 
**offer_id** | **str** | System-wide identifier for the campaign, not intended for end-user display. | [optional] 

## Example

```python
from openapi_client.models.user_feedback import UserFeedback

# TODO update the JSON string below
json = "{}"
# create an instance of UserFeedback from a JSON string
user_feedback_instance = UserFeedback.from_json(json)
# print the JSON string representation of the object
print(UserFeedback.to_json())

# convert the object into a dict
user_feedback_dict = user_feedback_instance.to_dict()
# create an instance of UserFeedback from a dict
user_feedback_from_dict = UserFeedback.from_dict(user_feedback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


