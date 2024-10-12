# GoogleCloudChannelV1CommitmentSettings

Commitment settings for commitment-based offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Output only. Commitment end timestamp. | [optional] [readonly] 
**renewal_settings** | [**GoogleCloudChannelV1RenewalSettings**](GoogleCloudChannelV1RenewalSettings.md) |  | [optional] 
**start_time** | **str** | Output only. Commitment start timestamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_commitment_settings import GoogleCloudChannelV1CommitmentSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1CommitmentSettings from a JSON string
google_cloud_channel_v1_commitment_settings_instance = GoogleCloudChannelV1CommitmentSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1CommitmentSettings.to_json())

# convert the object into a dict
google_cloud_channel_v1_commitment_settings_dict = google_cloud_channel_v1_commitment_settings_instance.to_dict()
# create an instance of GoogleCloudChannelV1CommitmentSettings from a dict
google_cloud_channel_v1_commitment_settings_from_dict = GoogleCloudChannelV1CommitmentSettings.from_dict(google_cloud_channel_v1_commitment_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


