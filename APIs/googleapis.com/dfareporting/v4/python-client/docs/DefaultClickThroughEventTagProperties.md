# DefaultClickThroughEventTagProperties

Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_click_through_event_tag_id** | **str** | ID of the click-through event tag to apply to all ads in this entity&#39;s scope. | [optional] 
**override_inherited_event_tag** | **bool** | Whether this entity should override the inherited default click-through event tag with its own defined value. | [optional] 

## Example

```python
from openapi_client.models.default_click_through_event_tag_properties import DefaultClickThroughEventTagProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultClickThroughEventTagProperties from a JSON string
default_click_through_event_tag_properties_instance = DefaultClickThroughEventTagProperties.from_json(json)
# print the JSON string representation of the object
print(DefaultClickThroughEventTagProperties.to_json())

# convert the object into a dict
default_click_through_event_tag_properties_dict = default_click_through_event_tag_properties_instance.to_dict()
# create an instance of DefaultClickThroughEventTagProperties from a dict
default_click_through_event_tag_properties_from_dict = DefaultClickThroughEventTagProperties.from_dict(default_click_through_event_tag_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


