# GoogleCloudDatalabelingV1beta1ConfusionMatrix

Confusion matrix of the model running the classification. Only applicable when the metrics entry aggregates multiple labels. Not applicable when the entry is for a single label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**row** | [**List[GoogleCloudDatalabelingV1beta1Row]**](GoogleCloudDatalabelingV1beta1Row.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_confusion_matrix import GoogleCloudDatalabelingV1beta1ConfusionMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ConfusionMatrix from a JSON string
google_cloud_datalabeling_v1beta1_confusion_matrix_instance = GoogleCloudDatalabelingV1beta1ConfusionMatrix.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ConfusionMatrix.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_confusion_matrix_dict = google_cloud_datalabeling_v1beta1_confusion_matrix_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ConfusionMatrix from a dict
google_cloud_datalabeling_v1beta1_confusion_matrix_from_dict = GoogleCloudDatalabelingV1beta1ConfusionMatrix.from_dict(google_cloud_datalabeling_v1beta1_confusion_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


