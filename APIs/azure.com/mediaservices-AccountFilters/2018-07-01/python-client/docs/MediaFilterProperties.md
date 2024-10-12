# MediaFilterProperties

The Media Filter properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_quality** | [**FirstQuality**](FirstQuality.md) |  | [optional] 
**presentation_time_range** | [**PresentationTimeRange**](PresentationTimeRange.md) |  | [optional] 
**tracks** | [**List[FilterTrackSelection]**](FilterTrackSelection.md) | The tracks selection conditions. | [optional] 

## Example

```python
from openapi_client.models.media_filter_properties import MediaFilterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MediaFilterProperties from a JSON string
media_filter_properties_instance = MediaFilterProperties.from_json(json)
# print the JSON string representation of the object
print(MediaFilterProperties.to_json())

# convert the object into a dict
media_filter_properties_dict = media_filter_properties_instance.to_dict()
# create an instance of MediaFilterProperties from a dict
media_filter_properties_from_dict = MediaFilterProperties.from_dict(media_filter_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


