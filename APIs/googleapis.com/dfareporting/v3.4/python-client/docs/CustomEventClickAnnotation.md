# CustomEventClickAnnotation

Annotate a click event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gclid** | **str** | The Google click ID. Use this field to annotate the click associated with the gclid. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customEventClickAnnotation\&quot;. | [optional] 

## Example

```python
from openapi_client.models.custom_event_click_annotation import CustomEventClickAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEventClickAnnotation from a JSON string
custom_event_click_annotation_instance = CustomEventClickAnnotation.from_json(json)
# print the JSON string representation of the object
print(CustomEventClickAnnotation.to_json())

# convert the object into a dict
custom_event_click_annotation_dict = custom_event_click_annotation_instance.to_dict()
# create an instance of CustomEventClickAnnotation from a dict
custom_event_click_annotation_from_dict = CustomEventClickAnnotation.from_dict(custom_event_click_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


