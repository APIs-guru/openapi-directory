# AnalyzeQueryResponseErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character** | **int** |  | [optional] 
**column** | **int** |  | [optional] 
**line** | **int** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.analyze_query_response_errors_inner import AnalyzeQueryResponseErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeQueryResponseErrorsInner from a JSON string
analyze_query_response_errors_inner_instance = AnalyzeQueryResponseErrorsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyzeQueryResponseErrorsInner.to_json())

# convert the object into a dict
analyze_query_response_errors_inner_dict = analyze_query_response_errors_inner_instance.to_dict()
# create an instance of AnalyzeQueryResponseErrorsInner from a dict
analyze_query_response_errors_inner_from_dict = AnalyzeQueryResponseErrorsInner.from_dict(analyze_query_response_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


