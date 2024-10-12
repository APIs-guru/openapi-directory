# TestRulesetResponse

The response for FirebaseRulesService.TestRuleset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[Issue]**](Issue.md) | Syntactic and semantic &#x60;Source&#x60; issues of varying severity. Issues of &#x60;ERROR&#x60; severity will prevent tests from executing. | [optional] 
**test_results** | [**List[TestResult]**](TestResult.md) | The set of test results given the test cases in the &#x60;TestSuite&#x60;. The results will appear in the same order as the test cases appear in the &#x60;TestSuite&#x60;. | [optional] 

## Example

```python
from openapi_client.models.test_ruleset_response import TestRulesetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TestRulesetResponse from a JSON string
test_ruleset_response_instance = TestRulesetResponse.from_json(json)
# print the JSON string representation of the object
print(TestRulesetResponse.to_json())

# convert the object into a dict
test_ruleset_response_dict = test_ruleset_response_instance.to_dict()
# create an instance of TestRulesetResponse from a dict
test_ruleset_response_from_dict = TestRulesetResponse.from_dict(test_ruleset_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


