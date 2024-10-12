# SenderParty

A party that can send documents

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**Contact**](Contact.md) |  | [optional] 

## Example

```python
from openapi_client.models.sender_party import SenderParty

# TODO update the JSON string below
json = "{}"
# create an instance of SenderParty from a JSON string
sender_party_instance = SenderParty.from_json(json)
# print the JSON string representation of the object
print(SenderParty.to_json())

# convert the object into a dict
sender_party_dict = sender_party_instance.to_dict()
# create an instance of SenderParty from a dict
sender_party_from_dict = SenderParty.from_dict(sender_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


