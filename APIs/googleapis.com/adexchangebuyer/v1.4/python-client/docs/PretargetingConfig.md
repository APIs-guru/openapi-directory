# PretargetingConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_id** | **str** | The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically. | [optional] 
**config_id** | **str** | The config id; generated automatically. Leave this field blank for insert requests. | [optional] 
**config_name** | **str** | The name of the config. Must be unique. Required for all requests. | [optional] 
**creative_type** | **List[str]** | List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO. | [optional] 
**dimensions** | [**List[PretargetingConfigDimensionsInner]**](PretargetingConfigDimensionsInner.md) | Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions. | [optional] 
**excluded_content_labels** | **List[str]** | Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section. | [optional] 
**excluded_geo_criteria_ids** | **List[str]** | Requests containing any of these geo criteria ids will not match. | [optional] 
**excluded_placements** | [**List[PretargetingConfigExcludedPlacementsInner]**](PretargetingConfigExcludedPlacementsInner.md) | Requests containing any of these placements will not match. | [optional] 
**excluded_user_lists** | **List[str]** | Requests containing any of these users list ids will not match. | [optional] 
**excluded_verticals** | **List[str]** | Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section. | [optional] 
**geo_criteria_ids** | **List[str]** | Requests containing any of these geo criteria ids will match. | [optional] 
**is_active** | **bool** | Whether this config is active. Required for all requests. | [optional] 
**kind** | **str** | The kind of the resource, i.e. \&quot;adexchangebuyer#pretargetingConfig\&quot;. | [optional] [default to 'adexchangebuyer#pretargetingConfig']
**languages** | **List[str]** | Request containing any of these language codes will match. | [optional] 
**maximum_qps** | **str** | The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed). | [optional] 
**minimum_viewability_decile** | **int** | Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored. | [optional] 
**mobile_carriers** | **List[str]** | Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section. | [optional] 
**mobile_devices** | **List[str]** | Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section. | [optional] 
**mobile_operating_system_versions** | **List[str]** | Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section. | [optional] 
**placements** | [**List[PretargetingConfigExcludedPlacementsInner]**](PretargetingConfigExcludedPlacementsInner.md) | Requests containing any of these placements will match. | [optional] 
**platforms** | **List[str]** | Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET. | [optional] 
**supported_creative_attributes** | **List[str]** | Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section. | [optional] 
**user_identifier_data_required** | **List[str]** | Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer&#39;s hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA. | [optional] 
**user_lists** | **List[str]** | Requests containing any of these user list ids will match. | [optional] 
**vendor_types** | **List[str]** | Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section. | [optional] 
**verticals** | **List[str]** | Requests containing any of these vertical ids will match. | [optional] 
**video_player_sizes** | [**List[PretargetingConfigVideoPlayerSizesInner]**](PretargetingConfigVideoPlayerSizesInner.md) | Video requests satisfying any of these player size constraints will match. | [optional] 

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


