# Employer3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address1**](Address1.md) |  | [optional] 
**apprenticeship_levy_allowance** | **float** | The employers&#39; apprenticeship levy allowance | [optional] 
**auto_enrolment** | [**AutoEnrolment**](AutoEnrolment.md) |  | [optional] 
**bacs_service_user_number** | **str** | The employers&#39; bacs service user number | [optional] 
**bank_account** | [**BankAccount1**](BankAccount1.md) |  | [optional] 
**calculate_apprenticeship_levy** | **bool** | The employers&#39; calculate apprenticeship levy | [optional] 
**claim_employment_allowance** | **bool** | The employers&#39; claim employment allowance | [optional] 
**claim_small_employer_relief** | **bool** | The employers&#39; claim small employer relief | [optional] 
**effective_date** | **date** | The employers&#39; effective date | [optional] 
**hmrc_settings** | [**HmrcSettings**](HmrcSettings.md) |  | [optional] 
**meta_data** | **object** | The employers&#39; meta data | [optional] 
**name** | **str** | The employers&#39; name | [optional] 
**next_revision_date** | **date** | The employers&#39; next revision date | [optional] 
**region** | **str** | The employers&#39; region | [optional] 
**revision** | **int** | The employers&#39; revision | [optional] 
**rule_exclusions** | **str** | The employers&#39; rule exclusions | [optional] 
**territory** | **str** | The employers&#39; territory | [optional] 

## Example

```python
from openapi_client.models.employer3 import Employer3

# TODO update the JSON string below
json = "{}"
# create an instance of Employer3 from a JSON string
employer3_instance = Employer3.from_json(json)
# print the JSON string representation of the object
print(Employer3.to_json())

# convert the object into a dict
employer3_dict = employer3_instance.to_dict()
# create an instance of Employer3 from a dict
employer3_from_dict = Employer3.from_dict(employer3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


