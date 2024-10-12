# CaptionListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[Caption]**](Caption.md) | A list of captions that match the request criteria. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#captionListResponse\&quot;. | [optional] [default to 'youtube#captionListResponse']
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.caption_list_response import CaptionListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CaptionListResponse from a JSON string
caption_list_response_instance = CaptionListResponse.from_json(json)
# print the JSON string representation of the object
print(CaptionListResponse.to_json())

# convert the object into a dict
caption_list_response_dict = caption_list_response_instance.to_dict()
# create an instance of CaptionListResponse from a dict
caption_list_response_from_dict = CaptionListResponse.from_dict(caption_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


