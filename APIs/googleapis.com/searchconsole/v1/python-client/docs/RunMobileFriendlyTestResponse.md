# RunMobileFriendlyTestResponse

Mobile-friendly test response, including mobile-friendly issues and resource issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mobile_friendliness** | **str** | Test verdict, whether the page is mobile friendly or not. | [optional] 
**mobile_friendly_issues** | [**List[MobileFriendlyIssue]**](MobileFriendlyIssue.md) | List of mobile-usability issues. | [optional] 
**resource_issues** | [**List[ResourceIssue]**](ResourceIssue.md) | Information about embedded resources issues. | [optional] 
**screenshot** | [**Image**](Image.md) |  | [optional] 
**test_status** | [**TestStatus**](TestStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.run_mobile_friendly_test_response import RunMobileFriendlyTestResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RunMobileFriendlyTestResponse from a JSON string
run_mobile_friendly_test_response_instance = RunMobileFriendlyTestResponse.from_json(json)
# print the JSON string representation of the object
print(RunMobileFriendlyTestResponse.to_json())

# convert the object into a dict
run_mobile_friendly_test_response_dict = run_mobile_friendly_test_response_instance.to_dict()
# create an instance of RunMobileFriendlyTestResponse from a dict
run_mobile_friendly_test_response_from_dict = RunMobileFriendlyTestResponse.from_dict(run_mobile_friendly_test_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


