# MemberDTO

The MemeberDTO Class. Contains relevant fields of Member DTO by masking actual Member entity's fields in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.member_dto import MemberDTO

# TODO update the JSON string below
json = "{}"
# create an instance of MemberDTO from a JSON string
member_dto_instance = MemberDTO.from_json(json)
# print the JSON string representation of the object
print(MemberDTO.to_json())

# convert the object into a dict
member_dto_dict = member_dto_instance.to_dict()
# create an instance of MemberDTO from a dict
member_dto_from_dict = MemberDTO.from_dict(member_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


