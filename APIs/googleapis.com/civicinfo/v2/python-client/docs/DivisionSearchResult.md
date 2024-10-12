# DivisionSearchResult

Represents a political geographic division that matches the requested query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aliases** | **List[str]** | Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district. | [optional] 
**name** | **str** | The name of the division. | [optional] 
**ocd_id** | **str** | The unique Open Civic Data identifier for this division | [optional] 

## Example

```python
from openapi_client.models.division_search_result import DivisionSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of DivisionSearchResult from a JSON string
division_search_result_instance = DivisionSearchResult.from_json(json)
# print the JSON string representation of the object
print(DivisionSearchResult.to_json())

# convert the object into a dict
division_search_result_dict = division_search_result_instance.to_dict()
# create an instance of DivisionSearchResult from a dict
division_search_result_from_dict = DivisionSearchResult.from_dict(division_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


