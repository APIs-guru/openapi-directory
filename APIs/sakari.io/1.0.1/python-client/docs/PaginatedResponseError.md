# PaginatedResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.paginated_response_error import PaginatedResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseError from a JSON string
paginated_response_error_instance = PaginatedResponseError.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseError.to_json())

# convert the object into a dict
paginated_response_error_dict = paginated_response_error_instance.to_dict()
# create an instance of PaginatedResponseError from a dict
paginated_response_error_from_dict = PaginatedResponseError.from_dict(paginated_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


