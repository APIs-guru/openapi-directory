# ClaimIntoOrganizationInventoryRequestLicensesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the license | 
**mode** | **str** | Co-term licensing only: either &#39;renew&#39; or &#39;addDevices&#39;. &#39;addDevices&#39; will increase the license limit, while &#39;renew&#39; will extend the amount of time until expiration. Defaults to &#39;addDevices&#39;. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. Does not apply to organizations using per-device licensing model. | [optional] 

## Example

```python
from openapi_client.models.claim_into_organization_inventory_request_licenses_inner import ClaimIntoOrganizationInventoryRequestLicensesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ClaimIntoOrganizationInventoryRequestLicensesInner from a JSON string
claim_into_organization_inventory_request_licenses_inner_instance = ClaimIntoOrganizationInventoryRequestLicensesInner.from_json(json)
# print the JSON string representation of the object
print(ClaimIntoOrganizationInventoryRequestLicensesInner.to_json())

# convert the object into a dict
claim_into_organization_inventory_request_licenses_inner_dict = claim_into_organization_inventory_request_licenses_inner_instance.to_dict()
# create an instance of ClaimIntoOrganizationInventoryRequestLicensesInner from a dict
claim_into_organization_inventory_request_licenses_inner_from_dict = ClaimIntoOrganizationInventoryRequestLicensesInner.from_dict(claim_into_organization_inventory_request_licenses_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


