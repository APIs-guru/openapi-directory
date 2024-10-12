# SearchDirectoryPeopleResponse

The response to a request for people in the authenticated user's domain directory that match the specified query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**people** | [**List[Person]**](Person.md) | The list of people in the domain directory that match the query. | [optional] 
**total_size** | **int** | The total number of items in the list without pagination. | [optional] 

## Example

```python
from openapi_client.models.search_directory_people_response import SearchDirectoryPeopleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchDirectoryPeopleResponse from a JSON string
search_directory_people_response_instance = SearchDirectoryPeopleResponse.from_json(json)
# print the JSON string representation of the object
print(SearchDirectoryPeopleResponse.to_json())

# convert the object into a dict
search_directory_people_response_dict = search_directory_people_response_instance.to_dict()
# create an instance of SearchDirectoryPeopleResponse from a dict
search_directory_people_response_from_dict = SearchDirectoryPeopleResponse.from_dict(search_directory_people_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


