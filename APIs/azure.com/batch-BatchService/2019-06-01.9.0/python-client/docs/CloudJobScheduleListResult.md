# CloudJobScheduleListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[CloudJobSchedule]**](CloudJobSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_job_schedule_list_result import CloudJobScheduleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CloudJobScheduleListResult from a JSON string
cloud_job_schedule_list_result_instance = CloudJobScheduleListResult.from_json(json)
# print the JSON string representation of the object
print(CloudJobScheduleListResult.to_json())

# convert the object into a dict
cloud_job_schedule_list_result_dict = cloud_job_schedule_list_result_instance.to_dict()
# create an instance of CloudJobScheduleListResult from a dict
cloud_job_schedule_list_result_from_dict = CloudJobScheduleListResult.from_dict(cloud_job_schedule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


