# WorkforcePool

Represents a collection of external workforces. Provides namespaces for federated users that can be referenced in IAM policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_restrictions** | [**AccessRestrictions**](AccessRestrictions.md) |  | [optional] 
**description** | **str** | A user-specified description of the pool. Cannot exceed 256 characters. | [optional] 
**disabled** | **bool** | Disables the workforce pool. You cannot use a disabled pool to exchange tokens, or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again. | [optional] 
**display_name** | **str** | A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters. | [optional] 
**expire_time** | **str** | Output only. Time after which the workforce pool will be permanently purged and cannot be recovered. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the pool. Format: &#x60;locations/{location}/workforcePools/{workforce_pool_id}&#x60; | [optional] [readonly] 
**parent** | **str** | Immutable. The resource name of the parent. Format: &#x60;organizations/{org-id}&#x60;. | [optional] 
**session_duration** | **str** | Duration that the Google Cloud access tokens, console sign-in sessions, and &#x60;gcloud&#x60; sign-in sessions from this pool are valid. Must be greater than 15 minutes (900s) and less than 12 hours (43200s). If &#x60;session_duration&#x60; is not configured, minted credentials have a default duration of one hour (3600s). For SAML providers, the lifetime of the token is the minimum of the &#x60;session_duration&#x60; and the &#x60;SessionNotOnOrAfter&#x60; claim in the SAML assertion. | [optional] 
**state** | **str** | Output only. The state of the pool. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workforce_pool import WorkforcePool

# TODO update the JSON string below
json = "{}"
# create an instance of WorkforcePool from a JSON string
workforce_pool_instance = WorkforcePool.from_json(json)
# print the JSON string representation of the object
print(WorkforcePool.to_json())

# convert the object into a dict
workforce_pool_dict = workforce_pool_instance.to_dict()
# create an instance of WorkforcePool from a dict
workforce_pool_from_dict = WorkforcePool.from_dict(workforce_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


