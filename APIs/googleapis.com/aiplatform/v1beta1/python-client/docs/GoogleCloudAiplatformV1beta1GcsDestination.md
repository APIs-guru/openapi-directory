# GoogleCloudAiplatformV1beta1GcsDestination

The Google Cloud Storage location where the output is to be written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri_prefix** | **str** | Required. Google Cloud Storage URI to output directory. If the uri doesn&#39;t end with &#39;/&#39;, a &#39;/&#39; will be automatically appended. The directory is created if it doesn&#39;t exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_gcs_destination import GoogleCloudAiplatformV1beta1GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1GcsDestination from a JSON string
google_cloud_aiplatform_v1beta1_gcs_destination_instance = GoogleCloudAiplatformV1beta1GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1GcsDestination.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_gcs_destination_dict = google_cloud_aiplatform_v1beta1_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1GcsDestination from a dict
google_cloud_aiplatform_v1beta1_gcs_destination_from_dict = GoogleCloudAiplatformV1beta1GcsDestination.from_dict(google_cloud_aiplatform_v1beta1_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


