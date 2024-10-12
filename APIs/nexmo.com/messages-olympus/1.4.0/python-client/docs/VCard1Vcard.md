# VCard1Vcard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The publicly accessible URL of the vCard attachment. Supported types are .vcf only | 

## Example

```python
from openapi_client.models.v_card1_vcard import VCard1Vcard

# TODO update the JSON string below
json = "{}"
# create an instance of VCard1Vcard from a JSON string
v_card1_vcard_instance = VCard1Vcard.from_json(json)
# print the JSON string representation of the object
print(VCard1Vcard.to_json())

# convert the object into a dict
v_card1_vcard_dict = v_card1_vcard_instance.to_dict()
# create an instance of VCard1Vcard from a dict
v_card1_vcard_from_dict = VCard1Vcard.from_dict(v_card1_vcard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


