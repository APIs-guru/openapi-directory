# TestRulesetRequest

The request for FirebaseRulesService.TestRuleset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**Source**](Source.md) |  | [optional] 
**test_suite** | [**TestSuite**](TestSuite.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_ruleset_request import TestRulesetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestRulesetRequest from a JSON string
test_ruleset_request_instance = TestRulesetRequest.from_json(json)
# print the JSON string representation of the object
print(TestRulesetRequest.to_json())

# convert the object into a dict
test_ruleset_request_dict = test_ruleset_request_instance.to_dict()
# create an instance of TestRulesetRequest from a dict
test_ruleset_request_from_dict = TestRulesetRequest.from_dict(test_ruleset_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


