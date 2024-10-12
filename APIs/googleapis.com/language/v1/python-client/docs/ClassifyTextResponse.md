# ClassifyTextResponse

The document classification response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[ClassificationCategory]**](ClassificationCategory.md) | Categories representing the input document. | [optional] 

## Example

```python
from openapi_client.models.classify_text_response import ClassifyTextResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ClassifyTextResponse from a JSON string
classify_text_response_instance = ClassifyTextResponse.from_json(json)
# print the JSON string representation of the object
print(ClassifyTextResponse.to_json())

# convert the object into a dict
classify_text_response_dict = classify_text_response_instance.to_dict()
# create an instance of ClassifyTextResponse from a dict
classify_text_response_from_dict = ClassifyTextResponse.from_dict(classify_text_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


