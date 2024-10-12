# ExtrasJobResultsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[JobResult]**](JobResult.md) |  | 

## Example

```python
from openapi_client.models.extras_job_results_list200_response import ExtrasJobResultsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ExtrasJobResultsList200Response from a JSON string
extras_job_results_list200_response_instance = ExtrasJobResultsList200Response.from_json(json)
# print the JSON string representation of the object
print(ExtrasJobResultsList200Response.to_json())

# convert the object into a dict
extras_job_results_list200_response_dict = extras_job_results_list200_response_instance.to_dict()
# create an instance of ExtrasJobResultsList200Response from a dict
extras_job_results_list200_response_from_dict = ExtrasJobResultsList200Response.from_dict(extras_job_results_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


