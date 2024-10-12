# GoogleCloudDatalabelingV1beta1SequentialSegment

Start and end position in a sequence (e.g. text segment).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | End position (exclusive). | [optional] 
**start** | **int** | Start position (inclusive). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_sequential_segment import GoogleCloudDatalabelingV1beta1SequentialSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1SequentialSegment from a JSON string
google_cloud_datalabeling_v1beta1_sequential_segment_instance = GoogleCloudDatalabelingV1beta1SequentialSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1SequentialSegment.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_sequential_segment_dict = google_cloud_datalabeling_v1beta1_sequential_segment_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1SequentialSegment from a dict
google_cloud_datalabeling_v1beta1_sequential_segment_from_dict = GoogleCloudDatalabelingV1beta1SequentialSegment.from_dict(google_cloud_datalabeling_v1beta1_sequential_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


