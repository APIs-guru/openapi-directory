# JobRecurrenceInformationListResult

List of job recurrence information items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[JobRecurrenceInformation]**](JobRecurrenceInformation.md) | The list of job recurrence information items. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_recurrence_information_list_result import JobRecurrenceInformationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobRecurrenceInformationListResult from a JSON string
job_recurrence_information_list_result_instance = JobRecurrenceInformationListResult.from_json(json)
# print the JSON string representation of the object
print(JobRecurrenceInformationListResult.to_json())

# convert the object into a dict
job_recurrence_information_list_result_dict = job_recurrence_information_list_result_instance.to_dict()
# create an instance of JobRecurrenceInformationListResult from a dict
job_recurrence_information_list_result_from_dict = JobRecurrenceInformationListResult.from_dict(job_recurrence_information_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


