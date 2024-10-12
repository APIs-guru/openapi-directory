# PaginationWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Pagination]**](Pagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.pagination_wrapped import PaginationWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of PaginationWrapped from a JSON string
pagination_wrapped_instance = PaginationWrapped.from_json(json)
# print the JSON string representation of the object
print(PaginationWrapped.to_json())

# convert the object into a dict
pagination_wrapped_dict = pagination_wrapped_instance.to_dict()
# create an instance of PaginationWrapped from a dict
pagination_wrapped_from_dict = PaginationWrapped.from_dict(pagination_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


