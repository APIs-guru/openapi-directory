# ServiceGroupMember

The member of the service group

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**service_group_member_description** | [**List[ServiceGroupMemberDescription]**](ServiceGroupMemberDescription.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_group_member import ServiceGroupMember

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceGroupMember from a JSON string
service_group_member_instance = ServiceGroupMember.from_json(json)
# print the JSON string representation of the object
print(ServiceGroupMember.to_json())

# convert the object into a dict
service_group_member_dict = service_group_member_instance.to_dict()
# create an instance of ServiceGroupMember from a dict
service_group_member_from_dict = ServiceGroupMember.from_dict(service_group_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


