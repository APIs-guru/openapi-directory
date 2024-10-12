# AddsServiceMembers

The list of  ADDS service members.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for paginated calls. | [optional] 
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**total_count** | **int** | The total count of service members. | [optional] 
**value** | [**List[AddsServiceMember]**](AddsServiceMember.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.adds_service_members import AddsServiceMembers

# TODO update the JSON string below
json = "{}"
# create an instance of AddsServiceMembers from a JSON string
adds_service_members_instance = AddsServiceMembers.from_json(json)
# print the JSON string representation of the object
print(AddsServiceMembers.to_json())

# convert the object into a dict
adds_service_members_dict = adds_service_members_instance.to_dict()
# create an instance of AddsServiceMembers from a dict
adds_service_members_from_dict = AddsServiceMembers.from_dict(adds_service_members_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


