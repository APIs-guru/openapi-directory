# GoogleCloudDiscoveryengineV1TargetSiteFailureReason

Site search indexing failure reasons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota_failure** | [**GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure**](GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1_target_site_failure_reason import GoogleCloudDiscoveryengineV1TargetSiteFailureReason

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1TargetSiteFailureReason from a JSON string
google_cloud_discoveryengine_v1_target_site_failure_reason_instance = GoogleCloudDiscoveryengineV1TargetSiteFailureReason.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1TargetSiteFailureReason.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1_target_site_failure_reason_dict = google_cloud_discoveryengine_v1_target_site_failure_reason_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1TargetSiteFailureReason from a dict
google_cloud_discoveryengine_v1_target_site_failure_reason_from_dict = GoogleCloudDiscoveryengineV1TargetSiteFailureReason.from_dict(google_cloud_discoveryengine_v1_target_site_failure_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


