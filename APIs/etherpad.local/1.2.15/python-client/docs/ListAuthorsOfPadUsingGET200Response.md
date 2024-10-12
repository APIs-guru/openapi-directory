# ListAuthorsOfPadUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**ListAuthorsOfPadUsingGET200ResponseData**](ListAuthorsOfPadUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_authors_of_pad_using_get200_response import ListAuthorsOfPadUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAuthorsOfPadUsingGET200Response from a JSON string
list_authors_of_pad_using_get200_response_instance = ListAuthorsOfPadUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(ListAuthorsOfPadUsingGET200Response.to_json())

# convert the object into a dict
list_authors_of_pad_using_get200_response_dict = list_authors_of_pad_using_get200_response_instance.to_dict()
# create an instance of ListAuthorsOfPadUsingGET200Response from a dict
list_authors_of_pad_using_get200_response_from_dict = ListAuthorsOfPadUsingGET200Response.from_dict(list_authors_of_pad_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


