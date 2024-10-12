# BatchRunReportsRequest

The batch request containing multiple report requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[RunReportRequest]**](RunReportRequest.md) | Individual requests. Each request has a separate report response. Each batch request is allowed up to 5 requests. | [optional] 

## Example

```python
from openapi_client.models.batch_run_reports_request import BatchRunReportsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchRunReportsRequest from a JSON string
batch_run_reports_request_instance = BatchRunReportsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchRunReportsRequest.to_json())

# convert the object into a dict
batch_run_reports_request_dict = batch_run_reports_request_instance.to_dict()
# create an instance of BatchRunReportsRequest from a dict
batch_run_reports_request_from_dict = BatchRunReportsRequest.from_dict(batch_run_reports_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


