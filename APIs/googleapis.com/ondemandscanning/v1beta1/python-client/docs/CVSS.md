# CVSS

Common Vulnerability Scoring System. For details, see https://www.first.org/cvss/specification-document This is a message we will try to use for storing various versions of CVSS rather than making a separate proto for storing a specific version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attack_complexity** | **str** |  | [optional] 
**attack_vector** | **str** | Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. | [optional] 
**authentication** | **str** |  | [optional] 
**availability_impact** | **str** |  | [optional] 
**base_score** | **float** | The base score is a function of the base metric scores. | [optional] 
**confidentiality_impact** | **str** |  | [optional] 
**exploitability_score** | **float** |  | [optional] 
**impact_score** | **float** |  | [optional] 
**integrity_impact** | **str** |  | [optional] 
**privileges_required** | **str** |  | [optional] 
**scope** | **str** |  | [optional] 
**user_interaction** | **str** |  | [optional] 

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


