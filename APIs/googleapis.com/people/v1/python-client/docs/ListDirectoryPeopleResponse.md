# ListDirectoryPeopleResponse

The response to a request for the authenticated user's domain directory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**next_sync_token** | **str** | A token, which can be sent as &#x60;sync_token&#x60; to retrieve changes since the last request. Request must set &#x60;request_sync_token&#x60; to return the sync token. | [optional] 
**people** | [**List[Person]**](Person.md) | The list of people in the domain directory. | [optional] 

## Example

```python
from openapi_client.models.list_directory_people_response import ListDirectoryPeopleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDirectoryPeopleResponse from a JSON string
list_directory_people_response_instance = ListDirectoryPeopleResponse.from_json(json)
# print the JSON string representation of the object
print(ListDirectoryPeopleResponse.to_json())

# convert the object into a dict
list_directory_people_response_dict = list_directory_people_response_instance.to_dict()
# create an instance of ListDirectoryPeopleResponse from a dict
list_directory_people_response_from_dict = ListDirectoryPeopleResponse.from_dict(list_directory_people_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


