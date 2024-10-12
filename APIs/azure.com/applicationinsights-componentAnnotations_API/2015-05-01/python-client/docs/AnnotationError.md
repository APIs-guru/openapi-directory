# AnnotationError

Error associated with trying to create annotation with Id that already exist

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error detail code and explanation | [optional] 
**innererror** | [**InnerError**](InnerError.md) |  | [optional] 
**message** | **str** | Error message | [optional] 

## Example

```python
from openapi_client.models.annotation_error import AnnotationError

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationError from a JSON string
annotation_error_instance = AnnotationError.from_json(json)
# print the JSON string representation of the object
print(AnnotationError.to_json())

# convert the object into a dict
annotation_error_dict = annotation_error_instance.to_dict()
# create an instance of AnnotationError from a dict
annotation_error_from_dict = AnnotationError.from_dict(annotation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


