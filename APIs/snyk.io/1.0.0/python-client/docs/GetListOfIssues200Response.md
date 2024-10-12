# GetListOfIssues200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[GetListOfIssues200ResponseResultsInner]**](GetListOfIssues200ResponseResultsInner.md) | A list of issues | 
**total** | **float** | The total number of results found | 

## Example

```python
from openapi_client.models.get_list_of_issues200_response import GetListOfIssues200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfIssues200Response from a JSON string
get_list_of_issues200_response_instance = GetListOfIssues200Response.from_json(json)
# print the JSON string representation of the object
print(GetListOfIssues200Response.to_json())

# convert the object into a dict
get_list_of_issues200_response_dict = get_list_of_issues200_response_instance.to_dict()
# create an instance of GetListOfIssues200Response from a dict
get_list_of_issues200_response_from_dict = GetListOfIssues200Response.from_dict(get_list_of_issues200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


