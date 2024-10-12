# CisJobInstructionBase1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employer** | [**Employer1**](Employer1.md) |  | [optional] 
**holding_date** | **datetime** | The cis job instruction bases&#39; holding date | [optional] 
**sub_contractors** | [**SubContractor1**](SubContractor1.md) |  | [optional] 

## Example

```python
from openapi_client.models.cis_job_instruction_base1 import CisJobInstructionBase1

# TODO update the JSON string below
json = "{}"
# create an instance of CisJobInstructionBase1 from a JSON string
cis_job_instruction_base1_instance = CisJobInstructionBase1.from_json(json)
# print the JSON string representation of the object
print(CisJobInstructionBase1.to_json())

# convert the object into a dict
cis_job_instruction_base1_dict = cis_job_instruction_base1_instance.to_dict()
# create an instance of CisJobInstructionBase1 from a dict
cis_job_instruction_base1_from_dict = CisJobInstructionBase1.from_dict(cis_job_instruction_base1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


