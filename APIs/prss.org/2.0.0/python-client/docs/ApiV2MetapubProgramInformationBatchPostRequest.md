# ApiV2MetapubProgramInformationBatchPostRequest

The batch operation definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the metadata file defining the create or update actions to be performed on one or more EPG programs. For more information on how RadioDNS EPG maps to ContentDepot &lt;a href&#x3D;\&quot;/api/epg-cd-mapping.html\&quot;&gt;click here &lt;/a&gt; | 
**name** | **str** | An optional human readable name for the batch. | [optional] 
**program** | [**ApiV2MetapubProgramInformationBatchPostRequestProgram**](ApiV2MetapubProgramInformationBatchPostRequestProgram.md) |  | [optional] 
**uri** | **str** | The URI to the metadata file. Currently only the &#x60;&#x60;&#x60;cddrive&#x60;&#x60;&#x60; scheme is supported. | 

## Example

```python
from openapi_client.models.api_v2_metapub_program_information_batch_post_request import ApiV2MetapubProgramInformationBatchPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV2MetapubProgramInformationBatchPostRequest from a JSON string
api_v2_metapub_program_information_batch_post_request_instance = ApiV2MetapubProgramInformationBatchPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV2MetapubProgramInformationBatchPostRequest.to_json())

# convert the object into a dict
api_v2_metapub_program_information_batch_post_request_dict = api_v2_metapub_program_information_batch_post_request_instance.to_dict()
# create an instance of ApiV2MetapubProgramInformationBatchPostRequest from a dict
api_v2_metapub_program_information_batch_post_request_from_dict = ApiV2MetapubProgramInformationBatchPostRequest.from_dict(api_v2_metapub_program_information_batch_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


