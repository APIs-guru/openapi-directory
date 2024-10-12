# SubscriptionTaxAndComplianceSettings

Details about taxation, Google Play policy and legal compliance for subscription products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eea_withdrawal_right_type** | **str** | Digital content or service classification for products distributed to users in the European Economic Area (EEA). The withdrawal regime under EEA consumer laws depends on this classification. Refer to the [Help Center article](https://support.google.com/googleplay/android-developer/answer/10463498) for more information. | [optional] 
**is_tokenized_digital_asset** | **bool** | Whether this subscription is declared as a product representing a tokenized digital asset. | [optional] 
**tax_rate_info_by_region_code** | [**Dict[str, RegionalTaxRateInfo]**](RegionalTaxRateInfo.md) | A mapping from region code to tax rate details. The keys are region codes as defined by Unicode&#39;s \&quot;CLDR\&quot;. | [optional] 

## Example

```python
from openapi_client.models.subscription_tax_and_compliance_settings import SubscriptionTaxAndComplianceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionTaxAndComplianceSettings from a JSON string
subscription_tax_and_compliance_settings_instance = SubscriptionTaxAndComplianceSettings.from_json(json)
# print the JSON string representation of the object
print(SubscriptionTaxAndComplianceSettings.to_json())

# convert the object into a dict
subscription_tax_and_compliance_settings_dict = subscription_tax_and_compliance_settings_instance.to_dict()
# create an instance of SubscriptionTaxAndComplianceSettings from a dict
subscription_tax_and_compliance_settings_from_dict = SubscriptionTaxAndComplianceSettings.from_dict(subscription_tax_and_compliance_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


