# GoogleCloudContactcenterinsightsV1View

The View resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which this view was created. | [optional] [readonly] 
**display_name** | **str** | The human-readable display name of the view. | [optional] 
**name** | **str** | Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view} | [optional] 
**update_time** | **str** | Output only. The most recent time at which the view was updated. | [optional] [readonly] 
**value** | **str** | String with specific view properties, must be non-empty. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_view import GoogleCloudContactcenterinsightsV1View

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1View from a JSON string
google_cloud_contactcenterinsights_v1_view_instance = GoogleCloudContactcenterinsightsV1View.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1View.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_view_dict = google_cloud_contactcenterinsights_v1_view_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1View from a dict
google_cloud_contactcenterinsights_v1_view_from_dict = GoogleCloudContactcenterinsightsV1View.from_dict(google_cloud_contactcenterinsights_v1_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


