# Bin

A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin's start and end values are given in the value type of the metric it represents. For example, \"first contentful paint\" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, \"cumulative layout shift\" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**density** | **float** | The proportion of users that experienced this bin&#39;s value for the given metric. | [optional] 
**end** | **object** | End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf. | [optional] 
**start** | **object** | Start is the beginning of the data bin. | [optional] 

## Example

```python
from openapi_client.models.bin import Bin

# TODO update the JSON string below
json = "{}"
# create an instance of Bin from a JSON string
bin_instance = Bin.from_json(json)
# print the JSON string representation of the object
print(Bin.to_json())

# convert the object into a dict
bin_dict = bin_instance.to_dict()
# create an instance of Bin from a dict
bin_from_dict = Bin.from_dict(bin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


