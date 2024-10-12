# NonSdkApiUsageViolation

Additional details for a non-sdk API usage violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_signatures** | **List[str]** | Signatures of a subset of those hidden API&#39;s. | [optional] 
**unique_apis** | **int** | Total number of unique hidden API&#39;s accessed. | [optional] 

## Example

```python
from openapi_client.models.non_sdk_api_usage_violation import NonSdkApiUsageViolation

# TODO update the JSON string below
json = "{}"
# create an instance of NonSdkApiUsageViolation from a JSON string
non_sdk_api_usage_violation_instance = NonSdkApiUsageViolation.from_json(json)
# print the JSON string representation of the object
print(NonSdkApiUsageViolation.to_json())

# convert the object into a dict
non_sdk_api_usage_violation_dict = non_sdk_api_usage_violation_instance.to_dict()
# create an instance of NonSdkApiUsageViolation from a dict
non_sdk_api_usage_violation_from_dict = NonSdkApiUsageViolation.from_dict(non_sdk_api_usage_violation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


