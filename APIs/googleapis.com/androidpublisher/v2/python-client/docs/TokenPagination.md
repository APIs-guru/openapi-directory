# TokenPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**previous_page_token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.token_pagination import TokenPagination

# TODO update the JSON string below
json = "{}"
# create an instance of TokenPagination from a JSON string
token_pagination_instance = TokenPagination.from_json(json)
# print the JSON string representation of the object
print(TokenPagination.to_json())

# convert the object into a dict
token_pagination_dict = token_pagination_instance.to_dict()
# create an instance of TokenPagination from a dict
token_pagination_from_dict = TokenPagination.from_dict(token_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


