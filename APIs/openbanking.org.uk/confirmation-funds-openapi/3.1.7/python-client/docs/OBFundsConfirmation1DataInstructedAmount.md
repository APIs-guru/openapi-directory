# OBFundsConfirmation1DataInstructedAmount

Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. | 
**currency** | **str** | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 \&quot;Codes for the representation of currencies and funds\&quot;. | 

## Example

```python
from openapi_client.models.ob_funds_confirmation1_data_instructed_amount import OBFundsConfirmation1DataInstructedAmount

# TODO update the JSON string below
json = "{}"
# create an instance of OBFundsConfirmation1DataInstructedAmount from a JSON string
ob_funds_confirmation1_data_instructed_amount_instance = OBFundsConfirmation1DataInstructedAmount.from_json(json)
# print the JSON string representation of the object
print(OBFundsConfirmation1DataInstructedAmount.to_json())

# convert the object into a dict
ob_funds_confirmation1_data_instructed_amount_dict = ob_funds_confirmation1_data_instructed_amount_instance.to_dict()
# create an instance of OBFundsConfirmation1DataInstructedAmount from a dict
ob_funds_confirmation1_data_instructed_amount_from_dict = OBFundsConfirmation1DataInstructedAmount.from_dict(ob_funds_confirmation1_data_instructed_amount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


