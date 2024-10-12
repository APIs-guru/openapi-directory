# UpdateSlidePropertiesRequest

Updates the properties of a Slide.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#39;slideProperties&#39; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. For example to update whether a slide is skipped, set &#x60;fields&#x60; to &#x60;\&quot;isSkipped\&quot;&#x60;. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. | [optional] 
**object_id** | **str** | The object ID of the slide the update is applied to. | [optional] 
**slide_properties** | [**SlideProperties**](SlideProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_slide_properties_request import UpdateSlidePropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSlidePropertiesRequest from a JSON string
update_slide_properties_request_instance = UpdateSlidePropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSlidePropertiesRequest.to_json())

# convert the object into a dict
update_slide_properties_request_dict = update_slide_properties_request_instance.to_dict()
# create an instance of UpdateSlidePropertiesRequest from a dict
update_slide_properties_request_from_dict = UpdateSlidePropertiesRequest.from_dict(update_slide_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


