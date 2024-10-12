# FeedUploadRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | [**List[GetRepricerFeedRequestItemInner]**](GetRepricerFeedRequestItemInner.md) |  | [optional] 
**item_feed_header** | [**GetRepricerFeedRequestItemFeedHeader**](GetRepricerFeedRequestItemFeedHeader.md) |  | [optional] 

## Example

```python
from openapi_client.models.feed_upload_request_dto import FeedUploadRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of FeedUploadRequestDTO from a JSON string
feed_upload_request_dto_instance = FeedUploadRequestDTO.from_json(json)
# print the JSON string representation of the object
print(FeedUploadRequestDTO.to_json())

# convert the object into a dict
feed_upload_request_dto_dict = feed_upload_request_dto_instance.to_dict()
# create an instance of FeedUploadRequestDTO from a dict
feed_upload_request_dto_from_dict = FeedUploadRequestDTO.from_dict(feed_upload_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


