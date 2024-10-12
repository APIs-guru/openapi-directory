# MemberIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar_uri** | **str** |  | [optional] 
**badge** | **str** |  | [optional] 
**profile_url** | **str** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.member_identity import MemberIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of MemberIdentity from a JSON string
member_identity_instance = MemberIdentity.from_json(json)
# print the JSON string representation of the object
print(MemberIdentity.to_json())

# convert the object into a dict
member_identity_dict = member_identity_instance.to_dict()
# create an instance of MemberIdentity from a dict
member_identity_from_dict = MemberIdentity.from_dict(member_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


