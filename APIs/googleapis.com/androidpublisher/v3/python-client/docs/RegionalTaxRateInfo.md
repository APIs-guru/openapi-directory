# RegionalTaxRateInfo

Specified details about taxation in a given geographical region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligible_for_streaming_service_tax_rate** | **bool** | You must tell us if your app contains streaming products to correctly charge US state and local sales tax. Field only supported in the United States. | [optional] 
**streaming_tax_type** | **str** | To collect communications or amusement taxes in the United States, choose the appropriate tax category. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498#streaming_tax). | [optional] 
**tax_tier** | **str** | Tax tier to specify reduced tax rate. Developers who sell digital news, magazines, newspapers, books, or audiobooks in various regions may be eligible for reduced tax rates. [Learn more](https://support.google.com/googleplay/android-developer/answer/10463498). | [optional] 

## Example

```python
from openapi_client.models.regional_tax_rate_info import RegionalTaxRateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalTaxRateInfo from a JSON string
regional_tax_rate_info_instance = RegionalTaxRateInfo.from_json(json)
# print the JSON string representation of the object
print(RegionalTaxRateInfo.to_json())

# convert the object into a dict
regional_tax_rate_info_dict = regional_tax_rate_info_instance.to_dict()
# create an instance of RegionalTaxRateInfo from a dict
regional_tax_rate_info_from_dict = RegionalTaxRateInfo.from_dict(regional_tax_rate_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


