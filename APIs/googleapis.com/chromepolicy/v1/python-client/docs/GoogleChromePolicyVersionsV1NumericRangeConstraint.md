# GoogleChromePolicyVersionsV1NumericRangeConstraint

A constraint on upper and/or lower bounds, with at least one being set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum** | **str** | Maximum value. | [optional] 
**minimum** | **str** | Minimum value. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_numeric_range_constraint import GoogleChromePolicyVersionsV1NumericRangeConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1NumericRangeConstraint from a JSON string
google_chrome_policy_versions_v1_numeric_range_constraint_instance = GoogleChromePolicyVersionsV1NumericRangeConstraint.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1NumericRangeConstraint.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_numeric_range_constraint_dict = google_chrome_policy_versions_v1_numeric_range_constraint_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1NumericRangeConstraint from a dict
google_chrome_policy_versions_v1_numeric_range_constraint_from_dict = GoogleChromePolicyVersionsV1NumericRangeConstraint.from_dict(google_chrome_policy_versions_v1_numeric_range_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


