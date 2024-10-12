# JobCollection

Collection of jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[Job]**](Job.md) | The list of jobs. | [optional] 

## Example

```python
from openapi_client.models.job_collection import JobCollection

# TODO update the JSON string below
json = "{}"
# create an instance of JobCollection from a JSON string
job_collection_instance = JobCollection.from_json(json)
# print the JSON string representation of the object
print(JobCollection.to_json())

# convert the object into a dict
job_collection_dict = job_collection_instance.to_dict()
# create an instance of JobCollection from a dict
job_collection_from_dict = JobCollection.from_dict(job_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


