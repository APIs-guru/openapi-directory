# SimpleSegment

A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**or_filters_for_segment** | [**List[OrFiltersForSegment]**](OrFiltersForSegment.md) | A list of segment filters groups which are combined with logical &#x60;AND&#x60; operator. | [optional] 

## Example

```python
from openapi_client.models.simple_segment import SimpleSegment

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleSegment from a JSON string
simple_segment_instance = SimpleSegment.from_json(json)
# print the JSON string representation of the object
print(SimpleSegment.to_json())

# convert the object into a dict
simple_segment_dict = simple_segment_instance.to_dict()
# create an instance of SimpleSegment from a dict
simple_segment_from_dict = SimpleSegment.from_dict(simple_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


