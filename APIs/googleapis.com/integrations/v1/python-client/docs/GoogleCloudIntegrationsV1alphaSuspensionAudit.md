# GoogleCloudIntegrationsV1alphaSuspensionAudit

Contains when and by whom the suspension was resolved.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resolve_time** | **str** | Time at which this suspension was resolved. | [optional] 
**resolver** | **str** | Email address of the person who resolved this suspension. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_suspension_audit import GoogleCloudIntegrationsV1alphaSuspensionAudit

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaSuspensionAudit from a JSON string
google_cloud_integrations_v1alpha_suspension_audit_instance = GoogleCloudIntegrationsV1alphaSuspensionAudit.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaSuspensionAudit.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_suspension_audit_dict = google_cloud_integrations_v1alpha_suspension_audit_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaSuspensionAudit from a dict
google_cloud_integrations_v1alpha_suspension_audit_from_dict = GoogleCloudIntegrationsV1alphaSuspensionAudit.from_dict(google_cloud_integrations_v1alpha_suspension_audit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


