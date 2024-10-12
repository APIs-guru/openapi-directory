# PaginatedResponsePagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.paginated_response_pagination import PaginatedResponsePagination

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponsePagination from a JSON string
paginated_response_pagination_instance = PaginatedResponsePagination.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponsePagination.to_json())

# convert the object into a dict
paginated_response_pagination_dict = paginated_response_pagination_instance.to_dict()
# create an instance of PaginatedResponsePagination from a dict
paginated_response_pagination_from_dict = PaginatedResponsePagination.from_dict(paginated_response_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


