# InitiatePortabilityArchiveResponse

Response from initiating an Archive job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_job_id** | **str** | The archive job ID that is initiated in the API. This can be used to get the state of the job. | [optional] 

## Example

```python
from openapi_client.models.initiate_portability_archive_response import InitiatePortabilityArchiveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InitiatePortabilityArchiveResponse from a JSON string
initiate_portability_archive_response_instance = InitiatePortabilityArchiveResponse.from_json(json)
# print the JSON string representation of the object
print(InitiatePortabilityArchiveResponse.to_json())

# convert the object into a dict
initiate_portability_archive_response_dict = initiate_portability_archive_response_instance.to_dict()
# create an instance of InitiatePortabilityArchiveResponse from a dict
initiate_portability_archive_response_from_dict = InitiatePortabilityArchiveResponse.from_dict(initiate_portability_archive_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


