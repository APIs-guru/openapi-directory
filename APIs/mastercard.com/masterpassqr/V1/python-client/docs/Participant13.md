# Participant13

Information about a participant that may be passed along to the network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_acceptor_id** | **str** | Code identifying the card acceptor.   Type: Alphanumeric [A-Za-z0-9], Length: 10-15 | [optional] 
**card_acceptor_name** | **str** | Merchant Name (or Payment Facilitator and Sub-Merchant Information, that is, the “doing business as” name of the merchant to where the payment transaction is sent to). \\n\\nType: Alphanumeric Special [a-zA-Z0-9!\\\&quot;#$%&amp;&#39;()*+,-./\\\\:;&lt;&#x3D;&gt;?@[]_&#x60;{|}~], Length: 1-22 | 

## Example

```python
from openapi_client.models.participant13 import Participant13

# TODO update the JSON string below
json = "{}"
# create an instance of Participant13 from a JSON string
participant13_instance = Participant13.from_json(json)
# print the JSON string representation of the object
print(Participant13.to_json())

# convert the object into a dict
participant13_dict = participant13_instance.to_dict()
# create an instance of Participant13 from a dict
participant13_from_dict = Participant13.from_dict(participant13_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


