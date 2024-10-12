# ListRepositoriesResponse

The response from listing repositories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token to retrieve the next page of repositories, or empty if there are no more repositories to return. | [optional] 
**repositories** | [**List[Repository]**](Repository.md) | The repositories returned. | [optional] 

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


