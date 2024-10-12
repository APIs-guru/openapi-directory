# ProgramInformationBatch

An electronic program guide (EPG) batch operation to create or update metadata on one or more guide programs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** | The date and time the batch was created. | 
**finished_date** | **str** | The date and time the batch finished (either successful or failed). | [optional] 
**format** | **str** | The format of the metadata file defining the create or update actions to be performed on one or more EPG programs. | 
**id** | **int** | The ID of the batch. | 
**message** | **str** | The human readable success or failure message. | [optional] 
**name** | **str** | The optional name of the batch for human reference. | [optional] 
**program** | [**ProgramInformationBatchProgram**](ProgramInformationBatchProgram.md) |  | [optional] 
**status** | **str** | The current processing status. | 
**uri** | **str** | The URI to the metadata file defining the batch creates/updates. | [optional] 

## Example

```python
from openapi_client.models.program_information_batch import ProgramInformationBatch

# TODO update the JSON string below
json = "{}"
# create an instance of ProgramInformationBatch from a JSON string
program_information_batch_instance = ProgramInformationBatch.from_json(json)
# print the JSON string representation of the object
print(ProgramInformationBatch.to_json())

# convert the object into a dict
program_information_batch_dict = program_information_batch_instance.to_dict()
# create an instance of ProgramInformationBatch from a dict
program_information_batch_from_dict = ProgramInformationBatch.from_dict(program_information_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


