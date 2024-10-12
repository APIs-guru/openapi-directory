# GoogleCloudAiplatformV1beta1FeatureViewSyncConfig

Configuration for Sync. Only one option is set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Cron schedule (https://en.wikipedia.org/wiki/Cron) to launch scheduled runs. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: \&quot;CRON_TZ&#x3D;${IANA_TIME_ZONE}\&quot; or \&quot;TZ&#x3D;${IANA_TIME_ZONE}\&quot;. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, \&quot;CRON_TZ&#x3D;America/New_York 1 * * * *\&quot;, or \&quot;TZ&#x3D;America/New_York 1 * * * *\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_feature_view_sync_config import GoogleCloudAiplatformV1beta1FeatureViewSyncConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewSyncConfig from a JSON string
google_cloud_aiplatform_v1beta1_feature_view_sync_config_instance = GoogleCloudAiplatformV1beta1FeatureViewSyncConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1FeatureViewSyncConfig.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_feature_view_sync_config_dict = google_cloud_aiplatform_v1beta1_feature_view_sync_config_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1FeatureViewSyncConfig from a dict
google_cloud_aiplatform_v1beta1_feature_view_sync_config_from_dict = GoogleCloudAiplatformV1beta1FeatureViewSyncConfig.from_dict(google_cloud_aiplatform_v1beta1_feature_view_sync_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


