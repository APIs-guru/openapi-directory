# AnnotationLayerSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_character_count** | **int** | Maximum allowed characters on this layer, especially for the \&quot;copy\&quot; layer. | [optional] 
**limit_type** | **str** | Type of limitation on this layer. \&quot;limited\&quot; or \&quot;unlimited\&quot; for the \&quot;copy\&quot; layer. | [optional] 
**remaining_character_count** | **int** | Remaining allowed characters on this layer, especially for the \&quot;copy\&quot; layer. | [optional] 

## Example

```python
from openapi_client.models.annotation_layer_summary import AnnotationLayerSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationLayerSummary from a JSON string
annotation_layer_summary_instance = AnnotationLayerSummary.from_json(json)
# print the JSON string representation of the object
print(AnnotationLayerSummary.to_json())

# convert the object into a dict
annotation_layer_summary_dict = annotation_layer_summary_instance.to_dict()
# create an instance of AnnotationLayerSummary from a dict
annotation_layer_summary_from_dict = AnnotationLayerSummary.from_dict(annotation_layer_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


