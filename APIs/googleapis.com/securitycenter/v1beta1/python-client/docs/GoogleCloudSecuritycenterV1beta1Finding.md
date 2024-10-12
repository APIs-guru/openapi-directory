# GoogleCloudSecuritycenterV1beta1Finding

Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The additional taxonomy group within findings from a given source. This field is immutable after creation time. Example: \&quot;XSS_FLASH_INJECTION\&quot; | [optional] 
**create_time** | **str** | The time at which the finding was created in Security Command Center. | [optional] 
**event_time** | **str** | The time at which the event took place, or when an update to the finding occurred. For example, if the finding represents an open firewall it would capture the time the detector believes the firewall became open. The accuracy is determined by the detector. If the finding were to be resolved afterward, this time would reflect when the finding was resolved. | [optional] 
**external_uri** | **str** | The URI that, if available, points to a web page outside of Security Command Center where additional information about the finding can be found. This field is guaranteed to be either empty or a well formed URL. | [optional] 
**name** | **str** | The relative resource name of this finding. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: \&quot;organizations/{organization_id}/sources/{source_id}/findings/{finding_id}\&quot; | [optional] 
**parent** | **str** | Immutable. The relative resource name of the source the finding belongs to. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name This field is immutable after creation time. For example: \&quot;organizations/{organization_id}/sources/{source_id}\&quot; | [optional] 
**resource_name** | **str** | For findings on Google Cloud resources, the full resource name of the Google Cloud resource this finding is for. See: https://cloud.google.com/apis/design/resource_names#full_resource_name When the finding is for a non-Google Cloud resource, the resourceName can be a customer or partner defined string. This field is immutable after creation time. | [optional] 
**security_marks** | [**GoogleCloudSecuritycenterV1beta1SecurityMarks**](GoogleCloudSecuritycenterV1beta1SecurityMarks.md) |  | [optional] 
**source_properties** | **Dict[str, object]** | Source specific properties. These properties are managed by the source that writes the finding. The key names in the source_properties map must be between 1 and 255 characters, and must start with a letter and contain alphanumeric characters or underscores only. | [optional] 
**state** | **str** | The state of the finding. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v1beta1_finding import GoogleCloudSecuritycenterV1beta1Finding

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV1beta1Finding from a JSON string
google_cloud_securitycenter_v1beta1_finding_instance = GoogleCloudSecuritycenterV1beta1Finding.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV1beta1Finding.to_json())

# convert the object into a dict
google_cloud_securitycenter_v1beta1_finding_dict = google_cloud_securitycenter_v1beta1_finding_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV1beta1Finding from a dict
google_cloud_securitycenter_v1beta1_finding_from_dict = GoogleCloudSecuritycenterV1beta1Finding.from_dict(google_cloud_securitycenter_v1beta1_finding_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


