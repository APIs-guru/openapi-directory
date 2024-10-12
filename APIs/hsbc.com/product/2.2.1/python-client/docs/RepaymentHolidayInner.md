# RepaymentHolidayInner

Details of capital repayment holiday if any

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_holiday_length** | **float** | The maximum length/duration of a Repayment Holiday | [optional] 
**max_holiday_period** | **str** | The unit of period (days, weeks, months etc.) of the repayment holiday | [optional] 
**notes** | **List[str]** | Free text for adding details for repayment holiday | [optional] 

## Example

```python
from openapi_client.models.repayment_holiday_inner import RepaymentHolidayInner

# TODO update the JSON string below
json = "{}"
# create an instance of RepaymentHolidayInner from a JSON string
repayment_holiday_inner_instance = RepaymentHolidayInner.from_json(json)
# print the JSON string representation of the object
print(RepaymentHolidayInner.to_json())

# convert the object into a dict
repayment_holiday_inner_dict = repayment_holiday_inner_instance.to_dict()
# create an instance of RepaymentHolidayInner from a dict
repayment_holiday_inner_from_dict = RepaymentHolidayInner.from_dict(repayment_holiday_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


