# TargetingExpansionConfig

Settings that control the [optimized targeting](//support.google.com/displayvideo/answer/12060859) settings of the line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_first_party_audience** | **bool** | Whether to exclude first-party audiences from use in targeting expansion. This field was deprecated with the launch of [optimized targeting](//support.google.com/displayvideo/answer/12060859). This field will be set to &#x60;false&#x60;. If this field is set to &#x60;true&#x60; when deprecated, all positive first-party audience targeting assigned to this line item will be replaced with negative targeting of the same first-party audiences to ensure the continued exclusion of those audiences. | [optional] 
**targeting_expansion_level** | **str** | Required. Whether optimized targeting is turned on. This field supports the following values: * &#x60;NO_EXPANSION&#x60;: optimized targeting is turned off * &#x60;LEAST_EXPANSION&#x60;: optimized targeting is turned on If this field is set to any other value, it will automatically be set to &#x60;LEAST_EXPANSION&#x60;. &#x60;NO_EXPANSION&#x60; will be the default value for the field and will be automatically assigned if you do not set the field. | [optional] 

## Example

```python
from openapi_client.models.targeting_expansion_config import TargetingExpansionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingExpansionConfig from a JSON string
targeting_expansion_config_instance = TargetingExpansionConfig.from_json(json)
# print the JSON string representation of the object
print(TargetingExpansionConfig.to_json())

# convert the object into a dict
targeting_expansion_config_dict = targeting_expansion_config_instance.to_dict()
# create an instance of TargetingExpansionConfig from a dict
targeting_expansion_config_from_dict = TargetingExpansionConfig.from_dict(targeting_expansion_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


