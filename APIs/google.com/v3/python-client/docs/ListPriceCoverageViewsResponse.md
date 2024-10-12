# ListPriceCoverageViewsResponse

Response message for PriceCoverageViewService.ListPriceCoverageViews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_coverage_views** | [**List[PriceCoverageView]**](PriceCoverageView.md) | Hotel price coverage stats. | [optional] 

## Example

```python
from openapi_client.models.list_price_coverage_views_response import ListPriceCoverageViewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPriceCoverageViewsResponse from a JSON string
list_price_coverage_views_response_instance = ListPriceCoverageViewsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPriceCoverageViewsResponse.to_json())

# convert the object into a dict
list_price_coverage_views_response_dict = list_price_coverage_views_response_instance.to_dict()
# create an instance of ListPriceCoverageViewsResponse from a dict
list_price_coverage_views_response_from_dict = ListPriceCoverageViewsResponse.from_dict(list_price_coverage_views_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


