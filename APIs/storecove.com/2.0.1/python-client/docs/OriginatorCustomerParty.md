# OriginatorCustomerParty

The originator of the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | [**Party**](Party.md) |  | 

## Example

```python
from openapi_client.models.originator_customer_party import OriginatorCustomerParty

# TODO update the JSON string below
json = "{}"
# create an instance of OriginatorCustomerParty from a JSON string
originator_customer_party_instance = OriginatorCustomerParty.from_json(json)
# print the JSON string representation of the object
print(OriginatorCustomerParty.to_json())

# convert the object into a dict
originator_customer_party_dict = originator_customer_party_instance.to_dict()
# create an instance of OriginatorCustomerParty from a dict
originator_customer_party_from_dict = OriginatorCustomerParty.from_dict(originator_customer_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


