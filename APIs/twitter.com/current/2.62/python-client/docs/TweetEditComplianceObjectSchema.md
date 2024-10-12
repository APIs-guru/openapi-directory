# TweetEditComplianceObjectSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edit_tweet_ids** | **List[str]** |  | 
**event_at** | **datetime** | Event time. | 
**initial_tweet_id** | **str** | Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 
**tweet** | [**DmEventReferencedTweetsInner**](DmEventReferencedTweetsInner.md) |  | 

## Example

```python
from openapi_client.models.tweet_edit_compliance_object_schema import TweetEditComplianceObjectSchema

# TODO update the JSON string below
json = "{}"
# create an instance of TweetEditComplianceObjectSchema from a JSON string
tweet_edit_compliance_object_schema_instance = TweetEditComplianceObjectSchema.from_json(json)
# print the JSON string representation of the object
print(TweetEditComplianceObjectSchema.to_json())

# convert the object into a dict
tweet_edit_compliance_object_schema_dict = tweet_edit_compliance_object_schema_instance.to_dict()
# create an instance of TweetEditComplianceObjectSchema from a dict
tweet_edit_compliance_object_schema_from_dict = TweetEditComplianceObjectSchema.from_dict(tweet_edit_compliance_object_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


