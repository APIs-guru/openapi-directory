# ItemsSummaryValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SummaryValue]**](SummaryValue.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_summary_value import ItemsSummaryValue

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsSummaryValue from a JSON string
items_summary_value_instance = ItemsSummaryValue.from_json(json)
# print the JSON string representation of the object
print(ItemsSummaryValue.to_json())

# convert the object into a dict
items_summary_value_dict = items_summary_value_instance.to_dict()
# create an instance of ItemsSummaryValue from a dict
items_summary_value_from_dict = ItemsSummaryValue.from_dict(items_summary_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


