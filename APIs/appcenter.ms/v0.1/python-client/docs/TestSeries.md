# TestSeries

Summary of a single test series

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**most_recent_activity** | **str** | Date of the latest test run that used this test series | [optional] 
**name** | **str** | Name of the test series | 
**slug** | **str** | Unique, human-readable identifier of the test series | 
**test_runs** | [**List[TestRunSummary]**](TestRunSummary.md) | Most recent test runs | [optional] 

## Example

```python
from openapi_client.models.test_series import TestSeries

# TODO update the JSON string below
json = "{}"
# create an instance of TestSeries from a JSON string
test_series_instance = TestSeries.from_json(json)
# print the JSON string representation of the object
print(TestSeries.to_json())

# convert the object into a dict
test_series_dict = test_series_instance.to_dict()
# create an instance of TestSeries from a dict
test_series_from_dict = TestSeries.from_dict(test_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


