# SwitchDetailsCustomerDetailsEvidenceOfIdentity

Allows a user to select one of the following forms of ID to validate against:  - Passport - Drivers Licence - Medicare card 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**drivers_licence** | [**DriversLicence**](DriversLicence.md) |  | [optional] 
**medicare_card** | [**MedicareCard**](MedicareCard.md) |  | [optional] 
**passport** | [**Passport**](Passport.md) |  | [optional] 

## Example

```python
from openapi_client.models.switch_details_customer_details_evidence_of_identity import SwitchDetailsCustomerDetailsEvidenceOfIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchDetailsCustomerDetailsEvidenceOfIdentity from a JSON string
switch_details_customer_details_evidence_of_identity_instance = SwitchDetailsCustomerDetailsEvidenceOfIdentity.from_json(json)
# print the JSON string representation of the object
print(SwitchDetailsCustomerDetailsEvidenceOfIdentity.to_json())

# convert the object into a dict
switch_details_customer_details_evidence_of_identity_dict = switch_details_customer_details_evidence_of_identity_instance.to_dict()
# create an instance of SwitchDetailsCustomerDetailsEvidenceOfIdentity from a dict
switch_details_customer_details_evidence_of_identity_from_dict = SwitchDetailsCustomerDetailsEvidenceOfIdentity.from_dict(switch_details_customer_details_evidence_of_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


