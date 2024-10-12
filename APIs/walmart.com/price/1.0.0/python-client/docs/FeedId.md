# FeedId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_attributes** | **object** |  | [optional] 
**errors** | **object** |  | [optional] 
**feed_id** | **str** | A unique ID, returned from the Bulk Upload API, used for tracking the feed file | [optional] 

## Example

```python
from openapi_client.models.feed_id import FeedId

# TODO update the JSON string below
json = "{}"
# create an instance of FeedId from a JSON string
feed_id_instance = FeedId.from_json(json)
# print the JSON string representation of the object
print(FeedId.to_json())

# convert the object into a dict
feed_id_dict = feed_id_instance.to_dict()
# create an instance of FeedId from a dict
feed_id_from_dict = FeedId.from_dict(feed_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


