# RomanizeTextResponse

The response message for synchronous romanization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**romanizations** | [**List[Romanization]**](Romanization.md) | Text romanization responses. This field has the same length as &#x60;contents&#x60;. | [optional] 

## Example

```python
from openapi_client.models.romanize_text_response import RomanizeTextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RomanizeTextResponse from a JSON string
romanize_text_response_instance = RomanizeTextResponse.from_json(json)
# print the JSON string representation of the object
print(RomanizeTextResponse.to_json())

# convert the object into a dict
romanize_text_response_dict = romanize_text_response_instance.to_dict()
# create an instance of RomanizeTextResponse from a dict
romanize_text_response_from_dict = RomanizeTextResponse.from_dict(romanize_text_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


