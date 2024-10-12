# Participant117

Information about a participant that may be passed along to the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_acceptor_id** | **str** | Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. Details - alphanumeric, 10-15 | [optional] 
**card_acceptor_name** | **str** | Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). Details - alphanumeric, 1-22 | [optional] 

## Example

```python
from openapi_client.models.participant117 import Participant117

# TODO update the JSON string below
json = "{}"
# create an instance of Participant117 from a JSON string
participant117_instance = Participant117.from_json(json)
# print the JSON string representation of the object
print(Participant117.to_json())

# convert the object into a dict
participant117_dict = participant117_instance.to_dict()
# create an instance of Participant117 from a dict
participant117_from_dict = Participant117.from_dict(participant117_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


