# ProceedingPayRun

The pay runs' proceeding pay run

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The links&#39; href | [optional] 
**rel** | **str** | The links&#39; target type | [optional] 
**title** | **str** | The links&#39; title | [optional] 

## Example

```python
from openapi_client.models.proceeding_pay_run import ProceedingPayRun

# TODO update the JSON string below
json = "{}"
# create an instance of ProceedingPayRun from a JSON string
proceeding_pay_run_instance = ProceedingPayRun.from_json(json)
# print the JSON string representation of the object
print(ProceedingPayRun.to_json())

# convert the object into a dict
proceeding_pay_run_dict = proceeding_pay_run_instance.to_dict()
# create an instance of ProceedingPayRun from a dict
proceeding_pay_run_from_dict = ProceedingPayRun.from_dict(proceeding_pay_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


