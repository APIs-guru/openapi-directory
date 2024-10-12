# Range

Specifies a contiguous range of an indexed collection, such as characters in text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The optional zero-based index of the end of the collection. Required for &#x60;FIXED_RANGE&#x60; ranges. | [optional] 
**start_index** | **int** | The optional zero-based index of the beginning of the collection. Required for &#x60;FIXED_RANGE&#x60; and &#x60;FROM_START_INDEX&#x60; ranges. | [optional] 
**type** | **str** | The type of range. | [optional] 

## Example

```python
from openapi_client.models.range import Range

# TODO update the JSON string below
json = "{}"
# create an instance of Range from a JSON string
range_instance = Range.from_json(json)
# print the JSON string representation of the object
print(Range.to_json())

# convert the object into a dict
range_dict = range_instance.to_dict()
# create an instance of Range from a dict
range_from_dict = Range.from_dict(range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


