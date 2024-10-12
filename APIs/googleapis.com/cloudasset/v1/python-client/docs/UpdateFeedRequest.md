# UpdateFeedRequest

Update asset feed request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feed** | [**Feed**](Feed.md) |  | [optional] 
**update_mask** | **str** | Required. Only updates the &#x60;feed&#x60; fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. | [optional] 

## Example

```python
from openapi_client.models.update_feed_request import UpdateFeedRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFeedRequest from a JSON string
update_feed_request_instance = UpdateFeedRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateFeedRequest.to_json())

# convert the object into a dict
update_feed_request_dict = update_feed_request_instance.to_dict()
# create an instance of UpdateFeedRequest from a dict
update_feed_request_from_dict = UpdateFeedRequest.from_dict(update_feed_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


