# OBReadDirectDebit2DataDirectDebitInner

Account to or from which a cash entry is made.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**direct_debit_id** | **str** | A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner. | [optional] 
**direct_debit_status_code** | [**OBExternalDirectDebitStatus1Code**](OBExternalDirectDebitStatus1Code.md) |  | [optional] 
**frequency** | **str** | Regularity with which direct debit instructions are to be created and processed. | [optional] 
**mandate_identification** | **str** | Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference. | 
**name** | **str** | Name of Service User. | 
**previous_payment_amount** | [**OBActiveOrHistoricCurrencyAndAmount0**](OBActiveOrHistoricCurrencyAndAmount0.md) |  | [optional] 
**previous_payment_date_time** | **datetime** | Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 

## Example

```python
from openapi_client.models.ob_read_direct_debit2_data_direct_debit_inner import OBReadDirectDebit2DataDirectDebitInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadDirectDebit2DataDirectDebitInner from a JSON string
ob_read_direct_debit2_data_direct_debit_inner_instance = OBReadDirectDebit2DataDirectDebitInner.from_json(json)
# print the JSON string representation of the object
print(OBReadDirectDebit2DataDirectDebitInner.to_json())

# convert the object into a dict
ob_read_direct_debit2_data_direct_debit_inner_dict = ob_read_direct_debit2_data_direct_debit_inner_instance.to_dict()
# create an instance of OBReadDirectDebit2DataDirectDebitInner from a dict
ob_read_direct_debit2_data_direct_debit_inner_from_dict = OBReadDirectDebit2DataDirectDebitInner.from_dict(ob_read_direct_debit2_data_direct_debit_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


