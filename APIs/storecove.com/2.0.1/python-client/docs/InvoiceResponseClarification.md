# InvoiceResponseClarification

A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clarification** | **str** | A textual description of the clarification | [optional] 
**clarification_code** | **str** | The code for the clarification. For details see https://docs.peppol.eu/poacc/upgrade-3/codelist/OPStatusReason/ and https://docs.peppol.eu/poacc/upgrade-3/codelist/OPStatusAction/ | [optional] 
**clarification_code_type** | **str** | The type of the clarification. | [optional] 
**conditions** | [**List[InvoiceResponseCondition]**](InvoiceResponseCondition.md) | A list of conditions that triggered the error. This is only included for receiving in webhooks. You cannot currently send these conditions. | [optional] 

## Example

```python
from openapi_client.models.invoice_response_clarification import InvoiceResponseClarification

# TODO update the JSON string below
json = "{}"
# create an instance of InvoiceResponseClarification from a JSON string
invoice_response_clarification_instance = InvoiceResponseClarification.from_json(json)
# print the JSON string representation of the object
print(InvoiceResponseClarification.to_json())

# convert the object into a dict
invoice_response_clarification_dict = invoice_response_clarification_instance.to_dict()
# create an instance of InvoiceResponseClarification from a dict
invoice_response_clarification_from_dict = InvoiceResponseClarification.from_dict(invoice_response_clarification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


