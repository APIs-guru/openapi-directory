# GoogleCloudSecuritycenterV2Reference

Additional Links

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | Source of the reference e.g. NVD | [optional] 
**uri** | **str** | Uri for the mentioned source e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name&#x3D;CVE-2021-34527. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_reference import GoogleCloudSecuritycenterV2Reference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Reference from a JSON string
google_cloud_securitycenter_v2_reference_instance = GoogleCloudSecuritycenterV2Reference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Reference.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_reference_dict = google_cloud_securitycenter_v2_reference_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Reference from a dict
google_cloud_securitycenter_v2_reference_from_dict = GoogleCloudSecuritycenterV2Reference.from_dict(google_cloud_securitycenter_v2_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


