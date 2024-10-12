# PaginatedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PaginatedResponseError**](PaginatedResponseError.md) |  | [optional] 
**pagination** | [**PaginatedResponsePagination**](PaginatedResponsePagination.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.paginated_response import PaginatedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponse from a JSON string
paginated_response_instance = PaginatedResponse.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponse.to_json())

# convert the object into a dict
paginated_response_dict = paginated_response_instance.to_dict()
# create an instance of PaginatedResponse from a dict
paginated_response_from_dict = PaginatedResponse.from_dict(paginated_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


