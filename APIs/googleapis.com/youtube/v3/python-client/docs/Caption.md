# Caption

A *caption* resource represents a YouTube caption track. A caption track is associated with exactly one YouTube video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the caption track. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#caption\&quot;. | [optional] [default to 'youtube#caption']
**snippet** | [**CaptionSnippet**](CaptionSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.caption import Caption

# TODO update the JSON string below
json = "{}"
# create an instance of Caption from a JSON string
caption_instance = Caption.from_json(json)
# print the JSON string representation of the object
print(Caption.to_json())

# convert the object into a dict
caption_dict = caption_instance.to_dict()
# create an instance of Caption from a dict
caption_from_dict = Caption.from_dict(caption_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


