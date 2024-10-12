# BasicChartDomain

The domain of a chart. For example, if charting stock prices over time, this would be the date.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | [**ChartData**](ChartData.md) |  | [optional] 
**reversed** | **bool** | True to reverse the order of the domain values (horizontal axis). | [optional] 

## Example

```python
from openapi_client.models.basic_chart_domain import BasicChartDomain

# TODO update the JSON string below
json = "{}"
# create an instance of BasicChartDomain from a JSON string
basic_chart_domain_instance = BasicChartDomain.from_json(json)
# print the JSON string representation of the object
print(BasicChartDomain.to_json())

# convert the object into a dict
basic_chart_domain_dict = basic_chart_domain_instance.to_dict()
# create an instance of BasicChartDomain from a dict
basic_chart_domain_from_dict = BasicChartDomain.from_dict(basic_chart_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


