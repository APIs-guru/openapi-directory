# ProgramInformationBatchProgram

The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly. If this is specified, it will overrite the value specfified in the metadata file. If this is specified, the metadata file should only contain one program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**air_date** | **str** | The airDate for the program in ISO 8601 format. | 
**title** | **str** | The title of the program. | 

## Example

```python
from openapi_client.models.program_information_batch_program import ProgramInformationBatchProgram

# TODO update the JSON string below
json = "{}"
# create an instance of ProgramInformationBatchProgram from a JSON string
program_information_batch_program_instance = ProgramInformationBatchProgram.from_json(json)
# print the JSON string representation of the object
print(ProgramInformationBatchProgram.to_json())

# convert the object into a dict
program_information_batch_program_dict = program_information_batch_program_instance.to_dict()
# create an instance of ProgramInformationBatchProgram from a dict
program_information_batch_program_from_dict = ProgramInformationBatchProgram.from_dict(program_information_batch_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


