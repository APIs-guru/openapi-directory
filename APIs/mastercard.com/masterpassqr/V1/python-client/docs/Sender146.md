# Sender146

Information about the sender of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address147**](Address147.md) |  | [optional] 
**date_of_birth** | **str** | Date of birth of the sender as an ISO 8601 Full Date. | [optional] 
**email** | **str** | Email address of the sender. | [optional] 
**first_name** | **str** | First name of the sender. | [optional] 
**government_ids** | [**GovernmentIds148**](GovernmentIds148.md) |  | [optional] 
**last_name** | **str** | Last name of the sender. | [optional] 
**middle_name** | **str** | Middle name of the sender. | [optional] 
**nationality** | **str** | Country of the sender as an ISO alpha country code. | [optional] 
**phone** | **str** | Phone number of the sender. | [optional] 
**sanction_score** | **str** | A value ranging from 0 to 100. A higher score indicates a closer match to names on the applicable screening list, while lower scores indicate a less likely match.  Available in response when partner is enabled for Sanction Screening validation and sanction_screening_override value is “false”. | [optional] 

## Example

```python
from openapi_client.models.sender146 import Sender146

# TODO update the JSON string below
json = "{}"
# create an instance of Sender146 from a JSON string
sender146_instance = Sender146.from_json(json)
# print the JSON string representation of the object
print(Sender146.to_json())

# convert the object into a dict
sender146_dict = sender146_instance.to_dict()
# create an instance of Sender146 from a dict
sender146_from_dict = Sender146.from_dict(sender146_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


