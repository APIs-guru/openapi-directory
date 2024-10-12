# TweetComplianceStreamResponseOneOf

Compliance event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TweetComplianceData**](TweetComplianceData.md) |  | 

## Example

```python
from openapi_client.models.tweet_compliance_stream_response_one_of import TweetComplianceStreamResponseOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of TweetComplianceStreamResponseOneOf from a JSON string
tweet_compliance_stream_response_one_of_instance = TweetComplianceStreamResponseOneOf.from_json(json)
# print the JSON string representation of the object
print(TweetComplianceStreamResponseOneOf.to_json())

# convert the object into a dict
tweet_compliance_stream_response_one_of_dict = tweet_compliance_stream_response_one_of_instance.to_dict()
# create an instance of TweetComplianceStreamResponseOneOf from a dict
tweet_compliance_stream_response_one_of_from_dict = TweetComplianceStreamResponseOneOf.from_dict(tweet_compliance_stream_response_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


