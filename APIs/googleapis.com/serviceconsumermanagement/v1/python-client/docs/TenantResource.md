# TenantResource

Resource constituting the TenancyUnit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **str** | Output only. @OutputOnly Identifier of the tenant resource. For cloud projects, it is in the form &#39;projects/{number}&#39;. For example &#39;projects/123456&#39;. | [optional] [readonly] 
**status** | **str** | Status of tenant resource. | [optional] 
**tag** | **str** | Unique per single tenancy unit. | [optional] 

## Example

```python
from openapi_client.models.tenant_resource import TenantResource

# TODO update the JSON string below
json = "{}"
# create an instance of TenantResource from a JSON string
tenant_resource_instance = TenantResource.from_json(json)
# print the JSON string representation of the object
print(TenantResource.to_json())

# convert the object into a dict
tenant_resource_dict = tenant_resource_instance.to_dict()
# create an instance of TenantResource from a dict
tenant_resource_from_dict = TenantResource.from_dict(tenant_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


