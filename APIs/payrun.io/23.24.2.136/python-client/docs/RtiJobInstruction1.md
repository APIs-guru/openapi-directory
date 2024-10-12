# RtiJobInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**earlier_tax_year** | **int** | The rti job instructions&#39; earlier tax year | [optional] 
**employer** | [**Employer4**](Employer4.md) |  | [optional] 
**final_submission_for_year** | **bool** | The rti job instructions&#39; final submission for year | [optional] 
**generate** | **bool** | The rti job instructions&#39; generate | [optional] 
**holding_date** | **datetime** | The rti job instructions&#39; holding date | [optional] 
**late_reason** | **str** | The rti job instructions&#39; late reason | [optional] 
**no_payment_for_period_from** | **date** | The rti job instructions&#39; no payment for period from | [optional] 
**no_payment_for_period_to** | **date** | The rti job instructions&#39; no payment for period to | [optional] 
**pay_schedule** | [**PaySchedule5**](PaySchedule5.md) |  | [optional] 
**payment_date** | **date** | The rti job instructions&#39; payment date | [optional] 
**period_of_inactivity_from** | **date** | The rti job instructions&#39; period of inactivity from | [optional] 
**period_of_inactivity_to** | **date** | The rti job instructions&#39; period of inactivity to | [optional] 
**rti_transaction** | [**RtiTransaction**](RtiTransaction.md) |  | [optional] 
**rti_type** | **str** | The rti job instructions&#39; rti type | [optional] 
**scheme_ceased** | **date** | The rti job instructions&#39; scheme ceased | [optional] 
**tax_month** | **int** | The rti job instructions&#39; tax month | [optional] 
**tax_year** | **int** | The rti job instructions&#39; tax year | [optional] 
**timestamp** | **datetime** | The rti job instructions&#39; timestamp | [optional] 
**transmit** | **bool** | The rti job instructions&#39; transmit | [optional] 

## Example

```python
from openapi_client.models.rti_job_instruction1 import RtiJobInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of RtiJobInstruction1 from a JSON string
rti_job_instruction1_instance = RtiJobInstruction1.from_json(json)
# print the JSON string representation of the object
print(RtiJobInstruction1.to_json())

# convert the object into a dict
rti_job_instruction1_dict = rti_job_instruction1_instance.to_dict()
# create an instance of RtiJobInstruction1 from a dict
rti_job_instruction1_from_dict = RtiJobInstruction1.from_dict(rti_job_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


