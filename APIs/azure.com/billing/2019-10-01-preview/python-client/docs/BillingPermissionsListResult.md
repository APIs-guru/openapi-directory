# BillingPermissionsListResult

Result of list billingPermissions a caller has on a billing account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[BillingPermissionsProperties]**](BillingPermissionsProperties.md) | The list of billingPermissions a caller has on a billing account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_permissions_list_result import BillingPermissionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPermissionsListResult from a JSON string
billing_permissions_list_result_instance = BillingPermissionsListResult.from_json(json)
# print the JSON string representation of the object
print(BillingPermissionsListResult.to_json())

# convert the object into a dict
billing_permissions_list_result_dict = billing_permissions_list_result_instance.to_dict()
# create an instance of BillingPermissionsListResult from a dict
billing_permissions_list_result_from_dict = BillingPermissionsListResult.from_dict(billing_permissions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


