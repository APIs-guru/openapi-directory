# FeedItemsRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_seller_allowed_price** | **float** |  | [optional] 
**minimum_seller_allowed_price** | **float** |  | [optional] 
**repricer_strategy** | **str** |  | [optional] 
**sku** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.feed_items_request_dto import FeedItemsRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FeedItemsRequestDTO from a JSON string
feed_items_request_dto_instance = FeedItemsRequestDTO.from_json(json)
# print the JSON string representation of the object
print(FeedItemsRequestDTO.to_json())

# convert the object into a dict
feed_items_request_dto_dict = feed_items_request_dto_instance.to_dict()
# create an instance of FeedItemsRequestDTO from a dict
feed_items_request_dto_from_dict = FeedItemsRequestDTO.from_dict(feed_items_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


