# CVSSv3

Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attack_complexity** | **str** | This metric describes the conditions beyond the attacker&#39;s control that must exist in order to exploit the vulnerability. | [optional] 
**attack_vector** | **str** | This metric reflects the context by which vulnerability exploitation is possible. | [optional] 
**availability_impact** | **str** | This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. | [optional] 
**base_score** | **float** | The base score is a function of the base metric scores. https://www.first.org/cvss/specification-document#Base-Metrics | [optional] 
**confidentiality_impact** | **str** | This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. | [optional] 
**exploitability_score** | **float** | The Exploitability sub-score equation is derived from the Base Exploitability metrics. https://www.first.org/cvss/specification-document#2-1-Exploitability-Metrics | [optional] 
**impact_score** | **float** | The Impact sub-score equation is derived from the Base Impact metrics. | [optional] 
**integrity_impact** | **str** | This metric measures the impact to integrity of a successfully exploited vulnerability. | [optional] 
**privileges_required** | **str** | This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. | [optional] 
**scope** | **str** | The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. | [optional] 
**user_interaction** | **str** | This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. | [optional] 

## Example

```python
from openapi_client.models.cvssv3 import CVSSv3

# TODO update the JSON string below
json = "{}"
# create an instance of CVSSv3 from a JSON string
cvssv3_instance = CVSSv3.from_json(json)
# print the JSON string representation of the object
print(CVSSv3.to_json())

# convert the object into a dict
cvssv3_dict = cvssv3_instance.to_dict()
# create an instance of CVSSv3 from a dict
cvssv3_from_dict = CVSSv3.from_dict(cvssv3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


