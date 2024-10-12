# CompleteQueryResponse

Output only. Response of auto-complete query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_results** | [**List[CompletionResult]**](CompletionResult.md) | Results of the matching job/company candidates. | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.complete_query_response import CompleteQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CompleteQueryResponse from a JSON string
complete_query_response_instance = CompleteQueryResponse.from_json(json)
# print the JSON string representation of the object
print(CompleteQueryResponse.to_json())

# convert the object into a dict
complete_query_response_dict = complete_query_response_instance.to_dict()
# create an instance of CompleteQueryResponse from a dict
complete_query_response_from_dict = CompleteQueryResponse.from_dict(complete_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


