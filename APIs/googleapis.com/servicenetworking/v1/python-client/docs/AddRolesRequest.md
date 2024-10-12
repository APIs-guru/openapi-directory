# AddRolesRequest

Request for AddRoles to allow Service Producers to add roles in the shared VPC host project for them to use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_network** | **str** | Required. The network that the consumer is using to connect with services. Must be in the form of projects/{project}/global/networks/{network} {project} is a project number, as in &#39;12345&#39; {network} is a network name. | [optional] 
**policy_binding** | [**List[PolicyBinding]**](PolicyBinding.md) | Required. List of policy bindings to add to shared VPC host project. | [optional] 

## Example

```python
from openapi_client.models.add_roles_request import AddRolesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddRolesRequest from a JSON string
add_roles_request_instance = AddRolesRequest.from_json(json)
# print the JSON string representation of the object
print(AddRolesRequest.to_json())

# convert the object into a dict
add_roles_request_dict = add_roles_request_instance.to_dict()
# create an instance of AddRolesRequest from a dict
add_roles_request_from_dict = AddRolesRequest.from_dict(add_roles_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


