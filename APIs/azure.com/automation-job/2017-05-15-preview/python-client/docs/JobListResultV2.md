# JobListResultV2

The response model for the list job operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The  link to the next page. | [optional] [readonly] 
**value** | [**List[JobCollectionItem]**](JobCollectionItem.md) | List of jobs. | [optional] 

## Example

```python
from openapi_client.models.job_list_result_v2 import JobListResultV2

# TODO update the JSON string below
json = "{}"
# create an instance of JobListResultV2 from a JSON string
job_list_result_v2_instance = JobListResultV2.from_json(json)
# print the JSON string representation of the object
print(JobListResultV2.to_json())

# convert the object into a dict
job_list_result_v2_dict = job_list_result_v2_instance.to_dict()
# create an instance of JobListResultV2 from a dict
job_list_result_v2_from_dict = JobListResultV2.from_dict(job_list_result_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


