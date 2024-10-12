# DigitalAccount87

Response details for a create digital account reference number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Account type must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT, CASH. | [optional] 
**account_uri** | **str** | URI describing the account. URI scheme must be raw. Valid Values- Refer &#39;Account URIs&#39;.  | [optional] 
**digital_account_reference_number** | [**DigitalAccountReferenceNumber88**](DigitalAccountReferenceNumber88.md) |  | [optional] 
**reference** | **str** | Provide a unique transaction reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~ | [optional] 

## Example

```python
from openapi_client.models.digital_account87 import DigitalAccount87

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalAccount87 from a JSON string
digital_account87_instance = DigitalAccount87.from_json(json)
# print the JSON string representation of the object
print(DigitalAccount87.to_json())

# convert the object into a dict
digital_account87_dict = digital_account87_instance.to_dict()
# create an instance of DigitalAccount87 from a dict
digital_account87_from_dict = DigitalAccount87.from_dict(digital_account87_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


