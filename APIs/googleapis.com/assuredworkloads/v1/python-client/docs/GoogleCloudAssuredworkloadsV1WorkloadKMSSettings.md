# GoogleCloudAssuredworkloadsV1WorkloadKMSSettings

Settings specific to the Key Management Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_rotation_time** | **str** | Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary. | [optional] 
**rotation_period** | **str** | Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1_workload_kms_settings import GoogleCloudAssuredworkloadsV1WorkloadKMSSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1WorkloadKMSSettings from a JSON string
google_cloud_assuredworkloads_v1_workload_kms_settings_instance = GoogleCloudAssuredworkloadsV1WorkloadKMSSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1WorkloadKMSSettings.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1_workload_kms_settings_dict = google_cloud_assuredworkloads_v1_workload_kms_settings_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1WorkloadKMSSettings from a dict
google_cloud_assuredworkloads_v1_workload_kms_settings_from_dict = GoogleCloudAssuredworkloadsV1WorkloadKMSSettings.from_dict(google_cloud_assuredworkloads_v1_workload_kms_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


