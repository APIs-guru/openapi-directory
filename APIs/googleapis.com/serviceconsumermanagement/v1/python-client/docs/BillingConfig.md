# BillingConfig

Describes the billing configuration for a new tenant project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | Name of the billing account. For example &#x60;billingAccounts/012345-567890-ABCDEF&#x60;. | [optional] 

## Example

```python
from openapi_client.models.billing_config import BillingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BillingConfig from a JSON string
billing_config_instance = BillingConfig.from_json(json)
# print the JSON string representation of the object
print(BillingConfig.to_json())

# convert the object into a dict
billing_config_dict = billing_config_instance.to_dict()
# create an instance of BillingConfig from a dict
billing_config_from_dict = BillingConfig.from_dict(billing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


