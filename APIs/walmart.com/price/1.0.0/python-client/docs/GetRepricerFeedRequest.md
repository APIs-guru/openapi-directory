# GetRepricerFeedRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | [**List[GetRepricerFeedRequestItemInner]**](GetRepricerFeedRequestItemInner.md) |  | [optional] 
**item_feed_header** | [**GetRepricerFeedRequestItemFeedHeader**](GetRepricerFeedRequestItemFeedHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_repricer_feed_request import GetRepricerFeedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetRepricerFeedRequest from a JSON string
get_repricer_feed_request_instance = GetRepricerFeedRequest.from_json(json)
# print the JSON string representation of the object
print(GetRepricerFeedRequest.to_json())

# convert the object into a dict
get_repricer_feed_request_dict = get_repricer_feed_request_instance.to_dict()
# create an instance of GetRepricerFeedRequest from a dict
get_repricer_feed_request_from_dict = GetRepricerFeedRequest.from_dict(get_repricer_feed_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


