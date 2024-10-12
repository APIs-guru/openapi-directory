# ApiV2MetapubProgramInformationBatchPostRequestProgram

The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**air_date** | **str** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.api_v2_metapub_program_information_batch_post_request_program import ApiV2MetapubProgramInformationBatchPostRequestProgram

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2MetapubProgramInformationBatchPostRequestProgram from a JSON string
api_v2_metapub_program_information_batch_post_request_program_instance = ApiV2MetapubProgramInformationBatchPostRequestProgram.from_json(json)
# print the JSON string representation of the object
print(ApiV2MetapubProgramInformationBatchPostRequestProgram.to_json())

# convert the object into a dict
api_v2_metapub_program_information_batch_post_request_program_dict = api_v2_metapub_program_information_batch_post_request_program_instance.to_dict()
# create an instance of ApiV2MetapubProgramInformationBatchPostRequestProgram from a dict
api_v2_metapub_program_information_batch_post_request_program_from_dict = ApiV2MetapubProgramInformationBatchPostRequestProgram.from_dict(api_v2_metapub_program_information_batch_post_request_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


