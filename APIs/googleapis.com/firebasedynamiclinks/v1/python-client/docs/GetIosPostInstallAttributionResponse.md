# GetIosPostInstallAttributionResponse

Response for iSDK to execute strong match flow for post-install attribution. Information of the resolved FDL link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_minimum_version** | **str** | The minimum version for app, specified by dev through ?imv&#x3D; parameter. Return to iSDK to allow app to evaluate if current version meets this. | [optional] 
**attribution_confidence** | **str** | The confidence of the returned attribution. | [optional] 
**deep_link** | **str** | The deep-link attributed post-install via one of several techniques (device heuristics, copy unique). | [optional] 
**external_browser_destination_link** | **str** | User-agent specific custom-scheme URIs for iSDK to open. This will be set according to the user-agent tha the click was originally made in. There is no Safari-equivalent custom-scheme open URLs. ie: googlechrome://www.example.com ie: firefox://open-url?url&#x3D;http://www.example.com ie: opera-http://example.com | [optional] 
**fallback_link** | **str** | The link to navigate to update the app if min version is not met. This is either (in order): 1) fallback link (from ?ifl&#x3D; parameter, if specified by developer) or 2) AppStore URL (from ?isi&#x3D; parameter, if specified), or 3) the payload link (from required link&#x3D; parameter). | [optional] 
**invitation_id** | **str** | Invitation ID attributed post-install via one of several techniques (device heuristics, copy unique). | [optional] 
**is_strong_match_executable** | **bool** | Instruction for iSDK to attemmpt to perform strong match. For instance, if browser does not support/allow cookie or outside of support browsers, this will be false. | [optional] 
**match_message** | **str** | Describes why match failed, ie: \&quot;discarded due to low confidence\&quot;. This message will be publicly visible. | [optional] 
**request_ip_version** | **str** | Which IP version the request was made from. | [optional] 
**requested_link** | **str** | Entire FDL (short or long) attributed post-install via one of several techniques (device heuristics, copy unique). | [optional] 
**resolved_link** | **str** | The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. Parameters from this should not be used directly (ie: server can default utm_[campaign|medium|source] to a value when requested_link lack them, server determine the best fallback_link when requested_link specifies &gt;1 fallback links). | [optional] 
**utm_campaign** | **str** | Scion campaign value to be propagated by iSDK to Scion at post-install. | [optional] 
**utm_content** | **str** | Scion content value to be propagated by iSDK to Scion at app-reopen. | [optional] 
**utm_medium** | **str** | Scion medium value to be propagated by iSDK to Scion at post-install. | [optional] 
**utm_source** | **str** | Scion source value to be propagated by iSDK to Scion at post-install. | [optional] 
**utm_term** | **str** | Scion term value to be propagated by iSDK to Scion at app-reopen. | [optional] 

## Example

```python
from openapi_client.models.get_ios_post_install_attribution_response import GetIosPostInstallAttributionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetIosPostInstallAttributionResponse from a JSON string
get_ios_post_install_attribution_response_instance = GetIosPostInstallAttributionResponse.from_json(json)
# print the JSON string representation of the object
print(GetIosPostInstallAttributionResponse.to_json())

# convert the object into a dict
get_ios_post_install_attribution_response_dict = get_ios_post_install_attribution_response_instance.to_dict()
# create an instance of GetIosPostInstallAttributionResponse from a dict
get_ios_post_install_attribution_response_from_dict = GetIosPostInstallAttributionResponse.from_dict(get_ios_post_install_attribution_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


