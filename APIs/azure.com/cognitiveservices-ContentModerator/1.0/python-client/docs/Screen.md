# Screen

The response for a Screen text request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_corrected_text** | **str** | The autocorrected text | [optional] 
**classification** | [**Classification**](Classification.md) |  | [optional] 
**language** | **str** | Language of the input text content. | [optional] 
**misrepresentation** | **List[str]** | The misrepresentation text. | [optional] 
**normalized_text** | **str** | The normalized text. | [optional] 
**original_text** | **str** | The original text. | [optional] 
**pii** | [**PII**](PII.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**terms** | [**List[DetectedTerms]**](DetectedTerms.md) |  | [optional] 
**tracking_id** | **str** | Unique Content Moderator transaction Id. | [optional] 

## Example

```python
from openapi_client.models.screen import Screen

# TODO update the JSON string below
json = "{}"
# create an instance of Screen from a JSON string
screen_instance = Screen.from_json(json)
# print the JSON string representation of the object
print(Screen.to_json())

# convert the object into a dict
screen_dict = screen_instance.to_dict()
# create an instance of Screen from a dict
screen_from_dict = Screen.from_dict(screen_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


