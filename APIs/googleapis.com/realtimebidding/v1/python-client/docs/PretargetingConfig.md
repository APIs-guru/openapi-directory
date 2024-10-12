# PretargetingConfig

Pretargeting configuration: a set of targeting dimensions applied at the pretargeting stage of the RTB funnel. These control which inventory a bidder will receive bid requests for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_user_targeting_modes** | **List[str]** | Targeting modes included by this configuration. A bid request must allow all the specified targeting modes. An unset value allows all bid requests to be sent, regardless of which targeting modes they allow. | [optional] 
**app_targeting** | [**AppTargeting**](AppTargeting.md) |  | [optional] 
**billing_id** | **str** | Output only. The identifier that corresponds to this pretargeting configuration that helps buyers track and attribute their spend across their own arbitrary divisions. If a bid request matches more than one configuration, the buyer chooses which billing_id to attribute each of their bids. | [optional] [readonly] 
**display_name** | **str** | The diplay name associated with this configuration. This name must be unique among all the pretargeting configurations a bidder has. | [optional] 
**excluded_content_label_ids** | **List[str]** | The sensitive content category label IDs excluded in this configuration. Bid requests for inventory with any of the specified content label IDs will not be sent. Refer to this file https://storage.googleapis.com/adx-rtb-dictionaries/content-labels.txt for category IDs. | [optional] 
**geo_targeting** | [**NumericTargetingDimension**](NumericTargetingDimension.md) |  | [optional] 
**included_creative_dimensions** | [**List[CreativeDimensions]**](CreativeDimensions.md) | Creative dimensions included by this configuration. Only bid requests eligible for at least one of the specified creative dimensions will be sent. An unset value allows all bid requests to be sent, regardless of creative dimension. | [optional] 
**included_environments** | **List[str]** | Environments that are being included. Bid requests will not be sent for a given environment if it is not included. Further restrictions can be applied to included environments to target only a subset of its inventory. An unset value includes all environments. | [optional] 
**included_formats** | **List[str]** | Creative formats included by this configuration. Only bid requests eligible for at least one of the specified creative formats will be sent. An unset value will allow all bid requests to be sent, regardless of format. | [optional] 
**included_languages** | **List[str]** | The languages included in this configuration, represented by their language code. See https://developers.google.com/adwords/api/docs/appendix/languagecodes. | [optional] 
**included_mobile_operating_system_ids** | **List[str]** | The mobile operating systems included in this configuration as defined in https://storage.googleapis.com/adx-rtb-dictionaries/mobile-os.csv | [optional] 
**included_platforms** | **List[str]** | The platforms included by this configration. Bid requests for devices with the specified platform types will be sent. An unset value allows all bid requests to be sent, regardless of platform. | [optional] 
**included_user_id_types** | **List[str]** | User identifier types included in this configuration. At least one of the user identifier types specified in this list must be available for the bid request to be sent. | [optional] 
**interstitial_targeting** | **str** | The interstitial targeting specified for this configuration. The unset value will allow bid requests to be sent regardless of whether they are for interstitials or not. | [optional] 
**invalid_geo_ids** | **List[str]** | Output only. Existing included or excluded geos that are invalid. Previously targeted geos may become invalid due to privacy restrictions. | [optional] [readonly] 
**maximum_qps** | **str** | The maximum QPS threshold for this configuration. The bidder should receive no more than this number of bid requests matching this configuration per second across all their bidding endpoints among all trading locations. Further information available at https://developers.google.com/authorized-buyers/rtb/peer-guide | [optional] 
**minimum_viewability_decile** | **int** | The targeted minimum viewability decile, ranging in values [0, 10]. A value of 5 means that the configuration will only match adslots for which we predict at least 50% viewability. Values &gt; 10 will be rounded down to 10. An unset value or a value of 0 indicates that bid requests will be sent regardless of viewability. | [optional] 
**name** | **str** | Output only. Name of the pretargeting configuration that must follow the pattern &#x60;bidders/{bidder_account_id}/pretargetingConfigs/{config_id}&#x60; | [optional] [readonly] 
**publisher_targeting** | [**StringTargetingDimension**](StringTargetingDimension.md) |  | [optional] 
**state** | **str** | Output only. The state of this pretargeting configuration. | [optional] [readonly] 
**user_list_targeting** | [**NumericTargetingDimension**](NumericTargetingDimension.md) |  | [optional] 
**vertical_targeting** | [**NumericTargetingDimension**](NumericTargetingDimension.md) |  | [optional] 
**web_targeting** | [**StringTargetingDimension**](StringTargetingDimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.pretargeting_config import PretargetingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PretargetingConfig from a JSON string
pretargeting_config_instance = PretargetingConfig.from_json(json)
# print the JSON string representation of the object
print(PretargetingConfig.to_json())

# convert the object into a dict
pretargeting_config_dict = pretargeting_config_instance.to_dict()
# create an instance of PretargetingConfig from a dict
pretargeting_config_from_dict = PretargetingConfig.from_dict(pretargeting_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


