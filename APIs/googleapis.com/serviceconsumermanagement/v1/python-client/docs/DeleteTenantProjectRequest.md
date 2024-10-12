# DeleteTenantProjectRequest

Request message to delete tenant project resource from the tenancy unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | Required. Tag of the resource within the tenancy unit. | [optional] 

## Example

```python
from openapi_client.models.delete_tenant_project_request import DeleteTenantProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteTenantProjectRequest from a JSON string
delete_tenant_project_request_instance = DeleteTenantProjectRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteTenantProjectRequest.to_json())

# convert the object into a dict
delete_tenant_project_request_dict = delete_tenant_project_request_instance.to_dict()
# create an instance of DeleteTenantProjectRequest from a dict
delete_tenant_project_request_from_dict = DeleteTenantProjectRequest.from_dict(delete_tenant_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


