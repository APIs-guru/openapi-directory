# UsageRecordStatus

Status of the usage record creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_latest_build_exists** | **bool** | Is the age of the most recent Build service usage record within expected limits | [optional] 
**expected_latest_test_exists** | **bool** | Is the age of the most recent Test service usage record within expected limits | [optional] 
**latest_build_usage_record_time** | **str** | The time of the most recent Build service usage record | [optional] 
**latest_test_usage_record_time** | **str** | The time of the most recent Test service usage record | [optional] 

## Example

```python
from openapi_client.models.usage_record_status import UsageRecordStatus

# TODO update the JSON string below
json = "{}"
# create an instance of UsageRecordStatus from a JSON string
usage_record_status_instance = UsageRecordStatus.from_json(json)
# print the JSON string representation of the object
print(UsageRecordStatus.to_json())

# convert the object into a dict
usage_record_status_dict = usage_record_status_instance.to_dict()
# create an instance of UsageRecordStatus from a dict
usage_record_status_from_dict = UsageRecordStatus.from_dict(usage_record_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


