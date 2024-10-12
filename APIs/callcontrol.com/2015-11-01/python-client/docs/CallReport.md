# CallReport

Call Report  PhoneNumber,   Caller name(optional),   Call category(optional),   Comment or tags(free text) (optional),   Unwanted call  - yes/no(optional),

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**call_time** | **datetime** |  | [optional] 
**caller_type** | **str** |  | [optional] 
**comment** | **str** |  | [optional] 
**ip_address** | **str** |  | [optional] 
**latitude** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 
**phone_number** | **str** |  | [optional] 
**reported_caller_id** | **str** |  | [optional] 
**reported_caller_name** | **str** |  | [optional] 
**reporter** | **str** |  | [optional] 
**unwanted_call** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.call_report import CallReport

# TODO update the JSON string below
json = "{}"
# create an instance of CallReport from a JSON string
call_report_instance = CallReport.from_json(json)
# print the JSON string representation of the object
print(CallReport.to_json())

# convert the object into a dict
call_report_dict = call_report_instance.to_dict()
# create an instance of CallReport from a dict
call_report_from_dict = CallReport.from_dict(call_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


