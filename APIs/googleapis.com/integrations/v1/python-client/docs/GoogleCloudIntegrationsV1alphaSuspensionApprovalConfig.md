# GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig

Configurations for approving the Suspension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_message** | **str** | Information to provide for recipients. | [optional] 
**email_addresses** | **List[str]** | Email addresses to send approval request to. | [optional] 
**expiration** | [**GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration**](GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_suspension_approval_config import GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig from a JSON string
google_cloud_integrations_v1alpha_suspension_approval_config_instance = GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_suspension_approval_config_dict = google_cloud_integrations_v1alpha_suspension_approval_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig from a dict
google_cloud_integrations_v1alpha_suspension_approval_config_from_dict = GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig.from_dict(google_cloud_integrations_v1alpha_suspension_approval_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


