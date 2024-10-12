# ClaimIntoOrganizationRequestLicensesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the license | 
**mode** | **str** | Either &#39;renew&#39; or &#39;addDevices&#39;. &#39;addDevices&#39; will increase the license limit, while &#39;renew&#39; will extend the amount of time until expiration. Defaults to &#39;addDevices&#39;. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. This parameter is legacy and does not apply to organizations with per-device licensing enabled. | [optional] 

## Example

```python
from openapi_client.models.claim_into_organization_request_licenses_inner import ClaimIntoOrganizationRequestLicensesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimIntoOrganizationRequestLicensesInner from a JSON string
claim_into_organization_request_licenses_inner_instance = ClaimIntoOrganizationRequestLicensesInner.from_json(json)
# print the JSON string representation of the object
print(ClaimIntoOrganizationRequestLicensesInner.to_json())

# convert the object into a dict
claim_into_organization_request_licenses_inner_dict = claim_into_organization_request_licenses_inner_instance.to_dict()
# create an instance of ClaimIntoOrganizationRequestLicensesInner from a dict
claim_into_organization_request_licenses_inner_from_dict = ClaimIntoOrganizationRequestLicensesInner.from_dict(claim_into_organization_request_licenses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


