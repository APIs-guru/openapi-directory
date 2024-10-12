# ConfusionMatrix

Confusion matrix for multi-class classification models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_threshold** | **float** | Confidence threshold used when computing the entries of the confusion matrix. | [optional] 
**rows** | [**List[Row]**](Row.md) | One row per actual label. | [optional] 

## Example

```python
from openapi_client.models.confusion_matrix import ConfusionMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of ConfusionMatrix from a JSON string
confusion_matrix_instance = ConfusionMatrix.from_json(json)
# print the JSON string representation of the object
print(ConfusionMatrix.to_json())

# convert the object into a dict
confusion_matrix_dict = confusion_matrix_instance.to_dict()
# create an instance of ConfusionMatrix from a dict
confusion_matrix_from_dict = ConfusionMatrix.from_dict(confusion_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


