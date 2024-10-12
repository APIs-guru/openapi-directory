# LemmatizeResponse

Response for the lemmatization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the document | [optional] 
**language** | **str** | The used language of the document | 
**lemmatized_text** | **str** | Lemmatized text of the document, individual tokens are separated by a space and sentences are separated by a new-line character | 
**text** | **str** | The raw text of the document which has been analysed | [optional] 

## Example

```python
from openapi_client.models.lemmatize_response import LemmatizeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LemmatizeResponse from a JSON string
lemmatize_response_instance = LemmatizeResponse.from_json(json)
# print the JSON string representation of the object
print(LemmatizeResponse.to_json())

# convert the object into a dict
lemmatize_response_dict = lemmatize_response_instance.to_dict()
# create an instance of LemmatizeResponse from a dict
lemmatize_response_from_dict = LemmatizeResponse.from_dict(lemmatize_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


