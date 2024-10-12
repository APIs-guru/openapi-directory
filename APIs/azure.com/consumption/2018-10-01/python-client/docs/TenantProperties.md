# TenantProperties

The properties of the tenants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_id** | **str** | The Billing AccountId. | [optional] [readonly] 
**billing_account_name** | **str** | The Billing Account Name. | [optional] [readonly] 
**billing_profile_name** | **str** | The Billing Profile name. | [optional] [readonly] 
**tenant_id** | **str** | The TenantId. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tenant_properties import TenantProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TenantProperties from a JSON string
tenant_properties_instance = TenantProperties.from_json(json)
# print the JSON string representation of the object
print(TenantProperties.to_json())

# convert the object into a dict
tenant_properties_dict = tenant_properties_instance.to_dict()
# create an instance of TenantProperties from a dict
tenant_properties_from_dict = TenantProperties.from_dict(tenant_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


