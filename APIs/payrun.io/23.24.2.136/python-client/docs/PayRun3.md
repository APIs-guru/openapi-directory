# PayRun3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**executed** | **datetime** | The pay runs&#39; executed | [optional] 
**is_supplementary** | **bool** | The pay runs&#39; is supplementary | [optional] 
**pay_frequency** | **str** | The pay runs&#39; pay frequency | [optional] 
**pay_schedule** | [**PaySchedule2**](PaySchedule2.md) |  | [optional] 
**payment_date** | **date** | The pay runs&#39; payment date | [optional] 
**period_end** | **date** | The pay runs&#39; period end | [optional] 
**period_start** | **date** | The pay runs&#39; period start | [optional] 
**proceeding_pay_run** | [**ProceedingPayRun**](ProceedingPayRun.md) |  | [optional] 
**sequence** | **int** | The pay runs&#39; sequence | [optional] 
**tax_period** | **int** | The pay runs&#39; tax period | [optional] 
**tax_year** | **int** | The pay runs&#39; tax year | [optional] 

## Example

```python
from openapi_client.models.pay_run3 import PayRun3

# TODO update the JSON string below
json = "{}"
# create an instance of PayRun3 from a JSON string
pay_run3_instance = PayRun3.from_json(json)
# print the JSON string representation of the object
print(PayRun3.to_json())

# convert the object into a dict
pay_run3_dict = pay_run3_instance.to_dict()
# create an instance of PayRun3 from a dict
pay_run3_from_dict = PayRun3.from_dict(pay_run3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


