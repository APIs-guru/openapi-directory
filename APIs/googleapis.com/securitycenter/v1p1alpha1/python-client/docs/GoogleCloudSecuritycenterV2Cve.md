# GoogleCloudSecuritycenterV2Cve

CVE stands for Common Vulnerabilities and Exposures. Information from the [CVE record](https://www.cve.org/ResourcesSupport/Glossary) that describes this vulnerability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvssv3** | [**GoogleCloudSecuritycenterV2Cvssv3**](GoogleCloudSecuritycenterV2Cvssv3.md) |  | [optional] 
**exploitation_activity** | **str** | The exploitation activity of the vulnerability in the wild. | [optional] 
**id** | **str** | The unique identifier for the vulnerability. e.g. CVE-2021-34527 | [optional] 
**impact** | **str** | The potential impact of the vulnerability if it was to be exploited. | [optional] 
**observed_in_the_wild** | **bool** | Whether or not the vulnerability has been observed in the wild. | [optional] 
**references** | [**List[GoogleCloudSecuritycenterV2Reference]**](GoogleCloudSecuritycenterV2Reference.md) | Additional information about the CVE. e.g. https://cve.mitre.org/cgi-bin/cvename.cgi?name&#x3D;CVE-2021-34527 | [optional] 
**upstream_fix_available** | **bool** | Whether upstream fix is available for the CVE. | [optional] 
**zero_day** | **bool** | Whether or not the vulnerability was zero day when the finding was published. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_cve import GoogleCloudSecuritycenterV2Cve

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Cve from a JSON string
google_cloud_securitycenter_v2_cve_instance = GoogleCloudSecuritycenterV2Cve.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Cve.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_cve_dict = google_cloud_securitycenter_v2_cve_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Cve from a dict
google_cloud_securitycenter_v2_cve_from_dict = GoogleCloudSecuritycenterV2Cve.from_dict(google_cloud_securitycenter_v2_cve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


