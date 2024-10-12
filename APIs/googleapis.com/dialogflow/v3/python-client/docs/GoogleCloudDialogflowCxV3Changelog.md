# GoogleCloudDialogflowCxV3Changelog

Changelogs represents a change made to a given agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action of the change. | [optional] 
**create_time** | **str** | The timestamp of the change. | [optional] 
**display_name** | **str** | The affected resource display name of the change. | [optional] 
**language_code** | **str** | The affected language code of the change. | [optional] 
**name** | **str** | The unique identifier of the changelog. Format: &#x60;projects//locations//agents//changelogs/&#x60;. | [optional] 
**resource** | **str** | The affected resource name of the change. | [optional] 
**type** | **str** | The affected resource type. | [optional] 
**user_email** | **str** | Email address of the authenticated user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_changelog import GoogleCloudDialogflowCxV3Changelog

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3Changelog from a JSON string
google_cloud_dialogflow_cx_v3_changelog_instance = GoogleCloudDialogflowCxV3Changelog.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3Changelog.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_changelog_dict = google_cloud_dialogflow_cx_v3_changelog_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3Changelog from a dict
google_cloud_dialogflow_cx_v3_changelog_from_dict = GoogleCloudDialogflowCxV3Changelog.from_dict(google_cloud_dialogflow_cx_v3_changelog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


