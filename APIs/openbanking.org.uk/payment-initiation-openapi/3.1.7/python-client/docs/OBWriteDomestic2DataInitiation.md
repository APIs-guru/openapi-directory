# OBWriteDomestic2DataInitiation

The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creditor_account** | [**OBWriteDomestic2DataInitiationCreditorAccount**](OBWriteDomestic2DataInitiationCreditorAccount.md) |  | 
**creditor_postal_address** | [**OBPostalAddress6**](OBPostalAddress6.md) |  | [optional] 
**debtor_account** | [**OBWriteDomestic2DataInitiationDebtorAccount**](OBWriteDomestic2DataInitiationDebtorAccount.md) |  | [optional] 
**end_to_end_identification** | **str** | Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain. Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction. OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field. | 
**instructed_amount** | [**OBWriteDomestic2DataInitiationInstructedAmount**](OBWriteDomestic2DataInitiationInstructedAmount.md) |  | 
**instruction_identification** | **str** | Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction. Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction. | 
**local_instrument** | **str** | User community specific instrument. Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level. | [optional] 
**remittance_information** | [**OBWriteDomestic2DataInitiationRemittanceInformation**](OBWriteDomestic2DataInitiationRemittanceInformation.md) |  | [optional] 
**supplementary_data** | **Dict[str, object]** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 

## Example

```python
from openapi_client.models.ob_write_domestic2_data_initiation import OBWriteDomestic2DataInitiation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomestic2DataInitiation from a JSON string
ob_write_domestic2_data_initiation_instance = OBWriteDomestic2DataInitiation.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomestic2DataInitiation.to_json())

# convert the object into a dict
ob_write_domestic2_data_initiation_dict = ob_write_domestic2_data_initiation_instance.to_dict()
# create an instance of OBWriteDomestic2DataInitiation from a dict
ob_write_domestic2_data_initiation_from_dict = OBWriteDomestic2DataInitiation.from_dict(ob_write_domestic2_data_initiation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


