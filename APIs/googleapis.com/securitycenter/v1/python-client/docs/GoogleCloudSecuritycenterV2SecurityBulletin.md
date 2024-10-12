# GoogleCloudSecuritycenterV2SecurityBulletin

SecurityBulletin are notifications of vulnerabilities of Google products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bulletin_id** | **str** | ID of the bulletin corresponding to the vulnerability. | [optional] 
**submission_time** | **str** | Submission time of this Security Bulletin. | [optional] 
**suggested_upgrade_version** | **str** | This represents a version that the cluster receiving this notification should be upgraded to, based on its current version. For example, 1.15.0 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_security_bulletin import GoogleCloudSecuritycenterV2SecurityBulletin

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2SecurityBulletin from a JSON string
google_cloud_securitycenter_v2_security_bulletin_instance = GoogleCloudSecuritycenterV2SecurityBulletin.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2SecurityBulletin.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_security_bulletin_dict = google_cloud_securitycenter_v2_security_bulletin_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2SecurityBulletin from a dict
google_cloud_securitycenter_v2_security_bulletin_from_dict = GoogleCloudSecuritycenterV2SecurityBulletin.from_dict(google_cloud_securitycenter_v2_security_bulletin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


