# ListAllProjectsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ListAllProjectsRequestFilters**](ListAllProjectsRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_all_projects_request import ListAllProjectsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjectsRequest from a JSON string
list_all_projects_request_instance = ListAllProjectsRequest.from_json(json)
# print the JSON string representation of the object
print(ListAllProjectsRequest.to_json())

# convert the object into a dict
list_all_projects_request_dict = list_all_projects_request_instance.to_dict()
# create an instance of ListAllProjectsRequest from a dict
list_all_projects_request_from_dict = ListAllProjectsRequest.from_dict(list_all_projects_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


