# PayRunJobInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employees** | [**Employee4**](Employee4.md) |  | [optional] 
**end_date** | **date** | The pay run job instructions&#39; end date | [optional] 
**holding_date** | **datetime** | The pay run job instructions&#39; holding date | [optional] 
**is_supplementary** | **bool** | The pay run job instructions&#39; is supplementary | [optional] 
**pay_schedule** | [**PaySchedule3**](PaySchedule3.md) |  | [optional] 
**payment_date** | **date** | The pay run job instructions&#39; payment date | [optional] 
**start_date** | **date** | The pay run job instructions&#39; start date | [optional] 

## Example

```python
from openapi_client.models.pay_run_job_instruction1 import PayRunJobInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of PayRunJobInstruction1 from a JSON string
pay_run_job_instruction1_instance = PayRunJobInstruction1.from_json(json)
# print the JSON string representation of the object
print(PayRunJobInstruction1.to_json())

# convert the object into a dict
pay_run_job_instruction1_dict = pay_run_job_instruction1_instance.to_dict()
# create an instance of PayRunJobInstruction1 from a dict
pay_run_job_instruction1_from_dict = PayRunJobInstruction1.from_dict(pay_run_job_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


