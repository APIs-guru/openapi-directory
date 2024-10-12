# ListWorkloadProfilesResponse

List workloadResponse returns a response with the list of workload overview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Output only. A token identifying a page of results the server should return | [optional] [readonly] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 
**workload_overviews** | [**List[WorkloadProfileOverview]**](WorkloadProfileOverview.md) | Output only. The list of Workload Overview | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_workload_profiles_response import ListWorkloadProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWorkloadProfilesResponse from a JSON string
list_workload_profiles_response_instance = ListWorkloadProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(ListWorkloadProfilesResponse.to_json())

# convert the object into a dict
list_workload_profiles_response_dict = list_workload_profiles_response_instance.to_dict()
# create an instance of ListWorkloadProfilesResponse from a dict
list_workload_profiles_response_from_dict = ListWorkloadProfilesResponse.from_dict(list_workload_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


