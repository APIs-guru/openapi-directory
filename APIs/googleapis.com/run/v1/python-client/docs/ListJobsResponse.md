# ListJobsResponse

ListJobsResponse is a list of Jobs resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call such as \&quot;run.googleapis.com/v1\&quot;. | [optional] 
**items** | [**List[Job]**](Job.md) | List of Jobs. | [optional] 
**kind** | **str** | The kind of this resource, in this case \&quot;JobsList\&quot;. | [optional] 
**metadata** | [**ListMeta**](ListMeta.md) |  | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_jobs_response import ListJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListJobsResponse from a JSON string
list_jobs_response_instance = ListJobsResponse.from_json(json)
# print the JSON string representation of the object
print(ListJobsResponse.to_json())

# convert the object into a dict
list_jobs_response_dict = list_jobs_response_instance.to_dict()
# create an instance of ListJobsResponse from a dict
list_jobs_response_from_dict = ListJobsResponse.from_dict(list_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


