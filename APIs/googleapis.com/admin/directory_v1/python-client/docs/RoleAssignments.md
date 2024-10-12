# RoleAssignments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[RoleAssignment]**](RoleAssignment.md) | A list of RoleAssignment resources. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#roleAssignments&#x60;. | [optional] [default to 'admin#directory#roleAssignments']
**next_page_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.role_assignments import RoleAssignments

# TODO update the JSON string below
json = "{}"
# create an instance of RoleAssignments from a JSON string
role_assignments_instance = RoleAssignments.from_json(json)
# print the JSON string representation of the object
print(RoleAssignments.to_json())

# convert the object into a dict
role_assignments_dict = role_assignments_instance.to_dict()
# create an instance of RoleAssignments from a dict
role_assignments_from_dict = RoleAssignments.from_dict(role_assignments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


