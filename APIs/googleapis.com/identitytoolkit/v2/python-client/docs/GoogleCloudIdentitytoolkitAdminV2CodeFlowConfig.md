# GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig

Additional config for Apple for code flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Key ID for the private key. | [optional] 
**private_key** | **str** | Private key used for signing the client secret JWT. | [optional] 
**team_id** | **str** | Apple Developer Team ID. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_code_flow_config import GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_code_flow_config_instance = GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_code_flow_config_dict = google_cloud_identitytoolkit_admin_v2_code_flow_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig from a dict
google_cloud_identitytoolkit_admin_v2_code_flow_config_from_dict = GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig.from_dict(google_cloud_identitytoolkit_admin_v2_code_flow_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


