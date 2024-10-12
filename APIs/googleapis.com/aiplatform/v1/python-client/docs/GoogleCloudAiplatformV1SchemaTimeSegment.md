# GoogleCloudAiplatformV1SchemaTimeSegment

A time period inside of a DataItem that has a time dimension (e.g. video).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_offset** | **str** | End of the time segment (exclusive), represented as the duration since the start of the DataItem. | [optional] 
**start_time_offset** | **str** | Start of the time segment (inclusive), represented as the duration since the start of the DataItem. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_time_segment import GoogleCloudAiplatformV1SchemaTimeSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaTimeSegment from a JSON string
google_cloud_aiplatform_v1_schema_time_segment_instance = GoogleCloudAiplatformV1SchemaTimeSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaTimeSegment.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_time_segment_dict = google_cloud_aiplatform_v1_schema_time_segment_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaTimeSegment from a dict
google_cloud_aiplatform_v1_schema_time_segment_from_dict = GoogleCloudAiplatformV1SchemaTimeSegment.from_dict(google_cloud_aiplatform_v1_schema_time_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


