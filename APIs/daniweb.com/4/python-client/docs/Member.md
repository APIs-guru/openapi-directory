# Member


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **float** |  | 
**identity** | [**MemberIdentity**](MemberIdentity.md) |  | [optional] 
**location** | [**MemberLocation**](MemberLocation.md) |  | [optional] 
**personal** | [**MemberPersonal**](MemberPersonal.md) |  | [optional] 
**signature** | [**EndpointPostMarkdownData**](EndpointPostMarkdownData.md) |  | [optional] 
**stats** | [**MemberStats**](MemberStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.member import Member

# TODO update the JSON string below
json = "{}"
# create an instance of Member from a JSON string
member_instance = Member.from_json(json)
# print the JSON string representation of the object
print(Member.to_json())

# convert the object into a dict
member_dict = member_instance.to_dict()
# create an instance of Member from a dict
member_from_dict = Member.from_dict(member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


