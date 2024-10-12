# CurrentJobDetails

Current job details of the migration item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | The ARM Id of the job being executed. | [optional] 
**job_name** | **str** | The job name. | [optional] 
**start_time** | **datetime** | The start time of the job. | [optional] 

## Example

```python
from openapi_client.models.current_job_details import CurrentJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CurrentJobDetails from a JSON string
current_job_details_instance = CurrentJobDetails.from_json(json)
# print the JSON string representation of the object
print(CurrentJobDetails.to_json())

# convert the object into a dict
current_job_details_dict = current_job_details_instance.to_dict()
# create an instance of CurrentJobDetails from a dict
current_job_details_from_dict = CurrentJobDetails.from_dict(current_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


