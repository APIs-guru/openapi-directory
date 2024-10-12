# TrustedExternalTenant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | GUID representing an external tenant. | [optional] 

## Example

```python
from openapi_client.models.trusted_external_tenant import TrustedExternalTenant

# TODO update the JSON string below
json = "{}"
# create an instance of TrustedExternalTenant from a JSON string
trusted_external_tenant_instance = TrustedExternalTenant.from_json(json)
# print the JSON string representation of the object
print(TrustedExternalTenant.to_json())

# convert the object into a dict
trusted_external_tenant_dict = trusted_external_tenant_instance.to_dict()
# create an instance of TrustedExternalTenant from a dict
trusted_external_tenant_from_dict = TrustedExternalTenant.from_dict(trusted_external_tenant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


