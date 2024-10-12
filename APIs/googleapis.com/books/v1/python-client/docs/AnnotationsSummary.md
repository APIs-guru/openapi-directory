# AnnotationsSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] 
**layers** | [**List[AnnotationsSummaryLayersInner]**](AnnotationsSummaryLayersInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotations_summary import AnnotationsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationsSummary from a JSON string
annotations_summary_instance = AnnotationsSummary.from_json(json)
# print the JSON string representation of the object
print(AnnotationsSummary.to_json())

# convert the object into a dict
annotations_summary_dict = annotations_summary_instance.to_dict()
# create an instance of AnnotationsSummary from a dict
annotations_summary_from_dict = AnnotationsSummary.from_dict(annotations_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


