# TweetCreateRequestGeo

Place ID being attached to the Tweet for geo location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tweet_create_request_geo import TweetCreateRequestGeo

# TODO update the JSON string below
json = "{}"
# create an instance of TweetCreateRequestGeo from a JSON string
tweet_create_request_geo_instance = TweetCreateRequestGeo.from_json(json)
# print the JSON string representation of the object
print(TweetCreateRequestGeo.to_json())

# convert the object into a dict
tweet_create_request_geo_dict = tweet_create_request_geo_instance.to_dict()
# create an instance of TweetCreateRequestGeo from a dict
tweet_create_request_geo_from_dict = TweetCreateRequestGeo.from_dict(tweet_create_request_geo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


