# AnalyzeSyntaxRequest

The syntax analysis request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**Document**](Document.md) |  | [optional] 
**encoding_type** | **str** | The encoding type used by the API to calculate offsets. | [optional] 

## Example

```python
from openapi_client.models.analyze_syntax_request import AnalyzeSyntaxRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeSyntaxRequest from a JSON string
analyze_syntax_request_instance = AnalyzeSyntaxRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyzeSyntaxRequest.to_json())

# convert the object into a dict
analyze_syntax_request_dict = analyze_syntax_request_instance.to_dict()
# create an instance of AnalyzeSyntaxRequest from a dict
analyze_syntax_request_from_dict = AnalyzeSyntaxRequest.from_dict(analyze_syntax_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


