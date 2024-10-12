# XPSConfusionMatrixRow

A row in the confusion matrix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **List[str]** | Same as above except intended to represent other counts (for e.g. for segmentation this is pixel count). NOTE(params): Only example_count or count is set (oneoff does not support repeated fields unless they are embedded inside another message). | [optional] 
**example_count** | **List[int]** | Value of the specific cell in the confusion matrix. The number of values each row has (i.e. the length of the row) is equal to the length of the annotation_spec_id_token field. | [optional] 

## Example

```python
from openapi_client.models.xps_confusion_matrix_row import XPSConfusionMatrixRow

# TODO update the JSON string below
json = "{}"
# create an instance of XPSConfusionMatrixRow from a JSON string
xps_confusion_matrix_row_instance = XPSConfusionMatrixRow.from_json(json)
# print the JSON string representation of the object
print(XPSConfusionMatrixRow.to_json())

# convert the object into a dict
xps_confusion_matrix_row_dict = xps_confusion_matrix_row_instance.to_dict()
# create an instance of XPSConfusionMatrixRow from a dict
xps_confusion_matrix_row_from_dict = XPSConfusionMatrixRow.from_dict(xps_confusion_matrix_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


