# RetryPortabilityArchiveResponse

Response from retrying a Portability Archive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_job_id** | **str** | The archive job ID that is initiated by the retry endpoint. This can be used to get the state of the new job. | [optional] 

## Example

```python
from openapi_client.models.retry_portability_archive_response import RetryPortabilityArchiveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetryPortabilityArchiveResponse from a JSON string
retry_portability_archive_response_instance = RetryPortabilityArchiveResponse.from_json(json)
# print the JSON string representation of the object
print(RetryPortabilityArchiveResponse.to_json())

# convert the object into a dict
retry_portability_archive_response_dict = retry_portability_archive_response_instance.to_dict()
# create an instance of RetryPortabilityArchiveResponse from a dict
retry_portability_archive_response_from_dict = RetryPortabilityArchiveResponse.from_dict(retry_portability_archive_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


