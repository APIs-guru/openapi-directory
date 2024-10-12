# SourceAndDestination

A combination of a source range and how to extend that source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | **str** | The dimension that data should be filled into. | [optional] 
**fill_length** | **int** | The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source. | [optional] 
**source** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_and_destination import SourceAndDestination

# TODO update the JSON string below
json = "{}"
# create an instance of SourceAndDestination from a JSON string
source_and_destination_instance = SourceAndDestination.from_json(json)
# print the JSON string representation of the object
print(SourceAndDestination.to_json())

# convert the object into a dict
source_and_destination_dict = source_and_destination_instance.to_dict()
# create an instance of SourceAndDestination from a dict
source_and_destination_from_dict = SourceAndDestination.from_dict(source_and_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


