# DimensionFilter

The dimension filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Specifies the dimension name. E.g., NetworkInterface. Valid values are the ones specified in the field \&quot;dimensions\&quot; in the ListMetricDefinitions call. Only &#39;Equality&#39; operator is supported for this property. | [optional] 
**values** | **str** | Specifies the dimension value. E.g., Data0. Valid values are the ones returned in the field \&quot;dimensions\&quot; in the ListMetricDefinitions call. Only &#39;Equality&#39; operator is supported for this property. | [optional] 

## Example

```python
from openapi_client.models.dimension_filter import DimensionFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionFilter from a JSON string
dimension_filter_instance = DimensionFilter.from_json(json)
# print the JSON string representation of the object
print(DimensionFilter.to_json())

# convert the object into a dict
dimension_filter_dict = dimension_filter_instance.to_dict()
# create an instance of DimensionFilter from a dict
dimension_filter_from_dict = DimensionFilter.from_dict(dimension_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


