# GetRepricerFeedRequestItemFeedHeader


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** |  | [optional] 
**mart** | **str** |  | [optional] 
**process_mode** | **str** |  | [optional] 
**selling_channel** | **str** |  | [optional] 
**subset** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_repricer_feed_request_item_feed_header import GetRepricerFeedRequestItemFeedHeader

# TODO update the JSON string below
json = "{}"
# create an instance of GetRepricerFeedRequestItemFeedHeader from a JSON string
get_repricer_feed_request_item_feed_header_instance = GetRepricerFeedRequestItemFeedHeader.from_json(json)
# print the JSON string representation of the object
print(GetRepricerFeedRequestItemFeedHeader.to_json())

# convert the object into a dict
get_repricer_feed_request_item_feed_header_dict = get_repricer_feed_request_item_feed_header_instance.to_dict()
# create an instance of GetRepricerFeedRequestItemFeedHeader from a dict
get_repricer_feed_request_item_feed_header_from_dict = GetRepricerFeedRequestItemFeedHeader.from_dict(get_repricer_feed_request_item_feed_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


