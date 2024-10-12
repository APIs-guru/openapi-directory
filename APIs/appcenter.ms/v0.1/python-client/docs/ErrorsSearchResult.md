# ErrorsSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[ErrorsListForGroup200ResponseErrorsInner]**](ErrorsListForGroup200ResponseErrorsInner.md) |  | [optional] 
**has_more_results** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.errors_search_result import ErrorsSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsSearchResult from a JSON string
errors_search_result_instance = ErrorsSearchResult.from_json(json)
# print the JSON string representation of the object
print(ErrorsSearchResult.to_json())

# convert the object into a dict
errors_search_result_dict = errors_search_result_instance.to_dict()
# create an instance of ErrorsSearchResult from a dict
errors_search_result_from_dict = ErrorsSearchResult.from_dict(errors_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


