# TenantProjectPolicy

Describes policy settings that can be applied to a newly created tenant project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_bindings** | [**List[PolicyBinding]**](PolicyBinding.md) | Policy bindings to be applied to the tenant project, in addition to the &#39;roles/owner&#39; role granted to the Service Consumer Management service account. | [optional] 

## Example

```python
from openapi_client.models.tenant_project_policy import TenantProjectPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of TenantProjectPolicy from a JSON string
tenant_project_policy_instance = TenantProjectPolicy.from_json(json)
# print the JSON string representation of the object
print(TenantProjectPolicy.to_json())

# convert the object into a dict
tenant_project_policy_dict = tenant_project_policy_instance.to_dict()
# create an instance of TenantProjectPolicy from a dict
tenant_project_policy_from_dict = TenantProjectPolicy.from_dict(tenant_project_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


