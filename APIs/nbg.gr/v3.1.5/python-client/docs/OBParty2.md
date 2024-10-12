# OBParty2



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name by which a party is known and which is usually used to identify that party. | [optional] 
**party_id** | **str** | A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner. | 

## Example

```python
from openapi_client.models.ob_party2 import OBParty2

# TODO update the JSON string below
json = "{}"
# create an instance of OBParty2 from a JSON string
ob_party2_instance = OBParty2.from_json(json)
# print the JSON string representation of the object
print(OBParty2.to_json())

# convert the object into a dict
ob_party2_dict = ob_party2_instance.to_dict()
# create an instance of OBParty2 from a dict
ob_party2_from_dict = OBParty2.from_dict(ob_party2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


