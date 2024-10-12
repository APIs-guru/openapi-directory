# OBWriteDomesticConsentResponse5DataChargesInner

Set of elements used to provide details of a charge for the payment initiation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**OBActiveOrHistoricCurrencyAndAmount**](OBActiveOrHistoricCurrencyAndAmount.md) |  | 
**charge_bearer** | [**OBChargeBearerType1Code**](OBChargeBearerType1Code.md) |  | 
**type** | **str** | Charge type, in a coded form. | 

## Example

```python
from openapi_client.models.ob_write_domestic_consent_response5_data_charges_inner import OBWriteDomesticConsentResponse5DataChargesInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticConsentResponse5DataChargesInner from a JSON string
ob_write_domestic_consent_response5_data_charges_inner_instance = OBWriteDomesticConsentResponse5DataChargesInner.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticConsentResponse5DataChargesInner.to_json())

# convert the object into a dict
ob_write_domestic_consent_response5_data_charges_inner_dict = ob_write_domestic_consent_response5_data_charges_inner_instance.to_dict()
# create an instance of OBWriteDomesticConsentResponse5DataChargesInner from a dict
ob_write_domestic_consent_response5_data_charges_inner_from_dict = OBWriteDomesticConsentResponse5DataChargesInner.from_dict(ob_write_domestic_consent_response5_data_charges_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


