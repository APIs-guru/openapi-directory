# Pension2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ae_compatible** | **bool** | The pensions&#39; a e compatible | [optional] 
**certification** | **str** | The pensions&#39; certification | [optional] 
**code** | **str** | The pensions&#39; code | [optional] 
**contribution_deduction_day** | **int** | The pensions&#39; contribution deduction day | [optional] 
**effective_date** | **date** | The pensions&#39; effective date | [optional] 
**employee_contribution_cash** | **float** | The pensions&#39; employee contribution cash | [optional] 
**employee_contribution_percent** | **float** | The pensions&#39; employee contribution percent | [optional] 
**employer_contribution_cash** | **float** | The pensions&#39; employer contribution cash | [optional] 
**employer_contribution_percent** | **float** | The pensions&#39; employer contribution percent | [optional] 
**employer_ni_saving** | **bool** | The pensions&#39; employer ni saving | [optional] 
**employer_ni_saving_percentage** | **float** | The pensions&#39; employer ni saving percentage | [optional] 
**group** | **str** | The pensions&#39; group | [optional] 
**lower_threshold** | **float** | The pensions&#39; lower threshold | [optional] 
**meta_data** | **object** | The pensions&#39; meta data | [optional] 
**next_revision_date** | **date** | The pensions&#39; next revision date | [optional] 
**pensionable_pay_codes** | [**PensionablePayCodes**](PensionablePayCodes.md) |  | [optional] 
**pro_rata_method** | **str** | The pensions&#39; pro rata method | [optional] 
**provider_employer_ref** | **str** | The pensions&#39; provider employer ref | [optional] 
**provider_name** | **str** | The pensions&#39; provider name | [optional] 
**qualifying_pay_codes** | [**QualifyingPayCodes**](QualifyingPayCodes.md) |  | [optional] 
**ras_rounding_override** | **str** | The pensions&#39; ras rounding override | [optional] 
**revision** | **int** | The pensions&#39; revision | [optional] 
**rounding_option** | **str** | The pensions&#39; rounding option | [optional] 
**salary_sacrifice** | **bool** | The pensions&#39; salary sacrifice | [optional] 
**scheme_name** | **str** | The pensions&#39; scheme name | [optional] 
**sub_group** | **str** | The pensions&#39; sub group | [optional] 
**taxation_method** | **str** | The pensions&#39; taxation method | [optional] 
**upper_threshold** | **float** | The pensions&#39; upper threshold | [optional] 
**use_ae_thresholds** | **bool** | The pensions&#39; use a e thresholds | [optional] 

## Example

```python
from openapi_client.models.pension2 import Pension2

# TODO update the JSON string below
json = "{}"
# create an instance of Pension2 from a JSON string
pension2_instance = Pension2.from_json(json)
# print the JSON string representation of the object
print(Pension2.to_json())

# convert the object into a dict
pension2_dict = pension2_instance.to_dict()
# create an instance of Pension2 from a dict
pension2_from_dict = Pension2.from_dict(pension2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


