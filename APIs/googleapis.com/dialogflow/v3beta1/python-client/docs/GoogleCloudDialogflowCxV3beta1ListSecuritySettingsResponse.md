# GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse

The response message for SecuritySettings.ListSecuritySettings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**security_settings** | [**List[GoogleCloudDialogflowCxV3beta1SecuritySettings]**](GoogleCloudDialogflowCxV3beta1SecuritySettings.md) | The list of security settings. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_list_security_settings_response import GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_list_security_settings_response_instance = GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_list_security_settings_response_dict = google_cloud_dialogflow_cx_v3beta1_list_security_settings_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse from a dict
google_cloud_dialogflow_cx_v3beta1_list_security_settings_response_from_dict = GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_list_security_settings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


