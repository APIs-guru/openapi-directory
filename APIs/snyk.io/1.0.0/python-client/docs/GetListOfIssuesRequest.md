# GetListOfIssuesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**GetListOfIssuesRequestFilters**](GetListOfIssuesRequestFilters.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_list_of_issues_request import GetListOfIssuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfIssuesRequest from a JSON string
get_list_of_issues_request_instance = GetListOfIssuesRequest.from_json(json)
# print the JSON string representation of the object
print(GetListOfIssuesRequest.to_json())

# convert the object into a dict
get_list_of_issues_request_dict = get_list_of_issues_request_instance.to_dict()
# create an instance of GetListOfIssuesRequest from a dict
get_list_of_issues_request_from_dict = GetListOfIssuesRequest.from_dict(get_list_of_issues_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


