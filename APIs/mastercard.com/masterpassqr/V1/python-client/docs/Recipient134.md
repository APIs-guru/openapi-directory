# Recipient134

Information about the recipient of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address135**](Address135.md) |  | [optional] 
**date_of_birth** | **str** | Date of birth of the recipient as an ISO 8601 Full Date. Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**email** | **str** | Email address of the recipient. | [optional] 
**first_name** | **str** | Recipient’s first name. | [optional] 
**government_ids** | [**GovernmentIds136**](GovernmentIds136.md) |  | [optional] 
**last_name** | **str** | Recipient’s last name. | [optional] 
**merchant_category_code** | **str** | Mastercard defined merchant category code. This identifies the type of business of the recipient/merchant. \\n\\nType: Numeric [0-9], Maximum Length: 4 | [optional] 
**middle_name** | **str** | Recipient middle_name. Details- alpha, 40 | [optional] 
**nationality** | **str** | The recipient home country as an ISO 3166-1 alpha-3 country code. | [optional] 
**phone** | **str** | Phone number of the recipient. | [optional] 
**sanction_score** | **str** | A value ranging from 0 to 100. A higher score indicates a closer match to names on the applicable screening list, while lower scores indicate a less likely match.  Available in response when partner is enabled for Sanction Screening validation and sanction_screening_override value is “false”. | [optional] 

## Example

```python
from openapi_client.models.recipient134 import Recipient134

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient134 from a JSON string
recipient134_instance = Recipient134.from_json(json)
# print the JSON string representation of the object
print(Recipient134.to_json())

# convert the object into a dict
recipient134_dict = recipient134_instance.to_dict()
# create an instance of Recipient134 from a dict
recipient134_from_dict = Recipient134.from_dict(recipient134_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


