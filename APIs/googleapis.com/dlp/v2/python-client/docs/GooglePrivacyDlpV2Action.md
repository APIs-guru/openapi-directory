# GooglePrivacyDlpV2Action

A task to execute on the completion of a job. See https://cloud.google.com/sensitive-data-protection/docs/concepts-actions to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deidentify** | [**GooglePrivacyDlpV2Deidentify**](GooglePrivacyDlpV2Deidentify.md) |  | [optional] 
**job_notification_emails** | **object** | Sends an email when the job completes. The email goes to IAM project owners and technical [Essential Contacts](https://cloud.google.com/resource-manager/docs/managing-notification-contacts). | [optional] 
**pub_sub** | [**GooglePrivacyDlpV2PublishToPubSub**](GooglePrivacyDlpV2PublishToPubSub.md) |  | [optional] 
**publish_findings_to_cloud_data_catalog** | **object** | Publish findings of a DlpJob to Data Catalog. In Data Catalog, tag templates are applied to the resource that Cloud DLP scanned. Data Catalog tag templates are stored in the same project and region where the BigQuery table exists. For Cloud DLP to create and apply the tag template, the Cloud DLP service agent must have the &#x60;roles/datacatalog.tagTemplateOwner&#x60; permission on the project. The tag template contains fields summarizing the results of the DlpJob. Any field values previously written by another DlpJob are deleted. InfoType naming patterns are strictly enforced when using this feature. Findings are persisted in Data Catalog storage and are governed by service-specific policies for Data Catalog. For more information, see [Service Specific Terms](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. This action is allowed only if all resources being scanned are BigQuery tables. Compatible with: Inspect | [optional] 
**publish_summary_to_cscc** | **object** | Publish the result summary of a DlpJob to [Security Command Center](https://cloud.google.com/security-command-center). This action is available for only projects that belong to an organization. This action publishes the count of finding instances and their infoTypes. The summary of findings are persisted in Security Command Center and are governed by [service-specific policies for Security Command Center](https://cloud.google.com/terms/service-terms). Only a single instance of this action can be specified. Compatible with: Inspect | [optional] 
**publish_to_stackdriver** | **object** | Enable Stackdriver metric dlp.googleapis.com/finding_count. This will publish a metric to stack driver on each infotype requested and how many findings were found for it. CustomDetectors will be bucketed as &#39;Custom&#39; under the Stackdriver label &#39;info_type&#39;. | [optional] 
**save_findings** | [**GooglePrivacyDlpV2SaveFindings**](GooglePrivacyDlpV2SaveFindings.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_action import GooglePrivacyDlpV2Action

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Action from a JSON string
google_privacy_dlp_v2_action_instance = GooglePrivacyDlpV2Action.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Action.to_json())

# convert the object into a dict
google_privacy_dlp_v2_action_dict = google_privacy_dlp_v2_action_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Action from a dict
google_privacy_dlp_v2_action_from_dict = GooglePrivacyDlpV2Action.from_dict(google_privacy_dlp_v2_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


