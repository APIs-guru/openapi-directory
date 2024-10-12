# TweetComplianceSchemaTweet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 
**id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.tweet_compliance_schema_tweet import TweetComplianceSchemaTweet

# TODO update the JSON string below
json = "{}"
# create an instance of TweetComplianceSchemaTweet from a JSON string
tweet_compliance_schema_tweet_instance = TweetComplianceSchemaTweet.from_json(json)
# print the JSON string representation of the object
print(TweetComplianceSchemaTweet.to_json())

# convert the object into a dict
tweet_compliance_schema_tweet_dict = tweet_compliance_schema_tweet_instance.to_dict()
# create an instance of TweetComplianceSchemaTweet from a dict
tweet_compliance_schema_tweet_from_dict = TweetComplianceSchemaTweet.from_dict(tweet_compliance_schema_tweet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


