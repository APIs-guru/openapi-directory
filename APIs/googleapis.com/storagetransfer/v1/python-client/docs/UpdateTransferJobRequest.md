# UpdateTransferJobRequest

Request passed to UpdateTransferJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | Required. The ID of the Google Cloud project that owns the job. | [optional] 
**transfer_job** | [**TransferJob**](TransferJob.md) |  | [optional] 
**update_transfer_job_field_mask** | **str** | The field mask of the fields in &#x60;transferJob&#x60; that are to be updated in this request. Fields in &#x60;transferJob&#x60; that can be updated are: description, transfer_spec, notification_config, logging_config, and status. To update the &#x60;transfer_spec&#x60; of the job, a complete transfer specification must be provided. An incomplete specification missing any required fields is rejected with the error INVALID_ARGUMENT. | [optional] 

## Example

```python
from openapi_client.models.update_transfer_job_request import UpdateTransferJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTransferJobRequest from a JSON string
update_transfer_job_request_instance = UpdateTransferJobRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateTransferJobRequest.to_json())

# convert the object into a dict
update_transfer_job_request_dict = update_transfer_job_request_instance.to_dict()
# create an instance of UpdateTransferJobRequest from a dict
update_transfer_job_request_from_dict = UpdateTransferJobRequest.from_dict(update_transfer_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


