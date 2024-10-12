# LongTermRetentionPolicyProperties

Properties of a long term retention policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**monthly_retention** | **str** | The monthly retention policy for an LTR backup in an ISO 8601 format. | [optional] 
**week_of_year** | **int** | The week of year to take the yearly backup in an ISO 8601 format. | [optional] 
**weekly_retention** | **str** | The weekly retention policy for an LTR backup in an ISO 8601 format. | [optional] 
**yearly_retention** | **str** | The yearly retention policy for an LTR backup in an ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.long_term_retention_policy_properties import LongTermRetentionPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LongTermRetentionPolicyProperties from a JSON string
long_term_retention_policy_properties_instance = LongTermRetentionPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(LongTermRetentionPolicyProperties.to_json())

# convert the object into a dict
long_term_retention_policy_properties_dict = long_term_retention_policy_properties_instance.to_dict()
# create an instance of LongTermRetentionPolicyProperties from a dict
long_term_retention_policy_properties_from_dict = LongTermRetentionPolicyProperties.from_dict(long_term_retention_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


