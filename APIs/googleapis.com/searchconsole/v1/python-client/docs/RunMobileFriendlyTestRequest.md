# RunMobileFriendlyTestRequest

Mobile-friendly test request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_screenshot** | **bool** | Whether or not screenshot is requested. Default is false. | [optional] 
**url** | **str** | URL for inspection. | [optional] 

## Example

```python
from openapi_client.models.run_mobile_friendly_test_request import RunMobileFriendlyTestRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RunMobileFriendlyTestRequest from a JSON string
run_mobile_friendly_test_request_instance = RunMobileFriendlyTestRequest.from_json(json)
# print the JSON string representation of the object
print(RunMobileFriendlyTestRequest.to_json())

# convert the object into a dict
run_mobile_friendly_test_request_dict = run_mobile_friendly_test_request_instance.to_dict()
# create an instance of RunMobileFriendlyTestRequest from a dict
run_mobile_friendly_test_request_from_dict = RunMobileFriendlyTestRequest.from_dict(run_mobile_friendly_test_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


