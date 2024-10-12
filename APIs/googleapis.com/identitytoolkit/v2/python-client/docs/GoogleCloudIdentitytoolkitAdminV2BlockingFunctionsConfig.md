# GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig

Configuration related to Blocking Functions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forward_inbound_credentials** | [**GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials**](GoogleCloudIdentitytoolkitAdminV2ForwardInboundCredentials.md) |  | [optional] 
**triggers** | [**Dict[str, GoogleCloudIdentitytoolkitAdminV2Trigger]**](GoogleCloudIdentitytoolkitAdminV2Trigger.md) | Map of Trigger to event type. Key should be one of the supported event types: \&quot;beforeCreate\&quot;, \&quot;beforeSignIn\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_blocking_functions_config import GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_blocking_functions_config_instance = GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_blocking_functions_config_dict = google_cloud_identitytoolkit_admin_v2_blocking_functions_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig from a dict
google_cloud_identitytoolkit_admin_v2_blocking_functions_config_from_dict = GoogleCloudIdentitytoolkitAdminV2BlockingFunctionsConfig.from_dict(google_cloud_identitytoolkit_admin_v2_blocking_functions_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


