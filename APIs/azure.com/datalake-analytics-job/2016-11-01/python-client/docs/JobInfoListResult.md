# JobInfoListResult

List of JobInfo items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | the link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[JobInformationBasic]**](JobInformationBasic.md) | the list of JobInfo items. | [optional] [readonly] 

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


