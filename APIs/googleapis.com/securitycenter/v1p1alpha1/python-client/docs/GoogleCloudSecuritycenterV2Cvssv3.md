# GoogleCloudSecuritycenterV2Cvssv3

Common Vulnerability Scoring System version 3.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attack_complexity** | **str** | This metric describes the conditions beyond the attacker&#39;s control that must exist in order to exploit the vulnerability. | [optional] 
**attack_vector** | **str** | Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. This metric reflects the context by which vulnerability exploitation is possible. | [optional] 
**availability_impact** | **str** | This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. | [optional] 
**base_score** | **float** | The base score is a function of the base metric scores. | [optional] 
**confidentiality_impact** | **str** | This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. | [optional] 
**integrity_impact** | **str** | This metric measures the impact to integrity of a successfully exploited vulnerability. | [optional] 
**privileges_required** | **str** | This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. | [optional] 
**scope** | **str** | The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. | [optional] 
**user_interaction** | **str** | This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_cvssv3 import GoogleCloudSecuritycenterV2Cvssv3

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2Cvssv3 from a JSON string
google_cloud_securitycenter_v2_cvssv3_instance = GoogleCloudSecuritycenterV2Cvssv3.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2Cvssv3.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_cvssv3_dict = google_cloud_securitycenter_v2_cvssv3_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2Cvssv3 from a dict
google_cloud_securitycenter_v2_cvssv3_from_dict = GoogleCloudSecuritycenterV2Cvssv3.from_dict(google_cloud_securitycenter_v2_cvssv3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


