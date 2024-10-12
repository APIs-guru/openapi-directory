# Annotation

Annotation associated with an application insights resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_name** | **str** | Name of annotation | [optional] 
**category** | **str** | Category of annotation, free form | [optional] 
**event_time** | **datetime** | Time when event occurred | [optional] 
**id** | **str** | Unique Id for annotation | [optional] 
**properties** | **str** | Serialized JSON object for detailed properties | [optional] 
**related_annotation** | **str** | Related parent annotation if any | [optional] [default to 'null']

## Example

```python
from openapi_client.models.annotation import Annotation

# TODO update the JSON string below
json = "{}"
# create an instance of Annotation from a JSON string
annotation_instance = Annotation.from_json(json)
# print the JSON string representation of the object
print(Annotation.to_json())

# convert the object into a dict
annotation_dict = annotation_instance.to_dict()
# create an instance of Annotation from a dict
annotation_from_dict = Annotation.from_dict(annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


