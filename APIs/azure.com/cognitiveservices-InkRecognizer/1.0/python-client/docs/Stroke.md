# Stroke


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drawing_attributes** | [**DrawingAttributesPattern**](DrawingAttributesPattern.md) |  | [optional] 
**id** | **int** | This is treated as a unique identifier for each stroke within a request. If the id is repeated within the same request, the service will return an error. | 
**kind** | **str** | This is an optional property which influences the decision about what the stroke kind is between inkWriting and inkDrawing. This property should be set ONLY if the type of user content is known ahead of time. Not setting this value implies the kind is not known ahead of time. Kind represents the type of content the stroke is a part of. | [optional] 
**language** | **str** | The IETF BCP 47 language code (for ex. en-US, en-GB, hi-IN etc.) of the expected language for the handwritten content in this stroke. The response will include results from this language. | [optional] 
**points** | [**List[InkPoint]**](InkPoint.md) |  | 

## Example

```python
from openapi_client.models.stroke import Stroke

# TODO update the JSON string below
json = "{}"
# create an instance of Stroke from a JSON string
stroke_instance = Stroke.from_json(json)
# print the JSON string representation of the object
print(Stroke.to_json())

# convert the object into a dict
stroke_dict = stroke_instance.to_dict()
# create an instance of Stroke from a dict
stroke_from_dict = Stroke.from_dict(stroke_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


