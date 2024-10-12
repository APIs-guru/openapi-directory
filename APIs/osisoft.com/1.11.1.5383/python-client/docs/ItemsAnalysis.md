# ItemsAnalysis


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Analysis]**](Analysis.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_analysis import ItemsAnalysis

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAnalysis from a JSON string
items_analysis_instance = ItemsAnalysis.from_json(json)
# print the JSON string representation of the object
print(ItemsAnalysis.to_json())

# convert the object into a dict
items_analysis_dict = items_analysis_instance.to_dict()
# create an instance of ItemsAnalysis from a dict
items_analysis_from_dict = ItemsAnalysis.from_dict(items_analysis_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


