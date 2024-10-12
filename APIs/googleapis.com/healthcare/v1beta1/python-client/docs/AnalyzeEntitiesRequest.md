# AnalyzeEntitiesRequest

The request to analyze healthcare entities in a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternative_output_format** | **str** | Optional. Alternative output format to be generated based on the results of analysis. | [optional] 
**document_content** | **str** | document_content is a document to be annotated. | [optional] 
**licensed_vocabularies** | **List[str]** | A list of licensed vocabularies to use in the request, in addition to the default unlicensed vocabularies. | [optional] 

## Example

```python
from openapi_client.models.analyze_entities_request import AnalyzeEntitiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeEntitiesRequest from a JSON string
analyze_entities_request_instance = AnalyzeEntitiesRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyzeEntitiesRequest.to_json())

# convert the object into a dict
analyze_entities_request_dict = analyze_entities_request_instance.to_dict()
# create an instance of AnalyzeEntitiesRequest from a dict
analyze_entities_request_from_dict = AnalyzeEntitiesRequest.from_dict(analyze_entities_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


