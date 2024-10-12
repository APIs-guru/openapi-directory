# AttachTenantProjectRequest

Request to attach an existing project to the tenancy unit as a new tenant resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_resource** | **str** | When attaching an external project, this is in the format of &#x60;projects/{project_number}&#x60;. | [optional] 
**reserved_resource** | **str** | When attaching a reserved project already in tenancy units, this is the tag of a tenant resource under the tenancy unit for the managed service&#39;s service producer project. The reserved tenant resource must be in an active state. | [optional] 
**tag** | **str** | Required. Tag of the tenant resource after attachment. Must be less than 128 characters. Required. | [optional] 

## Example

```python
from openapi_client.models.attach_tenant_project_request import AttachTenantProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AttachTenantProjectRequest from a JSON string
attach_tenant_project_request_instance = AttachTenantProjectRequest.from_json(json)
# print the JSON string representation of the object
print(AttachTenantProjectRequest.to_json())

# convert the object into a dict
attach_tenant_project_request_dict = attach_tenant_project_request_instance.to_dict()
# create an instance of AttachTenantProjectRequest from a dict
attach_tenant_project_request_from_dict = AttachTenantProjectRequest.from_dict(attach_tenant_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


