# GetIosReopenAttributionResponse

Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deep_link** | **str** | The deep-link attributed the app universal link open. For both regular FDL links and invite FDL links. | [optional] 
**invitation_id** | **str** | Optional invitation ID, for only invite typed requested FDL links. | [optional] 
**ios_min_app_version** | **str** | FDL input value of the \&quot;&amp;imv&#x3D;\&quot; parameter, minimum app version to be returned to Google Firebase SDK running on iOS-9. | [optional] 
**resolved_link** | **str** | The entire FDL, expanded from a short link. It is the same as the requested_link, if it is long. | [optional] 
**utm_campaign** | **str** | Scion campaign value to be propagated by iSDK to Scion at app-reopen. | [optional] 
**utm_content** | **str** | Scion content value to be propagated by iSDK to Scion at app-reopen. | [optional] 
**utm_medium** | **str** | Scion medium value to be propagated by iSDK to Scion at app-reopen. | [optional] 
**utm_source** | **str** | Scion source value to be propagated by iSDK to Scion at app-reopen. | [optional] 
**utm_term** | **str** | Scion term value to be propagated by iSDK to Scion at app-reopen. | [optional] 

## Example

```python
from openapi_client.models.get_ios_reopen_attribution_response import GetIosReopenAttributionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetIosReopenAttributionResponse from a JSON string
get_ios_reopen_attribution_response_instance = GetIosReopenAttributionResponse.from_json(json)
# print the JSON string representation of the object
print(GetIosReopenAttributionResponse.to_json())

# convert the object into a dict
get_ios_reopen_attribution_response_dict = get_ios_reopen_attribution_response_instance.to_dict()
# create an instance of GetIosReopenAttributionResponse from a dict
get_ios_reopen_attribution_response_from_dict = GetIosReopenAttributionResponse.from_dict(get_ios_reopen_attribution_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


