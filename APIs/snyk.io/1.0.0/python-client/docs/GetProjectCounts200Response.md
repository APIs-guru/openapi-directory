# GetProjectCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[GetProjectCounts200ResponseResultsInner]**](GetProjectCounts200ResponseResultsInner.md) | A list of project counts by day | 

## Example

```python
from openapi_client.models.get_project_counts200_response import GetProjectCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetProjectCounts200Response from a JSON string
get_project_counts200_response_instance = GetProjectCounts200Response.from_json(json)
# print the JSON string representation of the object
print(GetProjectCounts200Response.to_json())

# convert the object into a dict
get_project_counts200_response_dict = get_project_counts200_response_instance.to_dict()
# create an instance of GetProjectCounts200Response from a dict
get_project_counts200_response_from_dict = GetProjectCounts200Response.from_dict(get_project_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


