# DomainPurchaseConsent

Domain purchase consent object representing acceptance of applicable legal agreements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agreed_at** | **datetime** | Timestamp when the agreements were accepted | [optional] 
**agreed_by** | **str** | Client IP address | [optional] 
**agreement_keys** | **List[str]** | List of applicable legal agreement keys. This list can be retrieved using ListLegalAgreements Api under TopLevelDomain resource | [optional] 

## Example

```python
from openapi_client.models.domain_purchase_consent import DomainPurchaseConsent

# TODO update the JSON string below
json = "{}"
# create an instance of DomainPurchaseConsent from a JSON string
domain_purchase_consent_instance = DomainPurchaseConsent.from_json(json)
# print the JSON string representation of the object
print(DomainPurchaseConsent.to_json())

# convert the object into a dict
domain_purchase_consent_dict = domain_purchase_consent_instance.to_dict()
# create an instance of DomainPurchaseConsent from a dict
domain_purchase_consent_from_dict = DomainPurchaseConsent.from_dict(domain_purchase_consent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


