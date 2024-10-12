# JobCancelResponse

Describes format of a jobs cancellation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job** | [**Job**](Job.md) |  | [optional] 
**kind** | **str** | The resource type of the response. | [optional] [default to 'bigquery#jobCancelResponse']

## Example

```python
from openapi_client.models.job_cancel_response import JobCancelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JobCancelResponse from a JSON string
job_cancel_response_instance = JobCancelResponse.from_json(json)
# print the JSON string representation of the object
print(JobCancelResponse.to_json())

# convert the object into a dict
job_cancel_response_dict = job_cancel_response_instance.to_dict()
# create an instance of JobCancelResponse from a dict
job_cancel_response_from_dict = JobCancelResponse.from_dict(job_cancel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


