# GoogleCloudDiscoveryengineV1betaPanelInfo

Detailed panel information associated with a user event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the panel. | [optional] 
**panel_id** | **str** | Required. The panel ID. | [optional] 
**panel_position** | **int** | The ordered position of the panel, if shown to the user with other panels. If set, then total_panels must also be set. | [optional] 
**total_panels** | **int** | The total number of panels, including this one, shown to the user. Must be set if panel_position is set. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_panel_info import GoogleCloudDiscoveryengineV1betaPanelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaPanelInfo from a JSON string
google_cloud_discoveryengine_v1beta_panel_info_instance = GoogleCloudDiscoveryengineV1betaPanelInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaPanelInfo.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_panel_info_dict = google_cloud_discoveryengine_v1beta_panel_info_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaPanelInfo from a dict
google_cloud_discoveryengine_v1beta_panel_info_from_dict = GoogleCloudDiscoveryengineV1betaPanelInfo.from_dict(google_cloud_discoveryengine_v1beta_panel_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


