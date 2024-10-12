# AuthenticationInfo

Authentication information for the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority_selector** | **str** | The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority. | [optional] 
**principal_email** | **str** | The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the &#x60;principal_subject&#x60; field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). | [optional] 
**principal_subject** | **str** | String representation of identity of requesting party. Populated for both first and third party identities. | [optional] 
**service_account_delegation_info** | [**List[ServiceAccountDelegationInfo]**](ServiceAccountDelegationInfo.md) | Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. | [optional] 
**service_account_key_name** | **str** | The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: \&quot;//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}\&quot; | [optional] 
**service_delegation_history** | [**ServiceDelegationHistory**](ServiceDelegationHistory.md) |  | [optional] 
**third_party_principal** | **Dict[str, object]** | The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the &#x60;@type&#x60; property. | [optional] 

## Example

```python
from openapi_client.models.authentication_info import AuthenticationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AuthenticationInfo from a JSON string
authentication_info_instance = AuthenticationInfo.from_json(json)
# print the JSON string representation of the object
print(AuthenticationInfo.to_json())

# convert the object into a dict
authentication_info_dict = authentication_info_instance.to_dict()
# create an instance of AuthenticationInfo from a dict
authentication_info_from_dict = AuthenticationInfo.from_dict(authentication_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


