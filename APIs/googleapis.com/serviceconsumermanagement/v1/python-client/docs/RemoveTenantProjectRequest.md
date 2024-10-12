# RemoveTenantProjectRequest

Request message to remove a tenant project resource from the tenancy unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | Required. Tag of the resource within the tenancy unit. | [optional] 

## Example

```python
from openapi_client.models.remove_tenant_project_request import RemoveTenantProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveTenantProjectRequest from a JSON string
remove_tenant_project_request_instance = RemoveTenantProjectRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveTenantProjectRequest.to_json())

# convert the object into a dict
remove_tenant_project_request_dict = remove_tenant_project_request_instance.to_dict()
# create an instance of RemoveTenantProjectRequest from a dict
remove_tenant_project_request_from_dict = RemoveTenantProjectRequest.from_dict(remove_tenant_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


