# BasicSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spaces** | [**List[Space]**](Space.md) | List of spaces | [optional] 
**status** | **str** | The status of the search (NORESULT, ERROR, TIMEOUT, MORERESULT) | [optional] 

## Example

```python
from openapi_client.models.basic_search_result import BasicSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of BasicSearchResult from a JSON string
basic_search_result_instance = BasicSearchResult.from_json(json)
# print the JSON string representation of the object
print(BasicSearchResult.to_json())

# convert the object into a dict
basic_search_result_dict = basic_search_result_instance.to_dict()
# create an instance of BasicSearchResult from a dict
basic_search_result_from_dict = BasicSearchResult.from_dict(basic_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


