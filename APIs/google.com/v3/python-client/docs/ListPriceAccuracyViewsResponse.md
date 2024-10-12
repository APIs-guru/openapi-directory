# ListPriceAccuracyViewsResponse

Response message for PriceAccuracyViewService.ListPriceAccuracyViews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_accuracy_views** | [**List[PriceAccuracyView]**](PriceAccuracyView.md) | The list of rows that match the query. | [optional] 

## Example

```python
from openapi_client.models.list_price_accuracy_views_response import ListPriceAccuracyViewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPriceAccuracyViewsResponse from a JSON string
list_price_accuracy_views_response_instance = ListPriceAccuracyViewsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPriceAccuracyViewsResponse.to_json())

# convert the object into a dict
list_price_accuracy_views_response_dict = list_price_accuracy_views_response_instance.to_dict()
# create an instance of ListPriceAccuracyViewsResponse from a dict
list_price_accuracy_views_response_from_dict = ListPriceAccuracyViewsResponse.from_dict(list_price_accuracy_views_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


