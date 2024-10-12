# AutoEnrolment

The employers' auto enrolment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pension** | [**Pension1**](Pension1.md) |  | [optional] 
**postponement_date** | **date** | The employer auto enrolments&#39; postponement date | [optional] 
**primary_address** | [**PrimaryAddress**](PrimaryAddress.md) |  | [optional] 
**primary_email** | **str** | The employer auto enrolments&#39; primary email | [optional] 
**primary_first_name** | **str** | The employer auto enrolments&#39; primary first name | [optional] 
**primary_job_title** | **str** | The employer auto enrolments&#39; primary job title | [optional] 
**primary_last_name** | **str** | The employer auto enrolments&#39; primary last name | [optional] 
**primary_telephone** | **str** | The employer auto enrolments&#39; primary telephone | [optional] 
**re_enrolment_day_offset** | **int** | The employer auto enrolments&#39; re enrolment day offset | [optional] 
**re_enrolment_month_offset** | **int** | The employer auto enrolments&#39; re enrolment month offset | [optional] 
**recent_opt_out_re_enrolment_excluded** | **bool** | The employer auto enrolments&#39; recent opt out re enrolment excluded | [optional] 
**secondary_address** | [**SecondaryAddress**](SecondaryAddress.md) |  | [optional] 
**secondary_email** | **str** | The employer auto enrolments&#39; secondary email | [optional] 
**secondary_first_name** | **str** | The employer auto enrolments&#39; secondary first name | [optional] 
**secondary_job_title** | **str** | The employer auto enrolments&#39; secondary job title | [optional] 
**secondary_last_name** | **str** | The employer auto enrolments&#39; secondary last name | [optional] 
**secondary_telephone** | **str** | The employer auto enrolments&#39; secondary telephone | [optional] 
**staging_date** | **date** | The employer auto enrolments&#39; staging date | [optional] 

## Example

```python
from openapi_client.models.auto_enrolment import AutoEnrolment

# TODO update the JSON string below
json = "{}"
# create an instance of AutoEnrolment from a JSON string
auto_enrolment_instance = AutoEnrolment.from_json(json)
# print the JSON string representation of the object
print(AutoEnrolment.to_json())

# convert the object into a dict
auto_enrolment_dict = auto_enrolment_instance.to_dict()
# create an instance of AutoEnrolment from a dict
auto_enrolment_from_dict = AutoEnrolment.from_dict(auto_enrolment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


