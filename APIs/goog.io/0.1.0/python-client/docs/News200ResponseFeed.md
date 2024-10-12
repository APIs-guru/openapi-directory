# News200ResponseFeed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generator** | **str** |  | [optional] 
**generator_detail** | **str** |  | [optional] 
**language** | **str** |  | [optional] 
**link** | **str** |  | [optional] 
**links** | **str** |  | [optional] 
**publisher** | **str** |  | [optional] 
**publisher_detail** | **str** |  | [optional] 
**rights** | **str** |  | [optional] 
**rights_detail** | **str** |  | [optional] 
**subtitle** | **str** |  | [optional] 
**subtitle_detail** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**updated** | **str** |  | [optional] 
**updated_parsed** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.news200_response_feed import News200ResponseFeed

# TODO update the JSON string below
json = "{}"
# create an instance of News200ResponseFeed from a JSON string
news200_response_feed_instance = News200ResponseFeed.from_json(json)
# print the JSON string representation of the object
print(News200ResponseFeed.to_json())

# convert the object into a dict
news200_response_feed_dict = news200_response_feed_instance.to_dict()
# create an instance of News200ResponseFeed from a dict
news200_response_feed_from_dict = News200ResponseFeed.from_dict(news200_response_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


