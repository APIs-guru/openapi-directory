# GetTestCounts200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[GetTestCounts200ResponseResultsInner]**](GetTestCounts200ResponseResultsInner.md) | A list of test counts | 

## Example

```python
from openapi_client.models.get_test_counts200_response import GetTestCounts200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTestCounts200Response from a JSON string
get_test_counts200_response_instance = GetTestCounts200Response.from_json(json)
# print the JSON string representation of the object
print(GetTestCounts200Response.to_json())

# convert the object into a dict
get_test_counts200_response_dict = get_test_counts200_response_instance.to_dict()
# create an instance of GetTestCounts200Response from a dict
get_test_counts200_response_from_dict = GetTestCounts200Response.from_dict(get_test_counts200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


