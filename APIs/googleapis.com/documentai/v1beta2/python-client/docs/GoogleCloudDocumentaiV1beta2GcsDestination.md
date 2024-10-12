# GoogleCloudDocumentaiV1beta2GcsDestination

The Google Cloud Storage location where the output file will be written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_gcs_destination import GoogleCloudDocumentaiV1beta2GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2GcsDestination from a JSON string
google_cloud_documentai_v1beta2_gcs_destination_instance = GoogleCloudDocumentaiV1beta2GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2GcsDestination.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_gcs_destination_dict = google_cloud_documentai_v1beta2_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2GcsDestination from a dict
google_cloud_documentai_v1beta2_gcs_destination_from_dict = GoogleCloudDocumentaiV1beta2GcsDestination.from_dict(google_cloud_documentai_v1beta2_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


