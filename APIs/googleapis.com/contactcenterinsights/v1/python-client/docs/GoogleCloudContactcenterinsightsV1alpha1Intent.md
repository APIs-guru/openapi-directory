# GoogleCloudContactcenterinsightsV1alpha1Intent

The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human-readable name of the intent. | [optional] 
**id** | **str** | The unique identifier of the intent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_intent import GoogleCloudContactcenterinsightsV1alpha1Intent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1Intent from a JSON string
google_cloud_contactcenterinsights_v1alpha1_intent_instance = GoogleCloudContactcenterinsightsV1alpha1Intent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1Intent.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_intent_dict = google_cloud_contactcenterinsights_v1alpha1_intent_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1Intent from a dict
google_cloud_contactcenterinsights_v1alpha1_intent_from_dict = GoogleCloudContactcenterinsightsV1alpha1Intent.from_dict(google_cloud_contactcenterinsights_v1alpha1_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


