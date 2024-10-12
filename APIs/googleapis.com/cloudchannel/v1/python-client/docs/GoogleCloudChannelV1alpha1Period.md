# GoogleCloudChannelV1alpha1Period

Represents period in days/months/years.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **int** | Total duration of Period Type defined. | [optional] 
**period_type** | **str** | Period Type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_period import GoogleCloudChannelV1alpha1Period

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1Period from a JSON string
google_cloud_channel_v1alpha1_period_instance = GoogleCloudChannelV1alpha1Period.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1Period.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_period_dict = google_cloud_channel_v1alpha1_period_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1Period from a dict
google_cloud_channel_v1alpha1_period_from_dict = GoogleCloudChannelV1alpha1Period.from_dict(google_cloud_channel_v1alpha1_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


