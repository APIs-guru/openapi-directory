# ServiceMembers

The list of servers that are onboarded for a given service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for paginated calls. | [optional] 
**next_link** | **str** | The link used to get the next page of operations. | [optional] 
**total_count** | **int** | The total count of service elements. | [optional] 
**value** | [**List[ServiceMember]**](ServiceMember.md) | The value returned by the operation. | [optional] 

## Example

```python
from openapi_client.models.service_members import ServiceMembers

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceMembers from a JSON string
service_members_instance = ServiceMembers.from_json(json)
# print the JSON string representation of the object
print(ServiceMembers.to_json())

# convert the object into a dict
service_members_dict = service_members_instance.to_dict()
# create an instance of ServiceMembers from a dict
service_members_from_dict = ServiceMembers.from_dict(service_members_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


