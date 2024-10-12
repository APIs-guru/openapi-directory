# CustomEventImpressionAnnotation

Annotate an impression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#customEventImpressionAnnotation\&quot;. | [optional] 
**path_impression_id** | **str** | The path impression ID. Use this field to annotate the impression associated with the pathImpressionId. | [optional] 

## Example

```python
from openapi_client.models.custom_event_impression_annotation import CustomEventImpressionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of CustomEventImpressionAnnotation from a JSON string
custom_event_impression_annotation_instance = CustomEventImpressionAnnotation.from_json(json)
# print the JSON string representation of the object
print(CustomEventImpressionAnnotation.to_json())

# convert the object into a dict
custom_event_impression_annotation_dict = custom_event_impression_annotation_instance.to_dict()
# create an instance of CustomEventImpressionAnnotation from a dict
custom_event_impression_annotation_from_dict = CustomEventImpressionAnnotation.from_dict(custom_event_impression_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


