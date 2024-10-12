# ListReposResponse

Response for ListRepos. The size is not set in the returned repositories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If non-empty, additional repositories exist within the project. These can be retrieved by including this value in the next ListReposRequest&#39;s page_token field. | [optional] 
**repos** | [**List[Repo]**](Repo.md) | The listed repos. | [optional] 

## Example

```python
from openapi_client.models.list_repos_response import ListReposResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReposResponse from a JSON string
list_repos_response_instance = ListReposResponse.from_json(json)
# print the JSON string representation of the object
print(ListReposResponse.to_json())

# convert the object into a dict
list_repos_response_dict = list_repos_response_instance.to_dict()
# create an instance of ListReposResponse from a dict
list_repos_response_from_dict = ListReposResponse.from_dict(list_repos_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


