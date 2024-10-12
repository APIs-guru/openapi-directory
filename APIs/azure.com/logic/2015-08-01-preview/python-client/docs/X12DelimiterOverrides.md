# X12DelimiterOverrides


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_separator** | **int** | The component separator. | [optional] 
**data_element_separator** | **int** | The data element separator. | [optional] 
**message_id** | **str** | The message id. | [optional] 
**protocol_version** | **str** | The protocol version. | [optional] 
**replace_character** | **int** | The replacement character. | [optional] 
**replace_separators_in_payload** | **bool** | The value indicating whether to replace separators in payload. | [optional] 
**segment_terminator** | **int** | The segment terminator. | [optional] 
**segment_terminator_suffix** | [**SegmentTerminatorSuffix**](SegmentTerminatorSuffix.md) |  | [optional] 
**target_namespace** | **str** | The target namespace on which this delimiter settings has to be applied. | [optional] 

## Example

```python
from openapi_client.models.x12_delimiter_overrides import X12DelimiterOverrides

# TODO update the JSON string below
json = "{}"
# create an instance of X12DelimiterOverrides from a JSON string
x12_delimiter_overrides_instance = X12DelimiterOverrides.from_json(json)
# print the JSON string representation of the object
print(X12DelimiterOverrides.to_json())

# convert the object into a dict
x12_delimiter_overrides_dict = x12_delimiter_overrides_instance.to_dict()
# create an instance of X12DelimiterOverrides from a dict
x12_delimiter_overrides_from_dict = X12DelimiterOverrides.from_dict(x12_delimiter_overrides_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


