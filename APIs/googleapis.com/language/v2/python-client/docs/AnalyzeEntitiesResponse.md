# AnalyzeEntitiesResponse

The entity analysis response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[Entity]**](Entity.md) | The recognized entities in the input document. | [optional] 
**language_code** | **str** | The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. | [optional] 
**language_supported** | **bool** | Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. | [optional] 

## Example

```python
from openapi_client.models.analyze_entities_response import AnalyzeEntitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeEntitiesResponse from a JSON string
analyze_entities_response_instance = AnalyzeEntitiesResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeEntitiesResponse.to_json())

# convert the object into a dict
analyze_entities_response_dict = analyze_entities_response_instance.to_dict()
# create an instance of AnalyzeEntitiesResponse from a dict
analyze_entities_response_from_dict = AnalyzeEntitiesResponse.from_dict(analyze_entities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


