# ClassDetailsCanvas

Meta information provided by Canvs LMS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Canvas instance domain (e.g. \&quot;canvas.instructure.com\&quot;) | [optional] 
**id** | **str** | Unique identifier of the course on Canvas | [optional] 

## Example

```python
from openapi_client.models.class_details_canvas import ClassDetailsCanvas

# TODO update the JSON string below
json = "{}"
# create an instance of ClassDetailsCanvas from a JSON string
class_details_canvas_instance = ClassDetailsCanvas.from_json(json)
# print the JSON string representation of the object
print(ClassDetailsCanvas.to_json())

# convert the object into a dict
class_details_canvas_dict = class_details_canvas_instance.to_dict()
# create an instance of ClassDetailsCanvas from a dict
class_details_canvas_from_dict = ClassDetailsCanvas.from_dict(class_details_canvas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


