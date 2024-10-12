# DetectedBreak

Detected start or end of a structural component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_prefix** | **bool** | True if break prepends the element. | [optional] 
**type** | **str** | Detected break type. | [optional] 

## Example

```python
from openapi_client.models.detected_break import DetectedBreak

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedBreak from a JSON string
detected_break_instance = DetectedBreak.from_json(json)
# print the JSON string representation of the object
print(DetectedBreak.to_json())

# convert the object into a dict
detected_break_dict = detected_break_instance.to_dict()
# create an instance of DetectedBreak from a dict
detected_break_from_dict = DetectedBreak.from_dict(detected_break_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


