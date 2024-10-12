# Recipient149

Information about the recipient of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address150**](Address150.md) |  | [optional] 
**date_of_birth** | **str** | Date of birth of the recipient as an ISO 8601 Full Date. Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**email** | **str** | Email address of the recipient. | [optional] 
**first_name** | **str** | First name of the recipient. | [optional] 
**government_ids** | [**GovernmentIds151**](GovernmentIds151.md) |  | [optional] 
**last_name** | **str** | Last name of the recipient. | [optional] 
**middle_name** | **str** | Middle name of the recipient. | [optional] 
**nationality** | **str** | Country of the recipient as an ISO alpha country code. | [optional] 
**phone** | **str** | Phone number of the recipient. | [optional] 
**sanction_score** | **str** | A value ranging from 0 to 100. A higher score indicates a closer match to names on the applicable screening list, while lower scores indicate a less likely match.  Available in response when partner is enabled for Sanction Screening validation and sanction_screening_override value is “false”. | [optional] 

## Example

```python
from openapi_client.models.recipient149 import Recipient149

# TODO update the JSON string below
json = "{}"
# create an instance of Recipient149 from a JSON string
recipient149_instance = Recipient149.from_json(json)
# print the JSON string representation of the object
print(Recipient149.to_json())

# convert the object into a dict
recipient149_dict = recipient149_instance.to_dict()
# create an instance of Recipient149 from a dict
recipient149_from_dict = Recipient149.from_dict(recipient149_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


