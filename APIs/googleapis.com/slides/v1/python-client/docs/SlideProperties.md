# SlideProperties

The properties of Page that are only relevant for pages with page_type SLIDE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_skipped** | **bool** | Whether the slide is skipped in the presentation mode. Defaults to false. | [optional] 
**layout_object_id** | **str** | The object ID of the layout that this slide is based on. This property is read-only. | [optional] 
**master_object_id** | **str** | The object ID of the master that this slide is based on. This property is read-only. | [optional] 
**notes_page** | [**Page**](Page.md) |  | [optional] 

## Example

```python
from openapi_client.models.slide_properties import SlideProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SlideProperties from a JSON string
slide_properties_instance = SlideProperties.from_json(json)
# print the JSON string representation of the object
print(SlideProperties.to_json())

# convert the object into a dict
slide_properties_dict = slide_properties_instance.to_dict()
# create an instance of SlideProperties from a dict
slide_properties_from_dict = SlideProperties.from_dict(slide_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


