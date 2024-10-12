# AnnotateTextRequest

The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] 
**encoding_type** | **str** | The encoding type used by the API to calculate offsets. | [optional] 
**features** | [**AnnotateTextRequestFeatures**](AnnotateTextRequestFeatures.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotate_text_request import AnnotateTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotateTextRequest from a JSON string
annotate_text_request_instance = AnnotateTextRequest.from_json(json)
# print the JSON string representation of the object
print(AnnotateTextRequest.to_json())

# convert the object into a dict
annotate_text_request_dict = annotate_text_request_instance.to_dict()
# create an instance of AnnotateTextRequest from a dict
annotate_text_request_from_dict = AnnotateTextRequest.from_dict(annotate_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


