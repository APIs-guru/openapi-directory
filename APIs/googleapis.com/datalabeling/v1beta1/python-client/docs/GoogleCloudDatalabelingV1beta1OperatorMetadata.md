# GoogleCloudDatalabelingV1beta1OperatorMetadata

General information useful for labels coming from contributors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **List[str]** | Comments from contributors. | [optional] 
**label_votes** | **int** | The total number of contributors that choose this label. | [optional] 
**score** | **float** | Confidence score corresponding to a label. For examle, if 3 contributors have answered the question and 2 of them agree on the final label, the confidence score will be 0.67 (2/3). | [optional] 
**total_votes** | **int** | The total number of contributors that answer this question. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_operator_metadata import GoogleCloudDatalabelingV1beta1OperatorMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1OperatorMetadata from a JSON string
google_cloud_datalabeling_v1beta1_operator_metadata_instance = GoogleCloudDatalabelingV1beta1OperatorMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1OperatorMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_operator_metadata_dict = google_cloud_datalabeling_v1beta1_operator_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1OperatorMetadata from a dict
google_cloud_datalabeling_v1beta1_operator_metadata_from_dict = GoogleCloudDatalabelingV1beta1OperatorMetadata.from_dict(google_cloud_datalabeling_v1beta1_operator_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


