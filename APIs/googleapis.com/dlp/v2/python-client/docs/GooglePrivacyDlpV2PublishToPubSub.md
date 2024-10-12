# GooglePrivacyDlpV2PublishToPubSub

Publish a message into a given Pub/Sub topic when DlpJob has completed. The message contains a single field, `DlpJobName`, which is equal to the finished job's [`DlpJob.name`](https://cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/projects.dlpJobs#DlpJob). Compatible with: Inspect, Risk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **str** | Cloud Pub/Sub topic to send notifications to. The topic must have given publishing access rights to the DLP API service account executing the long running DlpJob sending the notifications. Format is projects/{project}/topics/{topic}. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_publish_to_pub_sub import GooglePrivacyDlpV2PublishToPubSub

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2PublishToPubSub from a JSON string
google_privacy_dlp_v2_publish_to_pub_sub_instance = GooglePrivacyDlpV2PublishToPubSub.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2PublishToPubSub.to_json())

# convert the object into a dict
google_privacy_dlp_v2_publish_to_pub_sub_dict = google_privacy_dlp_v2_publish_to_pub_sub_instance.to_dict()
# create an instance of GooglePrivacyDlpV2PublishToPubSub from a dict
google_privacy_dlp_v2_publish_to_pub_sub_from_dict = GooglePrivacyDlpV2PublishToPubSub.from_dict(google_privacy_dlp_v2_publish_to_pub_sub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


