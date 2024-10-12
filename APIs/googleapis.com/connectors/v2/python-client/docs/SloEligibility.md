# SloEligibility

SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligible** | **bool** | Whether an instance is eligible or ineligible. | [optional] 
**reason** | **str** | User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. | [optional] 

## Example

```python
from openapi_client.models.slo_eligibility import SloEligibility

# TODO update the JSON string below
json = "{}"
# create an instance of SloEligibility from a JSON string
slo_eligibility_instance = SloEligibility.from_json(json)
# print the JSON string representation of the object
print(SloEligibility.to_json())

# convert the object into a dict
slo_eligibility_dict = slo_eligibility_instance.to_dict()
# create an instance of SloEligibility from a dict
slo_eligibility_from_dict = SloEligibility.from_dict(slo_eligibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


