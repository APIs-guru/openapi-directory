# DetectedTerms

Detected Terms details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | Index(Location) of the detected profanity term in the input text content. | [optional] 
**list_id** | **int** | Matched Terms list Id. | [optional] 
**original_index** | **int** | Original Index(Location) of the detected profanity term in the input text content. | [optional] 
**term** | **str** | Detected profanity term. | [optional] 

## Example

```python
from openapi_client.models.detected_terms import DetectedTerms

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedTerms from a JSON string
detected_terms_instance = DetectedTerms.from_json(json)
# print the JSON string representation of the object
print(DetectedTerms.to_json())

# convert the object into a dict
detected_terms_dict = detected_terms_instance.to_dict()
# create an instance of DetectedTerms from a dict
detected_terms_from_dict = DetectedTerms.from_dict(detected_terms_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


