# MembersBio


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | a string with a length from 0 to 16384 | [optional] 

## Example

```python
from openapi_client.models.members_bio import MembersBio

# TODO update the JSON string below
json = "{}"
# create an instance of MembersBio from a JSON string
members_bio_instance = MembersBio.from_json(json)
# print the JSON string representation of the object
print(MembersBio.to_json())

# convert the object into a dict
members_bio_dict = members_bio_instance.to_dict()
# create an instance of MembersBio from a dict
members_bio_from_dict = MembersBio.from_dict(members_bio_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


