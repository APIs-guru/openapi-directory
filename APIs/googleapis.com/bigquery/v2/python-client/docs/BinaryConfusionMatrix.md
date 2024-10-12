# BinaryConfusionMatrix

Confusion matrix for binary classification models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accuracy** | **float** | The fraction of predictions given the correct label. | [optional] 
**f1_score** | **float** | The equally weighted average of recall and precision. | [optional] 
**false_negatives** | **str** | Number of false samples predicted as false. | [optional] 
**false_positives** | **str** | Number of false samples predicted as true. | [optional] 
**positive_class_threshold** | **float** | Threshold value used when computing each of the following metric. | [optional] 
**precision** | **float** | The fraction of actual positive predictions that had positive actual labels. | [optional] 
**recall** | **float** | The fraction of actual positive labels that were given a positive prediction. | [optional] 
**true_negatives** | **str** | Number of true samples predicted as false. | [optional] 
**true_positives** | **str** | Number of true samples predicted as true. | [optional] 

## Example

```python
from openapi_client.models.binary_confusion_matrix import BinaryConfusionMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of BinaryConfusionMatrix from a JSON string
binary_confusion_matrix_instance = BinaryConfusionMatrix.from_json(json)
# print the JSON string representation of the object
print(BinaryConfusionMatrix.to_json())

# convert the object into a dict
binary_confusion_matrix_dict = binary_confusion_matrix_instance.to_dict()
# create an instance of BinaryConfusionMatrix from a dict
binary_confusion_matrix_from_dict = BinaryConfusionMatrix.from_dict(binary_confusion_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


