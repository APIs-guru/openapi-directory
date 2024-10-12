# ThirdPartyMeasurementConfigs

Settings that control what third-party vendors are measuring specific line item metrics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand_lift_vendor_configs** | [**List[ThirdPartyVendorConfig]**](ThirdPartyVendorConfig.md) | Optional. The third-party vendors measuring brand lift. The following third-party vendors are applicable: * &#x60;THIRD_PARTY_VENDOR_DYNATA&#x60; * &#x60;THIRD_PARTY_VENDOR_KANTAR&#x60; | [optional] 
**brand_safety_vendor_configs** | [**List[ThirdPartyVendorConfig]**](ThirdPartyVendorConfig.md) | Optional. The third-party vendors measuring brand safety. The following third-party vendors are applicable: * &#x60;THIRD_PARTY_VENDOR_ZERF&#x60; * &#x60;THIRD_PARTY_VENDOR_DOUBLE_VERIFY&#x60; * &#x60;THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE&#x60; | [optional] 
**reach_vendor_configs** | [**List[ThirdPartyVendorConfig]**](ThirdPartyVendorConfig.md) | Optional. The third-party vendors measuring reach. The following third-party vendors are applicable: * &#x60;THIRD_PARTY_VENDOR_NIELSEN&#x60; * &#x60;THIRD_PARTY_VENDOR_COMSCORE&#x60; * &#x60;THIRD_PARTY_VENDOR_KANTAR&#x60; | [optional] 
**viewability_vendor_configs** | [**List[ThirdPartyVendorConfig]**](ThirdPartyVendorConfig.md) | Optional. The third-party vendors measuring viewability. The following third-party vendors are applicable: * &#x60;THIRD_PARTY_VENDOR_MOAT&#x60; * &#x60;THIRD_PARTY_VENDOR_DOUBLE_VERIFY&#x60; * &#x60;THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE&#x60; * &#x60;THIRD_PARTY_VENDOR_COMSCORE&#x60; * &#x60;THIRD_PARTY_VENDOR_TELEMETRY&#x60; * &#x60;THIRD_PARTY_VENDOR_MEETRICS&#x60; | [optional] 

## Example

```python
from openapi_client.models.third_party_measurement_configs import ThirdPartyMeasurementConfigs

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyMeasurementConfigs from a JSON string
third_party_measurement_configs_instance = ThirdPartyMeasurementConfigs.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyMeasurementConfigs.to_json())

# convert the object into a dict
third_party_measurement_configs_dict = third_party_measurement_configs_instance.to_dict()
# create an instance of ThirdPartyMeasurementConfigs from a dict
third_party_measurement_configs_from_dict = ThirdPartyMeasurementConfigs.from_dict(third_party_measurement_configs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


