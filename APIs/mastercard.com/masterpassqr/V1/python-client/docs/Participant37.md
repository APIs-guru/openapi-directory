# Participant37

Information about a participant that may be passed along to the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_acceptor_id** | **str** | Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. Details - alphanumeric, 10-15 | [optional] 
**card_acceptor_name** | **str** | Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). Details - alphanumeric, 1-22 | 

## Example

```python
from openapi_client.models.participant37 import Participant37

# TODO update the JSON string below
json = "{}"
# create an instance of Participant37 from a JSON string
participant37_instance = Participant37.from_json(json)
# print the JSON string representation of the object
print(Participant37.to_json())

# convert the object into a dict
participant37_dict = participant37_instance.to_dict()
# create an instance of Participant37 from a dict
participant37_from_dict = Participant37.from_dict(participant37_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


