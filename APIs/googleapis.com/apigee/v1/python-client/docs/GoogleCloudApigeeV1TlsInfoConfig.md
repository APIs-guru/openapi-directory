# GoogleCloudApigeeV1TlsInfoConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ciphers** | **List[str]** | List of ciphers that are granted access. | [optional] 
**client_auth_enabled** | **bool** | Flag that specifies whether client-side authentication is enabled for the target server. Enables two-way TLS. | [optional] 
**common_name** | [**GoogleCloudApigeeV1CommonNameConfig**](GoogleCloudApigeeV1CommonNameConfig.md) |  | [optional] 
**enabled** | **bool** | Flag that specifies whether one-way TLS is enabled. Set to &#x60;true&#x60; to enable one-way TLS. | [optional] 
**ignore_validation_errors** | **bool** | Flag that specifies whether to ignore TLS certificate validation errors. Set to &#x60;true&#x60; to ignore errors. | [optional] 
**key_alias** | **str** | Name of the alias used for client-side authentication in the following format: &#x60;organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}&#x60; | [optional] 
**key_alias_reference** | [**GoogleCloudApigeeV1KeyAliasReference**](GoogleCloudApigeeV1KeyAliasReference.md) |  | [optional] 
**protocols** | **List[str]** | List of TLS protocols that are granted access. | [optional] 
**trust_store** | **str** | Name of the keystore or keystore reference containing trusted certificates for the server in the following format: &#x60;organizations/{org}/environments/{env}/keystores/{keystore}&#x60; or &#x60;organizations/{org}/environments/{env}/references/{reference}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_tls_info_config import GoogleCloudApigeeV1TlsInfoConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TlsInfoConfig from a JSON string
google_cloud_apigee_v1_tls_info_config_instance = GoogleCloudApigeeV1TlsInfoConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TlsInfoConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_tls_info_config_dict = google_cloud_apigee_v1_tls_info_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TlsInfoConfig from a dict
google_cloud_apigee_v1_tls_info_config_from_dict = GoogleCloudApigeeV1TlsInfoConfig.from_dict(google_cloud_apigee_v1_tls_info_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


