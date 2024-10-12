# BillingPermissionsProperties

The set of allowed action and not allowed actions a caller has on a billing account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | The set of actions that the caller is allowed to do | [optional] [readonly] 
**not_actions** | **List[str]** | The set of actions the caller is not allowed to do | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_permissions_properties import BillingPermissionsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPermissionsProperties from a JSON string
billing_permissions_properties_instance = BillingPermissionsProperties.from_json(json)
# print the JSON string representation of the object
print(BillingPermissionsProperties.to_json())

# convert the object into a dict
billing_permissions_properties_dict = billing_permissions_properties_instance.to_dict()
# create an instance of BillingPermissionsProperties from a dict
billing_permissions_properties_from_dict = BillingPermissionsProperties.from_dict(billing_permissions_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


