# GoogleCloudSecuritycenterV2CloudDlpDataProfile

The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_profile** | **str** | Name of the data profile, for example, &#x60;projects/123/locations/europe/tableProfiles/8383929&#x60;. | [optional] 
**parent_type** | **str** | The resource hierarchy level at which the data profile was generated. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_cloud_dlp_data_profile import GoogleCloudSecuritycenterV2CloudDlpDataProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2CloudDlpDataProfile from a JSON string
google_cloud_securitycenter_v2_cloud_dlp_data_profile_instance = GoogleCloudSecuritycenterV2CloudDlpDataProfile.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2CloudDlpDataProfile.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_cloud_dlp_data_profile_dict = google_cloud_securitycenter_v2_cloud_dlp_data_profile_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2CloudDlpDataProfile from a dict
google_cloud_securitycenter_v2_cloud_dlp_data_profile_from_dict = GoogleCloudSecuritycenterV2CloudDlpDataProfile.from_dict(google_cloud_securitycenter_v2_cloud_dlp_data_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


