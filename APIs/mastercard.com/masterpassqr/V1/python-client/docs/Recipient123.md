# Recipient123

Recipient information is required for non-tokenized transactions. If a PAN is provided directly, the recipient information should be provided. Details- Conditional

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address124**](Address124.md) |  | 
**date_of_birth** | **str** | The consumer&#39;s date of birth as an ISO 8601 Full Date. Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**email** | **str** | Recipient&#39;s email address. Phone number or Email should be provided if the partner is set up to receive notifications. Details- Conditional | [optional] 
**first_name** | **str** | Recipient’s first name. Details- alpha, 1-40 | 
**government_ids** | [**GovernmentIds125**](GovernmentIds125.md) |  | [optional] 
**last_name** | **str** | Recipient’s last name. Details- alpha, 1-40 | 
**merchant_category_code** | **str** | Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. This merchant category code should match valid code set by Mastercard rules. \\n\\nType: Numeric [0-9], Length: 1-4 | 
**middle_name** | **str** | Recipient middle_name. Details- alpha, 40 | [optional] 
**nationality** | **str** | The recipient home country as an ISO 3166-1 alpha-3 country code, In uppercase. Details- alpha, 3 | [optional] 
**phone** | **str** | Recipient&#39;s phone number, including country code. Phone number or Email should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15 | [optional] 

## Example

```python
from openapi_client.models.recipient123 import Recipient123

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient123 from a JSON string
recipient123_instance = Recipient123.from_json(json)
# print the JSON string representation of the object
print(Recipient123.to_json())

# convert the object into a dict
recipient123_dict = recipient123_instance.to_dict()
# create an instance of Recipient123 from a dict
recipient123_from_dict = Recipient123.from_dict(recipient123_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


