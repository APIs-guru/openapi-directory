# GoogleCloudIntegrationsV1alphaProvisionClientRequest

Request for the Provision rpc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_kms_config** | [**GoogleCloudIntegrationsV1alphaCloudKmsConfig**](GoogleCloudIntegrationsV1alphaCloudKmsConfig.md) |  | [optional] 
**create_sample_workflows** | **bool** | Optional. Indicates if sample workflow should be created along with provisioning | [optional] 
**provision_gmek** | **bool** | Optional. Indicates provision with GMEK or CMEK | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_provision_client_request import GoogleCloudIntegrationsV1alphaProvisionClientRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaProvisionClientRequest from a JSON string
google_cloud_integrations_v1alpha_provision_client_request_instance = GoogleCloudIntegrationsV1alphaProvisionClientRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaProvisionClientRequest.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_provision_client_request_dict = google_cloud_integrations_v1alpha_provision_client_request_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaProvisionClientRequest from a dict
google_cloud_integrations_v1alpha_provision_client_request_from_dict = GoogleCloudIntegrationsV1alphaProvisionClientRequest.from_dict(google_cloud_integrations_v1alpha_provision_client_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


