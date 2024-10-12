# OBPartyRelationships1Account

Relationship to the Account resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identification as assigned by the ASPSP to uniquely identify the related resource. | 
**related** | **str** | Absolute URI to the related resource. | 

## Example

```python
from openapi_client.models.ob_party_relationships1_account import OBPartyRelationships1Account

# TODO update the JSON string below
json = "{}"
# create an instance of OBPartyRelationships1Account from a JSON string
ob_party_relationships1_account_instance = OBPartyRelationships1Account.from_json(json)
# print the JSON string representation of the object
print(OBPartyRelationships1Account.to_json())

# convert the object into a dict
ob_party_relationships1_account_dict = ob_party_relationships1_account_instance.to_dict()
# create an instance of OBPartyRelationships1Account from a dict
ob_party_relationships1_account_from_dict = OBPartyRelationships1Account.from_dict(ob_party_relationships1_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


