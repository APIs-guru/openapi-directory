# PartnerBillingConfig

Billing related settings of a partner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile_id** | **str** | The ID of a partner default billing profile. | [optional] 

## Example

```python
from openapi_client.models.partner_billing_config import PartnerBillingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerBillingConfig from a JSON string
partner_billing_config_instance = PartnerBillingConfig.from_json(json)
# print the JSON string representation of the object
print(PartnerBillingConfig.to_json())

# convert the object into a dict
partner_billing_config_dict = partner_billing_config_instance.to_dict()
# create an instance of PartnerBillingConfig from a dict
partner_billing_config_from_dict = PartnerBillingConfig.from_dict(partner_billing_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


