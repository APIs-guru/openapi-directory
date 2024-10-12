# BatchDeleteJobsRequest

Input only. Batch delete jobs request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. The filter string specifies the jobs to be deleted. Supported operator: &#x3D;, AND The fields eligible for filtering are: * &#x60;companyName&#x60; (Required) * &#x60;requisitionId&#x60; (Required) Sample Query: companyName &#x3D; \&quot;projects/api-test-project/companies/123\&quot; AND requisitionId &#x3D; \&quot;req-1\&quot; | [optional] 

## Example

```python
from openapi_client.models.batch_delete_jobs_request import BatchDeleteJobsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteJobsRequest from a JSON string
batch_delete_jobs_request_instance = BatchDeleteJobsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteJobsRequest.to_json())

# convert the object into a dict
batch_delete_jobs_request_dict = batch_delete_jobs_request_instance.to_dict()
# create an instance of BatchDeleteJobsRequest from a dict
batch_delete_jobs_request_from_dict = BatchDeleteJobsRequest.from_dict(batch_delete_jobs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


