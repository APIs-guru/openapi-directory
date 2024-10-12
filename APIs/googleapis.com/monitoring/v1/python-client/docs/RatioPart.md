# RatioPart

Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**Aggregation**](Aggregation.md) |  | [optional] 
**filter** | **str** | Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query. | [optional] 

## Example

```python
from openapi_client.models.ratio_part import RatioPart

# TODO update the JSON string below
json = "{}"
# create an instance of RatioPart from a JSON string
ratio_part_instance = RatioPart.from_json(json)
# print the JSON string representation of the object
print(RatioPart.to_json())

# convert the object into a dict
ratio_part_dict = ratio_part_instance.to_dict()
# create an instance of RatioPart from a dict
ratio_part_from_dict = RatioPart.from_dict(ratio_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


