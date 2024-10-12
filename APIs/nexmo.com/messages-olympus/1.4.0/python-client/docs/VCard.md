# VCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ref** | **str** | Client reference of up to 100 characters. The reference will be present in every message status. | [optional] 
**message_type** | **str** | The type of message to send. You must provide &#x60;vcard&#x60; in this field | 
**vcard** | [**VCard1Vcard**](VCard1Vcard.md) |  | 

## Example

```python
from openapi_client.models.v_card import VCard

# TODO update the JSON string below
json = "{}"
# create an instance of VCard from a JSON string
v_card_instance = VCard.from_json(json)
# print the JSON string representation of the object
print(VCard.to_json())

# convert the object into a dict
v_card_dict = v_card_instance.to_dict()
# create an instance of VCard from a dict
v_card_from_dict = VCard.from_dict(v_card_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


