# GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings

Settings specific to resources needed for IL4.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_settings** | [**GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings**](GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_assuredworkloads_v1beta1_workload_il4_settings import GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings from a JSON string
google_cloud_assuredworkloads_v1beta1_workload_il4_settings_instance = GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings.to_json())

# convert the object into a dict
google_cloud_assuredworkloads_v1beta1_workload_il4_settings_dict = google_cloud_assuredworkloads_v1beta1_workload_il4_settings_instance.to_dict()
# create an instance of GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings from a dict
google_cloud_assuredworkloads_v1beta1_workload_il4_settings_from_dict = GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings.from_dict(google_cloud_assuredworkloads_v1beta1_workload_il4_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


