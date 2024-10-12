# WebTestListResult

A list of 0 or more Application Insights web test definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to get the next part of the returned list of web tests, should the return set be too large for a single request. May be null. | [optional] 
**value** | [**List[WebTest]**](WebTest.md) | Set of Application Insights web test definitions. | 

## Example

```python
from openapi_client.models.web_test_list_result import WebTestListResult

# TODO update the JSON string below
json = "{}"
# create an instance of WebTestListResult from a JSON string
web_test_list_result_instance = WebTestListResult.from_json(json)
# print the JSON string representation of the object
print(WebTestListResult.to_json())

# convert the object into a dict
web_test_list_result_dict = web_test_list_result_instance.to_dict()
# create an instance of WebTestListResult from a dict
web_test_list_result_from_dict = WebTestListResult.from_dict(web_test_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


