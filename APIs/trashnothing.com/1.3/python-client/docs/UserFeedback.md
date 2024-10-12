# UserFeedback


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percent_positive** | **float** | The percent of feedback that this user has received in the last year that was positive. May be null if a user has not received enough feedback to calculate a percentage.  | [optional] 
**restriction** | **str** | If the current user can leave positive or negative feedback on this user then restriction is null. &lt;br /&gt;&lt;br /&gt; Otherwise, restriction is set to a string that explains why feedback is currently restricted and what type of feedback is restricted. The string will be one of the following:  no-recent-messages, negative-score, moderator, [days]-day-wait-for-negative &lt;br /&gt;&lt;br /&gt; - **no-recent-messages**: The current user has not received any messages from this user in the last 30 days. &lt;br /&gt; - **negative-score**: The current user has a negative feedback and will not be able to leave feedback until their score is &gt;&#x3D; 0. &lt;br /&gt; - **moderator**: The user is a moderator and leaving feedback on moderators is not currently supported. &lt;br /&gt; - **[days]-day-wait-for-negative**: Positive feedback is not restricted but the current user must wait   some number of days before they will be able to leave negative feedback on this user.  This string can    change depending on the number of days.  For example, when the current user must wait one day, the   string will be &#39;1-day-wait-for-negative&#39;.  A wait is necessary because a lot of negative feedback results   from communication issues that are resolved with more time.  | [optional] 
**score** | **int** | The feedback score of this user.  Higher scores are better.   Scores are calculated by substracting the total number of negative feedback from the total number of positive feedback that a user has received.  May be null if a user has not received enough feedback to calculate a score.  | [optional] 

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


