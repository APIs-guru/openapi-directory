# ServiceMetadata

Metadata describing the service and additional service specific information used to identify the job or unit of work at hand.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_metadata** | **Dict[str, object]** | Additional metadata provided by service teams to describe service specific job information that was triggered by the original principal. | [optional] 
**principal_subject** | **str** | A string representing the principal_subject associated with the identity. For most identities, the format will be &#x60;principal://iam.googleapis.com/{identity pool name}/subject/{subject)&#x60; except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format &#x60;serviceAccount:{identity pool name}[{subject}]&#x60; If the identity is a Google account (e.g. workspace user account or service account), this will be the email of the prefixed by &#x60;serviceAccount:&#x60;. For example: &#x60;serviceAccount:my-service-account@project-1.iam.gserviceaccount.com&#x60;. If the identity is an individual user, the identity will be formatted as: &#x60;user:user_ABC@email.com&#x60;. | [optional] 
**service_domain** | **str** | The service&#39;s fully qualified domain name, e.g. \&quot;dataproc.googleapis.com\&quot;. | [optional] 

## Example

```python
from openapi_client.models.service_metadata import ServiceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMetadata from a JSON string
service_metadata_instance = ServiceMetadata.from_json(json)
# print the JSON string representation of the object
print(ServiceMetadata.to_json())

# convert the object into a dict
service_metadata_dict = service_metadata_instance.to_dict()
# create an instance of ServiceMetadata from a dict
service_metadata_from_dict = ServiceMetadata.from_dict(service_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


