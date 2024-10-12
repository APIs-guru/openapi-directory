# GoogleCloudDatalabelingV1p1alpha1GcsDestination

Export destination of the data.Only gcs path is allowed in output_uri.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mime_type** | **str** | Required. The format of the gcs destination. Only \&quot;text/csv\&quot; and \&quot;application/json\&quot; are supported. | [optional] 
**output_uri** | **str** | Required. The output uri of destination file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1p1alpha1_gcs_destination import GoogleCloudDatalabelingV1p1alpha1GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1p1alpha1GcsDestination from a JSON string
google_cloud_datalabeling_v1p1alpha1_gcs_destination_instance = GoogleCloudDatalabelingV1p1alpha1GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1p1alpha1GcsDestination.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1p1alpha1_gcs_destination_dict = google_cloud_datalabeling_v1p1alpha1_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1p1alpha1GcsDestination from a dict
google_cloud_datalabeling_v1p1alpha1_gcs_destination_from_dict = GoogleCloudDatalabelingV1p1alpha1GcsDestination.from_dict(google_cloud_datalabeling_v1p1alpha1_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


