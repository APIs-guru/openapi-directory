# MarketplacesListResult

Result of listing marketplaces. It contains a list of available marketplaces in reverse chronological order by billing period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[Marketplace]**](Marketplace.md) | The list of marketplaces. | [optional] [readonly] 

## Example

```python
from openapi_client.models.marketplaces_list_result import MarketplacesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplacesListResult from a JSON string
marketplaces_list_result_instance = MarketplacesListResult.from_json(json)
# print the JSON string representation of the object
print(MarketplacesListResult.to_json())

# convert the object into a dict
marketplaces_list_result_dict = marketplaces_list_result_instance.to_dict()
# create an instance of MarketplacesListResult from a dict
marketplaces_list_result_from_dict = MarketplacesListResult.from_dict(marketplaces_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


