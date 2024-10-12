# DealItemSearchResponse

The result set for the deal item search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deal_items** | [**List[DealItem]**](DealItem.md) | A list of deal items that match the search criteria. | [optional] 
**href** | **str** | The relative path to the current set of results. | [optional] 
**limit** | **int** | The maximum number of items, from the current result set, returned on a single page. Default: 20 | [optional] 
**next** | **str** | The relative path to the next set of results. | [optional] 
**offset** | **int** | The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0 | [optional] 
**prev** | **str** | The relative path to the previous set of results. | [optional] 
**total** | **int** | The total number of matches for the search criteria. | [optional] 

## Example

```python
from openapi_client.models.deal_item_search_response import DealItemSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DealItemSearchResponse from a JSON string
deal_item_search_response_instance = DealItemSearchResponse.from_json(json)
# print the JSON string representation of the object
print(DealItemSearchResponse.to_json())

# convert the object into a dict
deal_item_search_response_dict = deal_item_search_response_instance.to_dict()
# create an instance of DealItemSearchResponse from a dict
deal_item_search_response_from_dict = DealItemSearchResponse.from_dict(deal_item_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


