# GoogleCloudVisionV1p2beta1GcsDestination

The Google Cloud Storage location where the output will be written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Google Cloud Storage URI prefix where the results will be stored. Results will be in JSON format and preceded by its corresponding input URI prefix. This field can either represent a gcs file prefix or gcs directory. In either case, the uri should be unique because in order to get all of the output files, you will need to do a wildcard gcs search on the uri prefix you provide. Examples: * File Prefix: gs://bucket-name/here/filenameprefix The output files will be created in gs://bucket-name/here/ and the names of the output files will begin with \&quot;filenameprefix\&quot;. * Directory Prefix: gs://bucket-name/some/location/ The output files will be created in gs://bucket-name/some/location/ and the names of the output files could be anything because there was no filename prefix specified. If multiple outputs, each response is still AnnotateFileResponse, each of which contains some subset of the full list of AnnotateImageResponse. Multiple outputs can happen if, for example, the output JSON is too large and overflows into multiple sharded files. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_gcs_destination import GoogleCloudVisionV1p2beta1GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1GcsDestination from a JSON string
google_cloud_vision_v1p2beta1_gcs_destination_instance = GoogleCloudVisionV1p2beta1GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1GcsDestination.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_gcs_destination_dict = google_cloud_vision_v1p2beta1_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1GcsDestination from a dict
google_cloud_vision_v1p2beta1_gcs_destination_from_dict = GoogleCloudVisionV1p2beta1GcsDestination.from_dict(google_cloud_vision_v1p2beta1_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


