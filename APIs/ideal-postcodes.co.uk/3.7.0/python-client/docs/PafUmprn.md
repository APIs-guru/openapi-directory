# PafUmprn

A small minority of individual premises (as identified by a UDPRN) may have multiple occupants behind the same letterbox. These are known as Multiple Residence occupants and can be queried via the Multiple Residence dataset. Simple, unique reference number for each Multiple Residence occupant.  Note: this will be an empty string `\"\"` when not used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.paf_umprn import PafUmprn

# TODO update the JSON string below
json = "{}"
# create an instance of PafUmprn from a JSON string
paf_umprn_instance = PafUmprn.from_json(json)
# print the JSON string representation of the object
print(PafUmprn.to_json())

# convert the object into a dict
paf_umprn_dict = paf_umprn_instance.to_dict()
# create an instance of PafUmprn from a dict
paf_umprn_from_dict = PafUmprn.from_dict(paf_umprn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


