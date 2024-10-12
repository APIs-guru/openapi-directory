# ObjectAnnotation

Prediction for what the object in the bounding box is.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The BCP-47 language code, such as \&quot;en-US\&quot; or \&quot;sr-Latn\&quot;. For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
**mid** | **str** | Object ID that should align with EntityAnnotation mid. | [optional] 
**name** | **str** | Object name, expressed in its &#x60;language_code&#x60; language. | [optional] 
**score** | **float** | Score of the result. Range [0, 1]. | [optional] 

## Example

```python
from openapi_client.models.object_annotation import ObjectAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectAnnotation from a JSON string
object_annotation_instance = ObjectAnnotation.from_json(json)
# print the JSON string representation of the object
print(ObjectAnnotation.to_json())

# convert the object into a dict
object_annotation_dict = object_annotation_instance.to_dict()
# create an instance of ObjectAnnotation from a dict
object_annotation_from_dict = ObjectAnnotation.from_dict(object_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


