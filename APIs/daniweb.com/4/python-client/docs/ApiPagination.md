# ApiPagination


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **float** |  | [optional] 
**offset** | **float** |  | [optional] 
**total_records** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.api_pagination import ApiPagination

# TODO update the JSON string below
json = "{}"
# create an instance of ApiPagination from a JSON string
api_pagination_instance = ApiPagination.from_json(json)
# print the JSON string representation of the object
print(ApiPagination.to_json())

# convert the object into a dict
api_pagination_dict = api_pagination_instance.to_dict()
# create an instance of ApiPagination from a dict
api_pagination_from_dict = ApiPagination.from_dict(api_pagination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


