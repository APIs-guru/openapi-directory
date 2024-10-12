# TargetEligibilityResult

The eligibility result of device, as a failover target device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligibility_status** | **str** | The eligibility status of device, as a failover target device. | [optional] 
**messages** | [**List[TargetEligibilityErrorMessage]**](TargetEligibilityErrorMessage.md) | The list of error messages, if a device does not qualify as a failover target device. | [optional] 

## Example

```python
from openapi_client.models.target_eligibility_result import TargetEligibilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of TargetEligibilityResult from a JSON string
target_eligibility_result_instance = TargetEligibilityResult.from_json(json)
# print the JSON string representation of the object
print(TargetEligibilityResult.to_json())

# convert the object into a dict
target_eligibility_result_dict = target_eligibility_result_instance.to_dict()
# create an instance of TargetEligibilityResult from a dict
target_eligibility_result_from_dict = TargetEligibilityResult.from_dict(target_eligibility_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


