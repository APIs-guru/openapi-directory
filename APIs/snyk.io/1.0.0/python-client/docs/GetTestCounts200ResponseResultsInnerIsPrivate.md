# GetTestCounts200ResponseResultsInnerIsPrivate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_false** | **float** | The number of tests conducted against public projects | [optional] 
**var_true** | **float** | The number of tests conducted against private projects | [optional] 

## Example

```python
from openapi_client.models.get_test_counts200_response_results_inner_is_private import GetTestCounts200ResponseResultsInnerIsPrivate

# TODO update the JSON string below
json = "{}"
# create an instance of GetTestCounts200ResponseResultsInnerIsPrivate from a JSON string
get_test_counts200_response_results_inner_is_private_instance = GetTestCounts200ResponseResultsInnerIsPrivate.from_json(json)
# print the JSON string representation of the object
print(GetTestCounts200ResponseResultsInnerIsPrivate.to_json())

# convert the object into a dict
get_test_counts200_response_results_inner_is_private_dict = get_test_counts200_response_results_inner_is_private_instance.to_dict()
# create an instance of GetTestCounts200ResponseResultsInnerIsPrivate from a dict
get_test_counts200_response_results_inner_is_private_from_dict = GetTestCounts200ResponseResultsInnerIsPrivate.from_dict(get_test_counts200_response_results_inner_is_private_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


