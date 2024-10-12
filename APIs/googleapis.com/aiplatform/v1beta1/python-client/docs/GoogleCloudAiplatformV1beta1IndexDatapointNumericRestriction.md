# GoogleCloudAiplatformV1beta1IndexDatapointNumericRestriction

This field allows restricts to be based on numeric comparisons rather than categorical tokens.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace** | **str** | The namespace of this restriction. e.g.: cost. | [optional] 
**op** | **str** | This MUST be specified for queries and must NOT be specified for datapoints. | [optional] 
**value_double** | **float** | Represents 64 bit float. | [optional] 
**value_float** | **float** | Represents 32 bit float. | [optional] 
**value_int** | **str** | Represents 64 bit integer. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_index_datapoint_numeric_restriction import GoogleCloudAiplatformV1beta1IndexDatapointNumericRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1IndexDatapointNumericRestriction from a JSON string
google_cloud_aiplatform_v1beta1_index_datapoint_numeric_restriction_instance = GoogleCloudAiplatformV1beta1IndexDatapointNumericRestriction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1IndexDatapointNumericRestriction.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_index_datapoint_numeric_restriction_dict = google_cloud_aiplatform_v1beta1_index_datapoint_numeric_restriction_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1IndexDatapointNumericRestriction from a dict
google_cloud_aiplatform_v1beta1_index_datapoint_numeric_restriction_from_dict = GoogleCloudAiplatformV1beta1IndexDatapointNumericRestriction.from_dict(google_cloud_aiplatform_v1beta1_index_datapoint_numeric_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


