# AnnotationsListResult

Annotations list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Annotation]**](Annotation.md) | An array of annotations. | [optional] [readonly] 

## Example

```python
from openapi_client.models.annotations_list_result import AnnotationsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationsListResult from a JSON string
annotations_list_result_instance = AnnotationsListResult.from_json(json)
# print the JSON string representation of the object
print(AnnotationsListResult.to_json())

# convert the object into a dict
annotations_list_result_dict = annotations_list_result_instance.to_dict()
# create an instance of AnnotationsListResult from a dict
annotations_list_result_from_dict = AnnotationsListResult.from_dict(annotations_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


