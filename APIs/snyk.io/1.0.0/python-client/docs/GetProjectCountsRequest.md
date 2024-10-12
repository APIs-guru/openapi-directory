# GetProjectCountsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetProjectCountsRequestFilters**](GetProjectCountsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_project_counts_request import GetProjectCountsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetProjectCountsRequest from a JSON string
get_project_counts_request_instance = GetProjectCountsRequest.from_json(json)
# print the JSON string representation of the object
print(GetProjectCountsRequest.to_json())

# convert the object into a dict
get_project_counts_request_dict = get_project_counts_request_instance.to_dict()
# create an instance of GetProjectCountsRequest from a dict
get_project_counts_request_from_dict = GetProjectCountsRequest.from_dict(get_project_counts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


