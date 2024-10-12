# BatchJobInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**holding_date** | **datetime** | The batch job instructions&#39; holding date | [optional] 
**instructions** | [**DELETE**](DELETE.md) |  | [optional] 
**validate_only** | **bool** | The batch job instructions&#39; validate only | [optional] 

## Example

```python
from openapi_client.models.batch_job_instruction1 import BatchJobInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of BatchJobInstruction1 from a JSON string
batch_job_instruction1_instance = BatchJobInstruction1.from_json(json)
# print the JSON string representation of the object
print(BatchJobInstruction1.to_json())

# convert the object into a dict
batch_job_instruction1_dict = batch_job_instruction1_instance.to_dict()
# create an instance of BatchJobInstruction1 from a dict
batch_job_instruction1_from_dict = BatchJobInstruction1.from_dict(batch_job_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


