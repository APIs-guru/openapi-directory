# StatusCodesBasedTrigger

StatusCodeBasedTrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count | [optional] 
**status** | **int** | HTTP status code | [optional] 
**sub_status** | **int** | SubStatus | [optional] 
**time_interval** | **str** | TimeInterval | [optional] 
**win32_status** | **int** | Win32 error code | [optional] 

## Example

```python
from openapi_client.models.status_codes_based_trigger import StatusCodesBasedTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of StatusCodesBasedTrigger from a JSON string
status_codes_based_trigger_instance = StatusCodesBasedTrigger.from_json(json)
# print the JSON string representation of the object
print(StatusCodesBasedTrigger.to_json())

# convert the object into a dict
status_codes_based_trigger_dict = status_codes_based_trigger_instance.to_dict()
# create an instance of StatusCodesBasedTrigger from a dict
status_codes_based_trigger_from_dict = StatusCodesBasedTrigger.from_dict(status_codes_based_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


