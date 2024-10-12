# TestStepRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**step_type** | **str** | Type of test step -- request, pause, condition, ghost-inspector, or subtest. | [optional] 
**assertions** | [**List[Assertion]**](Assertion.md) | A list of assertions to apply to the HTTP response from this request. | [optional] 
**auth** | **object** | An authentication object with either basic, oauth1, or client_certificate credentials for authenticating this request. | [optional] 
**before_scripts** | **List[str]** | A list of pre-request scripts to run before this request. | [optional] 
**body** | **str** | A string to use as the body of the request. | [optional] 
**form** | **object** | An object with keys as form post parameter names matched to their values. Values can either be a single string or an array of strings. | [optional] 
**headers** | **object** | An object with keys as header names matched to their values. Values can either be a single string or an array of strings. | [optional] 
**method** | **str** | The HTTP method for this request step. E.g. GET, POST, PUT, DELETE, etc. | [optional] 
**note** | **str** | A description or note for this request step. | [optional] 
**scripts** | **List[str]** | A list of post-response scripts to run after this request. | [optional] 
**url** | **str** | The URL to make a request to for this step. This may contain both query string parameters and variables. | [optional] 
**variables** | [**List[Variable]**](Variable.md) | A list of variables to extract out of the HTTP response from this request. | [optional] 

## Example

```python
from openapi_client.models.test_step_request import TestStepRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TestStepRequest from a JSON string
test_step_request_instance = TestStepRequest.from_json(json)
# print the JSON string representation of the object
print(TestStepRequest.to_json())

# convert the object into a dict
test_step_request_dict = test_step_request_instance.to_dict()
# create an instance of TestStepRequest from a dict
test_step_request_from_dict = TestStepRequest.from_dict(test_step_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


