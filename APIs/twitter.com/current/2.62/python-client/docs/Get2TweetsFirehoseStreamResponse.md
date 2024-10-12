# Get2TweetsFirehoseStreamResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Tweet**](Tweet.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 
**includes** | [**Expansions**](Expansions.md) |  | [optional] 

## Example

```python
from openapi_client.models.get2_tweets_firehose_stream_response import Get2TweetsFirehoseStreamResponse

# TODO update the JSON string below
json = "{}"
# create an instance of Get2TweetsFirehoseStreamResponse from a JSON string
get2_tweets_firehose_stream_response_instance = Get2TweetsFirehoseStreamResponse.from_json(json)
# print the JSON string representation of the object
print(Get2TweetsFirehoseStreamResponse.to_json())

# convert the object into a dict
get2_tweets_firehose_stream_response_dict = get2_tweets_firehose_stream_response_instance.to_dict()
# create an instance of Get2TweetsFirehoseStreamResponse from a dict
get2_tweets_firehose_stream_response_from_dict = Get2TweetsFirehoseStreamResponse.from_dict(get2_tweets_firehose_stream_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


