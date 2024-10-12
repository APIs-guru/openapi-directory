# Privilege


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_privileges** | [**List[Privilege]**](Privilege.md) | A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**is_ou_scopable** | **bool** | If the privilege can be restricted to an organization unit. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#privilege&#x60;. | [optional] [default to 'admin#directory#privilege']
**privilege_name** | **str** | The name of the privilege. | [optional] 
**service_id** | **str** | The obfuscated ID of the service this privilege is for. This value is returned with [&#x60;Privileges.list()&#x60;](/admin-sdk/directory/v1/reference/privileges/list). | [optional] 
**service_name** | **str** | The name of the service this privilege is for. | [optional] 

## Example

```python
from openapi_client.models.privilege import Privilege

# TODO update the JSON string below
json = "{}"
# create an instance of Privilege from a JSON string
privilege_instance = Privilege.from_json(json)
# print the JSON string representation of the object
print(Privilege.to_json())

# convert the object into a dict
privilege_dict = privilege_instance.to_dict()
# create an instance of Privilege from a dict
privilege_from_dict = Privilege.from_dict(privilege_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


