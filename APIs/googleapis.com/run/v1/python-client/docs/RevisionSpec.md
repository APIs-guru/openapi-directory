# RevisionSpec

RevisionSpec holds the desired state of the Revision (from the client).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_concurrency** | **int** | ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision. If not specified, defaults to 80. | [optional] 
**containers** | [**List[Container]**](Container.md) | Required. Containers holds the single container that defines the unit of execution for this Revision. In the context of a Revision, we disallow a number of fields on this Container, including: name and lifecycle. In Cloud Run, only a single container may be provided. | [optional] 
**enable_service_links** | **bool** | Not supported by Cloud Run. | [optional] 
**image_pull_secrets** | [**List[LocalObjectReference]**](LocalObjectReference.md) | Not supported by Cloud Run. | [optional] 
**service_account_name** | **str** | Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project&#39;s default service account. | [optional] 
**timeout_seconds** | **int** | TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Cloud Run: defaults to 300 seconds (5 minutes). Maximum allowed value is 3600 seconds (1 hour). | [optional] 
**volumes** | [**List[Volume]**](Volume.md) |  | [optional] 

## Example

```python
from openapi_client.models.revision_spec import RevisionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of RevisionSpec from a JSON string
revision_spec_instance = RevisionSpec.from_json(json)
# print the JSON string representation of the object
print(RevisionSpec.to_json())

# convert the object into a dict
revision_spec_dict = revision_spec_instance.to_dict()
# create an instance of RevisionSpec from a dict
revision_spec_from_dict = RevisionSpec.from_dict(revision_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


