# DpsJobInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply** | **bool** | The dps job instructions&#39; apply | [optional] 
**employer** | [**Employer2**](Employer2.md) |  | [optional] 
**from_date** | **date** | The dps job instructions&#39; from date | [optional] 
**holding_date** | **datetime** | The dps job instructions&#39; holding date | [optional] 
**message_types** | [**Type**](Type.md) |  | [optional] 
**messages_to_process** | [**Message**](Message.md) |  | [optional] 
**retrieve** | **bool** | The dps job instructions&#39; retrieve | [optional] 

## Example

```python
from openapi_client.models.dps_job_instruction1 import DpsJobInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of DpsJobInstruction1 from a JSON string
dps_job_instruction1_instance = DpsJobInstruction1.from_json(json)
# print the JSON string representation of the object
print(DpsJobInstruction1.to_json())

# convert the object into a dict
dps_job_instruction1_dict = dps_job_instruction1_instance.to_dict()
# create an instance of DpsJobInstruction1 from a dict
dps_job_instruction1_from_dict = DpsJobInstruction1.from_dict(dps_job_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


