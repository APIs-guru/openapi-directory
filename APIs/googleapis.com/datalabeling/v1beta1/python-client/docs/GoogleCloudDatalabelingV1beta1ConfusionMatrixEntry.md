# GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec** | [**GoogleCloudDatalabelingV1beta1AnnotationSpec**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) |  | [optional] 
**item_count** | **int** | Number of items predicted to have this label. (The ground truth label for these items is the &#x60;Row.annotationSpec&#x60; of this entry&#39;s parent.) | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_confusion_matrix_entry import GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry from a JSON string
google_cloud_datalabeling_v1beta1_confusion_matrix_entry_instance = GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_confusion_matrix_entry_dict = google_cloud_datalabeling_v1beta1_confusion_matrix_entry_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry from a dict
google_cloud_datalabeling_v1beta1_confusion_matrix_entry_from_dict = GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry.from_dict(google_cloud_datalabeling_v1beta1_confusion_matrix_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


