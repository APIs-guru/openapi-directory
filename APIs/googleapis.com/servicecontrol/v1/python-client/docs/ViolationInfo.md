# ViolationInfo

Provides information about the Policy violation info for this request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checked_value** | **str** | Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types | [optional] 
**constraint** | **str** | Optional. Constraint name | [optional] 
**error_message** | **str** | Optional. Error message that policy is indicating. | [optional] 
**policy_type** | **str** | Optional. Indicates the type of the policy. | [optional] 

## Example

```python
from openapi_client.models.violation_info import ViolationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ViolationInfo from a JSON string
violation_info_instance = ViolationInfo.from_json(json)
# print the JSON string representation of the object
print(ViolationInfo.to_json())

# convert the object into a dict
violation_info_dict = violation_info_instance.to_dict()
# create an instance of ViolationInfo from a dict
violation_info_from_dict = ViolationInfo.from_dict(violation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


