# XPSConfusionMatrix

Confusion matrix of the model running the classification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_id_token** | **List[str]** | For the following three repeated fields, only one is intended to be set. annotation_spec_id_token is preferable to be set. ID tokens of the annotation specs used in the confusion matrix. | [optional] 
**category** | **List[int]** | Category (mainly for segmentation). Set only for image segmentation models. Note: uCAIP Image Segmentation should use annotation_spec_id_token. | [optional] 
**row** | [**List[XPSConfusionMatrixRow]**](XPSConfusionMatrixRow.md) | Rows in the confusion matrix. The number of rows is equal to the size of &#x60;annotation_spec_id_token&#x60;. &#x60;row[i].value[j]&#x60; is the number of examples that have ground truth of the &#x60;annotation_spec_id_token[i]&#x60; and are predicted as &#x60;annotation_spec_id_token[j]&#x60; by the model being evaluated. | [optional] 
**sentiment_label** | **List[int]** | Sentiment labels used in the confusion matrix. Set only for text sentiment models. For AutoML Text Revamp, use &#x60;annotation_spec_id_token&#x60; instead and leave this field empty. | [optional] 

## Example

```python
from openapi_client.models.xps_confusion_matrix import XPSConfusionMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of XPSConfusionMatrix from a JSON string
xps_confusion_matrix_instance = XPSConfusionMatrix.from_json(json)
# print the JSON string representation of the object
print(XPSConfusionMatrix.to_json())

# convert the object into a dict
xps_confusion_matrix_dict = xps_confusion_matrix_instance.to_dict()
# create an instance of XPSConfusionMatrix from a dict
xps_confusion_matrix_from_dict = XPSConfusionMatrix.from_dict(xps_confusion_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


