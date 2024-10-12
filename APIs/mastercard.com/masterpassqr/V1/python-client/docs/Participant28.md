# Participant28

Information about a participant that may be passed along to the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_acceptor_id** | **str** | \&quot;Code identifying the card acceptor. Please contact your MasterCard Representative to enable the usage of fields in this section. \\n\\nType: Alphanumeric [A-Za-z0-9], Maximum Length: 15\&quot; | [optional] 
**card_acceptor_name** | **str** | Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to).\\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Maximum Length: 22 | [optional] 

## Example

```python
from openapi_client.models.participant28 import Participant28

# TODO update the JSON string below
json = "{}"
# create an instance of Participant28 from a JSON string
participant28_instance = Participant28.from_json(json)
# print the JSON string representation of the object
print(Participant28.to_json())

# convert the object into a dict
participant28_dict = participant28_instance.to_dict()
# create an instance of Participant28 from a dict
participant28_from_dict = Participant28.from_dict(participant28_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


