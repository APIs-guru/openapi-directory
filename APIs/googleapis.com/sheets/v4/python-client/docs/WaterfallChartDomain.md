# WaterfallChartDomain

The domain of a waterfall chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ChartData**](ChartData.md) |  | [optional] 
**reversed** | **bool** | True to reverse the order of the domain values (horizontal axis). | [optional] 

## Example

```python
from openapi_client.models.waterfall_chart_domain import WaterfallChartDomain

# TODO update the JSON string below
json = "{}"
# create an instance of WaterfallChartDomain from a JSON string
waterfall_chart_domain_instance = WaterfallChartDomain.from_json(json)
# print the JSON string representation of the object
print(WaterfallChartDomain.to_json())

# convert the object into a dict
waterfall_chart_domain_dict = waterfall_chart_domain_instance.to_dict()
# create an instance of WaterfallChartDomain from a dict
waterfall_chart_domain_from_dict = WaterfallChartDomain.from_dict(waterfall_chart_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


