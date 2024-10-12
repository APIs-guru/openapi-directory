# GoogleCloudChannelV1TrialSettings

Settings for trial offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com). | [optional] 
**trial** | **bool** | Determines if the entitlement is in a trial or not: * &#x60;true&#x60; - The entitlement is in trial. * &#x60;false&#x60; - The entitlement is not in trial. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_trial_settings import GoogleCloudChannelV1TrialSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1TrialSettings from a JSON string
google_cloud_channel_v1_trial_settings_instance = GoogleCloudChannelV1TrialSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1TrialSettings.to_json())

# convert the object into a dict
google_cloud_channel_v1_trial_settings_dict = google_cloud_channel_v1_trial_settings_instance.to_dict()
# create an instance of GoogleCloudChannelV1TrialSettings from a dict
google_cloud_channel_v1_trial_settings_from_dict = GoogleCloudChannelV1TrialSettings.from_dict(google_cloud_channel_v1_trial_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


