# ThumbnailSetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[ThumbnailDetails]**](ThumbnailDetails.md) | A list of thumbnails. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#thumbnailSetResponse\&quot;. | [optional] [default to 'youtube#thumbnailSetResponse']
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.thumbnail_set_response import ThumbnailSetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ThumbnailSetResponse from a JSON string
thumbnail_set_response_instance = ThumbnailSetResponse.from_json(json)
# print the JSON string representation of the object
print(ThumbnailSetResponse.to_json())

# convert the object into a dict
thumbnail_set_response_dict = thumbnail_set_response_instance.to_dict()
# create an instance of ThumbnailSetResponse from a dict
thumbnail_set_response_from_dict = ThumbnailSetResponse.from_dict(thumbnail_set_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


