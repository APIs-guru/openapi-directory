# TweetTakedownComplianceSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_at** | **datetime** | Event time. | 
**quote_tweet_id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | [optional] 
**tweet** | [**TweetComplianceSchemaTweet**](TweetComplianceSchemaTweet.md) |  | 
**withheld_in_countries** | **List[str]** |  | 

## Example

```python
from openapi_client.models.tweet_takedown_compliance_schema import TweetTakedownComplianceSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TweetTakedownComplianceSchema from a JSON string
tweet_takedown_compliance_schema_instance = TweetTakedownComplianceSchema.from_json(json)
# print the JSON string representation of the object
print(TweetTakedownComplianceSchema.to_json())

# convert the object into a dict
tweet_takedown_compliance_schema_dict = tweet_takedown_compliance_schema_instance.to_dict()
# create an instance of TweetTakedownComplianceSchema from a dict
tweet_takedown_compliance_schema_from_dict = TweetTakedownComplianceSchema.from_dict(tweet_takedown_compliance_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


