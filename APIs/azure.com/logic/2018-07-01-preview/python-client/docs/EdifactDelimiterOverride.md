# EdifactDelimiterOverride

The Edifact delimiter override settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_separator** | **int** | The component separator. | 
**data_element_separator** | **int** | The data element separator. | 
**decimal_point_indicator** | [**EdifactDecimalIndicator**](EdifactDecimalIndicator.md) |  | 
**message_association_assigned_code** | **str** | The message association assigned code. | [optional] 
**message_id** | **str** | The message id. | [optional] 
**message_release** | **str** | The message release. | [optional] 
**message_version** | **str** | The message version. | [optional] 
**release_indicator** | **int** | The release indicator. | 
**repetition_separator** | **int** | The repetition separator. | 
**segment_terminator** | **int** | The segment terminator. | 
**segment_terminator_suffix** | [**SegmentTerminatorSuffix**](SegmentTerminatorSuffix.md) |  | 
**target_namespace** | **str** | The target namespace on which this delimiter settings has to be applied. | [optional] 

## Example

```python
from openapi_client.models.edifact_delimiter_override import EdifactDelimiterOverride

# TODO update the JSON string below
json = "{}"
# create an instance of EdifactDelimiterOverride from a JSON string
edifact_delimiter_override_instance = EdifactDelimiterOverride.from_json(json)
# print the JSON string representation of the object
print(EdifactDelimiterOverride.to_json())

# convert the object into a dict
edifact_delimiter_override_dict = edifact_delimiter_override_instance.to_dict()
# create an instance of EdifactDelimiterOverride from a dict
edifact_delimiter_override_from_dict = EdifactDelimiterOverride.from_dict(edifact_delimiter_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


