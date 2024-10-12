# RomanizeTextRequest

The request message for synchronous romanization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contents** | **List[str]** | Required. The content of the input in string format. | [optional] 
**source_language_code** | **str** | Optional. The ISO-639 language code of the input text if known, for example, \&quot;hi\&quot; or \&quot;zh\&quot;. If the source language isn&#39;t specified, the API attempts to identify the source language automatically and returns the source language for each content in the response. | [optional] 

## Example

```python
from openapi_client.models.romanize_text_request import RomanizeTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RomanizeTextRequest from a JSON string
romanize_text_request_instance = RomanizeTextRequest.from_json(json)
# print the JSON string representation of the object
print(RomanizeTextRequest.to_json())

# convert the object into a dict
romanize_text_request_dict = romanize_text_request_instance.to_dict()
# create an instance of RomanizeTextRequest from a dict
romanize_text_request_from_dict = RomanizeTextRequest.from_dict(romanize_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


