# Dimension

Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be \"Paris\" or \"New York\". Requests are allowed up to 9 dimensions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_expression** | [**DimensionExpression**](DimensionExpression.md) |  | [optional] 
**name** | **str** | The name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names supported by core reporting methods such as &#x60;runReport&#x60; and &#x60;batchRunReports&#x60;. See [Realtime Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#dimensions) for the list of dimension names supported by the &#x60;runRealtimeReport&#x60; method. See [Funnel Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#dimensions) for the list of dimension names supported by the &#x60;runFunnelReport&#x60; method. If &#x60;dimensionExpression&#x60; is specified, &#x60;name&#x60; can be any string that you would like within the allowed character set. For example if a &#x60;dimensionExpression&#x60; concatenates &#x60;country&#x60; and &#x60;city&#x60;, you could call that dimension &#x60;countryAndCity&#x60;. Dimension names that you choose must match the regular expression &#x60;^[a-zA-Z0-9_]$&#x60;. Dimensions are referenced by &#x60;name&#x60; in &#x60;dimensionFilter&#x60;, &#x60;orderBys&#x60;, &#x60;dimensionExpression&#x60;, and &#x60;pivots&#x60;. | [optional] 

## Example

```python
from openapi_client.models.dimension import Dimension

# TODO update the JSON string below
json = "{}"
# create an instance of Dimension from a JSON string
dimension_instance = Dimension.from_json(json)
# print the JSON string representation of the object
print(Dimension.to_json())

# convert the object into a dict
dimension_dict = dimension_instance.to_dict()
# create an instance of Dimension from a dict
dimension_from_dict = Dimension.from_dict(dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


