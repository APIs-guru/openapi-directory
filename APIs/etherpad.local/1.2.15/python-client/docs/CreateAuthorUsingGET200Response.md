# CreateAuthorUsingGET200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] 
**data** | [**CreateAuthorUsingGET200ResponseData**](CreateAuthorUsingGET200ResponseData.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_author_using_get200_response import CreateAuthorUsingGET200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAuthorUsingGET200Response from a JSON string
create_author_using_get200_response_instance = CreateAuthorUsingGET200Response.from_json(json)
# print the JSON string representation of the object
print(CreateAuthorUsingGET200Response.to_json())

# convert the object into a dict
create_author_using_get200_response_dict = create_author_using_get200_response_instance.to_dict()
# create an instance of CreateAuthorUsingGET200Response from a dict
create_author_using_get200_response_from_dict = CreateAuthorUsingGET200Response.from_dict(create_author_using_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


