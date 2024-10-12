# GoogleAdsSearchads360V0CommonCustomParameter

A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key matching the parameter tag name. | [optional] 
**value** | **str** | The value to be substituted. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_custom_parameter import GoogleAdsSearchads360V0CommonCustomParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonCustomParameter from a JSON string
google_ads_searchads360_v0_common_custom_parameter_instance = GoogleAdsSearchads360V0CommonCustomParameter.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonCustomParameter.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_custom_parameter_dict = google_ads_searchads360_v0_common_custom_parameter_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonCustomParameter from a dict
google_ads_searchads360_v0_common_custom_parameter_from_dict = GoogleAdsSearchads360V0CommonCustomParameter.from_dict(google_ads_searchads360_v0_common_custom_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


