# GoogleCloudSecuritycenterV2CloudDlpInspection

Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_scan** | **bool** | Whether Cloud DLP scanned the complete resource or a sampled subset. | [optional] 
**info_type** | **str** | The type of information (or *[infoType](https://cloud.google.com/dlp/docs/infotypes-reference)*) found, for example, &#x60;EMAIL_ADDRESS&#x60; or &#x60;STREET_ADDRESS&#x60;. | [optional] 
**info_type_count** | **str** | The number of times Cloud DLP found this infoType within this job and resource. | [optional] 
**inspect_job** | **str** | Name of the inspection job, for example, &#x60;projects/123/locations/europe/dlpJobs/i-8383929&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_cloud_dlp_inspection import GoogleCloudSecuritycenterV2CloudDlpInspection

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2CloudDlpInspection from a JSON string
google_cloud_securitycenter_v2_cloud_dlp_inspection_instance = GoogleCloudSecuritycenterV2CloudDlpInspection.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2CloudDlpInspection.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_cloud_dlp_inspection_dict = google_cloud_securitycenter_v2_cloud_dlp_inspection_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2CloudDlpInspection from a dict
google_cloud_securitycenter_v2_cloud_dlp_inspection_from_dict = GoogleCloudSecuritycenterV2CloudDlpInspection.from_dict(google_cloud_securitycenter_v2_cloud_dlp_inspection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


