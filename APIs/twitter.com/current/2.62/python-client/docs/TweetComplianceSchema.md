# TweetComplianceSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_at** | **datetime** | Event time. | 
**quote_tweet_id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | [optional] 
**tweet** | [**TweetComplianceSchemaTweet**](TweetComplianceSchemaTweet.md) |  | 

## Example

```python
from openapi_client.models.tweet_compliance_schema import TweetComplianceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TweetComplianceSchema from a JSON string
tweet_compliance_schema_instance = TweetComplianceSchema.from_json(json)
# print the JSON string representation of the object
print(TweetComplianceSchema.to_json())

# convert the object into a dict
tweet_compliance_schema_dict = tweet_compliance_schema_instance.to_dict()
# create an instance of TweetComplianceSchema from a dict
tweet_compliance_schema_from_dict = TweetComplianceSchema.from_dict(tweet_compliance_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


