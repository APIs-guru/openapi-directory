# GoogleCloudApigeeV1ArchiveDeployment

Archive Deployment information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Output only. The time at which the Archive Deployment was created in milliseconds since the epoch. | [optional] [readonly] 
**gcs_uri** | **str** | Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file. | [optional] 
**labels** | **Dict[str, str]** | User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store. | [optional] 
**name** | **str** | Name of the Archive Deployment in the following format: &#x60;organizations/{org}/environments/{env}/archiveDeployments/{id}&#x60;. | [optional] 
**operation** | **str** | Output only. A reference to the LRO that created this Archive Deployment in the following format: &#x60;organizations/{org}/operations/{id}&#x60; | [optional] [readonly] 
**updated_at** | **str** | Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_archive_deployment import GoogleCloudApigeeV1ArchiveDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ArchiveDeployment from a JSON string
google_cloud_apigee_v1_archive_deployment_instance = GoogleCloudApigeeV1ArchiveDeployment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ArchiveDeployment.to_json())

# convert the object into a dict
google_cloud_apigee_v1_archive_deployment_dict = google_cloud_apigee_v1_archive_deployment_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ArchiveDeployment from a dict
google_cloud_apigee_v1_archive_deployment_from_dict = GoogleCloudApigeeV1ArchiveDeployment.from_dict(google_cloud_apigee_v1_archive_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


