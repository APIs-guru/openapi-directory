# GetClusterSolution404Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Error message | [optional] 
**status** | **str** | status | [optional] [default to 'finished']

## Example

```python
from openapi_client.models.get_cluster_solution404_response import GetClusterSolution404Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetClusterSolution404Response from a JSON string
get_cluster_solution404_response_instance = GetClusterSolution404Response.from_json(json)
# print the JSON string representation of the object
print(GetClusterSolution404Response.to_json())

# convert the object into a dict
get_cluster_solution404_response_dict = get_cluster_solution404_response_instance.to_dict()
# create an instance of GetClusterSolution404Response from a dict
get_cluster_solution404_response_from_dict = GetClusterSolution404Response.from_dict(get_cluster_solution404_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


