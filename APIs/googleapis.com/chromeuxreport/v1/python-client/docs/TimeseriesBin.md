# TimeseriesBin

A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, \"first contentful paint\" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, \"cumulative layout shift\" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**densities** | **List[float]** | The proportion of users that experienced this bin&#39;s value for the given metric in a given collection period; the index for each of these entries corresponds to an entry in the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field. Thus, the length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message. | [optional] 
**end** | **object** | End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf. | [optional] 
**start** | **object** | Start is the beginning of the data bin. | [optional] 

## Example

```python
from openapi_client.models.timeseries_bin import TimeseriesBin

# TODO update the JSON string below
json = "{}"
# create an instance of TimeseriesBin from a JSON string
timeseries_bin_instance = TimeseriesBin.from_json(json)
# print the JSON string representation of the object
print(TimeseriesBin.to_json())

# convert the object into a dict
timeseries_bin_dict = timeseries_bin_instance.to_dict()
# create an instance of TimeseriesBin from a dict
timeseries_bin_from_dict = TimeseriesBin.from_dict(timeseries_bin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


