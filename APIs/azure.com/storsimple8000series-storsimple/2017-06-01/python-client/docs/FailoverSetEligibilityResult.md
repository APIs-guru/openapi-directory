# FailoverSetEligibilityResult

The eligibility result of failover set, for failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | The error message, if the failover set is not eligible for failover. | [optional] 
**is_eligible_for_failover** | **bool** | Represents if this failover set is eligible for failover or not. | [optional] 

## Example

```python
from openapi_client.models.failover_set_eligibility_result import FailoverSetEligibilityResult

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverSetEligibilityResult from a JSON string
failover_set_eligibility_result_instance = FailoverSetEligibilityResult.from_json(json)
# print the JSON string representation of the object
print(FailoverSetEligibilityResult.to_json())

# convert the object into a dict
failover_set_eligibility_result_dict = failover_set_eligibility_result_instance.to_dict()
# create an instance of FailoverSetEligibilityResult from a dict
failover_set_eligibility_result_from_dict = FailoverSetEligibilityResult.from_dict(failover_set_eligibility_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


