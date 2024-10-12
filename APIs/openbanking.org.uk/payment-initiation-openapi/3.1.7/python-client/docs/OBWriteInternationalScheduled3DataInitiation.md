# OBWriteInternationalScheduled3DataInitiation

The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge_bearer** | [**OBChargeBearerType1Code**](OBChargeBearerType1Code.md) |  | [optional] 
**creditor** | [**OBWriteInternational3DataInitiationCreditor**](OBWriteInternational3DataInitiationCreditor.md) |  | [optional] 
**creditor_account** | [**OBWriteDomestic2DataInitiationCreditorAccount**](OBWriteDomestic2DataInitiationCreditorAccount.md) |  | 
**creditor_agent** | [**OBWriteInternational3DataInitiationCreditorAgent**](OBWriteInternational3DataInitiationCreditorAgent.md) |  | [optional] 
**currency_of_transfer** | **str** | Specifies the currency of the to be transferred amount, which is different from the currency of the debtor&#39;s account. | 
**debtor_account** | [**OBWriteDomestic2DataInitiationDebtorAccount**](OBWriteDomestic2DataInitiationDebtorAccount.md) |  | [optional] 
**destination_country_code** | **str** | Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code). | [optional] 
**end_to_end_identification** | **str** | Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain. Usage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction. OB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field. | [optional] 
**exchange_rate_information** | [**OBWriteInternational3DataInitiationExchangeRateInformation**](OBWriteInternational3DataInitiationExchangeRateInformation.md) |  | [optional] 
**extended_purpose** | **str** | Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes. | [optional] 
**instructed_amount** | [**OBWriteDomestic2DataInitiationInstructedAmount**](OBWriteDomestic2DataInitiationInstructedAmount.md) |  | 
**instruction_identification** | **str** | Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction. Usage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction. | 
**instruction_priority** | **str** | Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction. | [optional] 
**local_instrument** | **str** | User community specific instrument. Usage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level. | [optional] 
**purpose** | **str** | Specifies the external purpose code in the format of character string with a maximum length of 4 characters. The list of valid codes is an external code list published separately. External code sets can be downloaded from www.iso20022.org. | [optional] 
**remittance_information** | [**OBWriteDomestic2DataInitiationRemittanceInformation**](OBWriteDomestic2DataInitiationRemittanceInformation.md) |  | [optional] 
**requested_execution_date_time** | **datetime** | Date at which the initiating party requests the clearing agent to process the payment.  Usage: This is the date on which the debtor&#39;s account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**supplementary_data** | **Dict[str, object]** | Additional information that can not be captured in the structured fields and/or any other specific block. | [optional] 

## Example

```python
from openapi_client.models.ob_write_international_scheduled3_data_initiation import OBWriteInternationalScheduled3DataInitiation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalScheduled3DataInitiation from a JSON string
ob_write_international_scheduled3_data_initiation_instance = OBWriteInternationalScheduled3DataInitiation.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalScheduled3DataInitiation.to_json())

# convert the object into a dict
ob_write_international_scheduled3_data_initiation_dict = ob_write_international_scheduled3_data_initiation_instance.to_dict()
# create an instance of OBWriteInternationalScheduled3DataInitiation from a dict
ob_write_international_scheduled3_data_initiation_from_dict = OBWriteInternationalScheduled3DataInitiation.from_dict(ob_write_international_scheduled3_data_initiation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


