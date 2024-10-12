# ListSearchApplicationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**search_applications** | [**List[SearchApplication]**](SearchApplication.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_search_applications_response import ListSearchApplicationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSearchApplicationsResponse from a JSON string
list_search_applications_response_instance = ListSearchApplicationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSearchApplicationsResponse.to_json())

# convert the object into a dict
list_search_applications_response_dict = list_search_applications_response_instance.to_dict()
# create an instance of ListSearchApplicationsResponse from a dict
list_search_applications_response_from_dict = ListSearchApplicationsResponse.from_dict(list_search_applications_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


