# AEAssessment1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **int** | The a e assessments&#39; age | [optional] 
**assessment_code** | **str** | The a e assessments&#39; assessment code | [optional] 
**assessment_date** | **date** | The a e assessments&#39; assessment date | [optional] 
**assessment_event** | **str** | The a e assessments&#39; assessment event | [optional] 
**assessment_override** | **str** | The a e assessments&#39; assessment override | [optional] 
**assessment_result** | **str** | The a e assessments&#39; assessment result | [optional] 
**is_member_of_alternative_pension_scheme** | **bool** | The a e assessments&#39; is member of alternative pension scheme | [optional] 
**opt_out_window_end_date** | **date** | The a e assessments&#39; opt out window end date | [optional] 
**qualifying_earnings** | **float** | The a e assessments&#39; qualifying earnings | [optional] 
**reenrolment_date** | **date** | The a e assessments&#39; reenrolment date | [optional] 
**state_pension_age** | **int** | The a e assessments&#39; state pension age | [optional] 
**state_pension_date** | **date** | The a e assessments&#39; state pension date | [optional] 
**tax_period** | **int** | The a e assessments&#39; tax period | [optional] 
**tax_year** | **int** | The a e assessments&#39; tax year | [optional] 

## Example

```python
from openapi_client.models.ae_assessment1 import AEAssessment1

# TODO update the JSON string below
json = "{}"
# create an instance of AEAssessment1 from a JSON string
ae_assessment1_instance = AEAssessment1.from_json(json)
# print the JSON string representation of the object
print(AEAssessment1.to_json())

# convert the object into a dict
ae_assessment1_dict = ae_assessment1_instance.to_dict()
# create an instance of AEAssessment1 from a dict
ae_assessment1_from_dict = AEAssessment1.from_dict(ae_assessment1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


