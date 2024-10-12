# DirectoryTenantProperties

Directory tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tenant_id** | **str** | Tenant unique identifier. | [optional] 

## Example

```python
from openapi_client.models.directory_tenant_properties import DirectoryTenantProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryTenantProperties from a JSON string
directory_tenant_properties_instance = DirectoryTenantProperties.from_json(json)
# print the JSON string representation of the object
print(DirectoryTenantProperties.to_json())

# convert the object into a dict
directory_tenant_properties_dict = directory_tenant_properties_instance.to_dict()
# create an instance of DirectoryTenantProperties from a dict
directory_tenant_properties_from_dict = DirectoryTenantProperties.from_dict(directory_tenant_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


