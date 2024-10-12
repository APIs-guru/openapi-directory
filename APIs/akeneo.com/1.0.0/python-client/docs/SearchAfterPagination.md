# SearchAfterPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**AssetFamiliesAllOfLinks**](AssetFamiliesAllOfLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_after_pagination import SearchAfterPagination

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAfterPagination from a JSON string
search_after_pagination_instance = SearchAfterPagination.from_json(json)
# print the JSON string representation of the object
print(SearchAfterPagination.to_json())

# convert the object into a dict
search_after_pagination_dict = search_after_pagination_instance.to_dict()
# create an instance of SearchAfterPagination from a dict
search_after_pagination_from_dict = SearchAfterPagination.from_dict(search_after_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


