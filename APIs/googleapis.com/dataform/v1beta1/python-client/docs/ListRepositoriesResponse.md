# ListRepositoriesResponse

`ListRepositories` response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**repositories** | [**List[Repository]**](Repository.md) | List of repositories. | [optional] 
**unreachable** | **List[str]** | Locations which could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_repositories_response import ListRepositoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRepositoriesResponse from a JSON string
list_repositories_response_instance = ListRepositoriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListRepositoriesResponse.to_json())

# convert the object into a dict
list_repositories_response_dict = list_repositories_response_instance.to_dict()
# create an instance of ListRepositoriesResponse from a dict
list_repositories_response_from_dict = ListRepositoriesResponse.from_dict(list_repositories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


