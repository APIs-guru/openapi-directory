# UndeleteTenantProjectRequest

Request message to undelete tenant project resource previously deleted from the tenancy unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | Required. Tag of the resource within the tenancy unit. | [optional] 

## Example

```python
from openapi_client.models.undelete_tenant_project_request import UndeleteTenantProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteTenantProjectRequest from a JSON string
undelete_tenant_project_request_instance = UndeleteTenantProjectRequest.from_json(json)
# print the JSON string representation of the object
print(UndeleteTenantProjectRequest.to_json())

# convert the object into a dict
undelete_tenant_project_request_dict = undelete_tenant_project_request_instance.to_dict()
# create an instance of UndeleteTenantProjectRequest from a dict
undelete_tenant_project_request_from_dict = UndeleteTenantProjectRequest.from_dict(undelete_tenant_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


