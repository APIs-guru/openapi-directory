# QueryAdvisorResult

Output of query advisor analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index_advice** | [**List[IndexAdvice]**](IndexAdvice.md) | Optional. Index Recommendation for a query. This is an optional field and the recommendation will only be available when the recommendation guarantees significant improvement in query performance. | [optional] 

## Example

```python
from openapi_client.models.query_advisor_result import QueryAdvisorResult

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAdvisorResult from a JSON string
query_advisor_result_instance = QueryAdvisorResult.from_json(json)
# print the JSON string representation of the object
print(QueryAdvisorResult.to_json())

# convert the object into a dict
query_advisor_result_dict = query_advisor_result_instance.to_dict()
# create an instance of QueryAdvisorResult from a dict
query_advisor_result_from_dict = QueryAdvisorResult.from_dict(query_advisor_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


