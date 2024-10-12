# GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure

Failed due to insufficient quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_required_quota** | **str** | This number is an estimation on how much total quota this project needs to successfully complete indexing. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1_target_site_failure_reason_quota_failure import GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure from a JSON string
google_cloud_discoveryengine_v1_target_site_failure_reason_quota_failure_instance = GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1_target_site_failure_reason_quota_failure_dict = google_cloud_discoveryengine_v1_target_site_failure_reason_quota_failure_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure from a dict
google_cloud_discoveryengine_v1_target_site_failure_reason_quota_failure_from_dict = GoogleCloudDiscoveryengineV1TargetSiteFailureReasonQuotaFailure.from_dict(google_cloud_discoveryengine_v1_target_site_failure_reason_quota_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


