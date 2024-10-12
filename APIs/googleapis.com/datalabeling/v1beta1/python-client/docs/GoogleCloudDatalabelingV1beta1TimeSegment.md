# GoogleCloudDatalabelingV1beta1TimeSegment

A time period inside of an example that has a time dimension (e.g. video).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_offset** | **str** | End of the time segment (exclusive), represented as the duration since the example start. | [optional] 
**start_time_offset** | **str** | Start of the time segment (inclusive), represented as the duration since the example start. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_time_segment import GoogleCloudDatalabelingV1beta1TimeSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1TimeSegment from a JSON string
google_cloud_datalabeling_v1beta1_time_segment_instance = GoogleCloudDatalabelingV1beta1TimeSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1TimeSegment.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_time_segment_dict = google_cloud_datalabeling_v1beta1_time_segment_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1TimeSegment from a dict
google_cloud_datalabeling_v1beta1_time_segment_from_dict = GoogleCloudDatalabelingV1beta1TimeSegment.from_dict(google_cloud_datalabeling_v1beta1_time_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


