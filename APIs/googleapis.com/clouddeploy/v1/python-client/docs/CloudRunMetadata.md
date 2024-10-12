# CloudRunMetadata

CloudRunMetadata contains information from a Cloud Run deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | **str** | Output only. The name of the Cloud Run job that is associated with a &#x60;Rollout&#x60;. Format is &#x60;projects/{project}/locations/{location}/jobs/{job_name}&#x60;. | [optional] [readonly] 
**revision** | **str** | Output only. The Cloud Run Revision id associated with a &#x60;Rollout&#x60;. | [optional] [readonly] 
**service** | **str** | Output only. The name of the Cloud Run Service that is associated with a &#x60;Rollout&#x60;. Format is &#x60;projects/{project}/locations/{location}/services/{service}&#x60;. | [optional] [readonly] 
**service_urls** | **List[str]** | Output only. The Cloud Run Service urls that are associated with a &#x60;Rollout&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cloud_run_metadata import CloudRunMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunMetadata from a JSON string
cloud_run_metadata_instance = CloudRunMetadata.from_json(json)
# print the JSON string representation of the object
print(CloudRunMetadata.to_json())

# convert the object into a dict
cloud_run_metadata_dict = cloud_run_metadata_instance.to_dict()
# create an instance of CloudRunMetadata from a dict
cloud_run_metadata_from_dict = CloudRunMetadata.from_dict(cloud_run_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


