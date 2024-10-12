# DirectoryTenantList

List of directory tenants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation token | [optional] 
**value** | [**List[DirectoryTenant]**](DirectoryTenant.md) | List of directory tenants. | [optional] 

## Example

```python
from openapi_client.models.directory_tenant_list import DirectoryTenantList

# TODO update the JSON string below
json = "{}"
# create an instance of DirectoryTenantList from a JSON string
directory_tenant_list_instance = DirectoryTenantList.from_json(json)
# print the JSON string representation of the object
print(DirectoryTenantList.to_json())

# convert the object into a dict
directory_tenant_list_dict = directory_tenant_list_instance.to_dict()
# create an instance of DirectoryTenantList from a dict
directory_tenant_list_from_dict = DirectoryTenantList.from_dict(directory_tenant_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


