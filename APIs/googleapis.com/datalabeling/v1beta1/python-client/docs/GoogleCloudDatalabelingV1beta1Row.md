# GoogleCloudDatalabelingV1beta1Row

A row in the confusion matrix. Each entry in this row has the same ground truth label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec** | [**GoogleCloudDatalabelingV1beta1AnnotationSpec**](GoogleCloudDatalabelingV1beta1AnnotationSpec.md) |  | [optional] 
**entries** | [**List[GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry]**](GoogleCloudDatalabelingV1beta1ConfusionMatrixEntry.md) | A list of the confusion matrix entries. One entry for each possible predicted label. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_row import GoogleCloudDatalabelingV1beta1Row

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Row from a JSON string
google_cloud_datalabeling_v1beta1_row_instance = GoogleCloudDatalabelingV1beta1Row.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Row.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_row_dict = google_cloud_datalabeling_v1beta1_row_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Row from a dict
google_cloud_datalabeling_v1beta1_row_from_dict = GoogleCloudDatalabelingV1beta1Row.from_dict(google_cloud_datalabeling_v1beta1_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


