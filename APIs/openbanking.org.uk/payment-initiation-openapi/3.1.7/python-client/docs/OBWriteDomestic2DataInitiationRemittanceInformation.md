# OBWriteDomestic2DataInitiationRemittanceInformation

Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference** | **str** | Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor&#39;s reference or payment remittance identification should be quoted in the end-to-end transaction identification. OB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped. | [optional] 
**unstructured** | **str** | Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts&#39; receivable system, in an unstructured form. | [optional] 

## Example

```python
from openapi_client.models.ob_write_domestic2_data_initiation_remittance_information import OBWriteDomestic2DataInitiationRemittanceInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomestic2DataInitiationRemittanceInformation from a JSON string
ob_write_domestic2_data_initiation_remittance_information_instance = OBWriteDomestic2DataInitiationRemittanceInformation.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomestic2DataInitiationRemittanceInformation.to_json())

# convert the object into a dict
ob_write_domestic2_data_initiation_remittance_information_dict = ob_write_domestic2_data_initiation_remittance_information_instance.to_dict()
# create an instance of OBWriteDomestic2DataInitiationRemittanceInformation from a dict
ob_write_domestic2_data_initiation_remittance_information_from_dict = OBWriteDomestic2DataInitiationRemittanceInformation.from_dict(ob_write_domestic2_data_initiation_remittance_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


