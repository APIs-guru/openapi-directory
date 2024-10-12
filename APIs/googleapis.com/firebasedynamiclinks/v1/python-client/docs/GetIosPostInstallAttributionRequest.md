# GetIosPostInstallAttributionRequest

Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_installation_time** | **str** | App installation epoch time (https://en.wikipedia.org/wiki/Unix_time). This is a client signal for a more accurate weak match. | [optional] 
**bundle_id** | **str** | APP bundle ID. | [optional] 
**device** | [**DeviceInfo**](DeviceInfo.md) |  | [optional] 
**ios_version** | **str** | iOS version, ie: 9.3.5. Consider adding \&quot;build\&quot;. | [optional] 
**retrieval_method** | **str** | App post install attribution retrieval information. Disambiguates mechanism (iSDK or developer invoked) to retrieve payload from clicked link. | [optional] 
**sdk_version** | **str** | Google SDK version. Version takes the form \&quot;$major.$minor.$patch\&quot; | [optional] 
**unique_match_link_to_check** | **str** | Possible unique matched link that server need to check before performing device heuristics match. If passed link is short server need to expand the link. If link is long server need to vslidate the link. | [optional] 
**visual_style** | **str** | Strong match page information. Disambiguates between default UI and custom page to present when strong match succeeds/fails to find cookie. | [optional] 

## Example

```python
from openapi_client.models.get_ios_post_install_attribution_request import GetIosPostInstallAttributionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetIosPostInstallAttributionRequest from a JSON string
get_ios_post_install_attribution_request_instance = GetIosPostInstallAttributionRequest.from_json(json)
# print the JSON string representation of the object
print(GetIosPostInstallAttributionRequest.to_json())

# convert the object into a dict
get_ios_post_install_attribution_request_dict = get_ios_post_install_attribution_request_instance.to_dict()
# create an instance of GetIosPostInstallAttributionRequest from a dict
get_ios_post_install_attribution_request_from_dict = GetIosPostInstallAttributionRequest.from_dict(get_ios_post_install_attribution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


