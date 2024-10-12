# ManagementServer

ManagementServer describes a single BackupDR ManagementServer instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time when the instance was created. | [optional] [readonly] 
**description** | **str** | Optional. The description of the ManagementServer instance (2048 characters or less). | [optional] 
**etag** | **str** | Optional. Server specified ETag for the ManagementServer resource to prevent simultaneous updates from overwiting each other. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user provided metadata. Labels currently defined: 1. migrate_from_go&#x3D; If set to true, the MS is created in migration ready mode. | [optional] 
**management_uri** | [**ManagementURI**](ManagementURI.md) |  | [optional] 
**name** | **str** | Output only. Identifier. The resource name. | [optional] [readonly] 
**networks** | [**List[NetworkConfig]**](NetworkConfig.md) | Required. VPC networks to which the ManagementServer instance is connected. For this version, only a single network is supported. | [optional] 
**oauth2_client_id** | **str** | Output only. The OAuth 2.0 client id is required to make API calls to the BackupDR instance API of this ManagementServer. This is the value that should be provided in the ‘aud’ field of the OIDC ID Token (see openid specification https://openid.net/specs/openid-connect-core-1_0.html#IDToken). | [optional] [readonly] 
**state** | **str** | Output only. The ManagementServer state. | [optional] [readonly] 
**type** | **str** | Optional. The type of the ManagementServer resource. | [optional] 
**update_time** | **str** | Output only. The time when the instance was updated. | [optional] [readonly] 
**workforce_identity_based_management_uri** | [**WorkforceIdentityBasedManagementURI**](WorkforceIdentityBasedManagementURI.md) |  | [optional] 
**workforce_identity_based_oauth2_client_id** | [**WorkforceIdentityBasedOAuth2ClientID**](WorkforceIdentityBasedOAuth2ClientID.md) |  | [optional] 

## Example

```python
from openapi_client.models.management_server import ManagementServer

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementServer from a JSON string
management_server_instance = ManagementServer.from_json(json)
# print the JSON string representation of the object
print(ManagementServer.to_json())

# convert the object into a dict
management_server_dict = management_server_instance.to_dict()
# create an instance of ManagementServer from a dict
management_server_from_dict = ManagementServer.from_dict(management_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


