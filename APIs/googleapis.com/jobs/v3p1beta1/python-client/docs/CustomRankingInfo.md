# CustomRankingInfo

Input only. Custom ranking information for SearchJobsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**importance_level** | **str** | Required. Controls over how important the score of CustomRankingInfo.ranking_expression gets applied to job&#39;s final ranking position. An error is thrown if not specified. | [optional] 
**ranking_expression** | **str** | Required. Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm). A combination of the ranking expression and relevance score is used to determine job&#39;s final ranking position. The syntax for this expression is a subset of Google SQL syntax. Supported operators are: +, -, *, /, where the left and right side of the operator is either a numeric Job.custom_attributes key, integer/double value or an expression that can be evaluated to a number. Parenthesis are supported to adjust calculation precedence. The expression must be &lt; 200 characters in length. The expression is considered invalid for a job if the expression references custom attributes that are not populated on the job or if the expression results in a divide by zero. If an expression is invalid for a job, that job is demoted to the end of the results. Sample ranking expression (year + 25) * 0.25 - (freshness / 0.5) | [optional] 

## Example

```python
from openapi_client.models.custom_ranking_info import CustomRankingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CustomRankingInfo from a JSON string
custom_ranking_info_instance = CustomRankingInfo.from_json(json)
# print the JSON string representation of the object
print(CustomRankingInfo.to_json())

# convert the object into a dict
custom_ranking_info_dict = custom_ranking_info_instance.to_dict()
# create an instance of CustomRankingInfo from a dict
custom_ranking_info_from_dict = CustomRankingInfo.from_dict(custom_ranking_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


