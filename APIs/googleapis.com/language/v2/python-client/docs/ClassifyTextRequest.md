# ClassifyTextRequest

The document classification request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] 

## Example

```python
from openapi_client.models.classify_text_request import ClassifyTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClassifyTextRequest from a JSON string
classify_text_request_instance = ClassifyTextRequest.from_json(json)
# print the JSON string representation of the object
print(ClassifyTextRequest.to_json())

# convert the object into a dict
classify_text_request_dict = classify_text_request_instance.to_dict()
# create an instance of ClassifyTextRequest from a dict
classify_text_request_from_dict = ClassifyTextRequest.from_dict(classify_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


