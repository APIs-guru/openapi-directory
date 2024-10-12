# RunTransferJobRequest

Request passed to RunTransferJob.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | Required. The ID of the Google Cloud project that owns the transfer job. | [optional] 

## Example

```python
from openapi_client.models.run_transfer_job_request import RunTransferJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunTransferJobRequest from a JSON string
run_transfer_job_request_instance = RunTransferJobRequest.from_json(json)
# print the JSON string representation of the object
print(RunTransferJobRequest.to_json())

# convert the object into a dict
run_transfer_job_request_dict = run_transfer_job_request_instance.to_dict()
# create an instance of RunTransferJobRequest from a dict
run_transfer_job_request_from_dict = RunTransferJobRequest.from_dict(run_transfer_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


