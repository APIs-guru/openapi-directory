# DescendantListResult

Describes the result of the request to view descendants.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] [readonly] 
**value** | [**List[DescendantInfo]**](DescendantInfo.md) | The list of descendants. | [optional] 

## Example

```python
from openapi_client.models.descendant_list_result import DescendantListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DescendantListResult from a JSON string
descendant_list_result_instance = DescendantListResult.from_json(json)
# print the JSON string representation of the object
print(DescendantListResult.to_json())

# convert the object into a dict
descendant_list_result_dict = descendant_list_result_instance.to_dict()
# create an instance of DescendantListResult from a dict
descendant_list_result_from_dict = DescendantListResult.from_dict(descendant_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


