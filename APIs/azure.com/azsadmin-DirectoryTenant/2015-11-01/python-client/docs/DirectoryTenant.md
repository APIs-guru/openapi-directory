# DirectoryTenant

Directory tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DirectoryTenantProperties**](DirectoryTenantProperties.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.directory_tenant import DirectoryTenant

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryTenant from a JSON string
directory_tenant_instance = DirectoryTenant.from_json(json)
# print the JSON string representation of the object
print(DirectoryTenant.to_json())

# convert the object into a dict
directory_tenant_dict = directory_tenant_instance.to_dict()
# create an instance of DirectoryTenant from a dict
directory_tenant_from_dict = DirectoryTenant.from_dict(directory_tenant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


