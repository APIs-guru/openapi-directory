# MemberAllOfTimestamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invited** | **str** | The time that an invitation was sent | [optional] 
**joined** | **str** | The time that the conversation was joined | [optional] 
**left** | **str** | The time that the member left the conversation | [optional] 

## Example

```python
from openapi_client.models.member_all_of_timestamp import MemberAllOfTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of MemberAllOfTimestamp from a JSON string
member_all_of_timestamp_instance = MemberAllOfTimestamp.from_json(json)
# print the JSON string representation of the object
print(MemberAllOfTimestamp.to_json())

# convert the object into a dict
member_all_of_timestamp_dict = member_all_of_timestamp_instance.to_dict()
# create an instance of MemberAllOfTimestamp from a dict
member_all_of_timestamp_from_dict = MemberAllOfTimestamp.from_dict(member_all_of_timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


