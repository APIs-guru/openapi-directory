# ListSessionsOfAuthorUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**ListSessionsOfAuthorUsingGET200ResponseData**](ListSessionsOfAuthorUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_sessions_of_author_using_get200_response import ListSessionsOfAuthorUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListSessionsOfAuthorUsingGET200Response from a JSON string
list_sessions_of_author_using_get200_response_instance = ListSessionsOfAuthorUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(ListSessionsOfAuthorUsingGET200Response.to_json())

# convert the object into a dict
list_sessions_of_author_using_get200_response_dict = list_sessions_of_author_using_get200_response_instance.to_dict()
# create an instance of ListSessionsOfAuthorUsingGET200Response from a dict
list_sessions_of_author_using_get200_response_from_dict = ListSessionsOfAuthorUsingGET200Response.from_dict(list_sessions_of_author_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


