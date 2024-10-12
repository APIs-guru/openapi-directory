# TenancyContactRolesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[ContactRole]**](ContactRole.md) |  | 

## Example

```python
from openapi_client.models.tenancy_contact_roles_list200_response import TenancyContactRolesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of TenancyContactRolesList200Response from a JSON string
tenancy_contact_roles_list200_response_instance = TenancyContactRolesList200Response.from_json(json)
# print the JSON string representation of the object
print(TenancyContactRolesList200Response.to_json())

# convert the object into a dict
tenancy_contact_roles_list200_response_dict = tenancy_contact_roles_list200_response_instance.to_dict()
# create an instance of TenancyContactRolesList200Response from a dict
tenancy_contact_roles_list200_response_from_dict = TenancyContactRolesList200Response.from_dict(tenancy_contact_roles_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


