# HolidayScheme1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accrual_pay_codes** | [**AccrualPayCodes**](AccrualPayCodes.md) |  | [optional] 
**allow_exceed_annual_entitlement** | **bool** | The holiday schemes&#39; allow exceed annual entitlement | [optional] 
**allow_negative_balance** | **bool** | The holiday schemes&#39; allow negative balance | [optional] 
**annual_entitlement_weeks** | **float** | The holiday schemes&#39; annual entitlement weeks | [optional] 
**bank_holiday_inclusive** | **bool** | The holiday schemes&#39; bank holiday inclusive | [optional] 
**code** | **str** | The holiday schemes&#39; code | [optional] 
**effective_date** | **date** | The holiday schemes&#39; effective date | [optional] 
**max_carry_over_days** | **float** | The holiday schemes&#39; max carry over days | [optional] 
**next_revision_date** | **date** | The holiday schemes&#39; next revision date | [optional] 
**offset_payment** | **bool** | The holiday schemes&#39; offset payment | [optional] 
**revision** | **int** | The holiday schemes&#39; revision | [optional] 
**scheme_ceased_date** | **date** | The holiday schemes&#39; scheme ceased date | [optional] 
**scheme_key** | **str** | The holiday schemes&#39; scheme key | [optional] 
**scheme_name** | **str** | The holiday schemes&#39; scheme name | [optional] 
**year_start_day** | **int** | The holiday schemes&#39; year start day | [optional] 
**year_start_month** | **int** | The holiday schemes&#39; year start month | [optional] 

## Example

```python
from openapi_client.models.holiday_scheme1 import HolidayScheme1

# TODO update the JSON string below
json = "{}"
# create an instance of HolidayScheme1 from a JSON string
holiday_scheme1_instance = HolidayScheme1.from_json(json)
# print the JSON string representation of the object
print(HolidayScheme1.to_json())

# convert the object into a dict
holiday_scheme1_dict = holiday_scheme1_instance.to_dict()
# create an instance of HolidayScheme1 from a dict
holiday_scheme1_from_dict = HolidayScheme1.from_dict(holiday_scheme1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


