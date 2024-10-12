# CloudRunRevisionInfo

For display only. Metadata associated with a Cloud Run revision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a Cloud Run revision. | [optional] 
**location** | **str** | Location in which this revision is deployed. | [optional] 
**service_name** | **str** | ID of Cloud Run Service this revision belongs to. | [optional] 
**service_uri** | **str** | URI of Cloud Run service this revision belongs to. | [optional] 
**uri** | **str** | URI of a Cloud Run revision. | [optional] 

## Example

```python
from openapi_client.models.cloud_run_revision_info import CloudRunRevisionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunRevisionInfo from a JSON string
cloud_run_revision_info_instance = CloudRunRevisionInfo.from_json(json)
# print the JSON string representation of the object
print(CloudRunRevisionInfo.to_json())

# convert the object into a dict
cloud_run_revision_info_dict = cloud_run_revision_info_instance.to_dict()
# create an instance of CloudRunRevisionInfo from a dict
cloud_run_revision_info_from_dict = CloudRunRevisionInfo.from_dict(cloud_run_revision_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


