# FeedItemsHeaderRequestDTO


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
from openapi_client.models.feed_items_header_request_dto import FeedItemsHeaderRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FeedItemsHeaderRequestDTO from a JSON string
feed_items_header_request_dto_instance = FeedItemsHeaderRequestDTO.from_json(json)
# print the JSON string representation of the object
print(FeedItemsHeaderRequestDTO.to_json())

# convert the object into a dict
feed_items_header_request_dto_dict = feed_items_header_request_dto_instance.to_dict()
# create an instance of FeedItemsHeaderRequestDTO from a dict
feed_items_header_request_dto_from_dict = FeedItemsHeaderRequestDTO.from_dict(feed_items_header_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


