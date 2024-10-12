# UserPublicMetrics

A list of metrics for this User.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**followers_count** | **int** | Number of Users who are following this User. | 
**following_count** | **int** | Number of Users this User is following. | 
**listed_count** | **int** | The number of lists that include this User. | 
**tweet_count** | **int** | The number of Tweets (including Retweets) posted by this User. | 

## Example

```python
from openapi_client.models.user_public_metrics import UserPublicMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of UserPublicMetrics from a JSON string
user_public_metrics_instance = UserPublicMetrics.from_json(json)
# print the JSON string representation of the object
print(UserPublicMetrics.to_json())

# convert the object into a dict
user_public_metrics_dict = user_public_metrics_instance.to_dict()
# create an instance of UserPublicMetrics from a dict
user_public_metrics_from_dict = UserPublicMetrics.from_dict(user_public_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


