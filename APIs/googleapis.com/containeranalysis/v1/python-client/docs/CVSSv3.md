# CVSSv3

Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attack_complexity** | **str** |  | [optional] 
**attack_vector** | **str** | Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments. | [optional] 
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


