# DigitalAccount89

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | Account type must contain one of the following: CREDIT, DEBIT, PREPAID, DEPOSIT_ACCOUNT, MOBILE_MONEY_ACCOUNT or CASH. | 
**account_uri** | **str** | URI describing the account. URI scheme must be raw. Valid Values- Refer &#39;Account URIs&#39;.  | 
**reference** | **str** | Provide a unique reference number. It must be a unique value for the partner. Details- 6-40, Allowable characters are alphanumeric and * , - . _ ~ | 

## Example

```python
from openapi_client.models.digital_account89 import DigitalAccount89

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalAccount89 from a JSON string
digital_account89_instance = DigitalAccount89.from_json(json)
# print the JSON string representation of the object
print(DigitalAccount89.to_json())

# convert the object into a dict
digital_account89_dict = digital_account89_instance.to_dict()
# create an instance of DigitalAccount89 from a dict
digital_account89_from_dict = DigitalAccount89.from_dict(digital_account89_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


