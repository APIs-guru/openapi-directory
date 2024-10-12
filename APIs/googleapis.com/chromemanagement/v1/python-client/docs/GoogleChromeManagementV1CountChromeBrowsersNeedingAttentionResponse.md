# GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse

Response containing counts for browsers that need attention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**no_recent_activity_count** | **str** | Number of browsers that haven’t had any recent activity | [optional] 
**pending_browser_update_count** | **str** | Number of browsers that are pending an OS update | [optional] 
**recently_enrolled_count** | **str** | Number of browsers that have been recently enrolled | [optional] 

## Example

```python
from openapi_client.models.google_chrome_management_v1_count_chrome_browsers_needing_attention_response import GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse from a JSON string
google_chrome_management_v1_count_chrome_browsers_needing_attention_response_instance = GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse.to_json())

# convert the object into a dict
google_chrome_management_v1_count_chrome_browsers_needing_attention_response_dict = google_chrome_management_v1_count_chrome_browsers_needing_attention_response_instance.to_dict()
# create an instance of GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse from a dict
google_chrome_management_v1_count_chrome_browsers_needing_attention_response_from_dict = GoogleChromeManagementV1CountChromeBrowsersNeedingAttentionResponse.from_dict(google_chrome_management_v1_count_chrome_browsers_needing_attention_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


