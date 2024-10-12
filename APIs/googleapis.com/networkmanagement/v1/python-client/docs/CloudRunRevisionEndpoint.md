# CloudRunRevisionEndpoint

Wrapper for Cloud Run revision attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | A [Cloud Run](https://cloud.google.com/run) [revision](https://cloud.google.com/run/docs/reference/rest/v1/namespaces.revisions/get) URI. The format is: projects/{project}/locations/{location}/revisions/{revision} | [optional] 

## Example

```python
from openapi_client.models.cloud_run_revision_endpoint import CloudRunRevisionEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of CloudRunRevisionEndpoint from a JSON string
cloud_run_revision_endpoint_instance = CloudRunRevisionEndpoint.from_json(json)
# print the JSON string representation of the object
print(CloudRunRevisionEndpoint.to_json())

# convert the object into a dict
cloud_run_revision_endpoint_dict = cloud_run_revision_endpoint_instance.to_dict()
# create an instance of CloudRunRevisionEndpoint from a dict
cloud_run_revision_endpoint_from_dict = CloudRunRevisionEndpoint.from_dict(cloud_run_revision_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


