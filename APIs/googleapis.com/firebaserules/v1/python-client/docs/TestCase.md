# TestCase

`TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expectation** | **str** | Test expectation. | [optional] 
**expression_report_level** | **str** | Specifies what should be included in the response. | [optional] 
**function_mocks** | [**List[FunctionMock]**](FunctionMock.md) | Optional function mocks for service-defined functions. If not set, any service defined function is expected to return an error, which may or may not influence the test outcome. | [optional] 
**path_encoding** | **str** | Specifies whether paths (such as request.path) are encoded and how. | [optional] 
**request** | **object** | Request context. The exact format of the request context is service-dependent. See the appropriate service documentation for information about the supported fields and types on the request. Minimally, all services support the following fields and types: Request field | Type ---------------|----------------- auth.uid | &#x60;string&#x60; auth.token | &#x60;map&#x60; headers | &#x60;map&#x60; method | &#x60;string&#x60; params | &#x60;map&#x60; path | &#x60;string&#x60; time | &#x60;google.protobuf.Timestamp&#x60; If the request value is not well-formed for the service, the request will be rejected as an invalid argument. | [optional] 
**resource** | **object** | Optional resource value as it appears in persistent storage before the request is fulfilled. The resource type depends on the &#x60;request.path&#x60; value. | [optional] 

## Example

```python
from openapi_client.models.test_case import TestCase

# TODO update the JSON string below
json = "{}"
# create an instance of TestCase from a JSON string
test_case_instance = TestCase.from_json(json)
# print the JSON string representation of the object
print(TestCase.to_json())

# convert the object into a dict
test_case_dict = test_case_instance.to_dict()
# create an instance of TestCase from a dict
test_case_from_dict = TestCase.from_dict(test_case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


