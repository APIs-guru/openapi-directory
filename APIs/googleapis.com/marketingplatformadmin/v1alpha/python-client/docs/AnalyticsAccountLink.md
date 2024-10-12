# AnalyticsAccountLink

A resource message representing the link between a Google Analytics account and a Google Marketing Platform organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_account** | **str** | Required. Immutable. The resource name of the AnalyticsAdmin API account. The account ID will be used as the ID of this AnalyticsAccountLink resource, which will become the final component of the resource name. Format: analyticsadmin.googleapis.com/accounts/{account_id} | [optional] 
**display_name** | **str** | Output only. The human-readable name for the Analytics account. | [optional] [readonly] 
**link_verification_state** | **str** | Output only. The verification state of the link between the Analytics account and the parent organization. | [optional] [readonly] 
**name** | **str** | Identifier. Resource name of this AnalyticsAccountLink. Note the resource ID is the same as the ID of the Analtyics account. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id} Example: \&quot;organizations/xyz/analyticsAccountLinks/1234\&quot; | [optional] 

## Example

```python
from openapi_client.models.analytics_account_link import AnalyticsAccountLink

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsAccountLink from a JSON string
analytics_account_link_instance = AnalyticsAccountLink.from_json(json)
# print the JSON string representation of the object
print(AnalyticsAccountLink.to_json())

# convert the object into a dict
analytics_account_link_dict = analytics_account_link_instance.to_dict()
# create an instance of AnalyticsAccountLink from a dict
analytics_account_link_from_dict = AnalyticsAccountLink.from_dict(analytics_account_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


