# ListTransferJobsResponse

Response from ListTransferJobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The list next page token. | [optional] 
**transfer_jobs** | [**List[TransferJob]**](TransferJob.md) | A list of transfer jobs. | [optional] 

## Example

```python
from openapi_client.models.list_transfer_jobs_response import ListTransferJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTransferJobsResponse from a JSON string
list_transfer_jobs_response_instance = ListTransferJobsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTransferJobsResponse.to_json())

# convert the object into a dict
list_transfer_jobs_response_dict = list_transfer_jobs_response_instance.to_dict()
# create an instance of ListTransferJobsResponse from a dict
list_transfer_jobs_response_from_dict = ListTransferJobsResponse.from_dict(list_transfer_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


