# Sender105

Information about the sender of the transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address106**](Address106.md) |  | [optional] 
**date_of_birth** | **str** | Date of birth of the sender as an ISO 8601 Full Date. Valid Values- Refer &#39;Date And Time Formats&#39; | [optional] 
**email** | **str** | Email address of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 5-254 | [optional] 
**first_name** | **str** | First name of the sender. | [optional] 
**last_name** | **str** | Last name of the sender. | [optional] 
**middle_name** | **str** | Middle name of the sender. | [optional] 
**phone** | **str** | Phone number of the sender. Phone number or email address should be provided if the partner is set up to receive notifications. Details- Conditional, 1-15 | [optional] 

## Example

```python
from openapi_client.models.sender105 import Sender105

# TODO update the JSON string below
json = "{}"
# create an instance of Sender105 from a JSON string
sender105_instance = Sender105.from_json(json)
# print the JSON string representation of the object
print(Sender105.to_json())

# convert the object into a dict
sender105_dict = sender105_instance.to_dict()
# create an instance of Sender105 from a dict
sender105_from_dict = Sender105.from_dict(sender105_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


