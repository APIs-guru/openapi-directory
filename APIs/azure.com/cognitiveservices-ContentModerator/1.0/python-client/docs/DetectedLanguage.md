# DetectedLanguage

Detect language result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_language** | **str** | The detected language. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**tracking_id** | **str** | The tracking id. | [optional] 

## Example

```python
from openapi_client.models.detected_language import DetectedLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedLanguage from a JSON string
detected_language_instance = DetectedLanguage.from_json(json)
# print the JSON string representation of the object
print(DetectedLanguage.to_json())

# convert the object into a dict
detected_language_dict = detected_language_instance.to_dict()
# create an instance of DetectedLanguage from a dict
detected_language_from_dict = DetectedLanguage.from_dict(detected_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


