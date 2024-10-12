# JobCollectionListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL to get the next set of job collections. | [optional] 
**value** | [**List[JobCollectionDefinition]**](JobCollectionDefinition.md) | Gets the job collections. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_collection_list_result import JobCollectionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobCollectionListResult from a JSON string
job_collection_list_result_instance = JobCollectionListResult.from_json(json)
# print the JSON string representation of the object
print(JobCollectionListResult.to_json())

# convert the object into a dict
job_collection_list_result_dict = job_collection_list_result_instance.to_dict()
# create an instance of JobCollectionListResult from a dict
job_collection_list_result_from_dict = JobCollectionListResult.from_dict(job_collection_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


