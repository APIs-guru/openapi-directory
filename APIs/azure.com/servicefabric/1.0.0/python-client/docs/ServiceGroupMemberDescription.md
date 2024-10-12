# ServiceGroupMemberDescription

The description of the service group member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_kind** | [**ServiceKind**](ServiceKind.md) |  | [optional] 
**service_name** | **str** |  | [optional] 
**service_type_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.service_group_member_description import ServiceGroupMemberDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceGroupMemberDescription from a JSON string
service_group_member_description_instance = ServiceGroupMemberDescription.from_json(json)
# print the JSON string representation of the object
print(ServiceGroupMemberDescription.to_json())

# convert the object into a dict
service_group_member_description_dict = service_group_member_description_instance.to_dict()
# create an instance of ServiceGroupMemberDescription from a dict
service_group_member_description_from_dict = ServiceGroupMemberDescription.from_dict(service_group_member_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


