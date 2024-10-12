# TestSuite

`TestSuite` is a collection of `TestCase` instances that validate the logical correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within a `TestRuleset` invocation or as part of a `Release` object as a pre-release check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_cases** | [**List[TestCase]**](TestCase.md) | Collection of test cases associated with the &#x60;TestSuite&#x60;. | [optional] 

## Example

```python
from openapi_client.models.test_suite import TestSuite

# TODO update the JSON string below
json = "{}"
# create an instance of TestSuite from a JSON string
test_suite_instance = TestSuite.from_json(json)
# print the JSON string representation of the object
print(TestSuite.to_json())

# convert the object into a dict
test_suite_dict = test_suite_instance.to_dict()
# create an instance of TestSuite from a dict
test_suite_from_dict = TestSuite.from_dict(test_suite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


