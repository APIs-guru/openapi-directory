# Sender130

Information about the sender of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_data** | [**AdditionalMerchantData132**](AdditionalMerchantData132.md) |  | [optional] 
**address** | [**Address131**](Address131.md) |  | [optional] 
**date_of_birth** | **str** | Date of birth of the sender as an ISO 8601 Full Date. | [optional] 
**email** | **str** | Email address of the sender. | [optional] 
**first_name** | **str** | Sender’s first name. Details- alpha, 1-40 | [optional] 
**government_ids** | [**GovernmentIds133**](GovernmentIds133.md) |  | [optional] 
**last_name** | **str** | Sender’s last name. | [optional] 
**middle_name** | **str** | Middle name of the sender. Details- alpha, 40 | [optional] 
**nationality** | **str** | The senders home country as an ISO 3166-1 alpha-3 country code. | [optional] 
**phone** | **str** | Phone number of the sender. | [optional] 
**sanction_score** | **str** | A value ranging from 0 to 100. A higher score indicates a closer match to names on the applicable screening list, while lower scores indicate a less likely match.  Available in response when partner is enabled for Sanction Screening validation and sanction_screening_override value is “false”. | [optional] 

## Example

```python
from openapi_client.models.sender130 import Sender130

# TODO update the JSON string below
json = "{}"
# create an instance of Sender130 from a JSON string
sender130_instance = Sender130.from_json(json)
# print the JSON string representation of the object
print(Sender130.to_json())

# convert the object into a dict
sender130_dict = sender130_instance.to_dict()
# create an instance of Sender130 from a dict
sender130_from_dict = Sender130.from_dict(sender130_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


