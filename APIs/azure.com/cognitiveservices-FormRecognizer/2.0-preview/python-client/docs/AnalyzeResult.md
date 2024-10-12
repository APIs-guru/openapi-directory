# AnalyzeResult

Analyze operation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_results** | [**List[DocumentResult]**](DocumentResult.md) | Document-level information extracted from the input. | [optional] 
**errors** | [**List[ErrorInformation]**](ErrorInformation.md) | List of errors reported during the analyze operation. | [optional] 
**page_results** | [**List[PageResult]**](PageResult.md) | Page-level information extracted from the input. | [optional] 
**read_results** | [**List[ReadResult]**](ReadResult.md) | Text extracted from the input. | 
**version** | **str** | Version of schema used for this result. | 

## Example

```python
from openapi_client.models.analyze_result import AnalyzeResult

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeResult from a JSON string
analyze_result_instance = AnalyzeResult.from_json(json)
# print the JSON string representation of the object
print(AnalyzeResult.to_json())

# convert the object into a dict
analyze_result_dict = analyze_result_instance.to_dict()
# create an instance of AnalyzeResult from a dict
analyze_result_from_dict = AnalyzeResult.from_dict(analyze_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


