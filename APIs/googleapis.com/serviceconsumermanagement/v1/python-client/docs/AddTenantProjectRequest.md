# AddTenantProjectRequest

Request to add a newly created and configured tenant project to a tenancy unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_config** | [**TenantProjectConfig**](TenantProjectConfig.md) |  | [optional] 
**tag** | **str** | Required. Tag of the added project. Must be less than 128 characters. Required. | [optional] 

## Example

```python
from openapi_client.models.add_tenant_project_request import AddTenantProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddTenantProjectRequest from a JSON string
add_tenant_project_request_instance = AddTenantProjectRequest.from_json(json)
# print the JSON string representation of the object
print(AddTenantProjectRequest.to_json())

# convert the object into a dict
add_tenant_project_request_dict = add_tenant_project_request_instance.to_dict()
# create an instance of AddTenantProjectRequest from a dict
add_tenant_project_request_from_dict = AddTenantProjectRequest.from_dict(add_tenant_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


