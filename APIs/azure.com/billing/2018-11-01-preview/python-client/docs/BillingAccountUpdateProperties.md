# BillingAccountUpdateProperties

The properties of the billing account that can be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BillingAccountProperties**](BillingAccountProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_account_update_properties import BillingAccountUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAccountUpdateProperties from a JSON string
billing_account_update_properties_instance = BillingAccountUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(BillingAccountUpdateProperties.to_json())

# convert the object into a dict
billing_account_update_properties_dict = billing_account_update_properties_instance.to_dict()
# create an instance of BillingAccountUpdateProperties from a dict
billing_account_update_properties_from_dict = BillingAccountUpdateProperties.from_dict(billing_account_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


