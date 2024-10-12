# BillingAccount

A billing account resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BillingAccountProperties**](BillingAccountProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_account import BillingAccount

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAccount from a JSON string
billing_account_instance = BillingAccount.from_json(json)
# print the JSON string representation of the object
print(BillingAccount.to_json())

# convert the object into a dict
billing_account_dict = billing_account_instance.to_dict()
# create an instance of BillingAccount from a dict
billing_account_from_dict = BillingAccount.from_dict(billing_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


