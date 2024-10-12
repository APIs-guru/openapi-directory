# AnalyzeQueryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[AnalyzeQueryResponseErrorsInner]**](AnalyzeQueryResponseErrorsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.analyze_query_response import AnalyzeQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeQueryResponse from a JSON string
analyze_query_response_instance = AnalyzeQueryResponse.from_json(json)
# print the JSON string representation of the object
print(AnalyzeQueryResponse.to_json())

# convert the object into a dict
analyze_query_response_dict = analyze_query_response_instance.to_dict()
# create an instance of AnalyzeQueryResponse from a dict
analyze_query_response_from_dict = AnalyzeQueryResponse.from_dict(analyze_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


