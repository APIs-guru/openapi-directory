# CVSS

Common Vulnerability Scoring System. This message is compatible with CVSS v2 and v3. For CVSS v2 details, see https://www.first.org/cvss/v2/guide CVSS v2 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator For CVSS v3 details, see https://www.first.org/cvss/specification-document CVSS v3 calculator: https://nvd.nist.gov/vuln-metrics/cvss/v3-calculator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attack_complexity** | **str** | Defined in CVSS v3, CVSS v2 | [optional] 
**attack_vector** | **str** | Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. Defined in CVSS v3, CVSS v2 | [optional] 
**authentication** | **str** | Defined in CVSS v2 | [optional] 
**availability_impact** | **str** | Defined in CVSS v3, CVSS v2 | [optional] 
**base_score** | **float** | The base score is a function of the base metric scores. | [optional] 
**confidentiality_impact** | **str** | Defined in CVSS v3, CVSS v2 | [optional] 
**exploitability_score** | **float** |  | [optional] 
**impact_score** | **float** |  | [optional] 
**integrity_impact** | **str** | Defined in CVSS v3, CVSS v2 | [optional] 
**privileges_required** | **str** | Defined in CVSS v3 | [optional] 
**scope** | **str** | Defined in CVSS v3 | [optional] 
**user_interaction** | **str** | Defined in CVSS v3 | [optional] 

## Example

```python
from openapi_client.models.cvss import CVSS

# TODO update the JSON string below
json = "{}"
# create an instance of CVSS from a JSON string
cvss_instance = CVSS.from_json(json)
# print the JSON string representation of the object
print(CVSS.to_json())

# convert the object into a dict
cvss_dict = cvss_instance.to_dict()
# create an instance of CVSS from a dict
cvss_from_dict = CVSS.from_dict(cvss_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


