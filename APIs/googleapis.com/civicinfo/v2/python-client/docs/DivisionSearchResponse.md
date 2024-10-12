# DivisionSearchResponse

The result of a division search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;civicinfo#divisionSearchResponse\&quot;. | [optional] [default to 'civicinfo#divisionSearchResponse']
**results** | [**List[DivisionSearchResult]**](DivisionSearchResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.division_search_response import DivisionSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DivisionSearchResponse from a JSON string
division_search_response_instance = DivisionSearchResponse.from_json(json)
# print the JSON string representation of the object
print(DivisionSearchResponse.to_json())

# convert the object into a dict
division_search_response_dict = division_search_response_instance.to_dict()
# create an instance of DivisionSearchResponse from a dict
division_search_response_from_dict = DivisionSearchResponse.from_dict(division_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


