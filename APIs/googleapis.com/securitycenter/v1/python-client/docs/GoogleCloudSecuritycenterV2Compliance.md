# GoogleCloudSecuritycenterV2Compliance

Contains compliance information about a security standard indicating unmet recommendations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | Policies within the standard or benchmark, for example, A.12.4.1 | [optional] 
**standard** | **str** | Industry-wide compliance standards or benchmarks, such as CIS, PCI, and OWASP. | [optional] 
**version** | **str** | Version of the standard or benchmark, for example, 1.1 | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_compliance import GoogleCloudSecuritycenterV2Compliance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Compliance from a JSON string
google_cloud_securitycenter_v2_compliance_instance = GoogleCloudSecuritycenterV2Compliance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Compliance.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_compliance_dict = google_cloud_securitycenter_v2_compliance_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Compliance from a dict
google_cloud_securitycenter_v2_compliance_from_dict = GoogleCloudSecuritycenterV2Compliance.from_dict(google_cloud_securitycenter_v2_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


