# DigitalAccount90

Response details for a retrieve digital account reference number

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Account type must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH. | [optional] 
**account_uri** | **str** | URI describing the account. URI scheme must be raw. Valid Values- Refer &#39;Account URIs&#39;.  | [optional] 
**digital_account_reference_numbers** | [**DigitalAccountReferenceNumbers91**](DigitalAccountReferenceNumbers91.md) |  | [optional] 
**reference** | **str** | Provide a unique reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~ | [optional] 

## Example

```python
from openapi_client.models.digital_account90 import DigitalAccount90

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalAccount90 from a JSON string
digital_account90_instance = DigitalAccount90.from_json(json)
# print the JSON string representation of the object
print(DigitalAccount90.to_json())

# convert the object into a dict
digital_account90_dict = digital_account90_instance.to_dict()
# create an instance of DigitalAccount90 from a dict
digital_account90_from_dict = DigitalAccount90.from_dict(digital_account90_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


