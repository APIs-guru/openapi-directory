# GetAuthorNameUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**GetAuthorNameUsingGET200ResponseData**](GetAuthorNameUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_author_name_using_get200_response import GetAuthorNameUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetAuthorNameUsingGET200Response from a JSON string
get_author_name_using_get200_response_instance = GetAuthorNameUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(GetAuthorNameUsingGET200Response.to_json())

# convert the object into a dict
get_author_name_using_get200_response_dict = get_author_name_using_get200_response_instance.to_dict()
# create an instance of GetAuthorNameUsingGET200Response from a dict
get_author_name_using_get200_response_from_dict = GetAuthorNameUsingGET200Response.from_dict(get_author_name_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


