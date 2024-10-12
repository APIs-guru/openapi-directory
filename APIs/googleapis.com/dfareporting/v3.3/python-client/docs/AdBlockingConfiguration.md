# AdBlockingConfiguration

Campaign ad blocking settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_through_url** | **str** | Click-through URL used by brand-neutral ads. This is a required field when overrideClickThroughUrl is set to true. | [optional] 
**creative_bundle_id** | **str** | ID of a creative bundle to use for this campaign. If set, brand-neutral ads will select creatives from this bundle. Otherwise, a default transparent pixel will be used. | [optional] 
**enabled** | **bool** | Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings. | [optional] 
**override_click_through_url** | **bool** | Whether the brand-neutral ad&#39;s click-through URL comes from the campaign&#39;s creative bundle or the override URL. Must be set to true if ad blocking is enabled and no creative bundle is configured. | [optional] 

## Example

```python
from openapi_client.models.ad_blocking_configuration import AdBlockingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AdBlockingConfiguration from a JSON string
ad_blocking_configuration_instance = AdBlockingConfiguration.from_json(json)
# print the JSON string representation of the object
print(AdBlockingConfiguration.to_json())

# convert the object into a dict
ad_blocking_configuration_dict = ad_blocking_configuration_instance.to_dict()
# create an instance of AdBlockingConfiguration from a dict
ad_blocking_configuration_from_dict = AdBlockingConfiguration.from_dict(ad_blocking_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


