# JobInfoListResult

List of jobInfo items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Gets the total count of results that are available, but might not be returned in the current page. | [optional] [readonly] 
**next_link** | **str** | Gets the link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[JobInformation]**](JobInformation.md) | Gets the list of jobInfo items. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_info_list_result import JobInfoListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobInfoListResult from a JSON string
job_info_list_result_instance = JobInfoListResult.from_json(json)
# print the JSON string representation of the object
print(JobInfoListResult.to_json())

# convert the object into a dict
job_info_list_result_dict = job_info_list_result_instance.to_dict()
# create an instance of JobInfoListResult from a dict
job_info_list_result_from_dict = JobInfoListResult.from_dict(job_info_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


