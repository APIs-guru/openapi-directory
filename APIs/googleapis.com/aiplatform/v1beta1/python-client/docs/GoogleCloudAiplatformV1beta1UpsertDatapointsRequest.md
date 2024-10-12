# GoogleCloudAiplatformV1beta1UpsertDatapointsRequest

Request message for IndexService.UpsertDatapoints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datapoints** | [**List[GoogleCloudAiplatformV1beta1IndexDatapoint]**](GoogleCloudAiplatformV1beta1IndexDatapoint.md) | A list of datapoints to be created/updated. | [optional] 
**update_mask** | **str** | Optional. Update mask is used to specify the fields to be overwritten in the datapoints by the update. The fields specified in the update_mask are relative to each IndexDatapoint inside datapoints, not the full request. Updatable fields: * Use &#x60;all_restricts&#x60; to update both restricts and numeric_restricts. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_upsert_datapoints_request import GoogleCloudAiplatformV1beta1UpsertDatapointsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1UpsertDatapointsRequest from a JSON string
google_cloud_aiplatform_v1beta1_upsert_datapoints_request_instance = GoogleCloudAiplatformV1beta1UpsertDatapointsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1UpsertDatapointsRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_upsert_datapoints_request_dict = google_cloud_aiplatform_v1beta1_upsert_datapoints_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1UpsertDatapointsRequest from a dict
google_cloud_aiplatform_v1beta1_upsert_datapoints_request_from_dict = GoogleCloudAiplatformV1beta1UpsertDatapointsRequest.from_dict(google_cloud_aiplatform_v1beta1_upsert_datapoints_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


