# DigitalAccountReferenceNumber88

Information about the digital account reference number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_timestamp** | **str** | Local date and time when the transaction is submitted. Details-YYYY-MM-DDTHH:MM:SS±hh[:mm] | [optional] 
**pan** | **str** | URI describing the account. It will include the account information but will not include security codes (e.g. CVC or expiration date for a card account). | [optional] 

## Example

```python
from openapi_client.models.digital_account_reference_number88 import DigitalAccountReferenceNumber88

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalAccountReferenceNumber88 from a JSON string
digital_account_reference_number88_instance = DigitalAccountReferenceNumber88.from_json(json)
# print the JSON string representation of the object
print(DigitalAccountReferenceNumber88.to_json())

# convert the object into a dict
digital_account_reference_number88_dict = digital_account_reference_number88_instance.to_dict()
# create an instance of DigitalAccountReferenceNumber88 from a dict
digital_account_reference_number88_from_dict = DigitalAccountReferenceNumber88.from_dict(digital_account_reference_number88_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


