# MemberPersonal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about_me** | **str** |  | [optional] 
**birthday** | **str** |  | [optional] 
**interests** | **str** |  | [optional] 
**pc_specs** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.member_personal import MemberPersonal

# TODO update the JSON string below
json = "{}"
# create an instance of MemberPersonal from a JSON string
member_personal_instance = MemberPersonal.from_json(json)
# print the JSON string representation of the object
print(MemberPersonal.to_json())

# convert the object into a dict
member_personal_dict = member_personal_instance.to_dict()
# create an instance of MemberPersonal from a dict
member_personal_from_dict = MemberPersonal.from_dict(member_personal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


