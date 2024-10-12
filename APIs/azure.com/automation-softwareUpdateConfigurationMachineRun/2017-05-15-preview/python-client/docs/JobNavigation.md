# JobNavigation

Software update configuration machine run job navigation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the job associated with the software update configuration run | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_navigation import JobNavigation

# TODO update the JSON string below
json = "{}"
# create an instance of JobNavigation from a JSON string
job_navigation_instance = JobNavigation.from_json(json)
# print the JSON string representation of the object
print(JobNavigation.to_json())

# convert the object into a dict
job_navigation_dict = job_navigation_instance.to_dict()
# create an instance of JobNavigation from a dict
job_navigation_from_dict = JobNavigation.from_dict(job_navigation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


