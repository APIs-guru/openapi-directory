# Annotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** |  | [optional] 
**creator** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**errors** | [**List[PropertyError]**](PropertyError.md) |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**AnnotationLinks**](AnnotationLinks.md) |  | [optional] 
**modifier** | **str** |  | [optional] 
**modify_date** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **object** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

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


