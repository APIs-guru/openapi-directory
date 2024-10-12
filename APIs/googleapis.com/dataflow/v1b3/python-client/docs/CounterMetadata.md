# CounterMetadata

CounterMetadata includes all static non-name non-value counter attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Human-readable description of the counter semantics. | [optional] 
**kind** | **str** | Counter aggregation kind. | [optional] 
**other_units** | **str** | A string referring to the unit type. | [optional] 
**standard_units** | **str** | System defined Units, see above enum. | [optional] 

## Example

```python
from openapi_client.models.counter_metadata import CounterMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CounterMetadata from a JSON string
counter_metadata_instance = CounterMetadata.from_json(json)
# print the JSON string representation of the object
print(CounterMetadata.to_json())

# convert the object into a dict
counter_metadata_dict = counter_metadata_instance.to_dict()
# create an instance of CounterMetadata from a dict
counter_metadata_from_dict = CounterMetadata.from_dict(counter_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


