# FloodlightConfiguration

Contains properties of a Floodlight configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this floodlight configuration. This is a read-only field that can be left blank. | [optional] 
**advertiser_id** | **str** | Advertiser ID of the parent advertiser of this floodlight configuration. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**analytics_data_sharing_enabled** | **bool** | Whether advertiser data is shared with Google Analytics. | [optional] 
**custom_viewability_metric** | [**CustomViewabilityMetric**](CustomViewabilityMetric.md) |  | [optional] 
**exposure_to_conversion_enabled** | **bool** | Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting. | [optional] 
**first_day_of_week** | **str** | Day that will be counted as the first day of the week in reports. This is a required field. | [optional] 
**id** | **str** | ID of this floodlight configuration. This is a read-only, auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**in_app_attribution_tracking_enabled** | **bool** | Whether in-app attribution tracking is enabled. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#floodlightConfiguration\&quot;. | [optional] 
**lookback_configuration** | [**LookbackConfiguration**](LookbackConfiguration.md) |  | [optional] 
**natural_search_conversion_attribution_option** | **str** | Types of attribution options for natural search conversions. | [optional] 
**omniture_settings** | [**OmnitureSettings**](OmnitureSettings.md) |  | [optional] 
**subaccount_id** | **str** | Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank. | [optional] 
**tag_settings** | [**TagSettings**](TagSettings.md) |  | [optional] 
**third_party_authentication_tokens** | [**List[ThirdPartyAuthenticationToken]**](ThirdPartyAuthenticationToken.md) | List of third-party authentication tokens enabled for this configuration. | [optional] 
**user_defined_variable_configurations** | [**List[UserDefinedVariableConfiguration]**](UserDefinedVariableConfiguration.md) | List of user defined variables enabled for this configuration. | [optional] 

## Example

```python
from openapi_client.models.floodlight_configuration import FloodlightConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightConfiguration from a JSON string
floodlight_configuration_instance = FloodlightConfiguration.from_json(json)
# print the JSON string representation of the object
print(FloodlightConfiguration.to_json())

# convert the object into a dict
floodlight_configuration_dict = floodlight_configuration_instance.to_dict()
# create an instance of FloodlightConfiguration from a dict
floodlight_configuration_from_dict = FloodlightConfiguration.from_dict(floodlight_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


