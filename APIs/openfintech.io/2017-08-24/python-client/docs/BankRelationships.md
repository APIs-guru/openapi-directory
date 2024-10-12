# BankRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization** | [**BankOrganization**](BankOrganization.md) |  | [optional] 

## Example

```python
from openapi_client.models.bank_relationships import BankRelationships

# TODO update the JSON string below
json = "{}"
# create an instance of BankRelationships from a JSON string
bank_relationships_instance = BankRelationships.from_json(json)
# print the JSON string representation of the object
print(BankRelationships.to_json())

# convert the object into a dict
bank_relationships_dict = bank_relationships_instance.to_dict()
# create an instance of BankRelationships from a dict
bank_relationships_from_dict = BankRelationships.from_dict(bank_relationships_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


