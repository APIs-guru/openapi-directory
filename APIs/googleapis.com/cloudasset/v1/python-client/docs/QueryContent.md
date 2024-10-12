# QueryContent

The query content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iam_policy_analysis_query** | [**IamPolicyAnalysisQuery**](IamPolicyAnalysisQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_content import QueryContent

# TODO update the JSON string below
json = "{}"
# create an instance of QueryContent from a JSON string
query_content_instance = QueryContent.from_json(json)
# print the JSON string representation of the object
print(QueryContent.to_json())

# convert the object into a dict
query_content_dict = query_content_instance.to_dict()
# create an instance of QueryContent from a dict
query_content_from_dict = QueryContent.from_dict(query_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


